import React from "react";
import Image from "./components/img";
import logo from "./img/1.jpg"

class Header extends React.Component{
  render(){
    return (
      <header className="header">{this.props.title}</header>
    )
  }
}

class App extends React.Component{

  helpText = "Help";

  inputClick = () => console.log("Click");

  render(){
    return ( <div className="name" >
    <Header title="Шапка сайта" />
    <h1>{this.helpText}</h1>
    <input name="input-1" placeholder={this.helpText}
      onClick={this.inputClick}/>
    <img src={logo}/>
    </div>)
  }
}

export default App