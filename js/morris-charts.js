/**
 * Created by yuan on 2015/6/30.
 */
$(function(){
    Morris.Area({
        element: 'morris-area-chart',
        data: [
            {x: '2010 Q4', y: 3, z: 7},
            {x: '2011 Q1', y: 3, z: 4},
            {x: '2011 Q2', y: null, z: 1},
            {x: '2011 Q3', y: 2, z: 5},
            {x: '2011 Q4', y: 8, z: 2},
            {x: '2012 Q1', y: 4, z: 4}
        ],
        xkey: 'x',
        ykeys: ['y', 'z'],
        labels: ['Y', 'Z']
    }).on('click', function(i, row){
        console.log(i, row);
    });
    Morris.Bar({
        element: 'morris-bar-chart',
        data: [
            {x: '2011 Q1', y: 0},
            {x: '2011 Q2', y: 1},
            {x: '2011 Q3', y: 2},
            {x: '2011 Q4', y: 3},
            {x: '2012 Q1', y: 4},
            {x: '2012 Q2', y: 5},
            {x: '2012 Q3', y: 6},
            {x: '2012 Q4', y: 7},
            {x: '2013 Q1', y: 8}
        ],
        xkey: 'x',
        ykeys: ['y'],
        labels: ['Y'],
        barColors: function (row, series, type) {
            if (type === 'bar') {
                var red = Math.ceil(255 * row.y / this.ymax);
                return 'rgb(' + red + ',0,0)';
            }
            else {
                return '#000';
            }
        }
    });
    Morris.Donut({
        element: 'morris-dount-chart',
        data: [
            {value: 70, label: 'foo'},
            {value: 15, label: 'bar'},
            {value: 10, label: 'baz'},
            {value: 5, label: 'A really really long label'}
        ],
        formatter: function (x) { return x + "%"}
    }).on('click', function(i, row){
        console.log(i, row);
    });
})
