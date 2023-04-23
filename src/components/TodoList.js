var m = require("mithril")
var Todo = require("../components/Todo")

module.exports = {
    oninit: Todo.loadList,
    view: function() {
        return m(".todo-list", Todo.list.map(function(todo) {
            return m(".todo-list-item", todo.title + " " + todo.completed)
        }))
    }
}