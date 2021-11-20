const jsdom = require('jsdom');

const { JSDOM } = jsdom;

// setup the simplest document possible
const dom = new JSDOM('<!doctype html><html><body></body></html>', {
  url: 'https://example.org/',
  referrer: 'https://example.com/',
  contentType: 'text/html',
  includeNodeLocations: true,
  storageQuota: 10000000,
});

// get the window object out of the document
const win = dom.window;

// set globals for mocha that make access to document and window feel
// natural in the test environment
global.document = dom.window.document;
global.window = win;

// take all properties of the window object and also attach it to the
// mocha global object
propagateToGlobal(win);

function propagateToGlobal(window) {
  const keys = Object.keys(window);
  keys.forEach((key) => {
    if (!global[key]) {
      global[key] = window[key];
    }
  });
}
