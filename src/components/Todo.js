var m = require("mithril")

var Todo = {
    list: [],
    loadList: function() {
        return m.request({
            method: "GET",
            url: "https://jsonplaceholder.typicode.com/todos",
            withCredentials: true,
        })
        .then(function(result) {
            console.log(result)
            Todo.list = result
        })
    },
}

module.exports = Todo