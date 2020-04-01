$.getJSON(`https://coronavirus-19-api.herokuapp.com/all`, function(data) {
  console.log(data);
  $(".tcases").append(data.cases);
  $(".tdeaths").append(data.deaths);
  $(".trecovered").append(data.recovered);
});

const url = "https://api.rootnet.in/covid19-in/stats/latest";

fetch(url)
  .then(resp => resp.json())
  .then(function(data) {
    console.log(data);
    console.log(data.data.summary);
  });

$.getJSON(`https://coronavirus-19-api.herokuapp.com/countries/india`, function(
  data
) {
  console.log(data);
  $(".icountry").append(data.country);
  $(".icases").append(data.cases);
  $(".iactive").append(data.active);
  $(".icritical").append(data.critical);
  $(".ideaths").append(data.deaths);
  $(".irecovered").append(data.recovered);
  $(".itodaycases").append(data.todayCases);
  $(".itodaydeaths").append(data.todayDeaths);
});

function Country_name() {
  var country = document.getElementById("search-field").value;
  console.log(country);
  $.getJSON(
    `https://coronavirus-19-api.herokuapp.com/countries/${country}`,
    function(data) {
      console.log(data);
      $(".country").append(country);

      $(".cases").empty();
      $(".active").empty();
      $(".critical").empty();
      $(".deaths").empty();
      $(".recovered").empty();
      $(".todaycases").empty();
      $(".todaydeaths").empty();
      $(".country").empty();

      $(".country").append(data.country);
      $(".cases").append(data.cases);
      $(".active").append(data.active);
      $(".critical").append(data.critical);
      $(".deaths").append(data.deaths);
      $(".recovered").append(data.recovered);
      $(".todaycases").append(data.todayCases);
      $(".todaydeaths").append(data.todayDeaths);
    }
  );
}

function get_Country() {
  if (event.key === "Enter") {
    var country = document.getElementById("search-field").value;
    //window.open(`./india.html?search=${country}`);
    window.location.href = `./country.html?search=${country}`;
  }
}
