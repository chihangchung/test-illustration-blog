const cardContainer = document.getElementById("cardContainer");

fetch("data.json")
  .then(response => response.json())
  .then(data => {
    data.forEach(item => {
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

      cardContainer.appendChild(card);
    });
  })
  .catch(error => console.error("Error fetching data:", error));
