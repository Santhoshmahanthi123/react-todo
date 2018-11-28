import React, { Component } from 'react';
import Todos from './Todos';
class App extends Component {
   state = {
     todos: [
       {id : 1, content : 'buy some milk!'},
       {id : 2, content : 'play pubg game!'},

       
      ]
   }
   
  render() {
    return (
      <div className="App">
       <h1>Welcome to Todo list</h1>
       <h2 className="center blue-text">ToDo's</h2>
       <Todos  todos={this.state.todos}/>
      </div>
    );
  }
}

export default App;
