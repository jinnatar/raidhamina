$( function () {
  var searchHash = location.hash.substr(1),
      searchString = decodeURIComponent(searchHash.substr(searchHash.indexOf('search=')))
                                .split('&')[0]
                                .split('=')[1];
  var table = $('#quest_table').DataTable({
      "dom": '<"wrapper"fliptp>',
      "order": [[ 1, "asc" ]],
      "oSearch": { "sSearch": searchString },
      "columnDefs": [
        { "visible": false, "targets": [2, 4] }
      ],
      "pageLength": 50,
      "initComplete": function(){
        $('#quest_table').css('visibility', 'visible');
        $('#loading img').animate({
          height: 0,
          opacity: 0
        }, 500, "swing");
      },
  });

  table.on( 'search.dt', function () {
       document.location.hash = 'search=' + table.search();
  } );

  $("#quest_table tbody").on('click', 'a.searcher', function(){
    var searchHash = this.href;
    var searchString = decodeURIComponent(
      searchHash.substr(searchHash.indexOf('search='))
                                .split('&')[0]
                                .split('=')[1]
    );
    table.search(searchString).draw();
  });
  $("body").on('click', 'a.searcher', function(){
    var searchHash = this.href;
    var searchString = decodeURIComponent(
      searchHash.substr(searchHash.indexOf('search='))
                                .split('&')[0]
                                .split('=')[1]
    );
    table.search(searchString).draw();
  });

  $('#clear_search').on('click', function(){
    document.location.hash = '';
    table.search('').draw();
  });
});
