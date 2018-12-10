class Component extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [],
      newTodoText: ""
    };

    this.handleTodoChange = this.handleTodoChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleDeleteTodo = this.handleDeleteTodo.bind(this);
  }

  handleTodoChange(e) {
    this.setState({ newTodoText: e.target.value });
  }

  handleFormSubmit(e) {
    e.preventDefault();
    console.log(e.target[0].value);

    const allAndNewTodo = this.state.todos.concat({ text: e.target[0].value });

    this.setState({ todos: allAndNewTodo });
  }

  handleDeleteTodo(e) {
    const todoToDelete = e.target.value;
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.text != todoToDelete)
    }));
  }

  render() {
    const { newTodoText, todos } = this.state;
    console.log("render");
    return (
      <div>
        <h1>Todo List</h1>
        <h2>{newTodoText}</h2>
        <form onSubmit={this.handleFormSubmit}>
          <input id="item" onChange={this.handleTodoChange} />
          <input type="submit" />
        </form>
        <ol>
          {todos.length
            ? todos.map(todo => {
                return (
                  <li key={todo.text}>
                    {todo.text}
                    <button value={todo.text} onClick={this.handleDeleteTodo}>
                      delete
                    </button>
                  </li>
                );
              })
            : true}
        </ol>
      </div>
    );
  }
}

ReactDOM.render(<Component />, document.getElementById("app"));
