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
  