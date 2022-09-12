<template>
    <div class="container" ref="c">
      <!-- Slot works like a props -->
      <div id="app">
        <div class="row">
          <div class="col">
            <h4 class="text-center">Using Vue.js Slots</h4>
            <p>
              This code sample shows how to use slots in vue.js and use html details tag to show popup. In addition, the reusable component also emits
              <mark>popup-toggled</mark> custom event which can be handled by parent component.
            </p>
            <div class="d-flex flex-row justify-content-center">
              <TaskListArchive class="mx-2 my-2" :list="list"/>
              <TaskListEdit class="my-2" :list="list"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import TaskListArchive from "@/components/TaskListArchive";
  import TaskListEdit from "@/components/TaskListEdit";

  export default {
    name: "SlotCheck",
    auth: 'guest',
    components: {
      TaskListArchive,
      TaskListEdit
    },
    data() {
      return {
        list: {
          id: 1,
          name: "Todo",
          archived: false
        },
      };
    },
  };
  </script>
  
  <style>
  #app {
    color: #2c3e50;
    margin-top: 30px;
    height: 80vh;
  }
  
  mark {
    border-radius: 5px;
    padding: 0.25rem;
    background-color: #ddd;
  }
  </style>
  