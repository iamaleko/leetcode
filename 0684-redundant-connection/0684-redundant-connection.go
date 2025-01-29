import (
  "maps"
  "iter"
  "slices"
)

func buildGraph(edges [][]int) map[int]map[int]bool {
  graph := map[int]map[int]bool{}
  for _, edge := range edges {
    a, b := edge[0], edge[1]
    if node, ok := graph[a]; ok {
      node[b] = true
    } else {
      graph[a] = map[int]bool{ b: true }
    }
    if node, ok := graph[b]; ok {
      node[a] = true
    } else {
      graph[b] = map[int]bool{ a: true }
    }
  }
  return graph
}

func first[T any](it iter.Seq[T]) *T {
  next, stop := iter.Pull(it)
  defer stop()
  el, _ := next()
  return el
}

func trimGraph(graph map[int]map[int]bool) {
  leafs := []int{}
  for node := range graph {
    if len(graph[node]) == 1 {
      leafs = append(leafs, node)
    }
  }
  for len(leafs) > 0 {
    ln := len(leafs) - 1
    leaf := leafs[ln]
    leafs = leafs[:ln]
    node := first[int](maps.Keys(graph[leaf]))
    delete(graph[node], leaf)
    if len(graph[node]) == 1 {
      leafs = append(leafs, node)
    }
    delete(graph, leaf)
  }
}

func findRedundantConnection(edges [][]int) []int {
  graph := buildGraph(edges)
  trimGraph(graph)
  for _, edge := range slices.Backward(edges) {
    a, b := edge[0], edge[1]
    if _, ok := graph[a][b]; ok {
      return []int{a, b}
    }
  }
  return []int{}
}
        