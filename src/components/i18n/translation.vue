<template>
    <v-container fluid>
      <v-row>
        <v-col>
          <v-select
            v-model="currentLanguage"
            :items="languageOptions"
            label="Select Language"
            aria-label="Select Language"
            @change="changeLanguage"
          />
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-card class="pa-4">
            <v-card-title class="headline">{{ $t('welcomeMessage') }}</v-card-title>
            <v-card-text>{{ $t('description') }}</v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script>
  export default {
    name: "RtTranslation",
    props: {
      availableLanguages: {
        type: Array,
        default: () => [
          { code: "en", label: "English" },
          { code: "fr", label: "Français" },
          { code: "es", label: "Español" },
          { code: "de", label: "Deutsch" },
        ],
      },
      defaultLanguage: {
        type: String,
        default: "en",
      },
    },
    data() {
      return {
        currentLanguage: this.defaultLanguage,
      };
    },
    computed: {
      languageOptions() {
        return this.availableLanguages.map(lang => ({
          text: lang.label,
          value: lang.code,
        }));
      },
    },
    mounted() {
      // Set default language
      this.changeLanguage(this.defaultLanguage);
    },
    methods: {
      changeLanguage(newLanguage) {
        if (!this.availableLanguages.some(lang => lang.code === newLanguage)) {
          console.warn(`Unsupported language: ${newLanguage}`);
          return;
        }
        this.$i18n.locale = newLanguage; // Update i18n locale
      },
    },
  };
  </script>
  
  <style scoped>
  /* Add additional styling as needed */
  </style>
  