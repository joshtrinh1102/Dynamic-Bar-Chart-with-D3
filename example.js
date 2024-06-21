function main(){
    var bardata=[100, 420, 230, 850, 560, 925]
    var width = 500;
    var barHeight = 20;
    var margin=1


    var graph= d3.select("body")
                    .append("svg")
                    .attr("width",width)
                    .attr("height", barHeight * bardata.length)
    var xScale= d3.scaleLinear()
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
            return xScale(d) ;
    })                
            .attr('height', barHeight -margin)///Render bars and group elements based on scaled data
    bar.append('text')
            .attr('x', function(d){
            return (xScale(d));s
    })
            .attr('y', barHeight /2)
            .attr('dy', '.35em')
            .text(function(d) {return d;});//Add text labels to bar

    bar.selectAll("rect")
    //Implement transitions and hover effects for bars
        .on("mouseover", function() {
            d3.select(this)
            .transition()
            .duration(300)
            .attr("fill", "greenyellow"); 
    })
        .on("mouseout", function() {
        d3.select(this)
          .transition()
          .duration(300)
          .attr("fill", "turquoise"); 

    })
}