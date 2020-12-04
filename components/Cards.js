// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-api.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.


axios
.get ("https://lambda-times-api.herokuapp.com/articles")
.then (res => {
  const data = res.data.articles;

  Object.keys(data).forEach(item => {
    const articles = data[item]
    articles.forEach(article => {
      cardMaker(article)
    })
  })
})
.catch (err => {
  console.log(err);
})



function cardMaker(data) {

  const card = document.createElement('div');
  card.classList.add('card');

  const headLine = document.createElement('div');
  headLine.classList.add('headline');
  headLine.textContent = data.headline;
  card.append(headLine);
  headLine.addEventListener('click', function() {
    console.log(headLine.textContent);
  })

  const authorContent = document.createElement('div');
  authorContent.classList.add('author');
  card.append(authorContent);

  const imgContainer = document.createElement('div');
  imgContainer.classList.add('img-container');
  authorContent.append(imgContainer);

  const img = document.createElement('img');
  img.src = data.authorPhoto;
  imgContainer.append(img);

  const author = document.createElement('div');
  author.textContent = `By ${data.authorName}`;
  card.append(author);

  const cardContainer = document.querySelector('.cards-container')
  cardContainer.append(card);

  // didn't need return card?
}
