package band;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController()
public class SpectatorController {


    private SpectatorServiceImpl spectatorService;

    @Autowired
    public SpectatorController(SpectatorServiceImpl spectatorService){
        this.spectatorService=spectatorService;
    }


    @RequestMapping(consumes = "application/json",produces = "application/json",method = RequestMethod.POST,value = "/rest/spectatori")
    public ResponseEntity<SpectatorModel> add(@RequestBody SpectatorModel spectatorModel){

        SpectatorModel addedSpectator=spectatorService.add(spectatorModel);

        return ResponseEntity.ok(addedSpectator);


    }





}


/*

{
	"username":"andrew",
	"numeSpectator":"Andrei",
	"prenumeSpectator":"Oprea",
	"emailSpectator":"oprea96@yahoo.com",
	"parolaSpectator":"parola",
	"confParolaSpectator":"parola"

}



 */