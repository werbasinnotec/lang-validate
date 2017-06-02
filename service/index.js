'use strict';

const path = require('path');
const lang = require(path.resolve('./service/lang'));
let defaultLang = 'en';

const wrapper = {
  validate: (code) => {
    if (!code) {
      throw new Error('No Languagecode is defined');
    }

    let response = false;

    for (let i = 0; i < lang.length; i++) {
      if (lang[i].code.toUpperCase() === code.toUpperCase()) {
        response = true;
      }
    }

    return response;
  },

  getAll: () => {
    return lang;
  },

  getLanguage: (code) => {
    if (!wrapper.validate(code)) {
      throw new Error('The named Language is not famous');
    }

    for (let i = 0; i < lang.length; i++) {
      if (lang[i].code.toUpperCase() === code.toUpperCase()) {
        return lang[i];
        break;
      }
    }
  },

  getDefault: () => {
    return defaultLang;
  },

  setDefault: (code) => {
    if (wrapper.validate(code)) {
      defaultLang = wrapper.getLanguage(code).code;
      return true;
    }

    return false;
  }
};

module.exports = wrapper;
