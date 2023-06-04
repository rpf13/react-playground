import React, { Component } from 'react'
import axios from 'axios'

export class HTTPRequests extends Component {
    constructor(props) {
      super(props)
        
    // we set initial post state to empy array and
    // initial error state to null
      this.state = {
         posts: [],
         error: null
      }
    }
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            console.log(response);
            this.setState({
                // We check if the response is an array, because if we would fetch only
                // one item, not an array will returned, just the object itself
                // can be tested with: https://jsonplaceholder.typicode.com/posts/1
                // then we use the tenery condition to set proper state depending on array
                // and if it is just an object, we put it into an array
                posts: Array.isArray(response.data)
                ? response.data
                : [response.data]
            })
        })
        // In order to handle errors, the .catch method is used, we pass a function,
        // which expects an error object
        .catch(error => {
            this.setState({
                error: error.message
            })
        })
    }
  render() {
    const posts = this.state.posts;
    return (
      <div>
        <h2>Posts:</h2>
        {
            posts.length ? (
                posts.map(post => (
                    <div key={post.id}>
                        <h2>{post.id}. {post.title}</h2>
                        <h4>By User ID {post.userId}</h4>
                        <p>{post.body}</p>
                        <hr />
                    </div>
                ))
            ) : (
                // we check if the api call returns an error and if so, display it
                this.state.error
                ? <p>{this.state.error}</p>
                : <h4>Loading posts ...</h4>
            )
        }
      </div>
    )
  }
}

export default HTTPRequests