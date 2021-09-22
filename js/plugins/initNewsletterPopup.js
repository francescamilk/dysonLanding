const newsletterPopup = () => {
  const newsletter = document.getElementById('newsletterPopup');
  const close = document.getElementById('newsletterClose');

  window.onload = function() {
    setTimeout(function() {
      newsletter.classList.add('show');    
    }, 
    15000 
    );
  };

  close.onclick = function() {
    newsletter.classList.remove('show');
  };
}

export {newsletterPopup};
