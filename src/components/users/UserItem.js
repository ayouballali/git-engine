import axios from "axios";

import React, { Component } from "react";

export default class UserItem extends Component {
  
    state = {
        user:{}
    }
  
    componentDidMount() { 

    const { login } = this.props.postId;

   
    axios
      .get(`https://api.github.com/users/${login}`)
      .then((response) => {
        this.setUser({
            user:response.data
        });
      });
  }

  render() {
    return <div>UserItem</div>;
  }
}
