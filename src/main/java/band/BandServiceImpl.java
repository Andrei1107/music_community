package band;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BandServiceImpl extends AbstractService<Long,BandModel,BandRepository> {



    @Autowired
    public BandServiceImpl(BandRepository bandRepository){

       super(bandRepository);
    }



        @Override
    public BandModel add(BandModel bandModel) {

        if(bandModel.getNumeTrupa() ==null){
            bandModel.setNumeTrupa("anonim");

        }

        return super.add(bandModel);


    }

    @Override
    public List<BandModel> getAll(){
        return super.getAll();
    }







}
