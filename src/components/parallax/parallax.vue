<template>
    <v-parallax
      src="https://images.unsplash.com/photo-1607631501395-b3028b9c85c2?crop=entropy&cs=tinysrgb&fit=max&ixid=MXwyMDg5OHwwfDF8c2VhcmNofDI2fHxyZWFjdGlvbnxlbnwwfHx8fDE2ODc1NDY1NzM&ixlib=rb-1.2.1&q=80&w=1080"
      height="600"
    >
      <template v-slot:default="{ scrollY }">
        <div class="parallax-text" :style="{ transform: 'translateY(' + scrollY / 3 + 'px)' }">
          <h1>Vuetify Parallax</h1>
          <p>
            A beautiful parallax scrolling effect on this image. Enjoy the smooth, dynamic background that moves at a slower rate than the content.
          </p>
        </div>
      </template>
    </v-parallax>
  </template>
  
  <script>
  export default {
    name: 'RtParallax',
  };
  </script>
  
  <style scoped>
  .parallax-text {
    text-align: center;
    color: white;
    font-family: 'Roboto', sans-serif;
    padding: 0 20px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  
  .parallax-text h1 {
    font-size: 3rem;
    margin-bottom: 10px;
  }
  
  .parallax-text p {
    font-size: 1.25rem;
  }
  </style>
  