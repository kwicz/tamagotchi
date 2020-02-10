import { UserAge } from './userAge.js'; 
import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


$(document).ready(function() {

  $("#form").submit(function(event) {
    event.preventDefault();
    const age = $("#age").val();
    let cryoYears = $("#cryoYears").val();
    if (age >= 80) {
      if (cryoYears > 0) {
        alert("We apologize, but cryogenic freezing is currently only available for Earthlings under 80.");
      }
      cryoYears = 0;
    }
    let userAge = new UserAge (age, cryoYears);
    displayAges(userAge);
    $(".landing").addClass("hidden");
    $("#header").addClass("hidden");
  });

  function displayAges(userAge) {
    $(".pricing").removeClass("hidden");
    const mercury = userAge.mercurianCalculator();
    $("#mercury-results").append('<li>Your age on Mercury: ' + mercury[0] + '</li>');
    if (mercury[2]) {
      $("#mercury-results").append('<li>Bonus Mercurian years lived: ' + mercury[2] + '</li>');
    } else {
      $("#mercury-results").append('<li>Life expectancy: ' + mercury[1] + '</li>');
    }
    const venus = userAge.venutianCalculator();
    $("#venus-results").append('<li>Your age on Venus: ' + venus[0] + '</li>');
    if (venus[2]) {
      $("#venus-results").append('<li>Bonus Venutiun years lived: ' + venus[2] + '</li>');
    } else {
      $("#venus-results").append('<li>Life expectancy: ' + venus[1] + '</li>');
    }
    const mars = userAge.martianCalculator();
    $("#mars-results").append('<li>Your age on Mars: ' + mars[0] + '</li>');
    if (mars[2]) {
      $("#mars-results").append('<li>Bonus Martian years lived: ' + mars[2] + '</li>');
    } else {
      $("#mars-results").append('<li>Life expectancy: ' + mars[1] + '</li>');
    }
    const jupiter = userAge.jovianCalculator();
    $("#jupiter-results").append('<li>Your age on Jupiter: ' + jupiter[0] + '</li>');
    if (jupiter[2]) {
      $("#jupiter-results").append('<li>Bonus Jovian years lived: ' + jupiter[2] + '</li>');
    } else {
      $("#jupiter-results").append('<li>Life expectancy: ' + jupiter[1] + '</li>');
    }
  }

});