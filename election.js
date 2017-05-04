$(document).ready(function() {

  $.ajax({
    url: 'https://bb-election-api.herokuapp.com/',
    method: 'GET',
    dataType: 'json'
  }).done(function(responseData) {
    for (var i = 0; i < responseData.length; i++) {
      candidate = data.list[i]
      name = candidate.name
      votes = candidate.votes
      info = name + ' has ' + votes + ' vote.'
      $('<li>').html(info).appendTo('#list');
    }
    console.log('done')
  });
  // Imagination!
});
