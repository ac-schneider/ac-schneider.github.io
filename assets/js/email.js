document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('a.email').forEach(function (a) {
    var rev = function (s) { return s.split('').reverse().join(''); };
    var addr = rev(a.dataset.u) + '@' + rev(a.dataset.d);
    a.href = 'mailto:' + addr;
    a.textContent = addr;
  });
});
