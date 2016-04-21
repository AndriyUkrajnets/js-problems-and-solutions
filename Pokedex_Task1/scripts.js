var row = function(id, name) {
    resalt = '<td> <font size="5px" face="Verdana" border-collapse="collapse">' + id + 
    '</font></td><td><font size="5px" face="Verdana" border-collapse="collapse" margin-top="5px" margin-right="5px";>' + name + 
    '</fomt></td>'
    return resalt;
  }

function pokeList(){
  var visiblePokemonsCount = 15;
    for(var i = 1; i <= visiblePokemonsCount; i++){
      $.get("https://pokeapi.co/api/v2/pokemon/"+i, function(data) {
        var listOfPokemons = '<tr margin-top="10px" margin-right="15px";>' + row(data.id, data.name) + '</tr>'
        $("#myTable").append(listOfPokemons);
        })
    }
}

/*
http://blog.rodneyrehm.de/archives/14-Sorting-Were-Doing-It-Wrong.html
http://jsfiddle.net/UdvDD/
http://tympanus.net/codrops/2009/10/03/33-javascript-solutions-for-sorting-tables/
http://stackoverflow.com/questions/6133723/sort-divs-in-jquery-based-on-attribute-data-sort*/
