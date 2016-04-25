var setNumber = function(e){
  field = parseInt($("#field").val())
  console.log(field)
  e.preventDefault();
}

var list = function(name, weight) {
  resalt = '<li>' + name + ' - ' + weight + '</li>'
  return resalt;
  }

function pokeList(){
  var visiblePokemonsCount = field;
    for(var i = 1; i <= visiblePokemonsCount; i++){
      $.get("https://pokeapi.co/api/v2/pokemon/"+i, function(data) {
        var listOfPokemons = list(data.name, data.weight)
        $("#list-of-pokemons").append(listOfPokemons);
        })
    }
}

function sort(){
  $('li', "#list-of-pokemons").sort(function(a, b){
      return $(a).text() > $(b).text() ? 1 : -1;
  }).appendTo("#list-of-pokemons");
}

function clean(){
    $( "#list-of-pokemons" ).empty();
  };

/*
  http://james.padolsey.com/snippets/sorting-elements-with-jquery/
  https://codepen.io/gabrieleromanato/pen/Cfpdu/
}*/