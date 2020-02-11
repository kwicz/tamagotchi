import { Tamagotchi } from './tamagotchi.js'; 
import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


$(document).ready(function() {
  let theImage = {};

  let celebrity = "";
  $("img").on("click", function() {
    celebrity = event.target.id;
    theImage.image = this.src;
    console.log(theImage.image);
    $("img").addClass("hidden");
    $(".name-form").removeClass("hidden");
    $("#celebrity").append($('<img src="' + theImage.image + '"></img>'));
    $("#pickAFriend").hide();
  });

  $("form").submit(function(event) {
    const name = $("#name").val();
    let tamagotchi = new Tamagotchi(name, celebrity);
    console.log(tamagotchi);
    $("#pickAFriend").hide;
    $(".name-form").hide();
    $("#celebrity-img").html('<img src="' + theImage.image + '"></img>');

    console.log()

    $("#celebrity-name").html(tamagotchi.celebrity);
    $("#user-food").html(tamagotchi.food);
    $("#food-warning").html(tamagotchi.foodWarning);
    $("#user-play").html(tamagotchi.play);
    $("#play-warning").html(tamagotchi.playWarning);
    $("#user-sleep").html(tamagotchi.sleep);
    $("#sleep-warning").html(tamagotchi.sleepWarning);


    $("#statboard").show();
    event.preventDefault();
  });


});