import React, { Component } from 'react'
import axios from 'axios'

export class HTTPPost extends Component {
    constructor(props) {
      super(props)
    
    // Initiate the api response to null
      this.state = {
         apiResponse: null
      }
    }
    postToApi = () => {
        axios.post(
            'https://jsonplaceholder.typicode.com/posts',
            {
                title: "Hello World!",
                body: "It works!",
                userId: 123,
            }
        // if the post response was successful, we set the state to the response
        ).then(response => {
            this.setState({
                apiResponse: response.data
            })
        })
    }
  render() {
    // we include the api response / state in the rendor method as a const in
    // order to reference to it
    const {apiResponse} = this.state;
    return (
      <div>
        <button onClick={this.postToApi}>
            Create Post
        </button>
        {
            // we render the api response - if it was successfuly or truthy 
            apiResponse
            ? (<div>
                <h1>{apiResponse.title}</h1>
                <p>post id: {apiResponse.id}</p>
                <p>{apiResponse.body}</p>
                <p>user id: {apiResponse.id}</p>
            </div>)
            // if it was not successful or untruthy, we do
            : (<p>please click the button above</p>)
        }
      </div>
    )
  }
}

export default HTTPPost