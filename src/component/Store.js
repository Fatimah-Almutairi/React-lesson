import React, { Component } from 'react'

export class ClassBtn extends Component {
  constructor (props) {
    super (props)
    this.state = {
      name  : 'Click'
    }
    this.rename = () => this.setState({ name : this.state.name = "Clicked"})
    // console.log("Rename the Output");
  }  
  render() {
    console.log("render");
    return (
      <div> {this.state.name}
      <br></br>
      <button onClick = {this.rename}>Click Here</button>
      
      </div>

    )
  }
}

export default ClassBtn