function getFirstSelector(selector){
  return document.querySelector(selector)
};
function nestedTarget(){
  return document.querySelector('#nested .target')
};

function increaseRankBy(n){
  const rankedList = document.querySelectorAll('.ranked-list')

  for (let i = 0, l = rankedList.length; i < l; i++){ let children = rankedList[i].children

  for (let a = 0, h = children.length; a < h; a++) {
      children[a].innerHTML = parseInt(children[a].innerHTML) + n
    }
  }

};

function deepestChild(){
    let node = document.getElementById('grand-node')
    let childNode = node.children[0]
  while (childNode){
    node = childNode
    childNode = node.children[0]
  }
  return node

};
