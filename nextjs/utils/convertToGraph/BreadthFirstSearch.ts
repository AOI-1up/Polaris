import { GraphObject } from "@/types/graph";

const sortGraph = (root: GraphObject, graph: GraphObject[]) => {
  const sortedGraph: GraphObject[] = [];
  const queue = [root];
  const visited = new Set();

  while (queue.length > 0) {
    const currentNode = queue.shift();
    if (currentNode && !visited.has(currentNode.id)) {
      visited.add(currentNode.id);
      sortedGraph.push(currentNode);
      currentNode.relation &&
        currentNode.relation.forEach((id) => {
          const relatedNode = graph.find((node) => node.id === id);
          if (relatedNode) {
            queue.push(relatedNode);
          }
        });
    }
  }

  graph.forEach((node) => {
    if (!visited.has(node.id)) {
      sortedGraph.push(node);
    }
  });

  return sortedGraph;
};

export const BreadthFirstSearch = (graph: GraphObject[]) => {
  // 根ノードを Region に設定
  const copyGraph = graph;
  const root = copyGraph.find((element) => element.service === "Region");
  if (!root) return graph;

  // Graph を幅優先探索する
  const sortedGraph = sortGraph(root, graph);
  return sortedGraph;
};
