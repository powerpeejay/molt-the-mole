// Easter Hop — gemeinsames Seiten-Script
// Öffnet den Consent-Dialog (Google Privacy & Messaging) erneut,
// solange die CMP noch nicht aktiv ist, führt der Link zur Erklärung
// in der Datenschutzerklärung.
(function () {
  var link = document.getElementById('cookie-settings-link');
  if (!link) return;
  link.addEventListener('click', function (e) {
    e.preventDefault();
    window.googlefc = window.googlefc || {};
    window.googlefc.callbackQueue = window.googlefc.callbackQueue || [];
    if (typeof window.googlefc.showRevocationMessage === 'function') {
      window.googlefc.showRevocationMessage();
      return;
    }
    window.googlefc.callbackQueue.push({
      CONSENT_DATA_READY: function () { window.googlefc.showRevocationMessage(); }
    });
    // Fallback: CMP (noch) nicht geladen → Erklärung anzeigen
    setTimeout(function () {
      if (typeof window.googlefc.showRevocationMessage !== 'function') {
        window.location.href = 'datenschutz.html#cookie-einstellungen';
      }
    }, 400);
  });
})();
