import (index.html)
function playVideo() {
  var modal = document.getElementById('videoModal');
  modal.style.display = 'flex';
}

function closeModal() {
  var modal = document.getElementById('videoModal');
  modal.style.display = 'none';
}

function n() {
  alert("classes did't start")


}

function closeModal() {
  document.getElementById('videoModal').style.display = "none";
  var video = document.querySelector('.video-player');
  video.pause();
  video.currentTime = 0;
}
function l()
{
  alert("measeage sent successfully")
  window.location.reload(index.html)
}
function playVideo(modalId) {
  document.getElementById(modalId).style.display = "block";
}

function closeModal(modalId) {
  document.getElementById(modalId).style.display = "none";
  var video = document.querySelector(`#${modalId} .video-player`);
  video.pause();
  video.currentTime = 0;
}

// Close the modal if the user clicks outside of the modal content
window.onclick = function(event) {
  if (event.target.classList.contains('video-modal')) {
      closeModal(event.target.id);
      
  }
}
function downloadFile() {
  const link = document.createElement('a');
  link.href = "index.html";
  link.download = fileUrl.split('/').pop();
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

