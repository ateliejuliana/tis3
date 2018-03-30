package salao.sistema.service;

import org.springframework.security.core.userdetails.UserDetailsService;
import salao.sistema.model.Usuario;
import salao.sistema.web.dto.UsuarioCadastroDto;

public interface UsuarioService extends UserDetailsService {

    Usuario findByEmail(String email);

    Usuario save(UsuarioCadastroDto cadastro);
}
