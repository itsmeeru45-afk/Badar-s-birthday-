
document.getElementById('wishBtn').addEventListener('click', function() {
  const surpriseDiv = document.getElementById('surprise');
  if (surpriseDiv.classList.contains('hidden')) {
    surpriseDiv.classList.remove('hidden');
    this.textContent = 'Khush Raho! 🎉';
  } else {
    surpriseDiv.classList.add('hidden');
    this.textContent = 'Surprise Dekho! ✨';
  }
});
