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
    if nodes, ok := graph[pair[1]]; ok {
      nodes[pair[0]] = true
    } else {
      graph[pair[1]] = map[int]bool{ pair[0]: true }
    }
  }

  // perform queries and flatten graph
  ans := make([]bool, len(queries))
  flattened := map[int]bool{}
  for i, pair := range queries {
    if _, ok := graph[pair[1]]; ok {
      ans[i] = flatten(pair[1], graph, flattened)[pair[0]]
    } else {
      ans[i] = false
    }
  }

  return ans
}