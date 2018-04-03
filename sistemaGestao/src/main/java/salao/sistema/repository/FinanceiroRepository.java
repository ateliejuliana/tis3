package salao.sistema.repository;

import org.springframework.data.repository.CrudRepository;
import salao.sistema.model.Financeiro;

public interface FinanceiroRepository extends CrudRepository<Financeiro, Long> {
    Financeiro findByTipo (String tipo);
}
