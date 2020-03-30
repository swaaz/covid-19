/*---API---*/
/*
class State{
  constructor(name,case,recovered,dead)
  {
    this.name=name;
    this.case=case;
    this.recovered=recovered;
    this.dead=dead;
  }
  fname()
  {
    return(this.name);
  }
  fcase()
  {
    return(this.case);
  }
  frecovered()
  {
    return(this.recovered);
  }
  fdead()
  {
    return(this.dead);
  }
}

var States=[];
const url='https://api.rootnet.in/covid19-in/stats/latest';

fetch(url)
.then((resp) => resp.json())
.then(function(data)
{
   console.log(data.data.summary);
   for(var x=0;x<=26;x++)
   {
       States[x]=new State(data.data.regional[x].loc, data.data.regional[x].confirmedCasesIndian, data.data.regional[x].discharged, data.data.regional[x].deaths);
   }

});
*/


const name=[];
const cases=[];
const recov=[];
const deaths=[];
   function display()
 {
  for(var i=0;i<=26;i++)
{
    // name[i]=i;
    document.write(name[i]);
    document.write("<br>");
    document.write(cases[i]);
    document.write("<br>");
    document.write(recov[i]);
    document.write("<br>");
    document.write(deaths[i]);
    document.write("<br>");
    document.write("<br>");
    document.write("<br>");
}
}
 function read(a,b,c,d,e)
 {
     name[a]=b;
     cases[a]=c;
     recov[a]=d;
     deaths[a]=e;
 }

  const url='https://api.rootnet.in/covid19-in/stats/latest';
  
  fetch(url)
  .then((resp) => resp.json())
  .then(function(data)
  {
     //document.write(data.data.regional[1].loc);
     for(var x=0;x<=26;x++)
     {
         read(x,data.data.regional[x].loc, data.data.regional[x].confirmedCasesIndian, recov[x]=data.data.regional[x].discharged, deaths[x]=data.data.regional[x].deaths);
     }
     


  
  
  });
 display();

/*---Map---*/
mapboxgl.accessToken = 'pk.eyJ1IjoicmVkZmVkdGVkIiwiYSI6ImNrOGJ3d3k0bzBkZXczZG8xNWk3a3o4YXoifQ.WEVHaf3zd8D6r8p0K6Oxxg';

var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/redfedted/ck8e152b93dol1imya6xv9yre',
  center: [77, 24.226109981536865],
  zoom: 3
});

var geojson = {
  type: 'FeatureCollection',
  features: [{
    type: 'Feature',
     geometry: {
      type: 'Point',
      coordinates: [76.523475646972827, 34]
    },
    properties: {
      title: 'Mapbox',
      description: 'J.K',
      number:  '1212.'
    } 
  },
   { type: 'Feature',
     geometry: {
      type: 'Point',
      coordinates: [75, 30.498189926147518]
    },
    properties: {
      title: 'Mapbox',
      description: 'Punjab',
      number:  '1212.'
    },
   },
   { type: 'Feature',
     geometry: {
      type: 'Point',
      coordinates: [77, 28.7]
    },
    properties: {
      title: 'Mapbox',
      description: 'Delhi',
      number:  '1212.'
    },
   },
   { type: 'Feature',
     geometry: {
      type: 'Point',
      coordinates: [75.639030456543026, 29.498189926147518]
    },
    properties: {
      title: 'Mapbox',
      description: 'Haryana',
      number:  '1212.'
    },
   },
   { type: 'Feature',
     geometry: {
      type: 'Point',
      coordinates: [77.639030456543026, 32.498189926147518]
    },
    properties: {
      title: 'Mapbox',
      description: 'Himachal Pradesh',
      number:  '1212.'
    },
   },
   { type: 'Feature',
     geometry: {
      type: 'Point',
      coordinates: [79.639030456543026, 29.498189926147518]
    },
    properties: {
      title: 'Mapbox',
      description: 'Uttarakhand',
      number:  '1212.'
    },
   },
   { type: 'Feature',
     geometry: {
      type: 'Point',
      coordinates: [78.639030456543026, 27.498189926147518]
    },
    properties: {
      title: 'Mapbox',
      description: 'Uttar Pradesh',
      number:  '1212.'
    },
   },
   { type: 'Feature',
     geometry: {
      type: 'Point',
      coordinates: [94.639030456543026, 26.498189926147518]
    },
    properties: {
      title: 'Mapbox',
      description: 'Nagaland',
      number:  '1212.'
    },
   },
   { type: 'Feature',
     geometry: {
      type: 'Point',
      coordinates: [93.639030456543026, 24.498189926147518]
    },
    properties: {
      title: 'Mapbox',
      description: 'Manipur',
      number:  '1212.'
    },
   },
   { type: 'Feature',
     geometry: {
      type: 'Point',
      coordinates: [92.639030456543026, 23.498189926147518]
    },
    properties: {
      title: 'Mapbox',
      description: 'Mizoram',
      number:  '1212.'
    },
   },
   { type: 'Feature',
     geometry: {
      type: 'Point',
      coordinates: [91.639030456543026, 23.498189926147518]
    },
    properties: {
      title: 'Mapbox',
      description: 'Tripura',
      number:  '1212.'
    },
   },
   { type: 'Feature',
     geometry: {
      type: 'Point',
      coordinates: [93.639030456543026, 27.498189926147518]
    },
    properties: {
      title: 'Mapbox',
      description: 'Arunachal Pradesh',
      number:  '1212.'
    },
   },
   { type: 'Feature',
     geometry: {
      type: 'Point',
      coordinates: [90.639030456543026, 26.498189926147518]
    },
    properties: {
      title: 'Mapbox',
      description: 'Assam',
      number:  '1212.'
    },
   },
   { type: 'Feature',
     geometry: {
      type: 'Point',
      coordinates: [90.639030456543026, 25.498189926147518]
    },
    properties: {
      title: 'Mapbox',
      description: 'Meghalaya',
      number:  '1212.'
    },
   },
   { type: 'Feature',
     geometry: {
      type: 'Point',
      coordinates: [88.639030456543026, 27.498189926147518]
    },
    properties: {
      title: 'Mapbox',
      description: 'Sikkim',
      number:  '1212.'
    },
   },
   { type: 'Feature',
     geometry: {
      type: 'Point',
      coordinates: [86.639030456543026, 25.498189926147518]
    },
    properties: {
      title: 'Mapbox',
      description: 'Bihar',
      number:  '1212.'
    },
   },
   
   { type: 'Feature',
     geometry: {
      type: 'Point',
      coordinates: [87.639030456543026, 23.498189926147518]
    },
    properties: {
      title: 'Mapbox',
      description: 'West Bengal',
      number:  '1212.'
    },
   },
   { type: 'Feature',
     geometry: {
      type: 'Point',
      coordinates: [84.639030456543026, 23.498189926147518]
    },
    properties: {
      title: 'Mapbox',
      description: 'Jharkhand',
      number:  '1212.'
    },
   },
   { type: 'Feature',
     geometry: {
      type: 'Point',
      coordinates: [73.639030456543026, 25.498189926147518]
    },
    properties: {
      title: 'Mapbox',
      description: 'Rajasthan',
      number:  '1212.'
    },
   },
   { type: 'Feature',
     geometry: {
      type: 'Point',
      coordinates: [77.639030456543026, 23.498189926147518]
    },
    properties: {
      title: 'Mapbox',
      description: 'Madhya Pradesh',
      number:  '1212.'
    },
   },
   { type: 'Feature',
     geometry: {
      type: 'Point',
      coordinates: [72.639030456543026, 23.498189926147518]
    },
    properties: {
      title: 'Mapbox',
      description: 'Gujarat',
      number:  '1212.'
    },
   },
   { type: 'Feature',
     geometry: {
      type: 'Point',
      coordinates: [84.639030456543026, 21.498189926147518]
    },
    properties: {
      title: 'Mapbox',
      description: 'Odisha',
      number:  '1212.'
    },
   },
   { type: 'Feature',
     geometry: {
      type: 'Point',
      coordinates: [81.639030456543026, 21.498189926147518]
    },
    properties: {
      title: 'Mapbox',
      description: 'Chhatisgarh',
      number:  '1212.'
    },
   },
   { type: 'Feature',
     geometry: {
      type: 'Point',
      coordinates: [75.639030456543026, 18.498189926147518]
    },
    properties: {
      title: 'Mapbox',
      description: 'Maharashtra',
      number:  '1212.'
    },
   },
   { type: 'Feature',
     geometry: {
      type: 'Point',
      coordinates: [74, 15.498189926147518]
    },
    properties: {
      title: 'Mapbox',
      description: 'Goa',
      number:  '1212.'
    },
   },
   { type: 'Feature',
     geometry: {
      type: 'Point',
      coordinates: [78.639030456543026, 17.498189926147518]
    },
    properties: {
      title: 'Mapbox',
      description: 'Telangana',
      number:  '1212.'
    },
   },
   { type: 'Feature',
     geometry: {
      type: 'Point',
      coordinates: [78.639030456543026, 15.498189926147518]
    },
    properties: {
      title: 'Mapbox',
      description: 'Andhra Pradesh',
      number:  '1212.'
    },
   },
   { type: 'Feature',
     geometry: {
      type: 'Point',
      coordinates: [76.639030456543026, 13.498189926147518]
    },
    properties: {
      title: 'Mapbox',
      description: 'Karnataka',
      number:  '1212.'
    },
   },
   { type: 'Feature',
     geometry: {
      type: 'Point',
      coordinates: [76.639030456543026, 10.498189926147518]
    },
    properties: {
      title: 'Mapbox',
      description: 'Kerala',
      number:  '1212.'
    },
   },

  {
    type: 'Feature',
     geometry: {
      type: 'Point',
      coordinates: [78.317277, 10.713890]
    },
    properties: {
      title: 'Mapbox',
      description: 'Tamil Nadu',
      number: '1212.'
    }
  }]
};
// code from the next step will go here!
geojson.features.forEach(function(marker) {

  // create a HTML element for each feature
  var el = document.createElement('div');
  el.className = 'marker';

  // make a marker for each feature and add to the map
  new mapboxgl.Marker(el)
    .setLngLat(marker.geometry.coordinates)
    .setPopup(new mapboxgl.Popup({ offset: 25 }) // add popups
    .setHTML('<h3>' + marker.properties.title + '</h3><p>' + marker.properties.description + '</p><p>' +"cases : "+ marker.properties.number + '</p>'))
    .addTo(map);
});
