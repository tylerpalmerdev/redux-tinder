import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {
  renderList() {
    return this.props.books.map(book => {
      return (
        <li onClick={() => this.props.selectBook(book)} key={book.title} className="list-group-item">{book.title}</li>
      )
    })
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  }
}

// take application state as argument
function mapStateToProps(state) {
  // whatever is returned will show up as props inside of BookList
  return {
    books: state.books
  }
  // ^ this object becomes props in component
  // whenever application state changes, container will instan
}


// takes whatever is returned from selectBook and makes sure it flows through
// all reducers
// anything returned from this will end up as props on BookList container
function mapDispatchToProps(dispatch) {
  // whenever selectbook is called, the result should be passed to all reducers
  // "dispatching"
  // makes selectBook availble on props as a dispatching function
  return bindActionCreators({selectBook: selectBook}, dispatch); // this is redux function
  // whnever selectBook gets called, result should flow through dispatch function
  // dispatch function spits out action results to all reducers
}

// connect() method produces a container from a function and a component
// Promote booklist from component to container; export continer not plain component
// needs to know about new dispatch method, selectbook
// Make available as prop
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
