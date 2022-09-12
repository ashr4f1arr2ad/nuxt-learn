<template>
    <div>
        <FullCalendar :options="calendarOptions" ref="eventCalendar">
            <template v-slot:eventContent="arg">
                <span>{{arg.event.title}}</span>
            </template>
        </FullCalendar>
        <EventModal
            ref="create_event_modal"
            @eventCreated="addNewEvent"
        />
        <AfterEventModal ref="after_event_modal" />
        <!-- <ul>
            <li v-for="data in getTime">
                {{ data }}
            </li>
        </ul> -->
    </div>
</template>

<script>
import FullCalendar from "@fullcalendar/vue";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import interactionPlugin from "@fullcalendar/interaction";
import EventModal from "../components/modals/eventModal.vue";
import AfterEventModal from "../components/modals/afterEventModal.vue";
import { fetchData } from "@/api/calendar.js";
import moment from 'moment';

export default {
    name: "FullCalendars",
    components: {
        FullCalendar,
        EventModal,
        AfterEventModal
    },
    auth: 'guest',
    data() {
        return {
            calendarOptions: {
                // plugins: [ dayGridPlugin, interactionPlugin ],
                initialView: 'dayGridMonth',
                plugins: [dayGridPlugin, timeGridPlugin, listPlugin, interactionPlugin],
                headerToolbar: {
                    left: "prev,today,next",
                    center: "title",
                    right: "dayGridMonth,timeGridWeek,timeGridDay,listWeek",
                },
                selectable: true,
                // droppable: true,
                // editable: false,
                selectAllow: function (selectInfo) {
                    return moment() < moment(selectInfo.start).add("days", 1);
                },
                select: this.selectEvent,
                events: this.fetchEvents,
                eventClick: this.eventClickHandler,
            },
        }
    },
    methods: {
        async fetchEvents(info, successCallBack, failureCallBack) {
            await fetchData().then((response) => {
                successCallBack(
                    response.data.map((el) => {
                        return {
                            id: el.id,
                            title: el.title,
                            start: el.start,
                            end: el.end
                        }
                    })
                )
            }).catch((error) => {
                failureCallBack(error);
            })
        },
        addNewEvent(el) {
            const calendarApi = this.$refs.eventCalendar.getApi();
            // console.log(calendarApi);
            calendarApi.unselect();
            // console.log(calendarApi);
            calendarApi.addEvent({
                id: el.id,
                title: el.title,
                start: el.start,
                end: el.end
            })
        },
        eventClickHandler(info) {
            // console.log(info.event.id);
            // console.log(info.event.title);
            // this.$router.push(`/event/${info.event.id}`);
            const data = {
                id: info.event.id,
                title: info.event.title,
                start: moment(info.event.start).format("YYYY-MM-DD"),
                end: moment(info.event.end).format("YYYY-MM-DD")
            }
            this.$store.dispatch("calendar/getEventData", data);
            this.$refs.after_event_modal.showModal();
        },
        selectEvent(clickData) {
            console.log(clickData);
            // console.log(information.start);
            // console.log(information.end);
            // console.log(information.allDay);
            this.$refs.create_event_modal.setTime(
                clickData.start,
                clickData.end
            );
            this.$refs.create_event_modal.showModal();
            // console.log(this.$refs.create_event_modal);
        },
    },
    computed: {
        // getTime() {
        //     return this.$store.getters['calendar/getEvent'];
        // }
    },
    mounted() {
        this.$store.dispatch('calendar/getFetchData');
    }
}
</script>