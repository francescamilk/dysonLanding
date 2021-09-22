const toTop = () => {
  var button = document.getElementById('toTop');

  window.onscroll = function() {scrollFunction()};

  function scrollFunction() {
    if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
      button.classList.add('show');
    } else {
      button.classList.remove('show');
    }
  };

  button.onclick = function() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
};

export {toTop};
