import React from "react";

import Card from "./pokemon/Card"

export default class CardView extends React.Component {
  constructor() {
    super();
    this.state = {
      pokemonCards: [],
    };
  }

  componentDidMount() {    
    var that = this;
    var url = 'http://localhost:3000/api/card/Base'
  
    fetch(url)
    .then(function(response) {
      if (response.status >= 400) {
        throw new Error("Bad response from server");
      }
      return response.json();
    })
    .then(function(data) {
      that.setState({ pokemonCards: data.map((card, i) => <Card key={card.id} card={card}/> ) })
    });
  }



  render() {
    
    return (
      <div>
        {this.state.pokemonCards}
      </div>
    );
  }
}
