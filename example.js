function main(){
    var data=[1,2,2,3]
    var width = 500;
    var barHeight = 20;

    var graph= d3.select("body")
                    .append("svg")
                    .attr("width",width)
                    .attr("height", barHeight *data.length)

    }