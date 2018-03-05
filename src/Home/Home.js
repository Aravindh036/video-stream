import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
class Home extends Component{
    render(){
        return(
            <div className="homeDiv">
                <button><Link to={'./upload'} className="Link">UPLOAD</Link></button>
                <button><Link to={'./stream'} className="Link">STREAM</Link></button>
            </div>
        );
    }
}

export default Home;