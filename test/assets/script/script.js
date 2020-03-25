            
               /* function search()
                {
                    s=document.getElementById('srch').value; //store the value in s
                    document.getElementById("output").innerHTML=s;  //printing the value 
                    return s;

                }*/

                //y=search();
            //alert(y);

            function getSearchURL() {
                const query = document.getElementById('srch').value;
              const url = "https://coronavirus-19-api.herokuapp.com/countries/";
              return `${url}${query}`
              }
              
              Function search() {
               const searchURL = getSearchURL();
               alert(searchURL);
              
              


/* $.getJSON("https://coronavirus-19-api.herokuapp.com/all", function(data1)
{
    console.log(data1);
});
*/


//var url="https://coronavirus-19-api.herokuapp.com/countries/";
//s="usa";
//var z=url+y; //concating


               

$.getJSON(searchURL,function(data){
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

                
              }