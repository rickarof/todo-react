class Component extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [],
      newTodoText: ""
    };

    this.handleTodoChange = this.handleTodoChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleTodoChange(e) {
    this.setState({ newTodoText: e.target.value });
  }

  handleFormSubmit(e) {
    e.preventDefault();
    console.log(e.target[0].value);

    const newTodo = this.state.todos.concat({ text: e.target[0].value });

    this.setState({ todos: newTodo });
  }

  render() {
    const { newTodoText, todos } = this.state;

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
            ? todos.map(function(todo) {
                return <li key={todo.text}>{todo.text}</li>;
              })
            : true}
        </ol>
      </div>
    );
  }
}

ReactDOM.render(<Component />, document.getElementById("app"));
