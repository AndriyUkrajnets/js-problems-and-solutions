var setNumber = function(e){
  field = parseInt($("#field").val())
  console.log(field)
  e.preventDefault();
}

var div = function(id, name) {
    resalt = '<div class="item" data-order="' + id + '">' + id + ".    " + name + '</div>'
    return resalt;
  }

function pokeList(){
  var visiblePokemonsCount = field;
    for(var i = 1; i <= visiblePokemonsCount; i++){
      $.get("https://pokeapi.co/api/v2/pokemon/"+i, function(data) {
        var listOfPokemons = div(data.id, data.name)
        $("#list-of-pokemons").append(listOfPokemons);
        })
    }
}

function sort(){
  var listOfPokemonsById = getSorted('.item', 'data-order')
  $("#list-of-pokemons-ordered-by-id").html(listOfPokemonsById);
}

function getSorted(selector, attrName) {
    return $($(selector).toArray().sort(function(a, b){
        var aVal = parseInt(a.getAttribute(attrName)),
            bVal = parseInt(b.getAttribute(attrName));
        return aVal - bVal;
    }));
}
