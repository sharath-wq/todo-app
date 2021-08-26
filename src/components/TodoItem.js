import React from 'react'

function TodoItem(props) {
    const updatedStyle = {
        color : "red",
        textDecoration : "line-through",
        fontStyle : "italic"
    }
    return (
        <div className = "todo-item" >
            <input type = 'checkbox' onChange = {() => props.handleChange(props.item.id)} checked = {props.item.completed} />
            <p style = {props.item.completed ? updatedStyle : null} >{props.item.text}</p>
        </div>
    )
}

export default TodoItem