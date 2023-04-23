var m = require("mithril")
root = document.body

var TodoList = require("./components/TodoList")

function MainComponent() {
    return {
    view: function() {
        return m(".app", [
        m(TodoList())
        ])
    }}
}

m.mount(root, MainComponent)