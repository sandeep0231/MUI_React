import React,{Component} from "react";


const AreaOFRatings = (SUBCOMP) =>{

    class AreaOFRating extends Component {
        render(){
            return (
                <SUBCOMP hocsub="JAVASCRIPT"></SUBCOMP>
            )
        }
    }
    return AreaOFRating;
}

export default AreaOFRatings;
