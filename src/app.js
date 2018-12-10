class Component extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [
        {
          text: "teste "
        }
      ]
    };

    this.handleTodoChange = this.handleTodoChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleTodoChange(e) {
    this.setState({ todos: [{ text: e.target.value }] });
  }

  handleFormSubmit(e) {
    e.preventDefault();
    console.log(e.target.input.value);

    const prevTodos = this.state.todos;

    this.setState({
      todos: prevTodos.push({
        text: e.target.input.value
      })
    });
  }

  render() {
    return (
      <div>
        <h1>Todo List</h1>
        <form onSubmit={this.handleFormSubmit}>
          <input id="item" onChange={this.handleTodoChange} />
          <input type="submit" />
        </form>
        <ol>
          {this.state.todos.map(function(todo) {
            return <li key={todo.text}>{todo.text}</li>;
          })}
        </ol>
      </div>
    );
  }
}

var appCore = document.getElementById("app");
ReactDOM.render(<Component />, appCore);
