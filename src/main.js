import Vue from 'vue'
import App from './App'

var app = new Vue({
    el: '#app',
    data: {
      newTodo: '',
      todoList: []
    },
    components: { App },
    template: '<App/>'
  })  