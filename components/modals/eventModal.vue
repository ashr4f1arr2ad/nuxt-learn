<template>
    <a-modal ref="modalForm" v-model:visible="visible" title="Basic Modal" @ok="handleOk">
        <input class="w-full h-12 border-solid border-slate-900 border-2 pl-4 text-base focus:outline-none" type="text" v-model="input">
    </a-modal>
</template>

<script>
import moment from "moment";
import {calendar} from "@/api/calendar.js";
export default {
    name: "EventModel",
    auth: "guest",
    data() {
        return {
            visible: false,
            input: '',
            startTime: '',
            endTime: ''
        }
    },
    methods: {
        showModal() {
            this.visible = true;
        },
        handleOk(e) {
            // console.log(e.target);
            // console.log(this.input);
            console.log(this.startTime);
            const data = {
                start: this.startTime,
                end: this.endTime,
                title: this.input
            }
            calendar(data).then((response) => {
                console.log(response.data);
                this.$toast.success('Event Added');
                this.$emit('eventCreated', response.data);
            }).catch((error) => {
                console.log(error);
            })
            // this.$store.dispatch("calendar/setEvent", data);
            this.input = '';
            this.visible = false;
            // this.$store.dispatch("calendar/getFetchData");
        },
        setTime(startTime, endTime) {
            this.startTime = moment(startTime).format("YYYY-MM-DD");
            this.endTime = moment(endTime).format("YYYY-MM-DD");
        },
    },
}
</script>