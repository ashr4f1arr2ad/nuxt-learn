<template>
    <div>
        <h2 v-if="user">Text Page 1</h2>
        <h2>Text Page 2</h2>
        <h2>Text Page 3</h2>
        <h2>Text Page 4</h2>
        <h2>Text Page 5</h2>
    </div>
</template>

<script>
    export default {
        name: "TextPage",
        auth: 'guest',
        computed: {
            user() {
                return this.$store.state.auth.user
            }
        }
    }
</script>