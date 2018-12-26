"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Component = function (_React$Component) {
  _inherits(Component, _React$Component);

  function Component(props) {
    _classCallCheck(this, Component);

    var _this = _possibleConstructorReturn(this, (Component.__proto__ || Object.getPrototypeOf(Component)).call(this, props));

    _this.state = {
      todos: [],
      newTodoText: ""
    };

    _this.handleTodoChange = _this.handleTodoChange.bind(_this);
    _this.handleFormSubmit = _this.handleFormSubmit.bind(_this);
    _this.handleDeleteTodo = _this.handleDeleteTodo.bind(_this);
    return _this;
  }

  _createClass(Component, [{
    key: "handleTodoChange",
    value: function handleTodoChange(e) {
      this.setState({ newTodoText: e.target.value });
    }
  }, {
    key: "handleFormSubmit",
    value: function handleFormSubmit(e) {
      e.preventDefault();
      var allAndNewTodo = this.state.todos.concat({ text: e.target[0].value });
      e.target[0].value = "";
      this.setState({ todos: allAndNewTodo });
    }
  }, {
    key: "handleDeleteTodo",
    value: function handleDeleteTodo(e) {
      var todoToDelete = e.target.value;
      this.setState(function (prevState) {
        return {
          todos: prevState.todos.filter(function (todo) {
            return todo.text != todoToDelete;
          })
        };
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _state = this.state,
          newTodoText = _state.newTodoText,
          todos = _state.todos;

      return React.createElement(
        "div",
        null,
        React.createElement("style", null),
        React.createElement(
          "h1",
          null,
          "Todo List"
        ),
        React.createElement(
          "h2",
          null,
          newTodoText
        ),
        React.createElement(
          "h2",
          null,
          todos.length
        ),
        React.createElement(
          "form",
          { onSubmit: this.handleFormSubmit },
          React.createElement("input", { id: "item", onChange: this.handleTodoChange }),
          React.createElement("input", { type: "submit" })
        ),
        React.createElement(
          "ol",
          null,
          todos.length ? todos.map(function (todo) {
            return React.createElement(
              "li",
              { key: todo.text },
              todo.text,
              React.createElement(
                "button",
                { className: "ui button", value: todo.text, onClick: _this2.handleDeleteTodo },
                "delete"
              )
            );
          }) : true
        )
      );
    }
  }]);

  return Component;
}(React.Component);

ReactDOM.render(React.createElement(Component, null), document.getElementById("app"));
