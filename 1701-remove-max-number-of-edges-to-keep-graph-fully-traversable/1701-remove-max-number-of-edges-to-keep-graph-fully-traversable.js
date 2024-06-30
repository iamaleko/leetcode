class UnionFind {
  constructor() {
    this.parent = {}
    this.size = 0
    this.sets = 0
  }
  has(val) {
    return val in this.parent;
  }
  add(val) {
    if (!this.has(val)) {
      this.parent[val] = val
      this.sets++
      this.size++
    }
    return val
  }
  find(val) {
    while (this.parent[val] !== val) {
      val = this.parent[val] = this.parent[this.parent[val]]
    }
    return val
  }
  union(a, b) {
    a = this.has(a) ? this.find(a) : this.add(a)
    b = this.has(b) ? this.find(b) : this.add(b)
    if (a !== b) {
      this.sets--
      if (Math.random() < .5) {
        this.parent[a] = b
      } else {
        this.parent[b] = a
      }
    }
  }
}

const maxNumEdgesToRemove = function(n, edges) {
  let res = 0
  const alice = new UnionFind(),
        bob = new UnionFind()
  for (const [type, a, b] of edges) {
    if (type === 3) {
      if (
        alice.has(a) && alice.has(b) && alice.find(a) === alice.find(b) &&
        bob.has(a) && bob.has(b) && bob.find(a) === bob.find(b)
      ) {
        res++
      } else {
        alice.union(a, b)
        bob.union(a, b)
      }
    }
  }
  for (const [type, a, b] of edges) {
    if (type === 1) {
      if (alice.has(a) && alice.has(b) && alice.find(a) === alice.find(b)) {
        res++
      } else {
        alice.union(a, b)
      }
    } else if (type === 2) {
      if (bob.has(a) && bob.has(b) && bob.find(a) === bob.find(b)) {
        res++
      } else {
        bob.union(a, b)
      }
    }
  }
  
  return alice.size < n || bob.size < n || alice.sets > 1 || bob.sets > 1 ? -1 : res
};