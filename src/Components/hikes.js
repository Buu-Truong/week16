import React from "react";
import AccordionComponent from "./accordianComponent";
import CardsComponent from "./cardsComponent";
export default class Hikes extends React.Component {
  render() {
    return (
       <div id ='hikesStyle'>
           <h1 id = 'hikecolor'>Attractions in Arizona</h1>
           <CardsComponent />
           <h1 id ='hikesStyleTwo'>Here are a few local tips:</h1>
           <AccordionComponent />
       </div> 
    )
  }
}