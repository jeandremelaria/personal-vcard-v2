import React, { Component } from 'react';
import { Row,  Col } from 'react-materialize';
import Header from '../../Header/Header';
import axios from 'axios';


class Home extends Component {

    state = {
        user:[]
    }

    componentDidMount() {
        // Set headers for Ajax calls to api
        var axiosConfig = {
            headers: {
                'Content-Type':'application/json;charset=UTF-8',
                'Access-Control-Allow-Origin':'*'
            }
        }

        // Get user data from api resource /user
        axios
        .get('/user', axiosConfig)
        .then(response => {
            this.setState({user:response.data})
        });
    }

    render(){
        let header = null;
        
        console.log(this.state.user[0]);
        
        return(
            <Header/>
        );
    }
}



export default Home;