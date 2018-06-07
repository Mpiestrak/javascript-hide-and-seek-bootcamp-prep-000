function getFirstSelector(selector) {
 return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function increaseRankBy(n) {
  var ranks = document.querySelectorAll('ul.ranked-list li')
  for (var i = 0; i < ranks.length; i++) {
    ranks[i].innerHTML = parseInt(ranks[i].innerHTML) + n
  }
}

function deepestChild() {
let first = document.getElementById('grand-node')
let second = first.children[0]
while (second) {
  first = second
  second = first.children[0]
}
return first
}

