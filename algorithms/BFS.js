//Version for unweighted graph

function getDataFromAdjList (adjList) {
    var graph = adjList.slice().map (x => x = {adj: x,
                                 color: 0,
                                 parent: null,
                                 distance: Number.MAX_SAFE_INTEGER
                                });
    return graph;
}

function BFS (graph, node) {
    graph[node].color = 1;
    graph[node].distance = 0;
    var Q = new Array ();
    Q.push(node);
    while (Q.length > 0) {
        var u = Q.shift();
        graph[u].adj.forEach (v => {
            if (graph[v].color === 0) {
                graph[v].color = 1;
                graph[v].distance = graph[u].distance + 1;
                graph[v].parent = u;
                Q.push(v);
            }
        });
        u.color = 2;
    }
    return graph;
}

var list = [[1, 3], [0, 2], [1, 4], [0], [2]];
var ex1 = getDataFromAdjList (list);
ex1 = BFS(ex1, 0);
