package salao.sistema.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import salao.sistema.model.Role;
import salao.sistema.model.Usuario;
import salao.sistema.repository.UsuarioRepository;
import salao.sistema.web.dto.UsuarioCadastroDto;

import java.util.Arrays;
import java.util.Collection;
import java.util.stream.Collectors;

@Service
public class UsuarioServiceImpl implements UsuarioService {

    @Autowired
    private UsuarioRepository usuarioRepository;

    @Autowired
    private BCryptPasswordEncoder passwordEncoder;

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        Usuario usuario = usuarioRepository.findByEmail(email);
        if (usuario == null){
            throw new UsernameNotFoundException("Invalid username or password.");
        }
        return new org.springframework.security.core.userdetails.User(usuario.getEmail(),
                usuario.getPassword(),
                mapRolesToAuthorities(usuario.getRoles()));
    }

    public Usuario findByEmail(String email){
        return usuarioRepository.findByEmail(email);
    }

    public Usuario save(UsuarioCadastroDto cadastro){
        Usuario usuario = new Usuario();
        usuario.setFirstName(cadastro.getFirstName());
        usuario.setLastName(cadastro.getLastName());
        usuario.setEmail(cadastro.getEmail());
        usuario.setPassword(passwordEncoder.encode(cadastro.getPassword()));
        usuario.setRoles(Arrays.asList(new Role("ROLE_USER")));
        return usuarioRepository.save(usuario);
    }

    private Collection<? extends GrantedAuthority> mapRolesToAuthorities(Collection<Role> roles){
        return roles.stream()
                .map(role -> new SimpleGrantedAuthority(role.getName()))
                .collect(Collectors.toList());
    }
}