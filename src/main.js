import { Tamagotchi } from './tamagotchi.js';
import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


$(document).ready(function () {
  let theImage = {};
  let tamagotchi;
  let celebrity;
  $("img").on("click", function () {
    theImage.image = this.src;
    $("img").addClass("hidden");
    $(".name-form").removeClass("hidden");
    $("#celebrity").append($('<img src="' + theImage.image + '"></img>'));
    $("#pickAFriend").hide();
  });

  $("form").submit(function (event) {
    const name = $("#name").val();
    tamagotchi = new Tamagotchi(name, celebrity);
    $("#pickAFriend").hide;
    $(".name-form").hide();
    $("#celebrity-img").html('<img src="' + theImage.image + '"></img>')
    $(".celebrity-name").html(tamagotchi.name);
    $("#user-food").html(tamagotchi.food);
    $("#food-warning").html(tamagotchi.foodWarning);
    $("#user-play").html(tamagotchi.play);
    $("#play-warning").html(tamagotchi.playWarning);
    $("#user-sleep").html(tamagotchi.sleep);
    $("#sleep-warning").html(tamagotchi.sleepWarning);


    $("#statboard").show();
    event.preventDefault();
  });

  $("#feed-button").click(function () {
    tamagotchi.feedTamagotchi();
    // $("#user-food").html(tamagotchi.food);
    console.log(tamagotchi.food);
  })

  $("#play-button").click(function () {
    tamagotchi.playTamagotchi();
    // $("#user-play").html(tamagotchi.play);
    console.log(tamagotchi.play);
  })

  $("#sleep-button").click(function () {
    tamagotchi.sleepTamagotchi();
    $("#feed-button").addClass("sleeping");
    $("#play-button").addClass("sleeping");
    $("#sleep-button").addClass("sleeping");
    $("#user-sleep").html(tamagotchi.sleep);
    console.log(tamagotchi.sleep);
  });

  $("#modal-button").click(function () {
    tamagotchi.calculateSleep();
    tamagotchi.calculateFood();
    tamagotchi.calculatePlay();
    setInterval(() => {
      $("#user-food").html(tamagotchi.food);
      if (tamagotchi.food > 30) {
        $("#food-warning").html("");
      } else if (tamagotchi.food <= 30) {
        $("#food-warning").html(tamagotchi.foodWarning);
      }
      $("#user-play").html(tamagotchi.play);
      if (tamagotchi.play > 30) {
        $("#play-warning").html("");
      } else if (tamagotchi.play <= 30) {
        $("#play-warning").html(tamagotchi.playWarning);
      }
      $("#user-sleep").html(tamagotchi.sleep);
      $("#sleep-warning").html(tamagotchi.sleepWarning);
      if (tamagotchi.sleeping === false) {
        $("#feed-button").removeClass("sleeping");
        $("#play-button").removeClass("sleeping");
        $("#sleep-button").removeClass("sleeping");
      } else if (tamagotchi.sleeping === true) {
        $("#feed-button").addClass("sleeping");
        $("#play-button").addClass("sleeping");
        $("#sleep-button").addClass("sleeping");
      }
    }, 1000);
  });


});