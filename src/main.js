import { Tamagotchi } from './tamagotchi.js';
import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


$(document).ready(function () {
  let theImage = {};
  let tamagotchi;
  let celebrity;

  $("#start").click(function () {
    $("#landing").addClass("hidden");
    $("#start").hide();
    $("#pickAFriend").removeClass("hidden");
  });

  $("img").on("click", function () {
    celebrity = event.target.id;
    theImage.image = this.src;
    $(".name-form").removeClass("hidden");
    $("#celebrity").append($('<img src="' + theImage.image + '"></img>'));
    $("#pickAFriend").hide();
  });

  $("form").submit(function (event) {
    const name = $("#name").val();
    tamagotchi = new Tamagotchi(name, celebrity);
    $("#pickAFriend").hide;
    $(".name-form").hide();
    $("#celebrity-img").html('<img src="' + theImage.image + '"></img>');
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
    if (tamagotchi.sleeping === false) {
      fetch(`https://api.giphy.com/v1/gifs/random?api_key=16K2KFYaMNWT2AMqTX6XNq84YoY6GtGm&tag=${celebrity}&eating
    `)
        .then(function (response) {
          return response.json();
        })
        .then(function (jsonifiedResponse) {
          getElements(jsonifiedResponse);
        });
      const getElements = function (response) {
        $("#celebrity-img").html(`<img src="${response.data.images.original.url}"alt="gif"></img>`);
        setTimeout(() => {
          $("#celebrity-img").html('<img src="' + theImage.image + '"></img>');
        }, 2000);
      };
    }
  });

  $("#play-button").click(function () {
    tamagotchi.playTamagotchi();
    if (tamagotchi.sleeping === false) {
      fetch(`https://api.giphy.com/v1/gifs/random?api_key=16K2KFYaMNWT2AMqTX6XNq84YoY6GtGm&tag=${celebrity}&playing
    `)
        .then(function (response) {
          return response.json();
        })
        .then(function (jsonifiedResponse) {
          getElements(jsonifiedResponse);
        });
      const getElements = function (response) {
        $("#celebrity-img").html(`<img src="${response.data.images.original.url}"alt="gif"></img>`);
        setTimeout(() => {
          $("#celebrity-img").html('<img src="' + theImage.image + '"></img>');
        }, 2000);
      };
    }
  });

  $("#sleep-button").click(function () {
    tamagotchi.sleepTamagotchi();
    if (tamagotchi.sleeping === false) {
      $("#feed-button").addClass("sleeping");
      $("#play-button").addClass("sleeping");
      $("#sleep-button").addClass("sleeping");
      $("#user-sleep").html(tamagotchi.sleep);
      fetch(`https://api.giphy.com/v1/gifs/random?api_key=16K2KFYaMNWT2AMqTX6XNq84YoY6GtGm&tag=${celebrity}&sleeping
    `)
        .then(function (response) {
          return response.json();
        })
        .then(function (jsonifiedResponse) {
          getElements(jsonifiedResponse);
        });
      const getElements = function (response) {
        $("#celebrity-img").html(`<img src="${response.data.images.original.url}"alt="gif"></img>`);
        setTimeout(() => {
          $("#celebrity-img").html('<img src="' + theImage.image + '"></img>');
        }, 2000);
      };
    }
  });

  $("#modal-button").click(function () {
    tamagotchi.calculateSleep();
    tamagotchi.calculateFood();
    tamagotchi.calculatePlay();
    setInterval(() => {
      $("#user-food").html(tamagotchi.food);
      $("#user-food").css("width", tamagotchi.food + "%");
      if (tamagotchi.food > 30) {
        $("#food-warning").html("");
      } else if (tamagotchi.food <= 30) {
        $("#food-warning").html(tamagotchi.foodWarning);
        if (tamagotchi.food === 0) {
          setTimeout(() => {
            tamagotchi.sleep = 0;
            tamagotchi.play = 0;
            $("#statboard").hide();
            $("#death-modal").show();
          }, 2000);
        }
      }
      $("#user-play").html(tamagotchi.play);
      $("#user-play").css("width", tamagotchi.play + "%");
      if (tamagotchi.play > 30) {
        $("#play-warning").html("");
      } else if (tamagotchi.play <= 30) {
        $("#play-warning").html(tamagotchi.playWarning);
      }
      $("#user-sleep").html(tamagotchi.sleep);
      $("#user-sleep").css("width", tamagotchi.sleep + "%");
      if (tamagotchi.sleep > 30) {
        $("#sleep-warning").html("");
      } else if (tamagotchi.sleep <= 30) {
        $("#sleep-warning").html(tamagotchi.sleepWarning);
      }
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

  $("#again").click(function () {
    window.location.reload();
  });
});
