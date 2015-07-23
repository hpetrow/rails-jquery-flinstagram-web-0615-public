// Add your JavaScript here

$(function() {
  $('.like a').click(function(event) {
    event.preventDefault();
    event.stopPropagation();

    var action = $(this).attr('href');
    var method = $(this).data('method');

    $.ajax({
      method: method,
      url: action,
      dataType: 'script'
    });
  });
});
