function print(data) {
    var divs = d3.select('body').selectAll('div').data(data).enter().append('div');
    divs
        .text(function(d){
            return d.text;
        })
        .style('background-color',function(d){
            return d3.rgb(d.red,d.green,d.red);
        } );
}