class State{
    constructor(name,cases,recovered,dead)
    {
      this.name=name;
      this.cases=cases;
      this.recovered=recovered;
      this.dead=dead;
    }
    fname()
    {
      return(this.name);
    }
    fcase()
    {
      return(this.cases);
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
  for(var i=0;i<=26;i++)
  {
      document.write(States[i].fname);
  }