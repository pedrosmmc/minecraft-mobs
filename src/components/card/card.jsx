import { Component } from "react";
import { capitalize } from "../../utilities/strings";
import './card.css'


class Card extends Component {

  render() {
    const {className} = this.props;
    const {id, name, img, width, height, isBoss} = this.props.mob;

    return <div id={className + '-' + id} className={`${className} card mb-3 shadow`} style={{maxWidth: "18rem"}}>
      {isBoss &&
          <span className="badge rounded-pill text-bg-danger">boss</span>
      }
      <div id="card-figure">
        <img src={img} className="card-img-top" alt={name} width={width}
             height={height}/>
      </div>
      <div className="card-body">
        <h5 className="card-title">{capitalize(name, " ")}</h5>
      </div>
    </div>
  }
}

export default Card;