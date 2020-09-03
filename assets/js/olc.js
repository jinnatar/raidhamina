$( function () {
  if ("geolocation" in navigator){
    $('#gps_search').show();
    $('#gps_search').on('click', function(){
      navigator.geolocation.getCurrentPosition(function(position){
        console.log(position.coords.latitude, position.coords.longitude);
        var fullCode = OpenLocationCode.encode(position.coords.latitude, position.coords.longitude);
        var searchString = fullCode.substr(4, 4);
        $('#quest_table').DataTable().search(searchString).draw();
      }, function(){ alert('gps error'); }, {maximumAge:10000, timeout:5000, enableHighAccuracy:true});
    });
  }
});
