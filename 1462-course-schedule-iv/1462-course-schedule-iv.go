import (
  "maps"
)

func flatten(node int, graph *map[int]map[int]bool, flattened *map[int]bool) map[int]bool {
  if !(*flattened)[node] {
    for ancestor := range maps.Keys((*graph)[node]) {
      maps.Insert((*graph)[node], maps.All(flatten(ancestor, graph, flattened)))
    }
    (*flattened)[node] = true   
  }
  return (*graph)[node]
}

func checkIfPrerequisite(numCourses int, prerequisites [][]int, queries [][]int) []bool {
  // build graph 
  graph := map[int]map[int]bool{}
  for _, pair := range prerequisites {
    node, target := pair[1], pair[0]
    if nodes, ok := graph[node]; ok {
      nodes[target] = true
    } else {
      graph[node] = map[int]bool{ target: true }
    }
  }

  // perform queries and flatten graph
  ans := make([]bool, len(queries))
  flattened := map[int]bool{}
  for i, pair := range queries {
    node, target := pair[1], pair[0]
    ans[i] = flatten(node, &graph, &flattened)[target]
  }

  return ans
}