<template>
    <v-form ref="form" v-model="isValid" @submit.prevent="onSubmit">
      <RtInput
        v-model="formData.name"
        label="Name"
        :rules="[rules.required]"
        required
      />
      <RtInput
        v-model="formData.email"
        label="Email"
        type="email"
        :rules="[rules.required, rules.email]"
        required
      />
      <RtSelect
        v-model="formData.gender"
        :items="['Male', 'Female', 'Other']"
        label="Gender"
        :rules="[rules.required]"
      />
      <RtButton type="submit" color="primary" :disabled="!isValid">Submit</RtButton>
    </v-form>
  </template>
  
  <script>
  import RtButton from '../button/button.vue';
  import RtInput from '../input/input.vue';
  import RtSelect from '../select/select.vue';
  export default {
    name: "RtForm",
    components: {
      RtButton,
      RtInput,
      RtSelect,
    },
    emits: ["submit"],
    data() {
      return {
        isValid: false,
        formData: {
          name: "",
          email: "",
          gender: "",
        },
        rules: {
          required: (value) => !!value || "This field is required",
          email: (value) =>
            /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(value) || "Invalid email",
        },
      };
    },
    methods: {
      onSubmit() {
        if (this.isValid) {
          this.$emit("submit", this.formData);
        }
      },
    },
  };
  </script>
  
  <style scoped>
  /* Add any styling as necessary */
  </style>
  