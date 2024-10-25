type TrieNode = {
  subfolders: Map<string, TrieNode>;
  isFolder: boolean;    
} 
function removeSubfolders(paths: string[]): string[] {
  paths.sort((a,b) => a.length - b.length);
  const root: TrieNode = {
    subfolders: new Map(),
    isFolder: false,
  };
  return paths.filter((path) => {
    let node = root;
    for (const folder of path.slice(1).split('/')) {
      if (node.isFolder) return false;
      if (node.subfolders.has(folder)) {
        node = node.subfolders.get(folder);
      } else {
        node.subfolders.set(folder, node = {
          subfolders: new Map(),
          isFolder: false,
        })
      }
    }
    node.isFolder = true;
    return true;
  });
};