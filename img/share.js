// Share button on the readable pages: the phone's share sheet, or copy the link
(function () {
  var b = document.getElementById("share"); if (!b) return;
  b.onclick = function () {
    var url = (document.querySelector('link[rel="canonical"]') || location).href, title = document.title;
    if (navigator.share) { navigator.share({ title: title, url: url }).catch(function () {}); return; }
    var done = function () { b.textContent = "Link copied ✓"; setTimeout(function () { b.textContent = "Share"; }, 2000); };
    if (navigator.clipboard) navigator.clipboard.writeText(url).then(done, function () { prompt("Copy this link", url); });
    else prompt("Copy this link", url);
  };
})();
