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

func query(node int, target int, graph map[int]map[int]bool, flattened map[int]bool) bool {
  nodes, ok := graph[node]
  if !ok {
    return false
  }
  if _, ok := flattened[node]; !ok {
    flatten(node, graph, flattened)
  }
  return nodes[target]
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
    ans = append(ans, query(pair[1], pair[0], graph, flattened))
  }
  // fmt.Println(flattened, graph)
  return ans
}