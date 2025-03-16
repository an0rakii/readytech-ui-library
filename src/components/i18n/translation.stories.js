import RtTranslation from './translation.vue';
import i18n from '../i18n/translation.vue'; // Adjust the path based on your project structure

export default {
  title: 'Components/RtTranslation',
  component: RtTranslation,
  decorators: [
    (story) => ({
      components: { story },
      template: '<i18n-provider><story /></i18n-provider>',
      setup() {
        return { i18n };
      },
    }),
  ],
  argTypes: {
    availableLanguages: { control: 'object' },
    defaultLanguage: { control: 'text' },
  },
};

const Template = (args) => ({
  components: { RtTranslation },
  setup() {
    return { args };
  },
  template: `
    <RtTranslation v-bind="args" />
  `,
});

export const Default = Template.bind({});
Default.args = {
  availableLanguages: [
    { code: 'en', label: 'English' },
    { code: 'fr', label: 'Français' },
    { code: 'es', label: 'Español' },
    { code: 'de', label: 'Deutsch' },
  ],
  defaultLanguage: 'en',
};

export const WithCustomLanguages = Template.bind({});
WithCustomLanguages.args = {
  availableLanguages: [
    { code: 'en', label: 'English' },
    { code: 'it', label: 'Italiano' },
    { code: 'jp', label: '日本語 (Japanese)' },
    { code: 'kr', label: '한국어 (Korean)' },
  ],
  defaultLanguage: 'it',
};
