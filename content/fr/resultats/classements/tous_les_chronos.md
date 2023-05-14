---
title: "Tous les chronos"
description: ""
lead: "Tous les chronos"
date: 2020-10-13T15:21:01+02:00
lastmod: 2020-10-13T15:21:01+02:00
draft: false
images: []
type: docs
menu:
  resultats:
    parent: "classements"
weight: 50
toc: true
icon: "chrono"
---

<!-- Flag icons -->
<link href="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/6.6.6/css/flag-icons.min.css" rel="stylesheet">
<!-- Styles jQuery DataTables -->
<link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/1.13.4/css/jquery.dataTables.min.css">
<!-- jQuery dataTables 1.10.24 -->
<script type="text/javascript" charset="utf8" src="https://cdn.datatables.net/1.13.4/js/jquery.dataTables.min.js"></script>

<div id="chronos" class="pb-4">
  <h2 class="py-2">Tous les temps</h2>
  <script type="text/javascript" src="https://d3js.org/d3.v3.min.js"></script>
  <script type="text/javascript">
    d3.csv("data/resultat.csv", function(error, data) {
      if (error) throw error;

      var sortAscending = true;
      var table = d3.select('#chronos').append('table').attr('class', 'display').attr('id', 'tchronos');
      // var titles = d3.keys(data[0]).filter(word => word != "TotalTime");
      var titles = d3.keys(data[0]).slice(0, 5).concat(d3.keys(data[0]).slice(7, 8));
      var headers = table.append('thead').append('tr')
                       .selectAll('th')
                       .data(titles).enter()
                       .append('th')
                       .text(function (d) {
                          return d;
                        })
                       .attr('scope', 'col')


      var rows = table.append('tbody').selectAll('tr')
                   .data(data).enter()
                   .append('tr');
      rows.selectAll('td')
        .data(function (d) {
             return titles.map(function (k) {
             return { 'value': d[k], 'name': k};
          });
        }).enter()
        .append('td')
        .attr('data-th', function (d) {
          return d.name;
        })
        .text(function (d) {
          return d.value;
        });
    });
  </script>
</div>

<!-- init jQuery dataTable -->
<script>
  $(window).on( "load", function () {
    $('#tchronos').DataTable( {
      "pageLength": 30
    } );
  } );
</script>

<script src="https://cdn.jsdelivr.net/npm/jquery/dist/jquery.min.js"></script>
<script src="https://unpkg.com/bootstrap-table@1.20.1/dist/bootstrap-table.min.js"></script>
