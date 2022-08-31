<template>
    <a-form
    :model="formState"
    name="basic"
    autocomplete="off"
    class="w-1/2"
    @submit.prevent="userLogin"
  >
    <a-form-item
      label="Username"
      name="email"
      :rules="[{ required: true, message: 'Please input your username!' }]"
    >
      <a-input v-model:value="formState.email" type="email" />
    </a-form-item>

    <a-form-item
      label="Password"
      name="password"
      :rules="[{ required: true, message: 'Please input your password!' }]"
    >
      <a-input-password v-model:value="formState.password" />
    </a-form-item>

    <a-form-item :wrapper-col="{ offset: 8, span: 16 }">
      <a-button type="primary" html-type="submit">Submit</a-button>
    </a-form-item>
  </a-form>
</template>

<script>
    export default {
        name: "Login",
        data() {
            return {
                formState: {
                    email: '',
                    password: ''
                },
                // data: [],
                auth: 'guest'
            }
        },
        methods: {
            async userLogin() {
                try {
                    await this.$auth.loginWith('local', { data: this.formState });
                    // this.$router.push('/');
                    await this.$router.push('/');
                } catch (err) {
                    console.log(err)
                }
            },
            // async getData() {
            //     let res = await fetch("https://jsonplaceholder.typicode.com/users");
            //     let data = await res.json();
            //     this.data = data;
            //     console.log(data);
            // }
        },
        // mounted() {
        //     this.getData();
        // }
    }
</script>