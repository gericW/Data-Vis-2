var vg_1 = "average_income_vs_rent_index.vg.json";

vegaEmbed("#average_income", vg_1)
  .then(function (result) {
    // Access the Vega view instance
    //(https://vega.github.io/vega/docs/api/view/) as result.view
  })
  .catch(console.error);

var vg_2 = "crime_rate_vs_cost_of_living.vg.json";

vegaEmbed("#crime_rate", vg_2)
  .then(function (result) {
    // Access the Vega view instance
    //(https://vega.github.io/vega/docs/api/view/) as result.view
  })
  .catch(console.error);

var vg_3 = "map.vg.json";

vegaEmbed("#world_pop", vg_3)
  .then(function (result) {
    // Access the Vega view instance
    //(https://vega.github.io/vega/docs/api/view/) as result.view
  })
  .catch(console.error);

var vg_4 = "rent_by_age.vg.json";

vegaEmbed("#rent_by_age", vg_4)
  .then(function (result) {
    // Access the Vega view instance
    //(https://vega.github.io/vega/docs/api/view/) as result.view
  })
  .catch(console.error);


var vg_5 = "safest_countries.vg.json";

vegaEmbed("#safest_countries", vg_5)
  .then(function (result) {
    // Access the Vega view instance
    //(https://vega.github.io/vega/docs/api/view/) as result.view
  })
  .catch(console.error);
