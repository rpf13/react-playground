import React from "react";

class StatefulGreeting extends React.Component {

    // The constructor is a special method, always called first
    // when the class is called.

    constructor(props) {
        super(props);
        this.state = {
            // Below is the initial state object
            introduction: "Hello",
            buttonText: "Exit",
        };
    }

    handleClick() {
        // we must use the built in react state class
        this.setState({
            introduction: "Goodbye!",
            buttonText: "Enter"
        });
    }

    render() {
        return (
            <div>
                <h1>{this.state.introduction} {this.props.greeting} {this.props.name}</h1>
                {/* adding the on click attribute to the button via arrow function, 
                to call the handleClick method */}
                <button onClick={() => this.handleClick()}>{this.state.buttonText}</button>
            </div>
        )
    }
}

export default StatefulGreeting;