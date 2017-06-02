'use strict';

const assert = require('assertthat');
const path = require('path');

const service = require(path.resolve('./service'));

describe('sevice.validate...', () => {
  it('... is of type function', (done) => {
    assert.that(service.validate).is.ofType('function');
    done();
  });

  it('... throws an error when code is not defined', (done) => {
    assert.that(() => {
      service.validate();
    }).is.throwing('No Languagecode is defined');
    done();
  });

  it('... returns true when code is valid', (done) => {
    assert.that(service.validate('de-DE')).is.true();
    done();
  });

  it('... returns false when code is invalid', (done) => {
    assert.that(service.validate('de-it')).is.falsy();
    done();
  });
});

describe('service.getAll...', () => {
  it('... is of type function', (done) => {
    assert.that(service.getAll).is.ofType('function');
    done();
  });

  it('... returns a array with all languages', (done) => {
    assert.that(service.getAll()).is.ofType('array');
    assert.that(service.getAll()[0].code).is.not.undefined();
    assert.that(service.getAll()[0].name).is.not.undefined();
    done();
  });
});

describe('service.getLanguage...', () => {
  it('... is of type function', (done) => {
    assert.that(service.getLanguage).is.ofType('function');
    done();
  });

  it('... throws an error when languagecode is not defined', (done) => {
    assert.that(() => {
      service.getLanguage();
    }).is.throwing('No Languagecode is defined');
    done();
  });

  it('... throws an error when languagecode is not valid', (done) => {
    assert.that(() => {
      service.getLanguage('de-it');
    }).is.throwing('The named Language is not famous');
    done();
  });

  it('... returns the object with the language infos', (done) => {
    assert.that(service.getLanguage('de')).is.ofType('object');
    assert.that(service.getLanguage('de').name).is.equalTo('German');
    done();
  });
});

describe('service.getDefault...', () => {
  it('... is of type function', (done) => {
    assert.that(service.getDefault).is.ofType('function');
    done();
  });

  it('... returns the defined default Language', (done) => {
    assert.that(service.getDefault()).is.equalTo('en');
    done();
  });
});

describe('service.setDefault...', () => {
  it('... is of type function', (done) => {
    assert.that(service.setDefault).is.ofType('function');
    done();
  });

  it('... throws an error when code is not defined', (done) => {
    assert.that(() => {
      service.setDefault();
    }).is.throwing('No Languagecode is defined');
    done();
  });

  it('... returns false when defaultcode is not valid', (done) => {
    assert.that(service.setDefault('de-it')).is.falsy();
    done();
  });

  it('... returns true when defaultcode is set', (done) => {
    assert.that(service.setDefault('de-de')).is.true();
    done();
  });

  it('... getDefault must return the changed code after set', (done) => {
    assert.that(service.getDefault()).is.equalTo('de-DE');
    done();
  });
});
