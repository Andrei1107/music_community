package band;


import java.util.List;

public interface BandService {

    BandModel add(BandModel bandModel);

    List<BandModel> getAll();

}
