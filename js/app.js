'use strict'

$(document).ready(function () {
  $.get('DATA/page-1.json')
    .then(data => {
      data.image.array.forEach(image => {

      });
    })
});

