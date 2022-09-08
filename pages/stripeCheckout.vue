<template>
  <div>
    <stripe-element-card
      ref="elementRef"
      :pk="publishableKey"
      @token="createToken"
    />
    <div @click="requestToken" class="mt-7">
      <button>Generate token</button>
    </div>
    <div>
      <ul v-for="cardItem in data">
        <li>{{ cardItem.stripe_token.customer }}</li>
        <li>{{ cardItem.stripe_token.payment_method_details.card.last4 }}</li>
        <li>{{ cardItem.stripe_token.payment_method_details.card.exp_month }}</li>
        <li>{{ cardItem.stripe_token.payment_method_details.card.exp_year }}</li>
      </ul>
    </div>
  </div>
</template>
  
<script>
  import { addCard } from '../api/billing.js';
  import { getCard } from '../api/billing.js';

  export default {
    auth: 'guest',
    data () {
      return {
        token: null,
        publishableKey: this.$config.stripe.STRIPE_PUBLIC_KEY,
        data: []
      };
    },
    methods: {
      async createToken(token) {
        // console.log(token.id);
        console.log(token);
        await addCard({
            stripe_token: token.id,
        }).then((response) => {
          console.log(response)
        }),
        (errors) => {
          console.log(errors);
        }
        // handle the token
        // send it to your server
      },
      requestToken() {
        // this will trigger the process
        this.$refs.elementRef.submit();
      },
      async getCardItem() {
        await getCard().then((response) => {
          console.log(response.data);
          this.data = response.data;
        })
      }
    },
    mounted() {
      this.getCardItem();
    }
  };
</script>