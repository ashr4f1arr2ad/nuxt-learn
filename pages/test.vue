<template>
    <div>
        <h2>Test Page</h2>
        <h3>Test Page For Vuex {{ getCount }}</h3>
        <button @click="increment">Count</button>
        <ul v-for="user in getUsers" :key="user.id">
            <li>{{ user.id }}</li>
            <li>{{ user.name }}</li>
            <li>{{ user.username }}</li>
            <li>{{ user.address.street }}</li>
        </ul>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';

    export default {
        name: "Test",
        auth: 'guest',
        methods: {
            increment() {
                this.$store.dispatch('counter/counter');
                // this.$store.dispatch('counter/counter', payload);
            }
        },
        computed: {
            //Every way the first name counter is folder name and the second one is getters method name

            // ...mapGetters('counter', ['getCounter', 'getUsers']) //this is also a way of take the getter from vuex
            getCount() {
                return this.$store.getters['counter/getCounter']
            },
            getUsers() {
                return this.$store.getters['counter/getUsers'];
            }
        },
        mounted() {
            this.$store.dispatch('counter/fetchUser');
            //this the way of dispatch axios get in vue form vuex actions
        }
    }
</script>