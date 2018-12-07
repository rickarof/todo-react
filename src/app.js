class Component extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [
        {
          title: "teste"
        },
        {
          title: "teste 2"
        }
      ]
    };
  }

  handleTodo() {
    return false;
  }

  render() {
    return (
      <div>
        <h1>Todo List</h1>
        <form>
          <input id="item" />
          <input type="submit" />
        </form>
        <ol>
          {console.log(this.state)}
          {this.state.todos.map(function(todo) {
            return <li>{todo.title}</li>;
          })}
        </ol>
      </div>
    );
  }
}

var appCore = document.getElementById("app");
ReactDOM.render(<Component />, appCore);
