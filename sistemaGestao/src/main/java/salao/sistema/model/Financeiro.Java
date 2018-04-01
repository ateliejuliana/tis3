package salao.sistema.model;
import javax.persistence.*;
import java.util.Collection;

@Entity
public class Usuario {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String tipo;
    private String descricao;

    public Usuario() {
    }

    public Usuario(String tipo, String descricao) {
       this.tipo = tipo;
       this.descricao = descricao;
    }

    public Usuario(SString tipo, String descricao, Collection<Role> roles) {
        this.tipo = tipo;
        this.descricao = descricao;
        this.roles = roles;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTipo() {
        return firstName;
    }

    public void setTipo(String tipo) {
        this.tipo = tipo;
    }

    public String getDescricao() {
        return lastName;
    }

    public void setDescricao(String tipo) {
        this.tipo = tipo;
    }

    public Collection<Role> getRoles() {
        return roles;
    }

    public void setRoles(Collection<Role> roles) {
        this.roles = roles;
    }

    @Override
    public String toString() {
        return "Operacao{" +
                "id=" + id +
                ", tipo='" + tipo + '\'' +
                ", descricao='" + descricao + '\'' +
                ", roles=" + roles +
                '}';
    }
}