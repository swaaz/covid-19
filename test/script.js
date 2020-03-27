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