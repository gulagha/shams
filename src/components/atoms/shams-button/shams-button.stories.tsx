export default {
  title: 'Atoms/Button',
  tags: ['autodocs'],
  render: () => {
    return `
      <shams-button> CANCEL </shams-button>
      <shams-button type="primary"> FOCUS </shams-button>
      <shams-button type="primary-2"> CREATE </shams-button>
      <shams-button type="danger"> DELETE </shams-button>
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
