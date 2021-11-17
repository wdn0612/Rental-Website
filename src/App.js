import logo from './logo.svg';
import './App.css';
import Clock from "./Components/Clock";
import Toggle from "./RefComponents/Toggle"
import React, { Component } from 'react';
import PropertyFeatures from './Components/PropertyFeatures';
import RangeFeatures from './Components/RangeFeatures';
import Button from "@mui/material/Button";

class App extends Component{

  render(){
    const properties = [
      {id: 1, property: 'Property Guru'},
      {id: 2, property: '99Co'}
    ];
    return (
        <div className="App">
          <header className="App-header">
            <Welcome name="Wang Daini"/>
            <div className="User-input">
              <div className="rowC">
                <PropertyFeatures />
                <RangeFeatures />
              </div>
              <br/>
            </div>

            {/*<button className="buttonSubmit">*/}
            {/*  Submit*/}
            {/*</button>*/}

            <Button size='large' variant="contained"> Submit </Button>
            {/*<img width="640" height="360"*/}
            {/*     src="https://sg2-cdn.pgimgs.com/listing/23772186/UPHO.132334589.V800/J-Gateway-Boon-Lay-Jurong-Tuas-Singapore.jpg"*/}
            {/*     />*/}
            {/*<img src={logo} className="App-logo" alt="logo"/>*/}
            {/*<p>*/}
            {/*  Modifying <code>src/App.js</code> and save to reload.*/}
            {/*</p>*/}
            {/*<a*/}
            {/*    className="App-link"*/}
            {/*    href="https://reactjs.org"*/}
            {/*    target="_blank"*/}
            {/*    rel="noopener noreferrer"*/}
            {/*>*/}
            {/*  Learn React*/}
            {/*</a>*/}
          </header>
        </div>
    );
  }
}

function Welcome(props){
  return (
      <div>
      <h2> Hello , {props.name}</h2>
      <h3> Welcome to your One-stop Renting Website</h3>
      </div>

  )
}

function ListItem (props){
  return (
      <li>{props.value}</li>
  )
}
function Properties (props) {
  const properties = props.properties;
  return (
    <ul>{properties.map((property) =>
        <ListItem key={property.id}
                  value={property.property}/>
    )}</ul>
  )
}
export default App;
