import React, {Component} from 'react';
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class postBand extends React.Component {



    state = {
        numetrupa: '',
        nrMembrii: '',
        parola: ''
    };



    addBand = (band) => {

        axios.post("http://localhost:8087/rest/band",
            band)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            })

        console.log(band);
    };


    buttonClickAction = () => {

        console.log("You clicked me");

        let myObjectBeStringified = JSON.stringify(this.state);
        console.log(myObjectBeStringified);

        let myStringBeObjectified = JSON.parse(myObjectBeStringified);
        console.log(myStringBeObjectified);


        let band = {
            name: this.state.numeTrupa,
            members: this.state.nrMembrii,
            password: this.state.parola
        };

        let bands = Object.assign([], band);
        bands.push(this.state.numetrupa);
        bands.push(this.state.nrMembrii);
        bands.push(this.state.parola);


        console.log(band);

        this.addBand(band);

    };

    handleTextFieldChange = event => {
        this.setState({numeTrupa: event.target.value});
        this.setState({nrMembrii: event.target.value});
        this.setState({parola: event.target.value});
    };


    render() {

        return (

            <div>
                <h1>Inregistreaza ti trupa</h1>

                <form>
                    <input type="text"
                           placeholder="Nume trupa"
                           value={this.state.numetrupa}
                           onChange={this.handleTextFieldChange}
                    />

                    <br/>
                    <input type="number"
                           placeholder="Numar membrii"
                           value={this.state.nrMembrii}
                           onChange={this.handleTextFieldChange}
                    />
                    <br/>
                    <input type="password"
                           placeholder="Parola "
                           value={this.state.parola}
                           onChange={this.handleTextFieldChange}
                    />
                    <br/>

                    <button
                        onClick={this.buttonClickAction}

                    >Let's Rock
                    </button>

                </form>


            </div>


        )


    }


}

