const LocalizedStrings = {
    en: { // English
        
    },
    gn: { 
      HeadTitleWelcome:'Welcome to',
      HeadTitle:'Amazon Feedback',
      mainCta:'Click here to proceed',
      FeedbackEmail:'Email',
      FeedbackAppName:'App Name',
      FeedbackDeviceName:'Device Name',
      Feedback:'Feedback',
      FeedbackAppId:'App ASIN',
      FeedbackCountry:'Country',
      Submit:'Submit',
      FeedbackHeading:'Thank you',
      FeedbackDescription:'for your feedback, we will get back to you soon',
    },
  };
  
  const setLanguage = function (languageCode) {
    return LocalizedStrings[languageCode];
  };
  
  export const strings = setLanguage('gn');
  