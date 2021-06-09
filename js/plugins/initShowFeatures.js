const showFeatures = () => {
  const buttons = document.querySelectorAll('.plus-btn');
  const nextLink = document.querySelectorAll('.pf-next');
  const texts = document.querySelectorAll('.pf-text');
  const textArr = Array.prototype.slice.call(texts);

  document.addEventListener('click', () => {
    // reset presence of 'show' class
    if (event.target === buttons[0] || event.target === nextLink[6] ||
        event.target === buttons[1] || event.target === nextLink[5] ||
        event.target === buttons[2] || event.target === nextLink[4] || 
        event.target === buttons[3] || event.target === nextLink[3] || 
        event.target === buttons[4] || event.target === nextLink[2] || 
        event.target === buttons[5] || event.target === nextLink[1] ||
        event.target === buttons[6] || event.target === nextLink[0]) {
      textArr.forEach(text => {
        text.classList.remove('txt-show')
      });
    };

    // set show class to the one selected
    if (event.target === buttons[0] || event.target === nextLink[6]) {
      texts[0].classList.add('txt-show')
    } else if (event.target === buttons[1] || event.target === nextLink[0]) {
      texts[1].classList.add('txt-show');
    } else if (event.target === buttons[2] || event.target === nextLink[1]) {
      texts[2].classList.add('txt-show');
    } else if (event.target === buttons[3] || event.target === nextLink[2]) {
      texts[3].classList.add('txt-show');
    } else if (event.target === buttons[4] || event.target === nextLink[3]) {
      texts[4].classList.add('txt-show')
    } else if (event.target === buttons[5] || event.target === nextLink[4]) {
      texts[5].classList.add('txt-show');
    } else if (event.target === buttons[6] || event.target === nextLink[5]){
      texts[6].classList.add('txt-show');
    };
  });
};

export {showFeatures};


// Refactor?
// no page refresh || back to same point