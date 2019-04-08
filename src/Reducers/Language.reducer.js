console.log("LANGUAGE REDUCER")

export default function(language='English', action){
  if(action.type === 'setlanguage'){
    let selectedLanguage;
    action.language === 'English'
      ? selectedLanguage = 'English'
      : selectedLanguage = 'Français'
    return selectedLanguage;
  } else {
    return language;
  }
}
