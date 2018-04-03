package salao.sistema.model;
import javax.persistence.*;
import java.util.Collection;

@Entity
public class Financeiro {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String tipo;
    private String descricao;

    public Financeiro() {
    }

    public Financeiro(String tipo, String descricao) {
        this.tipo = tipo;
        this.descricao = descricao;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTipo() {
        return tipo;
    }

    public void setTipo(String tipo) {
        this.tipo = tipo;
    }

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String tipo) {
        this.tipo = tipo;
    }

    @Override
    public String toString() {
        return "Operacao{" +
                "id=" + id +
                ", tipo='" + tipo + '\'' +
                ", descricao='" + descricao + '\'' +
                '}';
    }
}