import React, { Component } from 'react';

class Toggle extends Component{
    constructor(props) {
        super(props);
        this.state = {isToggleOn: false};
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }))
    }

    render() {
        return (
            <div>
                <button onClick ={this.handleClick}>
                    {this.state.isToggleOn? 'OFF': 'ON'}
                </button>
                {this.state.isToggleOn?
                <Description/> : <h4> Click the button </h4>
                }
            </div>
        )
    }

}

function Description(props){

    return (
            <h4> Daini's frontend webapp under development :) </h4>
        )
}

export default Toggle;