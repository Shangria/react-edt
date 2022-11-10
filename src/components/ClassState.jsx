import React from 'react';

class ClassState extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            likes: 0
        }
        this.clickIncrement = this.clickIncrement.bind(this);
        this.clickDecrement = this.clickDecrement.bind(this);

    }

    clickIncrement() {
        this.setState({likes: this.state.likes += 1})
    }

    clickDecrement() {
        this.setState({likes: this.state.likes -= 1})
    }

    render() {
        return (
            <>
                <div>{this.state.likes}</div>

                <button onClick={this.clickIncrement}>Increment</button>
                <button onClick={this.clickDecrement}>Decrement</button>
            </>

        )
    }
}

export default ClassState

