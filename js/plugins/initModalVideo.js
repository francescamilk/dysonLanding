const modalVideo = () => {
  const open = document.getElementById('openModal');
  const close = document.getElementById('closeModal');

  open.addEventListener('click', () => {
    const modal = document.getElementById('modalContainer');
    modal.classList.add('show');
  });

  close.addEventListener('click', () => {
    const modal = document.getElementById('modalContainer');
    modal.classList.remove('show');
  });
}

export {modalVideo};
