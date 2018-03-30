package salao.sistema.repository;

import org.springframework.data.repository.CrudRepository;
import salao.sistema.model.Produto;

public interface ProdutoRepository extends CrudRepository<Produto, Long> {
}
