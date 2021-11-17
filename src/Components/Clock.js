import React from 'react';

class Clock extends React.Component{
    constructor(props) {
        super(props);
        this.state = {date: new Date()}
    }

    setIntervalComponent(){
        this.timeID = setInterval(
            ()=> this.tick(),
            1000
        );
    }

    tick(){
        this.setState({
            date:new Date()
        });
    }

    render() {
        return (
            <div>
                <h3> Now is {this.state.date.toLocaleTimeString()}</h3>
            </div>
        )
    }
}

export default Clock;

