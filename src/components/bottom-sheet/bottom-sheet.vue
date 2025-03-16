<template>
    <div class="text-center">
      <RtButton
        class="open-button"
        size="x-large"
        text="Click Me"
        @click="sheet = !sheet"
      ></RtButton>
  
      <v-bottom-sheet v-model="sheet">
        <v-card
          class="text-center"
          height="200"
        >
          <v-card-text>
            <RtButton
              class="close-button"
              variant="text"
              @click="sheet = !sheet"
            >
              close
            </RtButton>
  
            <br>
            <br>
  
            <div>
              This is a bottom sheet using the controlled by v-model instead of activator
            </div>
          </v-card-text>
        </v-card>
      </v-bottom-sheet>
    </div>
  </template>
  
  <script>
    import RtButton from '../button/button.vue';
    export default {
      name: "RtBottomSheet",
      components: {
        RtButton,
      },
      data: () => ({
        sheet: false,
      }),
    }
  </script>