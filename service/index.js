'use strict';

const lang = require('./lang.json');
let defaultLang = 'en';

const wrapper = {
  validate: (code) => {
    if (!code) {
      throw new Error('No Languagecode is defined');
    }

    code = code.replace('_', '-');

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
    if (code) {
      code = code.replace('_', '-');
    }

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
  },

  validateArray: (obj) => {
    if (!(obj instanceof Array)) {
      throw new Error('The called object is not an array');
    }

    for (let i = 0; i < obj.length; i++) {
      if (!wrapper.validate(obj[i].languagecode)) {
        throw new Error('The languagecode ' + obj[i].languagecode + ' is not valid! Please check your object!');

        break;
      }

      obj[i].languagecode = wrapper.getLanguage(obj[i].languagecode).code;
    }

    return obj;
  }
};

module.exports = wrapper;
