const $navBtn = document.querySelector('.nav-btn');

document.addEventListener('click', (e) => {
  if ((e.target === $navBtn) | (e.target === $navBtn.querySelector('i'))) {
    $navBtn.previousElementSibling.classList.toggle('active');
  } else {
    $navBtn.previousElementSibling.classList.remove('active');
  }
});
