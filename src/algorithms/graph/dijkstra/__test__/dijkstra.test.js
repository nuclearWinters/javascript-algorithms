import GraphVertex from "../../../../data-structures/graph/GraphVertex";
import GraphEdge from "../../../../data-structures/graph/GraphEdge";
import Graph from "../../../../data-structures/graph/Graph";
import dijkstra from "../dijkstra";

describe("dijkstra", () => {
  it("should find minimum paths to all vertices for undirected graph", () => {
    const vertexV1 = new GraphVertex("V1");
    const vertexV2 = new GraphVertex("V2");
    const vertexV3 = new GraphVertex("V3");
    const vertexV4 = new GraphVertex("V4");
    const vertexV5 = new GraphVertex("V5");
    const vertexV6 = new GraphVertex("V6");
    const vertexV7 = new GraphVertex("V7");

    const edgeV1V2 = new GraphEdge(vertexV1, vertexV2, 5);
    const edgeV2V3 = new GraphEdge(vertexV2, vertexV3, 1);
    const edgeV3V4 = new GraphEdge(vertexV3, vertexV4, 1);
    const edgeV4V6 = new GraphEdge(vertexV4, vertexV6, 13);
    const edgeV1V4 = new GraphEdge(vertexV1, vertexV4, 12);
    const edgeV1V3 = new GraphEdge(vertexV1, vertexV3, 7);
    const edgeV2V5 = new GraphEdge(vertexV2, vertexV5, 6);
    const edgeV3V6 = new GraphEdge(vertexV3, vertexV6, 10);
    const edgeV5V6 = new GraphEdge(vertexV5, vertexV6, 2);
    const edgeV5V7 = new GraphEdge(vertexV5, vertexV7, 7);
    const edgeV6V7 = new GraphEdge(vertexV6, vertexV7, 3);
    const edgeV3V5 = new GraphEdge(vertexV3, vertexV5, 5);

    const graph = new Graph(true);
    graph
      .addEdge(edgeV1V2)
      .addEdge(edgeV2V3)
      .addEdge(edgeV3V4)
      .addEdge(edgeV4V6)
      .addEdge(edgeV1V4)
      .addEdge(edgeV1V3)
      .addEdge(edgeV2V5)
      .addEdge(edgeV3V6)
      .addEdge(edgeV5V6)
      .addEdge(edgeV5V7)
      .addEdge(edgeV6V7)
      .addEdge(edgeV3V5);

    const { distances } = dijkstra(graph, vertexV1);

    console.log(distances);

    expect(distances).toEqual({
      V1: 0,
      V2: 5,
      V3: 6,
      V4: 7,
      V6: 13,
      V5: 11,
      V7: 16
    });
  });
});
