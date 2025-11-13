document.getElementById('findDoctor').addEventListener('click', () => {
  document.getElementById('mapArea').classList.remove('hidden');
});
document.getElementById('demoBtn').addEventListener('click', () => {
  window.scrollTo({ top: document.querySelector('.demo').offsetTop, behavior: 'smooth' });
});
