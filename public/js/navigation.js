(function() {
  var urls = [
    "ab",
    "xt",
    "mbox-parameters",
    "profile-parameters",
    "json-offer",
    "third-party-id",
    "customer-attributes",
    "recommendations"
  ];

  var found = urls.filter(function(url) {
    return location.href.indexOf(url) !== -1;
  });

  if (found.length > 0) {
    $('.' + found[0]).addClass('active');
  }
}());
