import React, { Component } from "react";
import PropTypes from "prop-types";

import ExpandedCard from "../components/ExpandedCard";
import './CardSection.scss'
import ActiveLink from "./ActiveLink";

class CardSection extends Component {
  static propTypes = {
    cards: PropTypes.instanceOf(Object).isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {
      activeCard: 0
    }

    this.onClick = this.onClick.bind(this)
  }

  onClick(id) {
    const activeCard = id === this.state.activeCard ? 0 : id
    this.setState({ activeCard }, this.showExpanded(activeCard))
  };

  showExpanded(active) {
    // delete previously created expanded text
    
    document.querySelectorAll('.card-content').forEach(div => div.parentNode.removeChild(div))
    console.log(active)
    if ( active > 0 ) {
      console.log(window.innerWidth)
      // get active card expanded text
      const activeCard = this.props.cards.filter(card => card.id === active)
      const expandedText = activeCard.length > 0 ? activeCard[0].expanded : ''
      const linkExpanded = activeCard.length > 0 ? activeCard[0].linkExpanded : ''
      const extraExpanded = activeCard.length > 0 ? activeCard[0].extraExpanded : ''

      // calculate where the expanded text element will be inserted at
      const columnsPerRow = window.innerWidth >= 1092 ? (this.props.section === "helpdesk" ? 2 : 3) : window.innerWidth >= 760 ? 2 : 1
      let nth = active % columnsPerRow === 0 ? active : active + ( columnsPerRow - active % columnsPerRow)
      nth  = nth > this.props.cards.length? nth-1 : nth;
      const edgeElement = document.querySelector(`.card-container:nth-of-type(${nth})`)

      // create expanded element
      const expandedElementHtml = `<div class="card-content">${expandedText}<a href = '/closeaccount'>${linkExpanded}</a>${extraExpanded}</div>`

      edgeElement.insertAdjacentHTML('afterEnd', expandedElementHtml)
    }
  }

  render() {
    const { activeCard } = this.state
    const { cards } = this.props

    return (
      <div className="cards-wrapper">
        {cards.map(child => {
          return (
            <ExpandedCard
              key={child.id}
              excerpt={child.excerpt}
              excerpt2 = {child.excerpt2}
              excerpt3 = {child.excerpt3}
              excerpt4 = {child.excerpt4}
              title={child.title}
              id={child.id}
              expanded={child.expanded}
              isOpen={activeCard === child.id}
              onClick={this.onClick}
              section = {this.props.section}
            />
          )
        })}
      </div>
    );
  }
}

export default CardSection;