function main(){
    var bardata=[100, 420, 230, 850, 560, 925]
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
            .attr('height', barHeight -margin)///Render bars and group elements based on scaled data
    bar.append('text')
            .attr('x', function(d){
            return (scale(d));//Add text labels to bars
    })
            .attr('y', barHeight /2)
            .attr('dy', '.35em')
            .text(function(d) {return d;});

    bar.selectAll(".bar")
    //Implement transitions and hover effects for bars
    .on("mouseover",onMouseOver)
    .on("mouseout",onMouseOut)
    .transition()
    .ease(d3.easeLinear)
    .duration(500)
    .delay(function(d,i){return i * 50})
    //mouse over
    function onMouseOver(d,i){
        d3.select(this).attr('class','highlight')
        d3.select(this)
            .transition()
            .duration(500)
            .attr('width', xScale.bandwidth()+5)
            .attr('y', function(d){return yScale(d.value)-10;})
            .attr('height', function(d){return height - yScale(d.value) + 10;})
    }
    //mouseout
    function onMouseOut(d, i){
        d3.select(this).attr('class','bar')
        d3.select(this)
                .transition()
                .duration(500)
                .attr('width', xScale.bandwidth())
                .attr('y', function(d){return yScale(d.value);})
                .attr('height', function(d){return height - yScale(d.value);})
    }
    }