document.addEventListener('DOMContentLoaded', () => {
  fetch('./images.json')
      .then(response => response.json())
      .then(data => {
          loadImagesConcurrently(data.illustrations, document.querySelector('.container.illustrations'), 6);
          loadImagesConcurrently(data.projects, document.querySelector('.container.projects'), 4);
          loadImagesConcurrently(data.cards, document.querySelector('.container.cards'), 4);
      })
      .catch(console.error);
});

function loadImagesConcurrently(imageArray, container, preloadCount = 6) {
  const preloadImages = imageArray.slice(0, preloadCount);
  const lazyImages = imageArray.slice(preloadCount);

  // Load the first few immediately
  const preloadPromises = preloadImages.map(src => {
      return new Promise(resolve => {
          const img = createImageElement(src, false);
          img.onload = () => {
              fadeIn(img);
              resolve();
          };
          img.onerror = () => resolve();
          container.appendChild(img);
      });
  });

  // After first images load, set up lazy loading
  Promise.all(preloadPromises).then(() => {
      const observer = new IntersectionObserver((entries, obs) => {
          entries.forEach(entry => {
              if (entry.isIntersecting) {
                  const img = entry.target;
                  img.src = img.dataset.src;
                  img.onload = () => fadeIn(img);
                  img.removeAttribute('data-src');
                  obs.unobserve(img);
              }
          });
      }, {
          rootMargin: '200px',
          threshold: 0.1
      });

      lazyImages.forEach(src => {
          const img = createImageElement(src, true);
          container.appendChild(img);
          observer.observe(img);
      });
  });
}

function createImageElement(src, isLazy) {
  const img = document.createElement('img');
  img.alt = '';
  img.classList.add('fade-img');
  if (isLazy) {
      img.dataset.src = src;
      img.loading = 'lazy';
  } else {
      img.src = src;
      img.loading = 'eager';
  }
  img.style.opacity = 0;
  img.style.transition = 'opacity 0.8s ease';
  return img;
}

function fadeIn(img) {
  requestAnimationFrame(() => {
      img.style.opacity = 1;
  });
}
