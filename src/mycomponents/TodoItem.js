import React from 'react'

export const TodoItem = ({todo,onDelete}) => {
    return (
        <>
        <div>

            <h4>{todo.title}</h4>
            <p>{todo.desc} 
            <button className="btn btn-sm btn-danger mx-3" onClick={()=>{onDelete(todo)}}>Delete</button>
            </p>
            <hr/>
        </div>
        </>
    )
}
