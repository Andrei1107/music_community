import React, {Component} from 'react';
import axios from 'axios';


export default class getrequest extends React.Component {

    state = {
        bands: [],
        isLoading:true,
        errors:null
    };

componentDidMount() {
axios.get("http://localhost:8087/rest/band/")
    .then(response=>response.data)
    .then((data) =>{
        this.setState({bands:data});
       console.log(this.state);
    });



}


    render() {

        return (
<div>

          <ol>

                {
                    this.state.bands.map( (band,index) =>(
                        <li key={index}> {band.numeTrupa} </li>

                    ))
                }





           </ol>
</div>


        )


    }


}