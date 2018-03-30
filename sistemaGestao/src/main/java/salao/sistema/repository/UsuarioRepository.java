package salao.sistema.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import salao.sistema.model.Usuario;

public interface UsuarioRepository extends JpaRepository<Usuario, Long> {

        Usuario findByEmail(String email);
}