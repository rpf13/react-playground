import React from "react";

const FunctionalGreetingWithProps = (props) => {
    console.log(props);
    return <h1>Hello Prop, {props.greeting} {props.name} {props.age}</h1>;
}

export default FunctionalGreetingWithProps;