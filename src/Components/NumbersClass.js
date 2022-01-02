import React from "react";
import {component} from "react";

class NumbersClass extends React.Component{
    constructor(){
        super();
        this.state = {
            number: 0,
        }
    }
    render(){
        return(
            <div className='wap'>
                <p>{this.state.number}</p>
                <button onClick={()=>this.setState({number:this.state.number+1})}>Press Class</button>
            </div>
        )
    }
}

export default NumbersClass;