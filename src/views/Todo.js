
const Todo = (props) => {
    //Properties
    const {todos, title, deleteDataTodo} = props;
    const handleDelete = (id) =>{
      deleteDataTodo(id);
    }
    return (
        <div className="todo-container">
        <div>
            {title}
        </div>
          {todos.map((todo) => {
            console.log(">>>>>check todo", todo.title);
            return (
              <div key={todo.id}> 
                <li className="todo-child" onClick={() => {handleDelete(todo.id)}}>{todo.title}
                &nbsp; &nbsp;<span>x</span>
              </li> 
              </div>
              
            )
          })}
          <hr/>
        </div>
    )
}

export default Todo;