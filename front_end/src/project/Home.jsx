 import React, {useState} from 'react';

import 'bulma/css/bulma.css';

import './project.css';
import 'bootstrap/dist/css/bootstrap.css';
import CarouselPage from './CarouselPage.jsx'
import FormTrupa from './FormTrupa.js';

import {Switch, Redirect, Route, Link, BrowserRouter as Router} from 'react-router-dom'


import {Modal, Button, ModalBody, ModalFooter, ModalHeader} from "reactstrap";
import FormLogIn from "./FormLogIn";
import FormSpectator from "./FormSpectator";
import Evenimente from "./Evenimente";
import Trupe from "./Trupe";


export default class Home extends React.Component {
    state = {

        modalIsOpen: false


    };





    toggleModal() {

        this.setState({
            modalIsOpen: !this.state.modalIsOpen
        });

    }


    render() {


        const logo = "https://www.shareicon.net/data/256x256/2017/01/18/873233_network_512x512.png";





        return (

            <Router>
                <div>

                    <nav className="navbar" role="navigation" aria-label="main navigation">
                        <div className="navbar-brand">
                            <a className="navbar-item">
                                <figure className="image is-64x64">
                                    <Link to="/">
                                    <img src={logo} width="64" height="64"/>
                                    </Link>

                                </figure>
                            </a>

                            <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false"
                               data-target="navbarBasicExample">
                                <span aria-hidden="false"></span>
                                <span aria-hidden="false"></span>
                                <span aria-hidden="false"></span>
                            </a>
                        </div>

                        <div id="navbar" className="navbar-menu ">
                            <div className="navbar-start has-text-right-desktop">

                                <Link to="/evenimente" className="navbar-item  has-text-weight-bold is-size-4">
                                <a >
                                    Evenimente
                                </a>
                                </Link>

                                <Link to="/trupe" className="navbar-item has-text-weight-bold is-size-4">
                                <a id="id_trupe">
                                    Trupe
                                </a>
                                </Link>

                            </div>


                            <div className="navbar-item">
                                <div className="navbar-content">
                                    <div className="is-flexible" id="search_id">
                                        <input className="input is-rounded" type="text"
                                               placeholder="Cauta o trupa sau un eveniment"/>
                                    </div>
                                </div>

                                <div className="buttons">
                                    <button className="button is-primary" id="searchBtn_id">
                                        <strong>Cauta</strong>
                                    </button>
                                </div>

                            </div>
                            <div className="navbar-end">
                                <div className="navbar-item">
                                    <div className="buttons">


                                        <Button className="button is-primary" id="register_id"
                                                onClick={this.toggleModal.bind(this)}>
                                            <strong>Inregistreaza-te</strong>
                                        </Button>

                                        <Link to="/login">

                                        <Button className="button is-light" id="connect_id">
                                            Conecteaza-te
                                        </Button>

                                        </Link>


                                    </div>
                                </div>
                            </div>


                        </div>
                    </nav>


                    {/*<div id="carousel_id">*/}

                    {/*    <CarouselPage/>*/}
                    {/*</div>*/}


                    <div>
                        <Modal isOpen={this.state.modalIsOpen}>
                            <ModalHeader toggle={this.toggleModal.bind(this)}>Inregistrare</ModalHeader>
                            <ModalBody id="modal_body">Vreau sa ma inregistrez ca </ModalBody>

                            <ModalFooter>

                                <Link to="/formTrupa"  id="btn_modal_trupa">

                                    <Button color="primary" onClick={this.toggleModal.bind(this)}>
                                        Trupa
                                    </Button>

                                </Link>
                                <Link to="/formSpectator" id="btn_modal_spect">

                                <Button color="secondary" onClick={this.toggleModal.bind(this)} >
                                    Spectator
                                </Button>

                                </Link>
                            </ModalFooter>

                        </Modal>

                    </div>




                </div>

                <Switch>
                    <Route exact path="/" component={CarouselPage} />

                    <Route path="/formTrupa" component={FormTrupa} />
                    <Route path="/formSpectator" component={FormSpectator} />
                    <Route path="/login" component={FormLogIn} />
                    <Route path="/evenimente" component={Evenimente}/>
                    <Route path="/trupe" component={Trupe}/>




                </Switch>


            </Router>


        )


    }


}


