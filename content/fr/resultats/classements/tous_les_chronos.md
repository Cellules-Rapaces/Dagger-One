---
title: "Tous les chronos"
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
weight: 50
toc: true
icon: "chrono"
---

<!-- Flag icons -->
<link href="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/6.6.6/css/flag-icons.min.css" rel="stylesheet">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-csv/1.0.11/jquery.csv.min.js"></script>
<style>
    .pagination {
        margin-top: 10px;
    }
</style>

<div class="container">
    <div class="table-responsive">
        <table class="table table-striped" id="dataTable"></table>
    </div>
    <div class="text-center">
        <div class="pagination"></div>
    </div>
</div>

<script>
    const ITEMS_PER_PAGE = 10;

    $(document).ready(function() {
        $.ajax({
            url: "/data/resultat.csv",
            dataType: "text",
            success: function(data) {
                var csvData = $.csv.toArrays(data);
                var html = '<thead><tr>';
                for (let j = 0; j < csvData[0].length; j++) {
                    html += '<th>' + csvData[0][j] + '</th>';
                }
                html += '</tr></thead><tbody>';
                for (let i = 1; i < csvData.length; i++) {
                    html += '<tr>';
                    for (let j = 0; j < csvData[i].length; j++) {
                        html += '<td>' + csvData[i][j] + '</td>';
                    }
                    html += '</tr>';
                }
                html += '</tbody>';
                $('#dataTable').append(html);
                createPagination(csvData.length);
            }
        });
    });

    function createPagination(rows) {
        let pages = Math.ceil(rows / ITEMS_PER_PAGE);
        for (let i = 1; i <= pages; i++) {
            $('.pagination').append('<span class="page-num">' + i + '</span>');
        }
        $('.page-num').on('click', function() {
            let pageNum = $(this).text();
            let start = (pageNum - 1) * ITEMS_PER_PAGE;
            let end = start + ITEMS_PER_PAGE;
            $('tbody tr').hide();
            $('tbody tr').slice(start, end).show();
        });
        $('.page-num').first().click();
    }
</script>

<script src="https://unpkg.com/bootstrap-table@1.20.1/dist/bootstrap-table.min.js"></script>
