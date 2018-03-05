import React, { Component } from 'react';
import './Upload.css';
import firebase from 'firebase';
class Upload extends Component{
    state={
        selectedInput:null
    }
    fileSelector=(event)=>{
        this.setState({
            selectedInput:event.target.files[0]
        });
    }

    fileUpload=()=>{
         var storage = firebase.storage();
         var storageRef = storage.ref();
        var file = this.state.selectedInput;
        var metadata = {
        contentType: 'video/mp4'
        };

        var uploadTask = storageRef.child(file.name).put(file, metadata);

        uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
        function(snapshot) {
            console.log("updated");
        }, function(error) {
            console.log(error);
        });
    }
    render(){
        return(
            <div className="uploadDiv">
                <input  type="file" style={{display:"none"}} onChange={this.fileSelector}
                ref={fileInput=>this.fileInput=fileInput}/>
                <button onClick={()=>this.fileInput.click()}>Pick File</button>
                <button onClick={this.fileUpload}>Upload</button>
            </div>
        );
    }
}

export default Upload;