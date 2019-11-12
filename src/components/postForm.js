import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { createPost } from '../actions/postActions';


class PostForm extends Component {
  constructor() {
    super();

    this.state = {
      title: '',
      body: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
     [e.target.name] : e.target.value
    });

  }


  onSubmit(e) {
    e.preventDefault();

    const post = {
      title: this.state.title,
      body: this.state.body
    }
    this.props.createPost(post);
  }

  render() {
    return(
        <div>
          <h1>Add Post</h1>
          <form onSubmit={this.onSubmit}>
            <div>
              <label>Title:</label>
              <br />
              <input 
                type="text"
                name="title"
                onChange = {this.handleChange}
                value={this.state.title} />
            </div>
            <div>
              <label>Body:</label>
              <br />
              <textarea 
                type="text"
                name="body"
                onChange = {this.handleChange}
                value={this.state.body}  />

            </div>
            <button type="submit">Submit</button>
          </form>

        </div>
    )
}
}

PostForm.propTypes = {
  createPost: PropTypes.func.isRequired
}

export default connect(null,{ createPost })(PostForm)