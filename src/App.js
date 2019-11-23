import React, { Component } from "react";
import BookList from "./components/bookList";
import AddBook from "./components/addBook";

class App extends Component {
  render() {
    return (
      <div id="main">
        <h1>Reading List</h1>
        <BookList />
        <AddBook />
      </div>
    );
  }
}

export default App;
