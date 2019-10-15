import React,{Component } from 'react';
import FormLogIn from "./FormLogIn";
import axios from 'axios';

const initialState={
    username:'',

    numeSpectator:'',

    prenumeSpectator:'',

    emailSpectator:'',

    parolaSpectator:'',

    confParolaSpectator:'',


    usernameError:'',

    numeSpectatorError:'',

    prenumeSpectatorError:'',

    emailSpectatorEror:'',

    parolaSpectatorError:'' ,

    confParolaSpectatorError:'',

    toHome:false
};



class FormSpectator extends React.Component{
state=initialState;






    handleChange = event => {

        this.setState({
            [event.target.name]: event.target.value
        })


    };

    handleSubmit = event => {
        event.preventDefault();

        const isValid = this.validate();
        if (isValid) {




            axios.post("http://localhost:8087/rest/spectatori",this.state)
                .then(response =>{

                    console.log(this.state);

                    if(response.status === 200){
                        console.log("spectator adaugat  cu success");

                        return <FormLogIn/>

                    }

                });






            this.setState({toHome:true});
           // this.setState(initialState);







        }


    };

    validate = () =>{

      let  usernameError='';

         let   numeSpectatorError='';

            let prenumeSpectatorError='';

            let emailSpectatorEror='';

            let parolaSpectatorError='';

            let confParolaSpectatorError='';


            if(this.state.username === '' || this.state.username.length <2){
                usernameError=" Username invalid"
            }
            if(usernameError){
                this.setState({usernameError});
                return false;
            }

        if(this.state.numeSpectator === '' || this.state.numeSpectator.length <2){
            numeSpectatorError=" Nume invalid"
        }
        if(numeSpectatorError){
            this.setState({numeSpectatorError});
            return false;
        }

        if(this.state.prenumeSpectator === '' || this.state.prenumeSpectator.length <2 || this.state.numeSpectator ===this.state.prenumeSpectator){
            prenumeSpectatorError=" Prenume invalid"
        }
        if(prenumeSpectatorError){
            this.setState({prenumeSpectatorError});
            return false;
        }

        if(this.state.emailSpectator === '' || this.state.emailSpectator.length <2 || !this.state.emailSpectator.includes('@')){
            emailSpectatorEror=" Email invalid"
        }
        if(emailSpectatorEror){
            this.setState({emailSpectatorEror});
            return false;
        }

        if(this.state.parolaSpectator === '' || this.state.parolaSpectator.length <8){
            parolaSpectatorError=" Parola trebuie sa contina minim 8 caractere "
        }
        if(parolaSpectatorError){
            this.setState({parolaSpectatorError});
            return false;
        }

        if(this.state.confParolaSpectator === '' || !this.state.confParolaSpectator===this.state.parolaSpectator){
            confParolaSpectatorError=" Parolele trebuie sa fie egale"
        }
        if(confParolaSpectatorError){
            this.setState({confParolaSpectatorError});
            return false;
        }



        return true;

    };





    render() {


        if(this.state.toHome === true){



            return <FormLogIn />
        }





        return(
            <div className="col-md-8">
                <h2 id="id_titlu_form">Inregistreaza-te</h2>
                <form onSubmit={this.handleSubmit} id="id_form_spectator">

                    <div className="field" id="id_div_numeTrupa">
                        <label className="label">Username</label>
                        <div className="control">
                            <input className="input"
                                   name="username"
                                   type="text" placeholder=""
                                   value={this.state.username}
                                   onChange={this.handleChange}
                            />
                        </div>
                        <div id="username_error" style={{color: "red"}}>{this.state.usernameError}</div>
                    </div>


                    <div className="field" id="id_div_numeSpectator">
                        <label className="label">Nume</label>
                        <div className="control">
                            <input className="input"
                                   name="numeSpectator"
                                   type="text" placeholder=""
                                   value={this.state.numeSpectator}
                                   onChange={this.handleChange}
                            />
                        </div>
                        <div id="numeSpectator_error" style={{color: "red"}}>{this.state.numeSpectatorError}</div>
                    </div>

                    <div className="field" id="id_div_prenumeSpectator">
                    <label className="label">Prenume</label>
                    <div className="control">
                        <input className="input"
                               name="prenumeSpectator"
                               type="text" placeholder=""
                               value={this.state.prenumeSpectator}
                               onChange={this.handleChange}
                        />
                    </div>
                    <div id="emailSpectator_error" style={{color: "red"}}>{this.state.prenumeSpectatorError}</div>
                </div>

                    <div className="field" id="id_div_emailSpectator">
                        <label className="label">Email</label>
                        <div className="control">
                            <input className="input"
                                   name="emailSpectator"
                                   type="text" placeholder=""
                                   value={this.state.emailSpectator}
                                   onChange={this.handleChange}
                            />
                        </div>
                        <div id="emailSpectator_error" style={{color: "red"}}>{this.state.emailSpectatorEror}</div>
                    </div>


                    <div className="field" id="id_div_parolaSpectator">
                        <label className="label">Parola</label>
                        <div className="control">
                            <input className="input"
                                   name="parolaSpectator"
                                   type="password" placeholder=""
                                   value={this.state.parolaSpectator}
                                   onChange={this.handleChange}
                            />
                        </div>
                        <div id="parolaSpectator_error" style={{color: "red"}}>{this.state.parolaSpectatorError}</div>
                    </div>


                    <div className="field" id="id_div_confParolaSpectator">
                        <label className="label">Confirmare Parola</label>
                        <div className="control">
                            <input className="input"
                                   name="confParolaSpectator"
                                   type="password" placeholder=""
                                   value={this.state.confParolaSpectator}
                                   onChange={this.handleChange}
                            />
                        </div>
                        <div id="confParolaSpectator_error" style={{color: "red"}}>{this.state.confParolaSpectatorError}</div>
                    </div>


                    <button type="submit" id="id_div_register">
                        Inregistrare
                    </button>


                </form>





            </div>



        )


    }


}



export default FormSpectator;