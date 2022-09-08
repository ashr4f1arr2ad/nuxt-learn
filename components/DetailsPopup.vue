<template>
    <details>
      <summary class="handle">
        <slot name="handle">Put your handle here</slot>
      </summary>
      <div class="content">
        <slot name="content">Put your contents here</slot>
      </div>
    </details>
  </template>
  <script>
  export default {
    name: "DetailsPopup",
    auth: 'guest',
  };
  </script>
  </style>
  
  
  