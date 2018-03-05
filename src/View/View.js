import React, { Component } from 'react';
import * as firebase from 'firebase';
import './View.css';
class View extends Component{
    state={
        file:null
    }
    handler=(e)=>{
        this.setState({
            file:e.target.value
        })
    }
    fetch=()=>{
            var storage = firebase.storage();
            var storageRef = storage.ref();
            if(this.state.file){
                storageRef.child(this.state.file).getDownloadURL().then(function(url) {
                    var source =document.getElementById('source');
                    var video =document.getElementById('video');                
                    source.setAttribute("src",url);
                    console.log(url);
                    video.load();
                }).catch(function(error) {
                    console.log(error);
                });
            }
            else{
                alert("stream name required");
            }
    }

    render(){
        return(
            <div className="listDiv">
                <div className="videoList">
                    <video width="400" height="200" controls  autoPlay id="video">
                        <source src={''} type="video/mp4" id="source"/>
                    </video>
                    <div className="input">
                        <input type="text" onBlur={this.handler}/>                        
                    </div>
                    <div className="button">
                        <button onClick={this.fetch}>stream</button>                        
                    </div>                    
                </div>
            </div>
        );
    }
}

export default View;