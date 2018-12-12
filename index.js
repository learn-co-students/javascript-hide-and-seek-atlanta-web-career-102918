const getFirstSelector = function(selector) {
  return document.querySelector(selector);
};

const nestedTarget = function() {
  return document.querySelector('#nested .target');
};

const increaseRankBy = function(n) {
  let rankedListNodes = document.querySelectorAll('ul.ranked-list li');

  for (let node of rankedListNodes) {
    node.innerHTML = (parseInt(node.innerHTML) + n).toString();
  };
};

const deepestChild = function() {
  let grandNode = document.querySelector('#grand-node');
  let grandDivs = grandNode.getElementsByTagName('div');
  let divString = '';
  for (let i = 0; i <= grandDivs.length; i++) {
    divString = divString + 'div ';
  };
  return grandNode.querySelector(divString.trim());
};