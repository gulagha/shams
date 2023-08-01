export default {
  title: 'Example/Icon',
  tags: ['autodocs'],
  render: () => {
    return `
      <shams-icons name='delete-icon'> </shams-icons>
      <shams-icons name='light-mode-icon'> </shams-icons>
      <shams-icons name='dark-mode-icon'> </shams-icons>
      <shams-icons name='edit-icon'> </shams-icons>
      <shams-icons name='share-icon'> </shams-icons>
      <shams-icons name='plus-icon'> </shams-icons>
      <shams-icons name='cancel-icon'> </shams-icons>
      <shams-icons name='checked-icon'> </shams-icons>
      <shams-icons name='save-icon'> </shams-icons>
      <shams-icons name='clock-icon'> </shams-icons>
      <shams-icons name='exit-icon'> </shams-icons>
      <shams-icons name='enter-icon'> </shams-icons>
      <shams-icons name='pause-icon'> </shams-icons>
      <shams-icons name='play-icon'> </shams-icons>
      <shams-icons name='magic-icon'> </shams-icons>
      <shams-icons name='settings-icon'> </shams-icons>
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
          value: '#000000',
        },
      ],
    },
  },
};

export const LightMode = {
  args: {
    name: 'light-mode-icon'
  },
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
