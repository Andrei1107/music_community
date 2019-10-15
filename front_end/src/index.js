import React from "react";
import ReactDOM from "react-dom";
import MyFirstComponent from "./MyFirstComponent";
import 'bootstrap/dist/css/bootstrap.css';
import "./styles.css";
import  Counter from "./counter";
import PostBand from "./PostBand";
import PostRequest from "./PostRequest"

import Form from "./Form";
import GetRequest from "./GetRequest";

import Home from "./project/Home";
import FormTrupa from "./project/FormTrupa";
import FormSpectator from "./project/FormSpectator";
import FormLogIn from "./project/FormLogIn";

import {Switch, Redirect, Route, Link, BrowserRouter as Router} from 'react-router-dom';

import Evenimente from "./project/Evenimente";


const rootElement=document.getElementById('root');

//ReactDOM.render(<Counter />, rootElement);

//ReactDOM.render(<PostBand />,rootElement);
//ReactDOM.render(<PostRequest/>,rootElement);
//ReactDOM.render(<Form/>,rootElement);
//ReactDOM.render(<GetRequest/>,rootElement);






//project

ReactDOM.render(<Home/>,rootElement);
//ReactDOM.render(<FormTrupa/>,rootElement);
//ReactDOM.render(<FormSpectator/>,rootElement);
//ReactDOM.render(<FormLogIn/>,rootElement);
//ReactDOM.render(<Navigation/>,rootElement);

//ReactDOM.render(<Evenimente/>,rootElement);




