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
    a, b := pair[1], pair[0]
    if nodes, ok := graph[a]; ok {
      nodes[b] = true
    } else {
      graph[a] = map[int]bool{ b: true }
    }
  }

  // perform queries and flatten graph
  ans := []bool{}
  flattened := map[int]bool{}
  for _, pair := range queries {
    if _, ok := graph[pair[1]]; ok {
      ans = append(ans, flatten(pair[1], graph, flattened)[pair[0]])
    } else {
      ans = append(ans, false)
    }
  }

  return ans
}