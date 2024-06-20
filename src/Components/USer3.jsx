import React from "react";

class User3 extends React.Component {
    state={
        rating:0
    }
    RatingInc= () =>{
        this.setState({rating:this.state.rating+1});
    }
    render() {
        return (
            <div>
                <h2 onMouseOver={this.RatingInc}>User3 Rank: {this.state.rating}</h2>
            </div>
        );
    }
}

export default User3;