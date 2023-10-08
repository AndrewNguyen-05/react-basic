import React from 'react';
import { useState, useEffect } from 'react';

class ClassCountDown extends React.Component {
    state = {
        count: 10
    }
    componentWillUnmount() {
        if (this.timer) {
            clearInterval(this.timer);
        }
    }

    componentDidMount() {
        this.timer = setInterval(() => {
            this.setState({
                count: this.state.count - 1
            });
        }, 1000);
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.timer !== this.state.count && this.state.count === 0) {
            clearInterval(this.timer);
            // this.props.alertOnTime();
        }
    }

    render() {
        return (
            <div>{this.state.count} / Class</div>
        )
    }
}

const HookCountDown = (props) => {
    const [count, setCount] = useState(10);
    useEffect(() => {
        if (count === 0) {
            props.alertOnTime();
            return;
        }
        let timer = setInterval(() => {
            setCount(count - 1);
        }, 1000);

        return () => {
            clearInterval(timer);
        }
    }, [count])
    return (
        <div>{count} / Hooks</div>
    )
}

export { ClassCountDown, HookCountDown };