<template>
    <v-calendar
      v-model="selectedDate"
      :events="events"
      color="primary"
      :event-color="getEventColor"
      :min-date="minDate"
      :max-date="maxDate"
      :weekdays="weekdays"
      class="rt-calendar"
      ref="calendar"
    />
  </template>
  
  <script>
  import { VCalendar } from 'vuetify/lib/labs/components.mjs';

  export default {
    name: 'RtCalendar',
    components: {
      VCalendar, // Explicitly register the component
    },
    data() {
      return {
        selectedDate: null,
        events: [
          { name: 'Meeting', start: '2024-12-15T10:00:00', end: '2024-12-15T12:00:00' },
          { name: 'Conference', start: '2024-12-16T14:00:00', end: '2024-12-16T16:00:00' },
        ],
        minDate: '2024-12-01',
        maxDate: '2024-12-31',
        weekdays: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
      };
    },
    methods: {
      getEventColor(event) {
        return event.name === 'Meeting' ? 'green' : 'blue';
      },
    },
  };
  </script>
  
  <style scoped>
  .rt-calendar {
    max-width: 100%;
    margin: auto;
  }
  </style>
  