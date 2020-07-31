import React, { Component } from "react";
import Clarifai from 'clarifai';
import Logo from "./Components/Logo/Logo.js";
import ImageLinkForm from "./Components/ImageLinkForm/ImageLinkForm.js";
import Rank from "./Components/Rank/Rank.js"
import FaceRecognition from "./Components/FaceRecognition/FaceRecognition.js"
import Footer from "./Components/Footer/Footer.js"
import Particles from 'react-particles-js';
import "./App.css";


const part_dot = {
                particles: {
                  number: {
                    value: 50,
                    density: {
                      enable: true,
                      value_area: 700
                    }
                  },
                  line_linked : {
                      color : '#202020'
                    },
                    move : {
                      speed: 5
                    }
                }
              }

const app = new Clarifai.App({
 apiKey: '8c746ea724ca42379cd59f94a41e7b27'
});

class App extends Component {
  constructor(){
    super();
    this.state = {
      input: '',
      imageUrl: '',
      box: {},
      
    }
  }

calculateFaceLocation = (data) => {
      const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
      const image = document.getElementById('inputImage');
      const width = Number(image.width);
      const height = Number(image.height);
      return {
        leftcol : clarifaiFace.left_col * width,
        toprow : clarifaiFace.top_row * height,
        rightcol : width - (clarifaiFace.right_col * width),
        bottomrow : height - (clarifaiFace.bottom_row * height)
      }
}

  faceBox = (box) =>{
    
    this.setState({box: box})
  }


  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }


  onButtonSubmit = () => {
    this.setState({imageUrl: this.state.input});
    app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
    .then(response => this.faceBox(this.calculateFaceLocation(response)))
    .catch(err => console.log(err));
  }


  

  render() {
    const { imageUrl, box} = this.state;
    return (
      <div className = "App">
      <Particles className="particles" 
              params={part_dot} />
        
         <Logo />
          
        
          <Rank />
          <ImageLinkForm onInputChange = {this.onInputChange} onButtonSubmit={this.onButtonSubmit}/>         
        <FaceRecognition box={box} imageUrl= {imageUrl}/>

        <Footer />
        </div>
         

         
      
      
    );
  }
}

export default App;
