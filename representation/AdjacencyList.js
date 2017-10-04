//Example
var adjList = [[1, 3],
               [0, 2],
               [1, 3],
               [0, 2]];

function edgeListToAdjList(edgeList, isDirected, isWeighted) {
    isDirected = isDirected || false;
    isWeighted = isWeighted || false;

    var countVertex = edgeList.reduce(((x,y)=>x=Math.max(x, y[0], y[1])),0)+1;
    var adjList = new Array (countVertex);
    for (var i = 0; i < adjList.length; i++) adjList[i] = new Array ();
    edgeList.forEach(x => {
        adjList[x[0]].push((isWeighted) ? {to: x[1], weight: x[2]} : x[1]);
        if (!isDirected) adjList[x[1]].push((isWeighted) ? {to: x[0], weight: x[2]} : x[0]);
    });
    return adjList;
}

var edgeList = [[0, 1],[0, 3],[1, 2],[2, 4]];
var ex1 = edgeListToAdjList (edgeList);
