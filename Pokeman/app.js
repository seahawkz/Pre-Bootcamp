$(document).ready(function () {
  // API call to get data and add to DOM
  // $.get("https://pokeapi.co/api/v2/pokemon", function (data) {
  //   // console.log(data);
  //   var results = data.results;
  //   console.log(results);
  //   // get eahc pokemon name and url
  //   var htmlStr = "";
  //   for (var i = 0; i < results.length; i++) {
  //     // console.log(results[i]);
  //     // print out the name of each pokemon
  //     // console.log(results[i].name);
  //     // console.log(results[i].url);
  //     // console.log("____________________");
  //     // Add name and url to the DOM
  //     var name = results[i].name;
  //     var url = results[i].url;
  //     htmlStr += `<h3>Name is: ${name}</h3>`;
  //     htmlStr += `<h3>URL is: ${url}</h3>`;
  //     htmlStr += "<hr />";
  //     // Add to the DOM
  //   }
  //   $("#poke-list").append(htmlStr);
  // });

  // Tie AJAX API call to button click
  $("#get-data").click(function () {
    $.get("https://pokeapi.co/api/v2/pokemon", function (data) {
      // console.log(data);
      var results = data.results;
      // console.log(results);
      // get eahc pokemon name and url
      var htmlStr = "";
      for (var i = 0; i < results.length; i++) {
        // console.log(results[i]);
        // print out the name of each pokemon
        // console.log(results[i].name);
        // console.log(results[i].url);
        // console.log("____________________");
        // Add name and url to the DOM
        var name = results[i].name;
        var url = results[i].url;
        htmlStr += `<h3>Name is: ${name}</h3>`;
        htmlStr += `<h3 id="url">${url}</h3>`;
        htmlStr += "<hr />";
        // Add to the DOM
      }
      $("#poke-list").append(htmlStr);
    });
  });

  // dynamic content click function
  $(document).on("click", "#url", function () {
    // clear out data
    $("#individual").empty();
    // get url from element that was clicked
    var pokemonUrl = $(this).text();
    // make ajax call using above url
    $.get(pokemonUrl, function (data) {
      var htmlStr = "";
      var name = data.name;
      htmlStr += `<li>Name: ${name}</li>`;
      var abilities = data.abilities;
      // console.log(abilities);
      for (var i = 0; i < abilities.length; i++) {
        // console.log(abilities[i].ability.name);
        htmlStr += `<li>Ability: ${abilities[i].ability.name}</li>`;
      }
      console.log(data);
      console.log(data.moves);
      for (var i = 0; i < data.moves.length; i++) {
        console.log(data.moves[i].move.name);
        htmlStr += `<li>Move # ${i + 1}: ${data.moves[i].move.name}</li>`;
      }
      console.log("Gets here");
      $("#individual").append(htmlStr);
    });
  });
});

// Pseudocode of what I did here
// 1. Click button or text
// 2. Make API request
// 3. Play with the data with console.log to LOCATE the data you need (key/values pairs)
// 4. add the data to a string (between html elements in my case <li>s)
// 5. add string to dom with $("id-name").append(string)
