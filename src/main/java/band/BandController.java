package band;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController()

public class BandController {


    private BandServiceImpl bandServiceImpl;

    @Autowired
    public BandController(BandServiceImpl bandService){
        this.bandServiceImpl=bandService;
    }


    @RequestMapping(consumes = "application/json",produces = "application/json",method = RequestMethod.POST,name = "/rest/band")
    public ResponseEntity<BandModel> add(@RequestBody BandModel bandModel){

        BandModel addedBandModel=bandServiceImpl.add(bandModel);

        return ResponseEntity.ok(addedBandModel);
    }


    @GetMapping(produces = "application/json")
    public ResponseEntity<List<BandModel>> getAll(){

        List<BandModel> bands=bandServiceImpl.getAll();
        if(bands.isEmpty()){
            return ResponseEntity.notFound().build();
        }else{
            return ResponseEntity.ok(bands);
        }

    }


    @GetMapping(produces = "application/json",path = "rest/band/{id}")
    public ResponseEntity<BandModel> getById(@PathVariable(value = "id") Long id){
        Optional<BandModel> model=bandServiceImpl.getById(id);

        if(model.isPresent()){
            return ResponseEntity.ok(model.get());
        }else{
            return ResponseEntity.notFound().build();
        }


    }









}




/*
{

"numeTrupa":"Metallica",
"nrMembrii":"4",
"nrConcerte":"1000",
"email":"email@yahoo.com",
"parola":"parola",
"confirmareParola":"parola"

}



 */
