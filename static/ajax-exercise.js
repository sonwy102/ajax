"use strict";


// PART 1: SHOW A FORTUNE

function showFortune(evt) {

    // TODO: get the fortune and show it in the #fortune-text div
    $.get('/fortune', (response) => {
        $('#fortune-text').html(response);
    })
}

$('#get-fortune-button').on('click', showFortune);




// PART 2: SHOW WEATHER

function showWeather(evt) {
    evt.preventDefault();

    let url = "/weather.json";
    let formData = {"zipcode": $("#zipcode-field").val()};


    // TODO: request weather with that URL and show the forecast in #weather-info
    $.get(url, formData, (response) => {
      $("#weather-info").html(response.forecast);
    });
}

$("#weather-form").on('submit', showWeather);




// PART 3: ORDER MELONS

function orderMelons(evt) {
    evt.preventDefault();

    // TODO: show the result message after your form
    // TODO: if the result code is ERROR, make it show up in red (see our CSS!)
    let formData = {
      "qty": $("#qty-field").val(),
      "melon_type": $("#melon-type-field").val()
    };

    $.post("/order-melons.json", formData, (response) => {
      if (response.code == 'OK') {
          $("#order-status").removeClass("order-error"); 
          $("#order-status").html(`<p> ${response.msg} </p>`);
      }
      else {
        $("#order-status").addClass("order-error");
        $("#order-status").html(`<p> ${response.msg} </p>`);
      };          
    });
}

$("#order-form").on("submit", orderMelons);


