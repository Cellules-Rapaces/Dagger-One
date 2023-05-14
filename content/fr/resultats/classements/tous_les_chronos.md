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

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jquery.tablesorter/2.31.3/css/theme.default.min.css">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-csv/1.0.11/jquery.csv.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.tablesorter/2.31.3/js/jquery.tablesorter.min.js"></script>
<style>
    .pagination {
        margin-top: 10px;
    }
</style>

<div class="container">
    <div class="form-group">
        <label for="filter">Recherche:</label>
        <input type="text" class="form-control" id="filter">
    </div>
    <div class="table-responsive">
        <table class="table table-striped tablesorter" id="dataTable"></table>
    </div>
    <div class="text-center">
        <div class="pagination"></div>
    </div>
</div>

<script>
    const ITEMS_PER_PAGE = 10;

    $.tablesorter.addParser({
        id: 'customDate',
        is: function(s) {
            return false;
        },
        format: function(s) {
            return new Date(s).getTime();
        },
        type: 'numeric'
    });

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
                $("#dataTable").tablesorter({
                    headers: {
                        0: { sorter: 'customDate' }
                    }
                });
            }
        });

        $('#filter').on('keyup', function() {
            let value = $(this).val().toLowerCase();
            $('#dataTable tbody tr').filter(function() {
                $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
            });
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
