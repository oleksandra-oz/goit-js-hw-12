export function renderImages(arr) {
  return arr
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => `
      <a href="${largeImageURL}" class="list-item">
      <div class="thumb"><img src="${webformatURL}" alt="${tags}" class="list-img"></div>
      <ul class="info-box">
      <li class="info-item">
      <h2 class="info-text">Likes</h2>
      <p class="info-amount">${likes}</p>
      </li>
      <li class="info-item">
      <h2 class="info-text">Views</h2>
      <p class="info-amount">${views}</p>
      </li>
      <li class="info-item">
      <h2 class="info-text">Comments</h2>
      <p class="info-amount">${comments}</p>
      </li>
      <li class="info-item">
      <h2 class="info-text">Downloads</h2>
      <p class="info-amount">${downloads}</p>
      </li>
      </ul>
      </a>
        `
    )
    .join('');
}