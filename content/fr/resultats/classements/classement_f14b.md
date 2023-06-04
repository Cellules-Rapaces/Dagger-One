---
title: "Classement F-14B"
description: ""
lead: ""
date: 2020-10-13T15:21:01+02:00
lastmod: 2020-10-13T15:21:01+02:00
draft: false
images: []
type: docs
menu:
  resultats:
    parent: "classements"
weight: 10
toc: true
icon: "f-14-h"
---

<!-- Flag icons -->
<link href="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/6.6.6/css/flag-icons.min.css" rel="stylesheet">

<div class="table-responsive">
<table
  id="table"
  data-toggle="table"
  data-search="true"
  data-data-type="text"
  data-pagination="true"
  data-page-size="25"
  data-response-handler="responseHandler"
  data-url="/data/classement_F_14B.json">
  <thead>
    <tr>
      <th data-field="Rang" data-sortable="true">Classement</th>
      <th data-field="Nom du joueur">Pilote</th>
      <th data-field="Temps" data-sortable="true">Temps</th>
      <th data-field="Temps intermédiaire1 (s)" data-sortable="true">Temps Gate2</th>
      <th data-field="Temps intermédiaire2 (s)" data-sortable="true">Temps Gate3</th>
      <th data-field="Temps intermédiaire3 (s)" data-sortable="true">Temps Gate4</th>
      <th data-field="Temps intermédiaire4 (s)" data-sortable="true">Temps Gate5</th>
      <th data-field="Temps intermédiaire5 (s)" data-sortable="true">Temps Gate6</th>
      <th data-field="Bonus temps (s)" data-sortable="true">Bonus temps</th>
    </tr>
  </thead>
</table>
</div>

<script>
  function responseHandler(res) {
    return JSON.parse(res)
  }
</script>
<link rel="stylesheet" href="https://unpkg.com/bootstrap-table@1.20.1/dist/bootstrap-table.min.css">
<script src="https://cdn.jsdelivr.net/npm/jquery/dist/jquery.min.js"></script>
<script src="https://unpkg.com/bootstrap-table@1.20.1/dist/bootstrap-table.min.js"></script>
