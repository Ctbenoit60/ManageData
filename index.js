let news = [
    { id: 1, title: 'Election Results',
    content: "Newly elected minister..." },
    { id: 2, title: 'Sporting Success',
    content: "World Cup winners..." },
    { id: 3, title: 'Tornado Warning',
    content: "Residents should prepare..." }
    ];

function addCard(title = " Untitles", content = "Missing Text") {
const template =
document.getElementById("card-template").content.cloneNode(true);
template.querySelector('.card-title').innerText = title;
template.querySelector('.card-text').innerText = content;
document.querySelector('#card-list').appendChild(template);
}
// get data asynchronously, then use it to populate a template
news.forEach((newsStory) => {
    addCard(newsStory.title, newsStory.content);
  });


