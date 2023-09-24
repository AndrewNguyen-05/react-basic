
const Todo = (props) => {
    //Properties
    const todos = props.todos;
    return (
        <div className="todo-container">
        <div>
            {props.title}
        </div>
          {todos.map((todo) => {
            console.log(">>>>>check todo", todo.title);
            return (
              <li className="todo-child" key={todo.id}>{todo.title}</li>
            )
          })}
          <hr/>
        </div>
    )
}

export default Todo;