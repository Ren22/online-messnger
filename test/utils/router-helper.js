const internalLocationAssign = Symbol.for('internalLocationAssign');
function mockWindowLocation(location) {
  if (location === void 0) { location = 'http://localhost'; }
  // This is the internal state.
  let url = new URL(location);
  function internalSetLocation(newUrl) {
    url = new URL(newUrl.toString(), url);
  }
  const nativeLocation = Object.getOwnPropertyDescriptor(window, 'location');
  // It seems node v8 doesn't let us change the value unless we delete it before.
  delete window.location;
  const property = {
    get() {
      let _a;
      return _a = {
        toString() { return url.toString(); },
        get href() {
          return url.toString();
        },
        get origin() {
          return url.origin;
        },
        get protocol() {
          return url.protocol;
        },
        get host() {
          return url.host;
        },
        get hostname() {
          return url.hostname;
        },
        get port() {
          return url.port;
        },
        get pathname() {
          return url.pathname;
        },
        get search() {
          return url.search;
        },
        get hash() {
          return url.hash;
        },
        set href(newUrl) {
          this.assign(newUrl.toString());
        },
        set protocol(v) {
          const newUrl = new URL(url.toString());
          newUrl.protocol = v;
          this.assign(newUrl.toString());
        },
        set host(v) {
          const newUrl = new URL(url.toString());
          newUrl.host = v;
          this.assign(newUrl.toString());
        },
        set hostname(v) {
          const newUrl = new URL(url.toString());
          newUrl.hostname = v;
          this.assign(newUrl.toString());
        },
        set port(v) {
          const newUrl = new URL(url.toString());
          newUrl.port = v;
          this.assign(newUrl.toString());
        },
        set pathname(v) {
          const newUrl = new URL(url.toString());
          newUrl.pathname = v;
          this.assign(newUrl.toString());
        },
        set search(v) {
          const newUrl = new URL(url.toString());
          newUrl.search = v;
          this.assign(newUrl.toString());
        },
        set hash(v) {
          const newUrl = new URL(url.toString());
          newUrl.hash = v;
          this.assign(newUrl.toString());
        },
      },
      // $FlowExpectError Flow doesn't know about symbol properties sadly.
      _a[internalLocationAssign] = internalSetLocation,
      _a.assign = function (newUrl) { return window.history.pushState(null, '', newUrl); },
      _a.replace = function (newUrl) { return window.history.replaceState(null, '', newUrl); },
      _a;
    },
    configurable: true,
    set(newUrl) {
      window.history.pushState(null, '', newUrl);
    },
  };
    // $FlowExpectError because the value we pass isn't a proper Location object.
  Object.defineProperty(window, 'location', property);
  // Return a function that resets the mock.
  return function () {
    // This "delete" call doesn't seem to be necessary, but better do it so that
    // we don't have surprises in the future.
    delete window.location;
    // $FlowExpectError because nativeLocation doesn't match the type expected by Flow.
    Object.defineProperty(window, 'location', nativeLocation);
  };
}
mockWindowLocation();
