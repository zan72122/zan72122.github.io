// Keep native asset responses alive until every byte has arrived.
// Scoped to this game's binary assets; all other fetches keep their native behavior.
(() => {
  const prefix = new URL('./assets/', document.currentScript.src).href;
  const nativeFetch = window.fetch.bind(window);
  window.fetch = async (input, init) => {
    const url = new URL(input instanceof Request ? input.url : input, document.baseURI);
    const method = init?.method || (input instanceof Request ? input.method : 'GET');
    const response = await nativeFetch(input, init);
    if (method.toUpperCase() !== 'GET' || !response.ok ||
        !url.href.startsWith(prefix) || !/\.(glb|hdr|bin)$/i.test(url.pathname)) return response;
    // Three's progress-stream wrapper can detach the native response before
    // Chromium reports request completion. Finish that body first, without
    // changing the bytes, headers, parser, failure handling or AbortSignal.
    const bytes = await response.arrayBuffer();
    return new Response(bytes, {
      status: response.status,
      statusText: response.statusText,
      headers: response.headers
    });
  };
})();
