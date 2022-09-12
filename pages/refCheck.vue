<template>
    <div>
        <h2 v-on:click="getRefs">Check</h2>
        <!-- Ref use to select whole html like ul to ul last tag -->
        <ul>
            <li v-for="item in data" ref="l">
                {{ item }}
            </li>
        </ul>
        <p ref="p">Hello</p>
        <input ref="input">
        <!-- or single p -->
    </div>
</template>

<script>
export default {
    name: "RefCheck",
    auth: "guest",
    data() {
        return {
            data: [1, 2, 3]
        }
    },
    methods: {
        getRefs() {
            console.log(this.$refs.c);
            console.log(this.$refs.p);
        },
    },
    mounted() {
        console.log(this.$refs.l);
        this.$refs.input.focus();
    }
}
</script>