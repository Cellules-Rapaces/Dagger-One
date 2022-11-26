---
title: "JF-17 Rating"
description: ""
lead: "JF-17 Rating"
date: 2020-10-13T15:21:01+02:00
lastmod: 2020-10-13T15:21:01+02:00
draft: false
images: []
type: docs
menu:
  resultats:
    parent: "classements"
weight: 130
toc: true
icon: "jf-17-h"
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
  data-url="/data/en/elodf_1v1_classement_JF17_elo.json">
  <thead>
    <tr>
      <th data-field="Classement" data-sortable="true">Rating</th>
      <th data-field="Country" data-sortable="true">Country</th>
      <th data-field="Player">Pilot</th>
      <th data-field="ELO" data-sortable="true">ELO</th>
      <th data-field="Combats" data-sortable="true">Fights</th>
      <th data-field="Kill ratio" data-sortable="true">Kill ratio</th>
      <th data-field="LVL" data-sortable="true">Level</th>
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
