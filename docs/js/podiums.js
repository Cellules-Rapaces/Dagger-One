// Chargement des données du podium

// Table des avions pris en compte
var aircraftTypes = [
    "FA-18C_hornet",
    "F-14B",
    "F-16C_50",
    "JF-17"
];

// Chargement data de meilleurs temps pour chaque avion
for (var i = 0; i < aircraftTypes.length; i++) {
    var aircraftType = aircraftTypes[i];
    var aircraftKey = aircraftType.replace('-', '_').replace(' ', '');

    (function(aircraftKey) {
        // Meilleur temps
        $.ajax({
            async: false,
            url: 'data/fastestPlayer_' + aircraftKey + '.txt',
            dataType: 'text',
            success: function(data) {
              if (data != "") {
                $('.FastestPlayer_' + aircraftKey).replaceWith('<h3 class="FastestPlayer_' + aircraftKey + ' text-center" style="margin-top: 8px;">' + data + '</h3>');
                $('.FastestPlayer_' + aircraftKey + '_pic').replaceWith('<img class="FastestPlayer_' + aircraftKey + '_pic img-thumbnail rounded mx-auto d-block" src="/images/pilot_' + data + '.jpg" height="100px" width="100px">');
              }
            }
        });

        $.ajax({
            async: false,
            url: 'data/fastestTimeH_' + aircraftKey + '.txt',
            dataType: 'text',
            success: function(data) {
              if (data != "") {
                $('.FastestTime_' + aircraftKey).replaceWith('<h4><span class="FastestTime_' + aircraftKey + ' badge bg-primary">' + data + '</span></h4>');
              }
            }
        });
    })(aircraftKey);
}
