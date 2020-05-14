if (process.browser) {
  window._Sendlane = window._Sendlane || [];
  _Sendlane.push({
    form_key: 'eyJkb21haW4iOiJqb25hdGhhbndhbGtlciIsImZvcm1faWQiOiI5ZmZhYTJhNy1lNzZiLTQ2NTYtODE4Yy1lZWEyODRmZjMyMTEifQ=='
  });
  let script = window.document.createElement('script');
  script.src = 'https://sendlane.com/scripts/pusher.js';
  script.async = true;
  let first = document.getElementsByTagName('script')[0];
  first.parentNode.insertBefore(script, first);
}
