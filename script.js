  const joinBtn = document.getElementById('openCart');
  const createBtn = document.getElementById('cartPanel');

  joinBtn.addEventListener('click', () => {
    // Scroll smoothly to the "Create an account" button
    createBtn.scrollIntoView({ behavior: 'smooth' });
  });