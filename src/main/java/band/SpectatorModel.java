package band;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;

@Getter
@Setter
@Entity
public class SpectatorModel extends AbstractModel<Long> {

    private String username;

    private String numeSpectator;

    private String prenumeSpectator;

    private String emailSpectator;

    private String parolaSpectator;

    private String confParolaSpectator;




    public SpectatorModel(){}

}
