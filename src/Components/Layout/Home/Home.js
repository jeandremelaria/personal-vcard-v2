import React, { Component } from 'react';
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
        
        // Check if user is set
        if(this.state.user[0]){
            const user = this.state.user[0];

            header = <Header logo={user.website_logo} />;
        }
        // console.log(this.state.user);
        
        return(
            <div>
                {header}
            </div>
        );
    }
}



export default Home;