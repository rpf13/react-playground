import React from "react";

class StatefulGreetingWithCallback extends React.Component {

    // The constructor is a special method, always called first
    // when the class is called.

    constructor(props) {
        super(props);
        this.state = {
            // Below is the initial state object
            introduction: "Hello!",
            buttonText: "Exit",
            count: 0
        };
    }

    handleClick() {
        this.setState((prevState, prevProps) => {
          console.log("Previous State:", prevState);
          console.log("Previous Props:", prevProps);
          return {
            // add ternary operator to change state to goodbye if it was hello, else back to hello
            // when button is clicked. The same concept for the button text.
            introduction:
              prevState.introduction === "Hello!" ? "Goodbye!" : "Hello!",
            buttonText: prevState.buttonText === "Exit" ? "Enter" : "Exit",
          };
        });
    }

    increment() {
        this.setState((prevState, prevProps) => {
          console.log("Previous State:", prevState);
          console.log("Previous Props:", prevProps);
          return {
            count: prevState.count + 1,
          };
        });
    }

    incrementFive() {
        this.increment();
        this.increment();
        this.increment();
        this.increment();
        this.increment();
    }

    render() {
        return (
            <div>
                <h1>{this.state.introduction} {this.props.greeting}</h1>
                {/* adding the on click attribute to the button via arrow function, 
                to call the handleClick method */}
                <button onClick={() => this.handleClick()}>{this.state.buttonText}</button>
                <button onClick={() => this.increment()}>Increment</button>
            <p>You've clicked {this.state.count} times</p>
            </div>
        )
    }
}

export default StatefulGreetingWithCallback;