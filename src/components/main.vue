<template>
    <div id="app">
      <div class="newTask">
        <input type="text">
      </div>
      <ol class="todos">
      </ol>
    </div>
</template>

<script>
import Vue from 'vue'
    var app = new Vue({
  el: '#app',
  data: {
    newTodo: '',
    todoList: []
  }
}) 
</script>
