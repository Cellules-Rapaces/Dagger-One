---
title: "⏱️ Tous les chronos"
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
weight: 80
toc: true
icon: ""
---

<!-- Flag icons -->

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jquery.tablesorter/2.31.3/css/theme.default.min.css">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-csv/1.0.11/jquery.csv.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.4/moment.min.js"></script>

<style>
    .pagination {
        margin-top: 10px;
    }
    .sort-indicator {
        cursor: pointer;
    }
    .sort-asc, .sort-desc {
        display: none;
    }
    .sort-asc.active, .sort-desc.active {
        display: inline;
    }
</style>

<div class="container">
    <div class="form-group">
        <label for="filter">Filtrer :</label>
        <input type="text" class="form-control" id="filter">
    </div>
    <div class="table-responsive">
        <table class="table table-striped" id="dataTable"></table>
    </div>
    <div class="text-center">
        <div class="pagination"></div>
    </div>
</div>

<script>
    const ITEMS_PER_PAGE = 10;
    let csvData = [];
    let filteredData = [];
    let sortedBy = 0;  // Indique que nous trions par la première colonne
    let sortDirection = -1;  // Indique que nous trions en ordre descendant

    $(document).ready(function() {
        $.ajax({
            url: "/data/resultat.csv",
            dataType: "text",
            success: function(data) {
                csvData = $.csv.toArrays(data);
                filteredData = csvData.slice(1); // copy all except headers
                filteredData.sort((a, b) => {
                    let valA = a[sortedBy];
                    let valB = b[sortedBy];
                    if (!isNaN(valA) && !isNaN(valB)) {
                        valA = Number(valA);
                        valB = Number(valB);
                    }
                    if (valA < valB) {
                        return -sortDirection;
                    }
                    if (valA > valB) {
                        return sortDirection;
                    }
                    return 0;
                });
                renderTable(csvData, 1);
            }
        });

        $('#filter').on('keyup', function() {
            let value = $(this).val().toLowerCase();
            filteredData = csvData.slice(1).filter(row => row.join(' ').toLowerCase().includes(value));

            // Après la mise à jour des données filtrées, réappliquer le tri
            filteredData.sort((a, b) => {
                let valA = a[sortedBy];
                let valB = b[sortedBy];
                if (sortedBy === 0) {  // Si nous trions par la première colonne (timestamp)
                    valA = new Date(valA);
                    valB = new Date(valB);
                } else if (!isNaN(valA) && !isNaN(valB)) {
                    valA = Number(valA);
                    valB = Number(valB);
                }
                if (valA < valB) {
                    return -sortDirection;
                }
                if (valA > valB) {
                    return sortDirection;
                }
                return 0;
            });

            renderTable(filteredData, 1);
        });
    });

    function renderTable(data, pageNum) {
        let html = '<thead><tr>';
        for (let j = 0; j < csvData[0].length; j++) {
            html += '<th class="sort-indicator" data-column="' + j + '">' + csvData[0][j];
            html += '<span class="sort-asc' + (j === sortedBy && sortDirection === 1 ? ' active' : '') + '">&#9650;</span>';
            html += '<span class="sort-desc' + (j === sortedBy && sortDirection === -1 ? ' active' : '') + '">&#9660;</span>';
            html += '</th>';
        }
        html += '</tr></thead><tbody>';
        let start = (pageNum - 1) * ITEMS_PER_PAGE;
        let end = start + ITEMS_PER_PAGE;
        for (let i = start; i < end && i < filteredData.length; i++) {
            html += '<tr>';
            for (let j = 0; j < filteredData[i].length; j++) {
                let cellValue = filteredData[i][j];
                if (j === 0) {  // Si c'est la première colonne (timestamp)
                    cellValue = moment(cellValue).format('DD/MM/YYYY HH:mm:ss');
                }
                html += '<td>' + cellValue + '</td>';
            }
            html += '</tr>';
        }
        html += '</tbody>';

        $('#dataTable').html(html);
        createPagination(filteredData.length, pageNum);

        $('#dataTable').html(html);
        createPagination(filteredData.length, pageNum);

        // Attache les gestionnaires d'événements de tri aux en-têtes de colonnes
        $('.sort-indicator').on('click', function() {
            let column = $(this).data('column');
            if (sortedBy === column) {
                sortDirection = -sortDirection;
            } else {
                sortedBy = column;
                sortDirection = 1;
            }
            filteredData.sort((a, b) => {
                let valA = a[column];
                let valB = b[column];
                if (!isNaN(valA) && !isNaN(valB)) {
                    valA = Number(valA);
                    valB = Number(valB);
                }
                if (valA < valB) {
                    return -sortDirection;
                }
                if (valA > valB) {
                    return sortDirection;
                }
                return 0;
            });
            renderTable(csvData, 1);
        });
    }

    function createPagination(rows, currentPage) {
        let pages = Math.ceil(rows / ITEMS_PER_PAGE);
        let html = '';
        for (let i = 1; i <= pages; i++) {
            if (i === currentPage) {
                html += '<span class="page-num active">' + i + '</span>';
            } else {
                html += '<span class="page-num">' + i + '</span>';
            }
        }
        $('.pagination').html(html);

        $('.page-num').on('click', function() {
            let pageNum = $(this).text();
            renderTable(csvData, Number(pageNum));
        });
    }
</script>

<script src="moment.js"></script>
<script>
    moment().format();
</script>
