// Chargement des données de stats globales

// Nombre de combats
$.ajax({
        async:false,
        url: '../data/elodf_1v1_stats_fights.txt',
        dataType: 'text',
        success: function(data)
        {
          if (data != "") {
            $('.stats_fights').replaceWith('<span class="stats_fights badge bg-primary">💥Combatte: ' + data + '</span>');
          }
        }
        });

// Nombre de participants
$.ajax({
        async:false,
        url: '../data/elodf_1v1_stats_fighters.txt',
        dataType: 'text',
        success: function(data)
        {
          if (data != "") {
            $('.stats_fighters').replaceWith('<span class="stats_fighters badge bg-secondary"><img src="../images/fighter_pilot_30.png" height="80%">Combattenti: ' + data + '</span>');
          }
        }
        });
