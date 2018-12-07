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
      todos: [{
        title: "teste"
      }, {
        title: "teste 2"
      }]
    };
    return _this;
  }

  _createClass(Component, [{
    key: "handleTodo",
    value: function handleTodo() {
      return false;
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "h1",
          null,
          "Todo List"
        ),
        React.createElement(
          "form",
          null,
          React.createElement("input", { id: "item" }),
          React.createElement("input", { type: "submit" })
        ),
        React.createElement(
          "ol",
          null,
          console.log(this.state),
          this.state.todos.map(function (todo) {
            return React.createElement(
              "li",
              null,
              todo.title
            );
          })
        )
      );
    }
  }]);

  return Component;
}(React.Component);

var appRoot = document.getElementById("app");
ReactDOM.render(React.createElement(Component, null), appRoot);
