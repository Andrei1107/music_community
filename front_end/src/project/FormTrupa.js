import React, {Component} from 'react';
import axios from 'axios';
import 'bulma/css/bulma.css';
import 'bootstrap/dist/css/bootstrap.css';
import {Redirect, Route, Link, BrowserRouter as Router} from 'react-router-dom'
import Home from './Home.jsx';
import FormLogIn from "./FormLogIn";


//TODO:disable input when checkbox is checked =>make nrConcerte=0;

const initialState = {
    checkStatus: false,

    numeTrupa: '',

    nrMembrii: '',

    nrConcerte: '',

    email: '',

    parola: '',

    confparola: '',

    numeTrupaError: '',

    nrMembriiError: '',

    emailError: '',

    nrConcerteError: '',

    parolaError: '',

    connfparolaError: '',

    toHome: false

};


class FormTrupa extends React.Component {
    state = initialState;


    handleSubmit = event => {
        event.preventDefault();

        const isValid = this.validate();
        if (isValid) {

            this.setState({toHome: true});



            //  this.setState(initialState);

            axios.post("http://localhost:8087/rest/band",this.state)
                .then(response =>{
                    console.log(this.state);


                    if(response.status === 200){
                        console.log("Trupa adaugata cu succes!!");

                        return <FormLogIn/>
                    }


                })
                .catch(error=>{
                    console.log(error);
                })





        }


    };


    handleChangeBox = event => {


        this.setState({checkStatus: event.target.checked});

        console.log(this.state);
    };

    handleChange = event => {

        this.setState({
            [event.target.name]: event.target.value
        })


    };

    validate = () => {

        let invisible = "";

        let numeTrupaError = "";

        let nrMembriiError = "";

        let emailError = "";

        let parolaError = "";

        let connfparolaError = "";

        let nrConcerteError = "";

        if (this.state.numeTrupa === '') {
            numeTrupaError = "Introduceti numele trupei";
        }
        if (numeTrupaError) {
            this.setState({numeTrupaError});
            return false;
        }


        if (this.state.nrMembrii > 10) {
            nrMembriiError = "Introduceti un numar valid!";
        }


        if (this.state.nrMembrii === '' || this.state.nrMembrii < 1) {
            nrMembriiError = "Introduceti numarul de membrii";
        }
        if (nrMembriiError) {
            this.setState({nrMembriiError});
            return false;
        }


        if (nrMembriiError) {
            this.setState({nrMembriiError});
            return false;
        }

        if (!this.state.email.includes("@")) {
            emailError = "Introduceti un email valid";
        }

        if (emailError) {
            this.setState({emailError});
            return false;
        }

        if (this.state.nrConcerte === '') {
            nrConcerteError = "Introduceti nr de concerte!";
        }
        if (nrConcerteError) {
            this.setState({nrConcerteError});
            return false;
        }


        if (this.state.parola.length < 8) {
            parolaError = "Parola trebuie sa contina minim 8 caractere";
        }
        if (parolaError) {
            this.setState({parolaError});
            return false;
        }

        if (this.state.parola != this.state.confparola) {
            connfparolaError = "Parolele trebuie sa fie egale";
        }
        if (connfparolaError) {
            this.setState({connfparolaError});
            return false;
        }


        return true;

    };

    render() {

        //TODO: pass success to formLogIn
        const success = [<div className="alert alert-success" role="alert">
            Trupa inregistrata cu success!
        </div>
        ];


        if (this.state.toHome === true) {


            return <FormLogIn/>
        }


        return (

            <div id="id_div_form_trupa" className="col-md-8">

                <h2 id="id_titlu_form">Inregistreaza-ti Trupa</h2>

                <form onSubmit={this.handleSubmit} id="id_form_trupa" className="panel panel-default" >
                    <div className="field" id="id_div_numeTrupa">
                        <label className="label">Nume Trupa</label>
                        <div className="control">
                            <input className="input"
                                   name="numeTrupa"
                                   type="text" placeholder=""
                                   value={this.state.numeTrupa}
                                   onChange={this.handleChange}
                            />
                        </div>
                        <div id="numeTrupa_error" style={{color: "red"}}>{this.state.numeTrupaError}</div>
                    </div>

                    <div className="field" id="id_div_nrmembrii">
                        <label className="label">Numar membrii</label>
                        <div className="control">
                            <input className="input"
                                   name="nrMembrii"
                                   type="Number"
                                   placeholder="ex:2"
                                   value={this.state.nrMembrii}
                                   onChange={this.handleChange}/>

                        </div>
                        <div id="nrMembrii_error" style={{color: "red"}}>{this.state.nrMembriiError} </div>

                    </div>

                    <div className="field" id="id_div_email">
                        <label className="label">Email</label>
                        <p className="control has-icons-left has-icons-right">
                            <input className="input"
                                   name="email"
                                   type="email"
                                   placeholder="Email"
                                   value={this.state.email}
                                   onChange={this.handleChange}
                            />
                            <span className="icon is-small is-left">
      <i className="fas fa-envelope"/>
    </span>
                            <span className="icon is-small is-right">
      <i className="fas fa-check"/>
    </span>
                        </p>
                        <div id="email_error" style={{color: "red"}}>{this.state.emailError}</div>
                    </div>

                    <div className="field" id="id_div_nrconcerte">
                        <label className="label">Numar concerte(aprox)</label>
                        <div className="control">
                            <input className="input"
                                   name="nrConcerte"
                                   type="Number"
                                   placeholder="ex:2"
                                   value={this.state.nrConcerte}
                                   onChange={this.handleChange}/>

                        </div>
                        <div id="nrConcerte_error" style={{color: "red"}}>{this.state.nrConcerteError} </div>
                    </div>


                    <div id="id_div_checkbox">
                        <label className="checkbox">
                            <input type="checkbox"
                                   name="checkStatus"
                                   checked={this.state.checkStatus}
                                   onChange={this.handleChangeBox}
                                   value={this.state.checkStatus}

                            />
                            Suntem la inceput
                        </label>

                    </div>


                    <div className="field" id="id_div_password">
                        <label className="label">Parola</label>
                        <p className="control has-icons-left">
                            <input className="input"
                                   name="parola"
                                   type="password"
                                   placeholder="Parola"
                                   value={this.state.parola}
                                   onChange={this.handleChange}
                            />
                            <span className="icon is-small is-left">
      <i className="fas fa-lock"></i>
    </span>
                        </p>
                        <div id="parola_error" style={{color: "red"}}>{this.state.parolaError}</div>
                    </div>

                    <div className="field" id="id_div_confirmare">
                        <label className="label">Confirmare Parola</label>
                        <p className="control has-icons-left">
                            <input className="input"
                                   name="confparola"
                                   type="password"
                                   placeholder="Confirma parola"
                                   value={this.state.confparola}
                                   onChange={this.handleChange}
                            />
                            <span className="icon is-small is-left">
      <i className="fas fa-lock"></i>
    </span>
                        </p>


                        <div id="confParola_error" style={{color: "red"}}>{this.state.connfparolaError}</div>
                    </div>

                    <button type="submit" id="id_div_register">
                        Inregistrare
                    </button>


                </form>


            </div>


        )


    }


}


export default FormTrupa;