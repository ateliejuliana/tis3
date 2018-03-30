package salao.sistema.model;

import javax.persistence.*;

@Entity
@Table
public class Cliente {
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private Integer id;
}
