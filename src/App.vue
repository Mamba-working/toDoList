<template>
    <div id="app">
      <div class="newTask">
        <input type="text" v-model="newTodo" @keypress.enter="addTo">
      </div>
      <ol class="todos">
        <li v-for="item in todoList">
  <input type="checkbox" v-model="item.done">
             {{item.title}}
             <button @click="removeTodo(item)">X</button>
          <span v-if="item.done">已完成</span>
          <span v-else>未完成</span>
          <!-- <span>{{`${item.created.getFullYear()}年${item.created.getMonth()}月${item.created.getDate()}日`}}</span> -->
        </li>
      </ol>
    </div>
</template>

<script>
import Vue from 'vue'
export default{
  data(){
    return {
    newTodo: '',
    todoList: []
    }
  },
    created: function(){
    // onbeforeunload文档：https://developer.mozilla.org/zh-CN/docs/Web/API/Window/onbeforeunload
    window.onbeforeunload = ()=>{
      let newTodo = JSON.stringify(this.newTodo)
      let dataString = JSON.stringify(this.todoList) // JSON 文档: https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/JSON
      window.localStorage.setItem('myTodos', dataString) // 看文档https://developer.mozilla.org/zh-CN/docs/Web/API/Window/localStorage
      window.localStorage.setItem("newTodo",newTodo)
    }

    let oldDataString = window.localStorage.getItem('myTodos')
    let oldNewTodo = window.localStorage.getItem('newTodo')
    let oldData = JSON.parse(oldDataString)
    let newData = JSON.parse(oldNewTodo)
    this.todoList = oldData || []
    this.newTodo = newData || ''
  },
  methods:{
   addTo(){
     this.todoList.push({
       title:this.newTodo,
       created:new Date(),
       done: false
     })
     this.newTodo = '';
   },
   removeTodo(todo){
     let index = this.todoList.indexOf(todo) 
      this.todoList.splice(index,1) 
   }
  }
}

</script>
<style>

</style>
