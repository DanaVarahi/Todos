import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () =>{

    new Vue({
        el: "#app",
        data: {
            todos: [
                {name: "dishes", highPriority: false},
                {name: "cooking", highPriority: true},
                {name:"walking", highPriority: false}  
            ],
            newTodo: "",
            priority: ""
        },
        methods: {
            saveNewTodo: function(){
                this.todos.push({
                    name:this.newTodo,
                    highPriority: this.priority == "high" 
                })
                this.newTodo = ""
            }
        
        }

    });
});