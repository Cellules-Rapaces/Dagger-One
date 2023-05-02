// Chargement des données du podium

// Meilleur temps Mirage F-18
$.ajax({
        async:false,
        url: 'data/fastestPlayer_F18.txt',
        dataType: 'text',
        success: function(data)
        {
          if (data != "") {
            $('.FastestPlayerF18').replaceWith('<h3 class="FastestPlayerF18 text-center" style="margin-top: 8px;">' + data + '</h3>');
            $('.FastestPlayerF18_pic').replaceWith('<img class="FastestPlayerF18_pic img-thumbnail rounded mx-auto d-block" src="/images/pilot_' + data + '.jpg" height="100px" width="100px">');
          }
        }
        });

$.ajax({
        async:false,
        url: 'data/fastestTimeH_F18.txt',
        dataType: 'text',
        success: function(data)
        {
          if (data != "") {
            $('.FastestTimeF18').replaceWith('<h4><span class="FastestTimeF18 badge bg-warning text-dark">' + data + '</span></h4>');
          }
        }
        });

// Meilleur temps F-14
$.ajax({
        async:false,
        url: 'data/fastestPlayer_F14.txt',
        dataType: 'text',
        success: function(data)
        {
          if (data != "") {
            $('.FastestPlayerF14').replaceWith('<h3 class="FastestPlayerM2000 text-center" style="margin-top: 8px;">' + data + '</h3>');
            $('.FastestPlayerF14_pic').replaceWith('<img class="FastestPlayerF14_pic img-thumbnail rounded mx-auto d-block" src="/images/pilot_' + data + '.jpg" height="100px" width="100px">');
          }
        }
        });

$.ajax({
        async:false,
        url: 'data/fastestTimeH_F14.txt',
        dataType: 'text',
        success: function(data)
        {
          if (data != "") {
            $('.FastestTimeF14').replaceWith('<h4><span class="FastestTimeF14 badge bg-warning text-dark">' + data + '</span></h4>');
          }
        }
        });

// Meilleur temps F-16
$.ajax({
        async:false,
        url: 'data/fastestPlayer_F16.txt',
        dataType: 'text',
        success: function(data)
        {
          if (data != "") {
            $('.FastestPlayerF16').replaceWith('<h3 class="FastestPlayerM2000 text-center" style="margin-top: 8px;">' + data + '</h3>');
            $('.FastestPlayerF16_pic').replaceWith('<img class="FastestPlayerF16_pic img-thumbnail rounded mx-auto d-block" src="/images/pilot_' + data + '.jpg" height="100px" width="100px">');
          }
        }
        });

$.ajax({
        async:false,
        url: 'data/fastestTimeH_F16.txt',
        dataType: 'text',
        success: function(data)
        {
          if (data != "") {
            $('.FastestTimeF16').replaceWith('<h4><span class="FastestTimeF16 badge bg-warning text-dark">' + data + '</span></h4>');
          }
        }
        });

// Meilleur temps JF-17
$.ajax({
        async:false,
        url: 'data/fastestPlayer_JF17.txt',
        dataType: 'text',
        success: function(data)
        {
          if (data != "") {
            $('.FastestPlayerJF17').replaceWith('<h3 class="FastestPlayerM2000 text-center" style="margin-top: 8px;">' + data + '</h3>');
            $('.FastestPlayerJF17_pic').replaceWith('<img class="FastestPlayerJF17_pic img-thumbnail rounded mx-auto d-block" src="/images/pilot_' + data + '.jpg" height="100px" width="100px">');
          }
        }
        });

$.ajax({
        async:false,
        url: 'data/fastestTimeH_JF17.txt',
        dataType: 'text',
        success: function(data)
        {
          if (data != "") {
            $('.FastestTimeJF17').replaceWith('<h4><span class="FastestTimeJF17 badge bg-warning text-dark">' + data + '</span></h4>');
          }
        }
        });
