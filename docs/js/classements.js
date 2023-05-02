$(document).ready(function () {
  // Podium 2 et 3 classement F18 avec rvt
  $.getJSON("/data/classement_F18.json",
    function (data) {
      var player_F18 = '';

      player_F18 += '<tbody>';

      if (data[1]) {
        player_F18 += '<tr class="text-center align-middle">';
        player_F18 += '<td><img src="/images/medal_silver.png" alt=""></td>';

        player_F18 += '<td>' +
            data[1]["Nom du joueur"] + '</td>';

        player_F18 += '<td>' +
            data[1]["Temps"] + '</td>';
        player_F18 += '</tr>';
      }

      if (data[2]) {
        player_F18 += '<tr class="text-center align-middle">';
        player_F18 += '<td><img src="/images/medal_bronz.png" alt=""></td>';

        player_F18 += '<td>' +
            data[2]["Nom du joueur"] + '</td>';

        player_F18 += '<td>' +
            data[2]["Temps"] + '</td>';
        player_F18 += '</tr>';
      }

      player_F18 += '</tbody>';

      //INSERTING ROWS INTO TABLE
      $('#table_F18').append(player_F18);
  });

  // Podium 2 et 3 classement F14 avec rvt
  $.getJSON("/data/classement_F14.json",
    function (data) {
      var player_F14 = '';

      player_F14 += '<tbody>';

      if (data[1]) {
        player_F14 += '<tr class="text-center align-middle">';
        player_F14 += '<td><img src="/images/medal_silver.png" alt=""></td>';

        player_F14 += '<td>' +
            data[1]["Nom du joueur"] + '</td>';

        player_F14 += '<td>' +
            data[1]["Temps"] + '</td>';
        player_F14 += '</tr>';
      }

      if (data[2]) {
        player_F14 += '<tr class="text-center align-middle">';
        player_F14 += '<td><img src="/images/medal_bronz.png" alt=""></td>';

        player_F14 += '<td>' +
            data[2]["Nom du joueur"] + '</td>';

        player_F14 += '<td>' +
            data[2]["Temps"] + '</td>';
        player_F14 += '</tr>';
      }

      player_F14 += '</tbody>';

      //INSERTING ROWS INTO TABLE
      $('#table_F14').append(player_F14);
  });

  // Podium 2 et 3 classement F16 avec rvt
  $.getJSON("/data/classement_F16.json",
    function (data) {
      var player_F16 = '';

      player_F16 += '<tbody>';

      if (data[1]) {
        player_F16 += '<tr class="text-center align-middle">';
        player_F16 += '<td><img src="/images/medal_silver.png" alt=""></td>';

        player_F16 += '<td>' +
            data[1]["Nom du joueur"] + '</td>';

        player_F16 += '<td>' +
            data[1]["Temps"] + '</td>';
        player_F16 += '</tr>';
      }

      if (data[2]) {
        player_F16 += '<tr class="text-center align-middle">';
        player_F16 += '<td><img src="/images/medal_bronz.png" alt=""></td>';

        player_F16 += '<td>' +
            data[2]["Nom du joueur"] + '</td>';

        player_F16 += '<td>' +
            data[2]["Temps"] + '</td>';
        player_F16 += '</tr>';
      }

      player_F16 += '</tbody>';

      //INSERTING ROWS INTO TABLE
      $('#table_F16').append(player_F16);
  });

  // Podium 2 et 3 classement JF17 avec rvt
  $.getJSON("/data/classement_JF17.json",
    function (data) {
      var player_JF17 = '';

      player_JF17 += '<tbody>';

      if (data[1]) {
        player_JF17 += '<tr class="text-center align-middle">';
        player_JF17 += '<td><img src="/images/medal_silver.png" alt=""></td>';

        player_JF17 += '<td>' +
            data[1]["Nom du joueur"] + '</td>';

        player_JF17 += '<td>' +
            data[1]["Temps"] + '</td>';
        player_JF17 += '</tr>';
      }

      if (data[2]) {
        player_JF17 += '<tr class="text-center align-middle">';
        player_JF17 += '<td><img src="/images/medal_bronz.png" alt=""></td>';

        player_JF17 += '<td>' +
            data[2]["Nom du joueur"] + '</td>';

        player_JF17 += '<td>' +
            data[2]["Temps"] + '</td>';
        player_JF17 += '</tr>';
      }

      player_JF17 += '</tbody>';

      //INSERTING ROWS INTO TABLE
      $('#table_JF17').append(player_JF17);
  });

});
