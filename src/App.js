import React, { Component } from "react";
import "./App.css";
import { storage } from "./firebase/firebase";

class App extends Component {
  state = {
    image: null,
    url: null,
    setUrl: null,
    progress: 0,
  };

  handleChange = (event) => {
    if (event.target.files[0]) {
      this.setState({ image: event.target.files[0] });
    }
  };

  seeObject = () => {
    console.log(this.state.image);
  };

  handleUpload = () => {
    // See the image object, there is a name property

    // Uploading Image to storage
    const uploadTask = storage
      .ref(`images/${this.state.image.name}`)
      .put(this.state.image);

    // returning url for the image and getting the upload progress for the process
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        this.setState({ progress: progress });
      },
      (error) => {
        console.log(error);
      },
      () => {
        storage
          .ref("images")
          .child(this.state.image.name)
          .getDownloadURL()
          .then((url) => {
            this.setState({ url: url });
          });
      }
    );
  };

  render() {
    return (
      <div className="App">
        <progress value={this.state.progress} max="100" />
        <input type="file" onChange={this.handleChange} />
        <br />
        <br />
        <button onClick={this.seeObject}> See Image Object </button>
        <br />
        <br />
        <button onClick={this.handleUpload}>Upload</button>
        <h1>URL of the image is here : </h1>
        <p>{this.state.url}</p>
        <h1>Image is here : </h1>
        <img
          src={this.state.url || "http://via.placeholder.com/300x200"}
          alt="firebase img"
        />
      </div>
    );
  }
}

export default App;
