function decodeEmails() {
  document.querySelectorAll('a.email:not([data-done])').forEach(function (a) {
    var rev = function (s) { return s.split('').reverse().join(''); };
    var addr = rev(a.dataset.u) + '@' + rev(a.dataset.d);
    a.href = 'mailto:' + addr;
    a.textContent = addr;
    a.dataset.done = '1';
  });
}
decodeEmails();
new MutationObserver(decodeEmails).observe(document.body, { childList: true, subtree: true });
