const prodColorPick = () => {
  const img = document.getElementById('color-pick-img');
  const pink = document.getElementById('btn-pink');
  const purple = document.getElementById('btn-purple');
  
  pink.onclick = function () {
    img.src = 'images/dyson-pink.png';
  };
  
  purple.onclick = function () {
    img.src = 'images/dyson-purple.png';
  };
};

export {prodColorPick};
