import React from "react";


export default class Card extends React.Component {
  render() {
    return (
      <div class="col-md-3">
        <p>{this.props.card.name}</p>
        <img src={this.props.card.imageUrl} />
      </div>
    );
  }
}
