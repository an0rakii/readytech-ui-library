<template>
    <v-card outlined class="confirm-edit-card">
      <v-card-text>
        <template v-if="isEditing">
          <RtInput
            v-model="currentValue"
            :label="label"
            outlined
            dense
            class="edit-field"
          />
          <div class="actions">
            <RtButton color="primary" small @click="confirmEdit">Confirm</RtButton>
            <RtButton color="secondary" small @click="cancelEdit">Cancel</RtButton>
          </div>
        </template>
        <template v-else>
          <div class="display-field" @click="startEditing">
            <span>{{ value }}</span>
            <RtIcon :icon="icon" small class="edit-icon"></RtIcon>
          </div>
        </template>
      </v-card-text>
    </v-card>
  </template>
  
  <script>
  import RtInput from '../input/input.vue';
  import RtButton from '../button/button.vue';
  import RtIcon from '../icon/icon.vue';
  export default {
    name: 'RtConfirmEdit',
    components: {
      RtInput,
      RtButton,
      RtIcon,
    },
    props: {
      icon: {
        type: String,
        default: 'mdi-pencil',
      },
      value: {
        type: String,
        default: 'value',
      },
      label: {
        type: String,
        default: 'Edit Value',
      },
    },
    emits: ['update:value'],
    data() {
      return {
        isEditing: false,
        currentValue: this.value,
      };
    },
    methods: {
      startEditing() {
        this.isEditing = true;
      },
      confirmEdit() {
        this.isEditing = false;
        this.$emit('update:value', this.currentValue);
      },
      cancelEdit() {
        this.isEditing = false;
        this.currentValue = this.value;
      },
    },
  };
  </script>
  
  <style scoped>
  .confirm-edit-card {
    max-width: 400px;
    margin: auto;
    padding: 16px;
  }
  .display-field {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .edit-field {
    margin-bottom: 12px;
  }
  .actions {
    display: flex;
    gap: 8px;
  }
  .edit-icon {
    color: var(--v-theme-primary);
  }
  </style>
  