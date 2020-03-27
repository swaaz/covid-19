$.getJSON(`https://coronavirus-19-api.herokuapp.com/all`, function(data) {
    console.log(data);
    $(".tcases").append(data.cases);
    $(".tdeaths").append(data.deaths);
    $(".trecovered").append(data.recovered);

});

$.getJSON(`https://coronavirus-19-api.herokuapp.com/countries/india`, function(data) {
    console.log(data);
    $(".cases").append(data.cases);
    $(".active").append(data.active);
    $(".critical").append(data.critical);
    $(".deaths").append(data.deaths);
    $(".recovered").append(data.recovered);
    $(".todaycases").append(data.todayCases);
    $(".todaydeaths").append(data.todayDeaths);

});


function Country_name() {
    var country = document.getElementById("search-field").value;
    console.log(country);
    $.getJSON(
        `https://coronavirus-19-api.herokuapp.com/countries/${country}`,
        function(data) {
            console.log(data);
            $(".country").append(country);



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