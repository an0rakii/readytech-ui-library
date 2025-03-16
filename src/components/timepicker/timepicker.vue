<template>
    <vue3-timepicker v-model="time" :min="minTime" :max="maxTime" />
  </template>
  
  
  <script>
  import Vue3Timepicker from 'vue3-timepicker';
  import { VTimePicker } from 'vuetify/labs/VTimePicker'
  import 'vue3-timepicker/dist/VueTimepicker.css';
  export default {
    name: 'RtTimePicker',
    components: {
        Vue3Timepicker,
        VTimePicker,
    },
    props: {
      modelValue: {
        type: String,
        default: '',
      },
      minTime: {
        type: String,
        default: '00:00',
      },
      maxTime: {
        type: String,
        default: '23:59',
      },
    },
    data() {
      return {
        time: '06:00',
        dialog: false,
        time: this.modelValue || null,
      };
    },
    computed: {
      formattedTime() {
        return this.time ? this.time : null;
      },
    },
    methods: {
      onTimeUpdate(newTime) {
        this.time = newTime;
      },
      onSave() {
        this.$emit('update:modelValue', this.time);
        this.dialog = false;
      },
    },
  };
  </script>
  
  <style scoped>
  .v-btn {
    margin: 8px;
  }
  </style>
  