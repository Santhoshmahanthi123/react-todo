import React from 'react';
//Todos is name of the component
const Todos = ({todos}) =>{

    //array which checks todos are there are not using ternary operator
    //to cycle through each todo we use map function coz its
    //an array

    //in react map function it expects unique key whenever we return in map function
    const todoList = todos.length ? (
        todos.map(todo => {
            return(
                <div className="collection-item" key={todo.id}>
                  <span>{todo.content}</span>  
                </div>
            )
        })
    ) : (
        <p className="center" blue-text>You have no todo's left</p>
    )
    return (
        <div className="todos collection">
            {todoList}
        </div>
    )
}

export default Todos;