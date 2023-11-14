const booksToBorrow = [
  {
    title: "Book Title: Won't Get Fooled",
    author: "Author: Wilbert Armstrong",
    genre: "Genre: Fiction",
    description:
      "Book Description: In the enchanting pages of Won't Get Fooled Again prepare to be swept away by an unforgettable tale of passion, romance, and the complexities of the human heart.",
    img: "Assets/wont_get_fooled_again_bookCover.jpg",
    inventoryText: "Available To Borrow: ",
    inventory: 3,
    order: 0,
  },
  {
    title: "Book Title: White Rabbit",
    author: "Author: Loren Gleason",
    genre: "Genre: Non-Fiction",
    description:
      "Book Description: The realm of White Rabbit lies a dazzling world of political surrealism, where reality and imagination seamlessly intertwine.",
    img: "Assets/white_rabbit_bookCover.jpg",
    inventory: "Available To Borrow: 5",
    order: "0",
  },
  {
    title: "Book Title: How Much Is That Doggie",
    author: "Author: Robin Cummerata",
    genre: "Genre: Fiction",
    description:
      "Book Description: Adventure awaits as a plucky young protagonist stumbles upon a mysterious magical and canine companion, setting off a chain of events that will leave readers spellbound.",
    img: "Assets/how_much_is_that_doggie_bookCover.jpeg",
    inventory: "Available To Borrow: 9",
    order: "0",
  },
];


function createBookCard(book) {
  const body = document.querySelector("body");
  const mainSection = document.querySelector("#main"); //selects the main element on the html document
  body.append(mainSection);

  //container for the bookCard Element
  const bookCardsElement = document.createElement("div");
  bookCardsElement.classList.add("bookCardsElement");
  mainSection.append(bookCardsElement);

  //container for our books
  const bookCard = document.createElement("div");
  bookCard.classList.add("bookcard");
  bookCardsElement.append(bookCard);

  //heading for book title
  const bookItemTitle = document.createElement("h2");
  bookItemTitle.id = "title";
  bookItemTitle.textContent = book.title;

  //heading for book author
  const bookItemAuthor = document.createElement("h3");
  bookItemAuthor.id = "author";
  bookItemAuthor.textContent = book.author;

  //span for book genre
  const bookItemGenre = document.createElement("span");
  bookItemGenre.id = "genre";
  bookItemGenre.textContent = book.genre;

  //paragraph for book description
  const bookItemDescription = document.createElement("p");
  bookItemDescription.id = "description";
  bookItemDescription.textContent = book.description;

  //image element for our books
  const bookImageElement = document.createElement("img");
  bookImageElement.id = "book-cover";
  bookImageElement.setAttribute("src", book.img);

  //span for book inventory
  const currentBookItemInventoryText = document.createElement("span");
  currentBookItemInventoryText.id = "wont-get-fooled-current-inventory";
  currentBookItemInventoryText.textContent = book.inventoryText;

  const currentBookItemInventory = document.createElement("span");
  currentBookItemInventory.id = "wont-get-fooled-current-inventory";
  currentBookItemInventory.textContent = book.inventory;

  //container for shopping area
  const bookShoppingArea = document.createElement("div");
  bookShoppingArea.id = "book-shopping-area";
  bookShoppingArea.classList.add("shopping-area");

  //span for number of current orders
  const currentOrders = document.createElement("span");
  currentOrders.id = "current-orders";
  currentOrders.textContent = book.order;

  //span for book cart image
  const bookCart = document.createElement("span");
  bookCart.id = "book-cart";
  bookCart.textContent = "🛒";
  bookCart.addEventListener("click", () => {
    console.log("click on shopping cart");
    currentOrders.textContent = ++book.order;
    // currentBookItemInventoryText.textContent =
    // book.inventoryText + String(book.inventory);
    --book.inventory;
  });

  const deleteButton = document.createElement("button");
  deleteButton.classList.add("delete-button");
  deleteButton.textContent = "Delete";
    // Add a click event listener to the delete button.
    deleteButton.addEventListener("click", () => {
      // Remove the new book card from the DOM.
      bookCard.remove();
    });

  //appends all the elements in order to be displayed online
  bookCard.append(bookImageElement);
  bookCard.append(bookItemTitle);
  bookCard.append(bookItemAuthor);
  bookCard.append(bookItemDescription);
  bookCard.append(bookItemGenre);
  bookCard.append(currentBookItemInventoryText);
  bookCard.append(currentBookItemInventory);
  bookCard.append(bookShoppingArea);
  bookShoppingArea.append(currentOrders);
  bookShoppingArea.append(bookCart);
  bookCard.append(deleteButton);
}

//for loop to create and add new books into the booksToBorrow list
window.onload = function () {
  for (let book of booksToBorrow) {
    createBookCard(book);
  }
};

//gets the form element
const formElement = document.querySelector("form");

//get the values from the form
const title = formElement.querySelector("[name='bookName']").value;
const author = formElement.querySelector("[name='bookAuthor']").value;
const description = formElement.querySelector("[name='bookDescription']").value;
const img = formElement.querySelector("[name='bookImageUrl']").value;

// Create a new book object.
const book = {
  title,
  author,
  description,
  img,
};

// Add the new book to the booksToBorrow array.
booksToBorrow.push(book);

// Create a new book card for the new book.
createBookCard(book);

formElement.addEventListener("submit", (event) => {
  event.preventDefault();

  event.target;

  if (formElement.bookName.value === "") {
    return alert("You must provide the title of the book!");
  }

   // Create a new book card.
   const newBookCard = createBookCard({
    title: event.target.bookName.value,
    author: event.target.bookAuthor.value,
    description: event.target.bookDescription.value,
    img: event.target.bookImageUrl.value,
  });

  // Create a new delete button element and add it to the new book card.
  const deleteButton = document.createElement("button");
  deleteButton.classList.add("delete-button");
  deleteButton.textContent = "Delete";
  newBookCard.appendChild(deleteButton);

   // Add a click event listener to the delete button.
   deleteButton.addEventListener("click", () => {
    // Remove the new book card from the DOM.
    newBookCard.remove();
  });
  

  formElement.reset();
 
});
