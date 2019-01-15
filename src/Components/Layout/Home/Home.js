import React, { Component } from 'react';
import { Row, Col } from 'react-materialize';
import axios from 'axios';
import Header from '../../Header/Header';
import Sidebar from '../../Sidebar/Sidebar';
import Content from '../Home/HomeContent/HomeContent';



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
        let header, sidebar, content = null;
        
        // Check if user is set
        if(this.state.user[0]){
            const user = this.state.user[0];

            header = <Header logo = {user.website_logo} />;

            sidebar = <Sidebar 
                        email = {user.email}
                        phone = {user.phone}
                        website = { user.website_url}
                        facebook = {user.facebook}
                        instagram = {user.instagram}
                        twitter = {user.twitter}
                        dribbble = {user.dribbble}
            />;

            content = <Content 
                        profilePhoto = {user.profile_photo}
                        firstname = {user.firstname}
                        lastname = {user.lastname}
                        profileTitle = {user.profile_title}
                        profileSummary = {user.profile_summary}
            />;
        }
        
        return(
            <div>
                <Row>
                    <Col s={12} m={12}>{header}</Col>
                    <Col m={3}>{sidebar}</Col>
                    <Col m={7}>{content}</Col>
                </Row>
                {/* {header} */}

            </div>
        );
    }
}



export default Home;