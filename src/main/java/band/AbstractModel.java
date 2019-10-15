package band;


import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@MappedSuperclass
@Getter
@Setter


public class AbstractModel<ID_TYPE> {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;



}
