<template>
  <div>
    <h1>Nuxt Home Page</h1>
    <button @click="logoutHandler">Logout</button>
    <Tutorial/>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  // auth: 'guest'
  methods: {
    logoutHandler() {
      this.$auth.logout();
      this.$router.push("/login");
    },
  }
}
</script>