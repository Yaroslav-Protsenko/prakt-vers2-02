import React from "react";

export class Counter extends React.Component {

    static defaultProps = {
        min: 0,
        max: 10,
        value: 0
    };

    constructor(props) {
        super(props);
        this.state = {
            value: props.value
        }

    }

    increment() {
        this.setState(
            (state, props) => {
                if (state.value < props.max)
                    return {
                        value: state.value + 1
                    };
            }
        )
    }

    decrement() {
        this.setState(
            (state, props) => {
                if (state.value > props.min)
                    return {
                        value: state.value - 1
                    }
            }
        )
    }

    render() {

        return (
            <>
                <div>
                    Counter:{this.state.value}
                </div>
                <div>
                    <button onClick={this.decrement.bind(this)}>-</button>
                    <button onClick={this.increment.bind(this)}>+</button>

                </div>
            </>
        );
    }
}