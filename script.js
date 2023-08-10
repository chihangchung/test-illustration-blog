// Sample JSON data
const jsonData = [
  {
    "image": "image1.jpg",
    "title": "Sample Title 1",
    "description": "Sample description for card 1."
  },
  // ... Add more data items here
];

// Function to create a card element
function createCard(item) {
  const card = document.createElement("div");
  card.classList.add("card");

  const image = document.createElement("img");
  image.src = item.image;
  image.alt = item.title;

  const title = document.createElement("h3");
  title.textContent = item.title;

  const description = document.createElement("p");
  description.textContent = item.description;

  card.appendChild(image);
  card.appendChild(title);
  card.appendChild(description);

  return card;
}

const cardContainer = document.getElementById("cardContainer");

// Populate cards using JSON data
jsonData.forEach(item => {
  const card = createCard(item);
  cardContainer.appendChild(card);
});
