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
  });

  $("form").submit(function() {
    const name = $("#name").val();
    let tamagotchi = new Tamagotchi(name, celebrity);
    console.log(tamagotchi);
  });


});