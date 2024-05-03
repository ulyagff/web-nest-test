window.onload = function () {
  fetch('/post/all')
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then((posts) => {
      const postsContainer = document.getElementById('posts-container');
      posts.forEach((post) => {
        const postElement = createPostElement(post);
        postsContainer.appendChild(postElement);
      });
    })
    .catch((error) => {
      console.error('Error fetching posts:', error);
    });

  function createPostElement(post) {
    const postElement = document.createElement('div');
    postElement.classList.add('post');

    const titleElement = document.createElement('h2');
    titleElement.textContent = post.title;

    const contentElement = document.createElement('p');
    contentElement.textContent = post.content;

    const authorElement = document.createElement('p');
    authorElement.textContent = `Author: ${post.author.name}`; // Предположим, что у пользователя есть поле name

    const publishedDateElement = document.createElement('p');
    publishedDateElement.textContent = `Published: ${new Date(post.publishedDate).toLocaleDateString()}`;

    const likesElement = document.createElement('p');
    likesElement.textContent = `Likes: ${post.likes}`;

    const dislikesElement = document.createElement('p');
    dislikesElement.textContent = `Dislikes: ${post.dislikes}`;

    // Добавляем каждый элемент к блоку поста
    postElement.appendChild(titleElement);
    postElement.appendChild(contentElement);
    postElement.appendChild(authorElement);
    postElement.appendChild(publishedDateElement);
    postElement.appendChild(likesElement);
    postElement.appendChild(dislikesElement);

    return postElement;
  }
};
