let news = [
    { id: 1, title: 'Election Results',
    content: "Newly elected minister..." },
    { id: 2, title: 'Sporting Success',
    content: "World Cup winners..." },
    { id: 3, title: 'Tornado Warning',
    content: "Residents should prepare..." }
    ];

 function submitStory() {
    document.getElementById('display').value += value;
  }

function addCard(title = " Untitles", content = "Missing Text") {
const template =
document.getElementById("card-template").content.cloneNode(true);
template.querySelector('.card-title').innerText = title;
template.querySelector('.card-text').innerText = content;
document.querySelector('#card-list').appendChild(template);
}

news.forEach((newsStory) => {
    addCard(newsStory.title, newsStory.content);
  });

  function updateNews() {
    const newsContainer = document.getElementById('card-list');
    newsContainer.innerHTML = '';

    news.forEach(item => {
      const newsCard = document.createElement('div');
      newsCard.classList.add('col', 'mb-4', 'mx-auto');
      newsCard.innerHTML = `
        <div class="card" style="width: 18rem">
          <div class="card-body">
            <h5 class="card-title">${item.title}</h5>
            <p class="card-text">${item.content}</p>
          </div>
        </div>
      `;
      newsContainer.appendChild(newsCard);
    });
  }

  function submitStory(event) {
    event.preventDefault();

    const titleInput = document.getElementById('exampleFormControlInput1');
    const contentTextarea = document.getElementById('exampleFormControlTextarea1');

    const newStory = {
      id: news.length + 1,
      title: titleInput.value,
      content: contentTextarea.value
    };

    news.push(newStory);
    updateNews();

    titleInput.value = '';
    contentTextarea.value = 'Put your story here...';
  }

  updateNews();

  setInterval(updateNews, 5000);

