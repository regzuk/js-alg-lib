//Version for unweighted graph

function getDataFromAdjList (adjList) {
    var graph = adjList.slice().map (x => x = {adj: x,
                                 color: 0,
                                 parent: null,
                                 d: Number.MAX_SAFE_INTEGER,
                                 f: 0
                                });
    return graph;
}

function DFS (graph) {
    var time = 0;
    var dfsVisit  = function (g, node) {
        time++;
        node.color = 1;
        node.d = time;
        node.adj.forEach (v => {
            if (g[v].color === 0) {
                g[v].color = 1;
                g[v].parent = g.indexOf(node);
                dfsVisit(g, g[v]);
            }
        });
        node.color = 2;
        time++;
        node.f = time;
    };
    graph.forEach (u => {
        if (u.color === 0) {
            dfsVisit(graph, u);
        }
    });
    return graph;
}

var list = [[1, 3], [0, 2], [1, 4], [0], [2]];
var ex1 = getDataFromAdjList (list);
ex1 = DFS(ex1);
