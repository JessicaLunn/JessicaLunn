document.addEventListener("DOMContentLoaded", () => {
    const imageLinks = document.querySelectorAll(".image-link");
    const fullScreenContainer = document.createElement("div");
    fullScreenContainer.className = "full-screen-container";
  
    const fullScreenImage = document.createElement("img");
    fullScreenImage.className = "full-screen-image";
  
    const closeButton = document.createElement("button");
    closeButton.className = "close-button";
    closeButton.innerText = "Close";
    closeButton.addEventListener("click", closeFullScreen);
  
    fullScreenContainer.appendChild(fullScreenImage);
    fullScreenContainer.appendChild(closeButton);
    document.body.appendChild(fullScreenContainer);
  
    imageLinks.forEach((imageLink) => {
      imageLink.addEventListener("click", openFullScreen);
    });
  
    function openFullScreen(event) {
      event.preventDefault();
      const imageUrl = event.currentTarget.href;
      fullScreenImage.src = imageUrl;
      fullScreenContainer.style.display = "flex";
    }
  
    function closeFullScreen() {
      fullScreenContainer.style.display = "none";
    }
  });
  
function confirmNavigation() {
    var confirmLeave = confirm("You are about to leave this page. Are you sure?");
    if (confirmLeave) {
        window.open('https://www.example.com', '_blank');
    }
}

window.onload = function() {
  const videoPairs = [
      { desktopId: 'desktopVideo1', mobileId: 'mobileVideo1' },
      { desktopId: 'desktopVideoLemon', mobileId: 'mobileVideoLemon' },
      { desktopId: 'desktopVideoHiVis', mobileId: 'mobileVideoHiVis' }
      // Add more pairs as necessary
  ];

  videoPairs.forEach(pair => {
      const desktopVideo = document.getElementById(pair.desktopId);
      const mobileVideo = document.getElementById(pair.mobileId);

      if (window.innerWidth > 768) {
          if (mobileVideo) mobileVideo.style.display = 'none';
          if (desktopVideo) desktopVideo.style.display = 'block';
      } else {
          if (desktopVideo) desktopVideo.style.display = 'none';
          if (mobileVideo) mobileVideo.style.display = 'block';
      }
  });
};

// Optional: Add resize event to handle window resizing
window.onresize = function() {
  videoPairs.forEach(pair => {
      const desktopVideo = document.getElementById(pair.desktopId);
      const mobileVideo = document.getElementById(pair.mobileId);

      if (window.innerWidth > 768) {
          if (mobileVideo) mobileVideo.style.display = 'none';
          if (desktopVideo) desktopVideo.style.display = 'block';
      } else {
          if (desktopVideo) desktopVideo.style.display = 'none';
          if (mobileVideo) mobileVideo.style.display = 'block';
      }
  });
};
