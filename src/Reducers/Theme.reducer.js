console.log("THEME REDUCER")

const dark = '#000000';
const light = '#EEEEEE';

const theme = {
  dark: {
    _: 'dark',
    name: 'Dark Theme',
    backgroundColor: dark,
    color: dark,
  },
  light: {
    _: 'light',
    name: 'Light Theme',
    backgroundColor: light,
    color: light,
  }
}

export default function(color=theme.dark, action){
  if(action.type === 'settheme'){
    let selectedTheme;
    action.theme === 'Dark Theme'
      ? selectedTheme = theme.dark
      : selectedTheme = theme.light
    return selectedTheme;
  } else {
    return color;
  }
}
