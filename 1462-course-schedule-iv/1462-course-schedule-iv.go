import (
  "maps"
)

func flatten(node int, graph map[int]map[int]bool, flattened map[int]bool) map[int]bool {
  subnodes, ok := graph[node]
  if ok {
    if _, ok := flattened[node]; !ok {
      extend := map[int]bool{}
      for subnode := range subnodes {
        maps.Insert(extend, maps.All(flatten(subnode, graph, flattened)))
      }
      maps.Insert(subnodes, maps.All(extend))
      flattened[node] = true   
    }
  }
  return subnodes
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
    if _, ok := graph[node]; ok {
      ans[i] = flatten(node, graph, flattened)[target]
    } else {
      ans[i] = false
    }
  }

  return ans
}