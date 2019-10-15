package band;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SpectatorServiceImpl extends AbstractService<Long,SpectatorModel,SpectatorRepository> {

    @Autowired
    public SpectatorServiceImpl(SpectatorRepository spectatorRepository){
        super(spectatorRepository);
    }

    @Override
    public SpectatorModel add(SpectatorModel model) {

        if(model.getUsername()==null){
           model.setUsername("Anonim");
        }

        return super.add(model);

    }

    @Override
    public List<SpectatorModel> getAll() {
        return super.getAll();
    }
}
