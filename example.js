function main(){
    var bardata=[100,400,800,500,1600]
    var width = 500;
    var barHeight = 20;
    margin=1


    var graph= d3.select("body")
                    .append("svg")
                    .attr("width",width)
                    .attr("height", barHeight * bardata.length)
    var scale= d3.scaleLinear()
                    .domain([d3.min(bardata), d3.max(bardata)])
                    .range([50,500])
    var bar= graph.selectAll("g")
                    .data(bardata)
                    .enter().append("g")
                    .attr('transform', function (d, i){
                        return 'translate(0,' + i * barHeight +")";
                    });
    bar.append("rect")
            .attr('width',function(d){
            return scale(d) ;
    })                
            .attr('height', barHeight -margin)
    bar.append('text')
            .attr('x', function(d){
            return (scale(d));
    })
            .attr('y', barHeight /2)
            .attr('dy', '.35em')
            .text(function(d) {return d;});
    }