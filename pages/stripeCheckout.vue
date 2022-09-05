<template>
  <div>
    <stripe-element-card
      ref="elementRef"
      :pk="publishableKey"
      @token="tokenCreated"
    />
    <button @click="submit">Generate token</button>
  </div>
</template>
  
<script>
  export default {
    auth: 'guest',
    data () {
      return {
        token: null,
        publishableKey: this.$config.STRIPE_PUBLIC_KEY
      };
    },
    methods: {
      submit () {
        // this will trigger the process
        this.$refs.elementRef.submit();
      },
      async tokenCreated(token) {
        // console.log(token.id);
        console.log(token);
        // handle the token
        // send it to your server
      },
    }
  };
</script>