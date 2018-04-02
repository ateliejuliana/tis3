package salao.sistema.model;

import javax.persistence.*;

@Entity
@Table
public class Servico {
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private Integer id;
    private String categoria;
    private String Descricao;
    private String nomeServico;

    public Integer getId() {
        return id;
    }

    public String getCategoria() {
        return categoria;
    }

    public void setCategoria(String categoria) {
        this.categoria = categoria;
    }

    public String getDescricao() {
        return Descricao;
    }

    public void setDescricao(String descricao) {
        Descricao = descricao;
    }

    public String getNomeServico() {
        return nomeServico;
    }

    public void setNomeServico(String nomeServico) {
        this.nomeServico = nomeServico;
    }

    @Override
    public String toString() {
        return "Servico{" +
                "id=" + id +
                ", categoria='" + categoria + '\'' +
                ", Descrição='" + Descricao + '\'' +
                ", nomeServico='" + nomeServico + '\'' +
                '}';
    }
}
