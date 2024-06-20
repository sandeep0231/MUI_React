import React from "react";
import AreaOFRatings from "./HOC";
class User2 extends React.Component {
    state={
        rating:0
    }

    RatingInc = ()=>{
        this.setState({rating:this.state.rating+1})
    }
    render() {

        return (
            <div>
                <h2 onMouseOver={this.RatingInc}>User2 Rank: {this.state.rating}, {this.props.hocsub}</h2>
            </div>
        )
    }
}
export default AreaOFRatings(User2);
