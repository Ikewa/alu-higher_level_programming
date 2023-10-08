$(document).ready(function() {
  $('#fetch_code').click(function() {
    $.get('https://swapi-api.alx-tools.com/api/people/5/?format=json', function(data) {
      $('#character').text(data.name);
    });
  });
});
