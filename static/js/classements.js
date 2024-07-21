$(document).ready(function () {
  // Table des avions pris en compte
  var aircraftTypes = [
      "FA-18C_hornet",
      "F-14B",
      "F-16C_50",
      "JF-17",
      "MiG-21Bis",
      "Mirage-F1EE",
      "M-2000C",
      "AV8BNA",
  ];

  function buildPodium(aircraftType) {
    var aircraftKey = aircraftType.replace('-', '_').replace(' ', '');
    $.getJSON("/data/classement_" + aircraftKey + ".json", function (data) {
      var player = '<tbody>';

      var medals = ["/images/medal_silver.png", "/images/medal_bronz.png"];

      for (let i = 1; i <= 2; i++) {
        if (data[i]) {
          player += '<tr class="text-center align-middle">';
          player += '<td><img src="' + medals[i-1] + '" alt=""></td>';

          player += '<td>' +
              data[i]["Nom du joueur"] + '</td>';

          player += '<td>' +
              data[i]["Temps"] + '</td>';
          player += '</tr>';
        }
      }

      player += '</tbody>';

      //INSERTING ROWS INTO TABLE
      $('#table_' + aircraftKey).append(player);
    });
  }

  for (let i = 0; i < aircraftTypes.length; i++) {
    buildPodium(aircraftTypes[i]);
  }

});
