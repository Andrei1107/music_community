package band;


import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;

@Getter
@Setter
@Entity
public class BandModel extends AbstractModel<Long> {



    private String numeTrupa;

    private int nrMembrii;

    private int nrConcerte;

    private String email;

    private String parola;

    private String confirmareParola;




    public BandModel() {
    }


}
