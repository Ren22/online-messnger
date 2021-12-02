const internalLocationAssign = Symbol.for('internalLocationAssign');

const internalHistoryReset = Symbol.for('internalHistoryReset');

function mockWindowLocation(location: string = 'http://localhost') {
  // This is the internal state.
  let url = new URL(location);

  function internalSetLocation(
    newUrl: string | { toString: () => string },
  ): void {
    url = new URL(newUrl.toString(), url);
  }

  const nativeLocation = Object.getOwnPropertyDescriptor(window, 'location');

  // It seems node v8 doesn't let us change the value unless we delete it before.
  delete window.location;

  const property = {
    get(): any {
      return {
        toString: () => url.toString(),
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
        // $FlowExpectError Flow doesn't know about symbol properties sadly.
        [internalLocationAssign]: internalSetLocation,
        assign: (newUrl: string) => window.history.pushState(null, '', newUrl),
        replace: (newUrl: string) => window.history.replaceState(null, '', newUrl),
      };
    },
    configurable: true,
    set(newUrl: string) {
      window.history.pushState(null, '', newUrl);
    },
  };

  // $FlowExpectError because the value we pass isn't a proper Location object.
  Object.defineProperty(window, 'location', property);

  // Return a function that resets the mock.
  return () => {
    // This "delete" call doesn't seem to be necessary, but better do it so that
    // we don't have surprises in the future.
    delete window.location;
    Object.defineProperty(window, 'location', nativeLocation);
  };
}

function mockWindowHistory() {
  const originalHistory = Object.getOwnPropertyDescriptor(window, 'history');

  let states: any[]; let urls: string[]; let
    index: number;

  function reset() {
    states = [null];
    urls = [window.location.href];
    index = 0;
  }

  reset();

  const history = {
    get length() {
      return states.length;
    },
    scrollRestoration: 'auto',
    get state() {
      return states[index] ?? null;
    },
    back() {
      if (index <= 0) {
        return;
      }
      index -= 1;
      // $FlowExpectError Flow doesn't know about this internal property.
      window.location[internalLocationAssign](urls[index]);
      window.dispatchEvent(new Event('popstate'));
    },
    forward() {
      if (index === states.length - 1) {
        return;
      }
      index += 1;

      // $FlowExpectError Flow doesn't know about this internal property.
      window.location[internalLocationAssign](urls[index]);
      window.dispatchEvent(new Event('popstate'));
    },
    go() {
      throw new Error('Not implemented.');
    },
    pushState(newState: any, _title: string, url?: string) {
      if (url) {
        // Let's assign the URL to the window.location mock. This should also
        // make the URL correct if it's relative, we'll get an absolute URL when
        // retrieving later through window.location.href.
        // $FlowExpectError Flow doesn't know about this internal property.
        window.location[internalLocationAssign](url);
      }

      urls = urls.slice(0, index + 1);
      urls.push(window.location.href);

      states = states.slice(0, index + 1);
      states.push(newState);
      index += 1;
    },
    replaceState(newState: any, _title: string, url?: string) {
      if (url) {
        // Let's assign the URL to the window.location mock.
        // $FlowExpectError Flow doesn't know about this internal property.
        window.location[internalLocationAssign](url);
        urls[index] = window.location.href;
      }

      states[index] = newState;
    },
    // $FlowExpectError Flow doesn't know about symbol properties sadly.
    [internalHistoryReset]: reset,
  };

  Object.defineProperty(window, 'history', {
    value: history,
    configurable: true,
  });

  // Return a function that resets the mock.
  return () => {
    // For unknown reasons, we can't assign back the old descriptor without
    // deleting the current one first... Not deleting would keep the mock
    // without throwing any error.
    delete (window as any).history;
    // $FlowExpectError - Flow can't handle getOwnPropertyDescriptor being used on defineProperty.
    Object.defineProperty(window, 'history', originalHistory);
  };
}

// This mocks both window.location and window.history. See the top of the file
// for more information.
export function mockFullNavigation(): () => void {
  const restoreLocation = mockWindowLocation();
  const restoreHistory = mockWindowHistory();

  return () => {
    restoreLocation();
    restoreHistory();
  };
}

// This registers lifecycle functions to mock both window.location and
// window.history for each test. Take a look at the top of this file for more
// information about how to use this.
export function autoMockFullNavigation() {
  let cleanup: { (): void; (): void; } | null;
  beforeEach(() => {
    cleanup = mockFullNavigation();
  });

  afterEach(() => {
    if (cleanup) {
      cleanup();
      cleanup = null;
    }
  });
}

export function resetHistoryWithUrl(url: string = window.location.href) {
  // $FlowExpectError Flow doesn't know about this internal property.
  window.location[internalLocationAssign](url);
  // $FlowExpectError Flow doesn't know about this internal property.
  window.history[internalHistoryReset]();
}
