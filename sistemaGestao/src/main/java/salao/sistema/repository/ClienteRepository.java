package salao.sistema.repository;

import org.springframework.data.repository.CrudRepository;
import salao.sistema.model.Cliente;

public interface ClienteRepository extends CrudRepository<Cliente, Long> {
}
