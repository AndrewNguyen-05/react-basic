import React from "react";
import { useState, useEffect } from "react";

class Countdown extends React.Component{

    state = {
        count: 5,
        title: 'class'
    }

    componentDidMount() {
        this.timer = setInterval(() => {
            this.setState({
                count: this.state.count - 1
            })
        }, 1000);
    }

    componentDidUpdate(prevProps, prevState){
        if(prevState.count !== this.state.count && this.state.count === 0){
            if(this.timer){
                clearInterval(this.timer);
                this.props.alertOnTime();
            }
        }
    }

    render() {
        return <div>{this.state.count} / {this.state.title}</div>;
    }
        
}

const NewCountDown = () => {
    const [count, setCount] = useState(5);
    const [title, setTitle] = useState('Hook');

    useEffect(() => {
        if(count === 0) return;

        let timer = setInterval(() => {
            setCount(count - 1);
        }, 1000);

        return () => {
            clearInterval(timer);
        }
    }, [count]);

    return (
        <div>{count} / {title}</div>
    )
}

export {Countdown, NewCountDown};
