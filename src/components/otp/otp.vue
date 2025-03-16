<template>
    <div class="otp-input">
      <v-text-field
        v-for="(value, index) in otpValues"
        :key="index"
        v-model="otpValues[index]"
        :placeholder="placeholder"
        :maxlength="1"
        outlined
        dense
        class="otp-field"
        @input="handleInput(index)"
      />
    </div>
  </template>
  
  <script>
  export default {
    name: 'RtOtp',
    props: {
      length: {
        type: Number,
        default: 6,
      },
      placeholder: {
        type: String,
        default: '•',
      },
    },
    emits: ['update:otp', 'complete'],
    data() {
      return {
        otpValues: Array(this.length).fill(''),
      };
    },
    methods: {
      handleInput(index) {
        const otp = this.otpValues.join('');
        this.$emit('update:otp', otp);
  
        // Automatically focus the next field if input is valid
        if (this.otpValues[index] && index < this.length - 1) {
          const nextField = this.$refs[`otp-field-${index + 1}`];
          if (nextField) {
            nextField.focus();
          }
        }
  
        // Emit the 'complete' event if all fields are filled
        if (otp.length === this.length && otp.indexOf('') === -1) {
          this.$emit('complete', otp);
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .otp-input {
    display: flex;
    gap: 8px;
  }
  .otp-field {
    width: 40px;
    text-align: center;
  }
  </style>
  