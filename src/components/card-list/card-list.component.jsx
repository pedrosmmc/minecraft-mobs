import { Component } from "react";
import Card from "../card/card";
import './card-list.css'


class CardList extends Component {

  render() {
    const {id, className, mobs} = this.props;

    return <div id={id} className={`row ${className}`}>
      {mobs.map(mob => {
        return <div className="col-sm-2" key={mob.id}>
          <Card
              className="mob-card"
              mob={mob}/>
        </div>
      })}
    </div>
  }
}

export default CardList;