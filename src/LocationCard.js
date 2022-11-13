import React, { Component } from "react";

export default class LocationCard extends Component {
  // constructor(props) {
  //   super(props);
  // WE need this when we state declaring state
  // }

  render() {
    return (
      <div>
        <img src={this.props.picture} alt={"cabin"} />
        <h6>{this.props.location}</h6>
        <p>{this.props.description}</p>
      </div>
    );
  }
}
