export default {
  title: 'Atoms/TextInput',
  tags: ['autodocs'],
  render: () => {
    return `
      <shams-text-input error-message="Something is wrong" label="name "placeholder="salam"> FOCUS </shams-text-input>
      <shams-text-input label="name "placeholder="salam"> FOCUS </shams-text-input>
      <shams-text-input> FOCUS </shams-text-input>
    `
  }
};

export const DarkMode = {
  decorators: [(Story) => {
    const wrapper = document.createElement('div');
    wrapper.setAttribute('data-theme', 'dark');
    wrapper.innerHTML = Story();
    return wrapper;
  }],
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [
        {
          name: 'dark',
          value: 'var(--almost-black)',
        },
      ],
    },
  },
};

export const LightMode = {
  parameters: {
    backgrounds: {
      default: 'light',
      values: [
        {
          name: 'light',
          value: '#ffffff',
        },
      ],
    },
  },
};
