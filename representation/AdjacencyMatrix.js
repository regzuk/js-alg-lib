//Example
var adjMatrix = [[0,1,0,1],
                 [1,0,1,0],
                 [0,1,0,1],
                 [1,0,1,0]];

function edgeListToAdjMatrix(edgeList, isDirected, isWeighted) {
    isDirected = isDirected || false;
    isWeighted = isWeighted || false;
    
    var countVertex = edgeList.reduce(((x,y)=>x=(y[0] > x) ? y[0] :
                                            (y[1] > x) ? y[1] : x),0)+1;
    var adjMatrix = new Array (countVertex);
    // adjMatrix.forEach(x => {x = new Array(countVertex); return x;});
    for (var i = 0; i < adjMatrix.length; i++) adjMatrix[i] = new Array (countVertex);
    adjMatrix.map(x => x.fill(0));
    edgeList.forEach(x => {
        adjMatrix[x[0]][x[1]] = (isWeighted) ? x[2] : 1;
        if (!isDirected) adjMatrix[x[1]][x[0]] = adjMatrix[x[0]][x[1]];
    });
    return adjMatrix;
}

var edgeList = [[0, 1],[0, 3],[1, 2],[2, 4]];
var ex1 = edgeListToAdjMatrix (edgeList);
