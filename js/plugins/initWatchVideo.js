const watchVideo = () => {
  const btn1 = document.getElementById('vidBtn1');
  const vid1 = document.getElementById('vid1');

  const btn2 = document.getElementById('vidBtn2');
  const vid2 = document.getElementById('vid2');

  const btn3 = document.getElementById('vidBtn3');
  const vid3 = document.getElementById('vid3');

  const btn4 = document.getElementById('vidBtn4');
  const vid4 = document.getElementById('vid4');

  const btn5 = document.getElementById('vidBtn5');
  const vid5 = document.getElementById('vid5');

  const btn6 = document.getElementById('vidBtn6');
  const vid6 = document.getElementById('vid6');

  // SHOW
  btn1.onclick = function() {
    vid1.classList.add('show');
    btn1.classList.add('hide');
  };

  btn2.onclick = function() {
    vid2.classList.add('show');
    btn2.classList.add('hide');
  };

  btn3.onclick = function() {
    vid3.classList.add('show');
    btn3.classList.add('hide');
  };

  btn4.onclick = function() {
    vid4.classList.add('show');
    btn4.classList.add('hide');
  };
  
  btn5.onclick = function() {
    vid5.classList.add('show');
    btn5.classList.add('hide');
  };

  btn6.onclick = function() {
    vid6.classList.add('show');
    btn6.classList.add('hide');
  };

  // // HIDE
  // vid1.onpause = function() {
  //   btn1.classList.add('show');
  //   vid1.classList.remove('show');
  // };

  // vid2.onpause = function() {
  //   btn2.classList.add('show');
  //   vid2.classList.remove('show');
  // };

  // vid3.onpause = function() {
  //   btn3.classList.add('show');
  //   vid3.classList.remove('show');
  // };

  // vid4.onpause = function() {
  //   btn4.classList.add('show');
  //   vid4.classList.remove('show');
  // };

  // vid5.onpause = function() {
  //   btn5.classList.add('show');
  //   vid5.classList.remove('show');
  // };
  
  // vid6.onpause = function() {
  //   btn6.classList.add('show');
  //   vid6.classList.remove('show');
  // };
};

export {watchVideo};
