import React from "react";
import CarouselComponent from "./carousel";

export default class Home extends React.Component {
  render() {
    return (
        <div>
            <h1 id='hometext'>Welcome to the Grand Canyon State</h1>
            <h3 id='hometextTwo'>Valley of the Sun</h3>
            <CarouselComponent />

            <div id = 'home-text'>
            Arizona, a southwestern U.S. state, is best known for the Grand Canyon, the mile-deep chasm carved by the Colorado River.
            </div>
        </div>
    )
  }
}