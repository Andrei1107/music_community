import React,{Component} from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyFirstComponent from "./MyFirstComponent";

const initialState={
    numeTrupa:'',
    nrMembrii:'',
    parola:'',
    numeTrupaError:'',
    nrMembriiError:'',
    parolaError:''
};

class postRequest extends React.Component{

    state= initialState;




    changeHandler = (e) =>{
    this.setState({[e.target.name]:e.target.value})
    };

submitHandler = e =>{
e.preventDefault();

const isValid=this.validate();

if(isValid) {
    console.log(this.state);

    this.setState(initialState);


    axios.post("http://localhost:8087/rest/band", this.state)
        .then(response => {
            console.log(response);
            if (response.status === 200) {

            }
        })
        .catch(error => {
            console.log(error)
        })
}
};

validate = () =>{

    let nrMembriiError="";
    let numeTrupaError="";
    let parolaError="";

    if(this.state.numeTrupa.length <1){
        numeTrupaError="Numele trupei este obligatoriu";
    }
    if(numeTrupaError){
        this.setState({numeTrupaError});
        return false;
    }


if(this.state.nrMembrii >10){
  nrMembriiError="Nu poti avea mai mult de 10 membrii in trupa";
}
if(nrMembriiError){
    this.setState({nrMembriiError});
    return false;
}

if(this.state.parola.length <8 ){
    parolaError="parola trebuia sa contina minim 8 caractere";
}
if(parolaError){
    this.setState({parolaError});
    return false;
}


return true;

};

    render() {

        return(
            <div>
                <form onSubmit={this.submitHandler}>

                    <div>
                        <input type="text"
                               name="numeTrupa"
                               value={this.state.numeTrupa}
                               placeholder="Nume Trupa"
                               onChange={this.changeHandler}
                        />
                    </div>
                       <div style={{color:"red", fontSize:14}}>
                        {this.state.numeTrupaError}
                    </div>


    <div>

        <input type="Numeric"
               name="nrMembrii"
               placeholder="ex:4"
                value={this.state.nrMembrii}
               onChange={this.changeHandler}
        />


    </div>
                    <div style={{color:"red", fontSize:14}}>
                        {this.state.nrMembriiError}
                    </div>

                 <div>

                     <input type="password"
                            name="parola"
                            value={this.state.parola}
                            onChange={this.changeHandler}
                            />


                 </div>
                    <div style={{color:"red", fontSize:14}}>
                        {this.state.parolaError}
                    </div>



                    <button type="submit">Submit</button>



                </form>



            </div>


        )


    }


}

export default postRequest;