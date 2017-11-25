import {Accounts} from 'meteor/accounts-base';

Accounts.ui.config({
  requestPermissions: {
    facebook: ['public_profile']
  },
  passwordSignupFields: 'USERNAME_ONLY'
});


ServiceConfiguration.configurations.remove({
    service: "facebook"
});

ServiceConfiguration.configurations.insert({
    service: "facebook",
    appId: '1804697863161333',
    secret: '7a765d58a2d97ad740b42b38fcf3966e'
});
