import React, {Component} from 'react';

const initialState={
    usernameConnect: '',
    parolaConnect: '',
    usernameErrorConnect: ''
};


class FormLogIn extends React.Component {

    state = initialState;





    handleChange = event => {

        this.setState({
            [event.target.name]: event.target.value
        })


    };


    handleSubmit = event => {
        event.preventDefault();

        const isValid = this.validate();
        if (isValid) {

            console.log(this.state);

            this.setState(initialState);

        }


    };

    validate = () =>{




        return true;

    };


    render() {

        return (




            <div className="col-md-4" id="id_div_connect">



                <form onSubmit={this.handleSubmit}>

                    <div className="field" id="id_div_usernameConnect">
                        <label className="label">Username</label>
                        <div className="control">
                            <input className="input"
                                   name="usernameConnect"
                                   type="text" placeholder=""
                                   value={this.state.usernameConnect}
                                   onChange={this.handleChange}
                            />
                        </div>
                        <div id="username_error" style={{color: "red"}}>{this.state.usernameErrorConnect}</div>
                    </div>


                    <div className="field" id="id_div_parolaConnect">
                        <label className="label">Parola</label>
                        <div className="control">
                            <input className="input"
                                   name="parolaConnect"
                                   type="password" placeholder=""
                                   value={this.state.parolaConnect}
                                   onChange={this.handleChange}
                            />
                        </div>
                        <div id="parolaSpectator_error" style={{color: "red"}}>{this.state.usernameErrorConnect}</div>
                    </div>

                    <button type="submit" id="id_div_connectare_button">
                       Connectare
                    </button>


                </form>
            </div>


        )


    }


}


export default FormLogIn;