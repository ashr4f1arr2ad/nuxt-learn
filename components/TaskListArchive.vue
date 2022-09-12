<template>
    <!-- But we are using component name like details-popup -->
    <details-popup>
      <template v-slot:handle>
        <span class="btn btn-sm btn-danger">Archive Popup</span>
      </template>
      <template v-slot:content>
        <h4>Do you want to archive list?</h4>
        <button class="btn btn-sm btn-dark">Archive it</button>
      </template>
    </details-popup>
  </template>
  <script>
  import DetailsPopup from "@/components/DetailsPopup";
  export default {
    name: "TaskListArchive",
    //Here we have component name is DetailsPopup
    components: { DetailsPopup },
    auth: 'guest',
  };
  </script>
  
  