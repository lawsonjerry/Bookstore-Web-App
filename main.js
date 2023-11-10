// const searchBar = document.getElementById('search-bar');

// //a pop up window if someone is trying to use the search bar
// searchBar.addEventListener('keyup', (event) => {
//     if (event.keyCode === 13) {
//   alert('The search bar is still a work in progress.');
// }
// });

function createBookCard(book) {
  const mainSection = document.querySelector('main');


  //container for the bookCard Element
  const bookCard = document.createElement("div");
  bookCard.classList.add("bookcard");
  mainSection.append(bookCard)

  const bookImageElement = document.createElement("img");
  bookImageElement.id = ("wont-get-fooled")
  bookImageElement.setAttribute("src", 'Assets/wont_get_fooled_again_bookCover.jpg')
  bookCard.append(bookImageElement)
}

createBookCard(null);
