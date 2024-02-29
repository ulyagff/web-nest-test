(function () {
  var currentPage = window.location.pathname.split('/').pop();
  var menuItems = document.querySelectorAll('a');
  menuItems.forEach(function (item) {
    var href = item.getAttribute('href');
    if (href === currentPage) {
      item.classList.add('active');
      console.log(item);
    }
  });
})();
