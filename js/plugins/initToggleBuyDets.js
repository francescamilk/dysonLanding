const toggleBuyDets = () => {
  const togglerPink = document.getElementById('buyTogglePink');
  const togglerPurple = document.getElementById('buyTogglePurple');
  
  const contentPink = document.getElementById('accessoriesPink');
  const contentPurple = document.getElementById('accessoriesPurple');

  const cardPink = document.getElementById('buyPink');
  const cardPurple = document.getElementById('buyPurple');
  
  var status = 'less';
  
  // PINK
  togglerPink.onclick = function() {
    if (status == 'less') {
      contentPink.classList.add('show');
      togglerPink.innerHTML = 'Hide <i class="fas fa-angle-down"></i>';
      cardPink.classList.add('flow-height');
      status = 'more';
      
    } else if (status == 'more') {
      contentPink.classList.remove('show');
      togglerPink.innerHTML = 'See all <i class="fas fa-angle-down"></i>';
      cardPink.classList.remove('flow-height');
      status = 'less'
    };
  };
  
  // PURPLE
  togglerPurple.onclick = function() {
    if (status == 'less') {
      contentPurple.classList.add('show');
      togglerPurple.innerHTML = 'Hide <i class="fas fa-angle-down"></i>';
      cardPurple.classList.add('flow-height');
      status = 'more';

    } else if (status == 'more') {
      contentPurple.classList.remove('show');
      togglerPurple.innerHTML = 'See all <i class="fas fa-angle-down"></i>';
      cardPurple.classList.remove('flow-height');
      status = 'less'
    };
  };
};

export {toggleBuyDets};
