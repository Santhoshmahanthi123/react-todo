import React, { Component } from 'react';
import Todos from './Todos';
import AddTodo from './AddTodo';
class App extends Component {
   state = {
     todos: [
       {id : 1, content : 'buy some milk!'},
       {id : 2, content : 'play pubg game!'},

       
      ]
   }
   deleteTodo = (id) =>{
    //  console.log(id);
    //filter method gives new array
    const todos = this.state.todos.filter(todo =>{
      return todo.id !== id;
    });
    this.setState({
      //if both key and value names are same give it only once which is shorter way
      todos
      // todos : todos
    })
   }
   addTodo = (todo) =>{
    todo.id = Math.random();
    let todos = [...this.state.todos,todo];
    this.setState({
     todos 
    })
   }
  render() {
    return (
      <div className="todo-app container">
       <h1 className="center green-text">Welcome to Todo list</h1>
       <h2 className="center blue-text">ToDo's</h2>
       <p className="todo center red-text">If you want to delete ToDo please click on it!</p>
       <Todos  todos={this.state.todos} deleteTodo={this.deleteTodo}/>
       <AddTodo addTodo={this.addTodo} />
      </div>
    );
  }
}

export default App;
