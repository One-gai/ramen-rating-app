const ramens = [
  { id: 1, name: "Shoyu Ramen", restaurant: "Ichiran", image: "shoyu.jpg", rating: 5, comment: "Delicious!" },
  { id: 2, name: "Miso Ramen", restaurant: "Menya", image: "kojiro.jpg", rating: 4, comment: "Very flavorful!" },
  { id: 3, name: "Tonkotsu Ramen", restaurant: "Ramen-ya", image: "gyukotsu.jpg", rating: 4, comment: "Very Chic and Tasty!" },
  { id: 4, name: "Naruto ramen", restaurant: "Ichiraku Ramen", image: "naruto.jpg", rating: 4, comment: "Very Filling!" },
  { id: 5, name: "Nirvana ramen", restaurant: "Nirvana Hotel", image: "nirvana.jpg", rating: 4, comment: "Very Spicy!" },
];

function displayRamens() {
  const ramenDetails = document.getElementById("ramenImageRail");
  ramens.forEach(ramen => {
      const imageElement = document.createElement("img");
      imageElement.src = ramen.image;
      imageElement.alt = ramen.name;
      imageElement.dataset.id = ramen.id;
      imageElement.addEventListener("click", handleClick);
      ramenDetails.appendChild(imageElement);
  });
}

function handleClick(event) {
  const ramenId = event.target.dataset.id;
  const ramen = ramens.find(r => r.id == ramenId);
  
  if (ramen) {
      const myImage = document.getElementById("ramenImages");
      myImage.src = ramen.image;
      myImage.alt = ramen.name;
      myImage.style.display = "block";

      document.getElementById("nameRamen").textContent = ramen.name;
      document.getElementById("kitchenMade").textContent = ramen.restaurant;
      document.getElementById("ramenPodium").textContent = ramen.rating;
      document.getElementById("commentSection").textContent = ramen.comment;
  }
}

function addSubmitListener() {
  const form = document.getElementById("ramenForm");

  form.addEventListener("submit", (event) => {
      event.preventDefault();

      const name = document.getElementById("ramenFormInput").value;
      const restaurant = document.getElementById("ramenResturantInput").value;
      const rating = document.getElementById("ramenRatingInput").value;
      const comment = document.getElementById("ramenCommentInput").value;
      const imgSrc = document.getElementById("ramenUrlInput").value;

      if (!name || !restaurant || !rating || !comment || !imgSrc) {
          console.error("All fields must be filled out!");
          return;
      }

      const newRamen = {
          id: ramens.length + 1,
          name: name,
          restaurant: restaurant,
          image: imgSrc,
          rating: rating,
          comment: comment
      };

      // Add to the ramens array
      ramens.push(newRamen);

      // Create new image element
      const img = document.createElement("img");
      img.src = imgSrc;
      img.alt = `${name} from ${restaurant}`;
      img.dataset.id = newRamen.id;
      img.addEventListener("click", handleClick);

      // Append new ramen to the ramen image rail
      document.getElementById("ramenImageRail").appendChild(img);

      console.log("New ramen added:", newRamen);

      // ✅ Reset the form
      form.reset();
  });
}

function main() {
  displayRamens();
  addSubmitListener();
}

document.addEventListener("DOMContentLoaded", main);
