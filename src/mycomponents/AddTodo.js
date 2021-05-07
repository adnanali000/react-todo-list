import React, {useState} from 'react'; 

export const AddTodo = (props) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    
    const submit = (e)=>{
        e.preventDefault();
        if(!title || !desc){
            alert("title or description cannot be blank")
        }
        else{
        props.addTodo(title,desc)
        setTitle("");
        setDesc("");
      }
        
            
    }
  return (
    <div className="container my-3">
        <h3>Add Todo</h3>
      <form onSubmit={submit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Todo Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={title}
            onChange={(e)=>setTitle(e.target.value)}
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Todo Description
          </label>
          <input
            type="text"
            className="form-control"
            id="description"
            onChange={(e)=>setDesc(e.target.value)}
            value={desc}
          />
        </div>
       
        <button type="submit" className="btn btn-sm btn-success">
          Add Todo
        </button>
      </form>
    </div>
  );
};
