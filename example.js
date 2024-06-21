function main(){
    var bardata=[1,2,2,3]
    var width = 500;
    var barHeight = 20;
    var scaleFactor= 10 ;

    var graph= d3.select("body")
                    .append("svg")
                    .attr("width",width)
                    .attr("height", barHeight * bardata.length)
    var bar= graph.selectAll("g")
                    .data(bardata)
                    .enter().append("g")
                    .attr('transform', function (d, i){
                        return 'translate(0,' + i * barHeight +")";
                    });
    bar.append("rect")
            .attr('width',function(d){
            return d * scaleFactor;
    })                
            .attr('height', barHeight -1)
    bar.append('text')
            .attr('x', function(d){
            return (d*scaleFactor);
    })
            .attr('y', barHeight /2)
            .attr('dy', '.35em')
            .text(function(d) {return d;});
    }