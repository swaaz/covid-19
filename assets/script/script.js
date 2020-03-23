$.getJSON("https://coronavirus-19-api.herokuapp.com/countries/india",function(data){
    console.log(data);
    
    var cases=data.cases;
    var active=data.active;
    var critical=data.critical;
    var deaths=data.deaths;
    var recovered=data.recovered;
    var todaycases=data.todayCases;
    var todadeaths=data.todayDeaths;

    $('.cases').append(cases);
    $('.active').append(active);
    $('.critical').append(critical);
    $('.deaths').append(deaths)
    $('.recovered').append(recovered);
    $('.todaycases').append(todaycases);
    $('.todaydeaths').append(todadeaths);

    
});