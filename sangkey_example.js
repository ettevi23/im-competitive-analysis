      google.charts.load('current', {'packages':['sankey']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'From');
        data.addColumn('string', 'To');
        data.addColumn('number', 'Weight');
        data.addRows([
          [ 'Supplier Management', 'Service 1', 2 ],
          [ 'Supplier Management', 'Service  2', 2 ],
          [ 'Supplier Management', 'Service 3', 2 ],
          [ 'Analytics', 'Service 1', 2 ],
          [ 'Inventory', 'Service 1', 9 ],
          [ 'B', 'Z', 4 ]
        ]);

        // Sets chart options.
        var options = {
          width: 800,
        };

        // Instantiates and draws our chart, passing in some options.
        var chart = new google.visualization.Sankey(document.getElementById('sankey_basic'));
        chart.draw(data, options);
      }
