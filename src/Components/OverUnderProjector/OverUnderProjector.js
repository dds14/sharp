import React, { Component } from "react";
import axios from "axios";

export default class OverUnderProjector extends Component {
  componentDidMount() {
    axios
      .get(
        "https://api.sportradar.us/mlb-t6/games/2014/06/15/boxscore.json?api_key=j43g3ww5s3wvs9xqpm59xpy5"
      )
      .then(response => {
        console.log(response);
      });
  }

  render() {
    console.log("response");

    return (
      <div>
        <h1>OverUnderProjector</h1>
      </div>
    );
  }
}
