if (process.browser) {
  window._Sendlane = window._Sendlane || [];
  _Sendlane.push({
    form_key: 'eyJkb21haW4iOiJ1c2VyIiwiZm9ybV9pZCI6IjMxZjg3MDhmLTcxMTEtNDVlMC1hZDYwLWMzOTQ0ZjliMWYwMiJ9'
  });
  let script = window.document.createElement('script');
  script.src = 'https://sendlane.test/js/form.js';
  script.async = true;
  let first = document.getElementsByTagName('script')[0];
  first.parentNode.insertBefore(script, first);
}
