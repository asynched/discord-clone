module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.jsx'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'discord-primary': '#36393f',
        'discord-secondary': '#2f3136',
        'discord-secondary-alt': '#292b2f',
        'discord-tertiary': '#202225',
        'discord-accent': '#4f545c',
        'discord-floating': '#18191c',
        'discord-mobile-primary': '#36393f',
        'discord-mobile-secondary': '#2f3136',
        'discord-modifier-hover': 'rgba(79,84,92,0.16)',
        'discord-modifier-active': 'rgba(79,84,92,0.24)',
        'discord-modifier-selected': 'rgba(79,84,92,0.32)',
        'discord-modifier-accent': 'hsla(0,0%,100%,0.06)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
