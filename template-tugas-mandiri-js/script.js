$("button.all").click(function () {
  $("img.drink").show();
  $("img.dessert").show();
  $("img.food").show();
});

$("button.foods").click(function () {
  $("img.food").show();
  $("img.drink").hide();
  $("img.dessert").hide();
});

$("button.drinks").click(function () {
  $("img.drink").show();
  $("img.food").hide();
  $("img.dessert").hide();
});

$("button.desserts").click(function () {
  $("img.dessert").show();
  $("img.drink").hide();
  $("img.food").hide();
});
