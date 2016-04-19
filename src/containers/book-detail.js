import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {
  render() {
    if (!this.props.activeBook) {
      return (
        <div>Click on a book to start.</div>
      )
    } else {
      return (
        <div>{this.props.activeBook.title}</div>
      )
    }
  }
}

// make activeBook available in component props
function mapStateToProps(state) {
  return {
    activeBook: state.activeBook
  }
}

// connection of component to application state (upgrade to container)
export default connect(mapStateToProps)(BookDetail);
