<template>
  <div class="v-hr" :style="hrStyle">
    <span v-if="text" class="v-hr-text">{{ text }}</span>
  </div>
</template>

<script>
export default {
  name: "RtHorizontalRule",
  methods: {
  },
  props: {
    text: {
      type: String,
      default: "",
    },
    color: {
      type: String,
      default: "primary", // Vuetify color scheme
    },
    thickness: {
      type: String,
      default: "2px",
    },
    margin: {
      type: String,
      default: "16px 0",
    },
  },
  computed: {
    hrStyle() {
      return {
        // borderTop: `${this.thickness} solid var(--v-theme-${this.color})`,
        borderTop: `${this.thickness} solid black`,
        margin: this.margin,
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      };
    },
  },
};
</script>

<style scoped>
.v-hr {
  width: 100%;
}

.v-hr-text {
  background: white;
  padding: 0 8px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-weight: bold;
}
</style>
