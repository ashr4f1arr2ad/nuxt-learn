<template>
    <details-popup ref="editPopup">
      <template v-slot:handle>
        <span>Edit Header</span>
      </template>
      <template v-slot:content>
        <span>Edit Content</span>
      </template>
    </details-popup>
  </template>
  <script>
  import DetailsPopup from "@/components/DetailsPopup";
  export default {
    name: "TaskListEdit",
    auth: 'guest',
    components: { DetailsPopup }
  };
  </script>
  
  