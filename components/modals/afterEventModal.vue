<template>
    <a-modal ref="modalForm" v-model:visible="visible" title="After Click Event Modal" @ok="handlerOk">
        <h2>Getting On Click An Event</h2>
        <ul>
            <li>{{ getEventData.title }}</li>
            <li>{{ getEventData.start }}</li>
        </ul>
    </a-modal>
</template>

<script>
export default {
    name: "AfterEventModel",
    auth: "guest",
    data() {
        return {
            visible: false,
        }
    },
    methods: {
        showModal() {
            this.visible = true;
        },
        handlerOk() {
            this.visible = false;
        }
    },
    computed: {
        getEventData() {
            return this.$store.getters['calendar/getEventData'];
        }
    }
}
</script>