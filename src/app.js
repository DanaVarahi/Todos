import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () =>{

    new Vue({
        el: "#app",
        data: {
            todos: [
                {name: "dishes", priority: 'low'},
                {name: "cooking", priority: 'high'},
                {name:"walking", priority: 'low' }  
            ],
            newTodo: ""
        },
        methods: {
            saveNewTodo: function(){
                this.todos.push({
                    name:this.newTodo,
                    priority: ""
                })
                this.newTodo = ""
            }
        
        }

    });
});