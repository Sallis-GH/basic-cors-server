document.getElementById('pingButton').addEventListener('click', function() {
  fetch('http://localhost:8080/')
    .then(response => response.text())
    .then(data => {
      document.getElementById('response').innerText = data;
    })
    .catch((error) => {
      console.error('Error:', error);
    });
});