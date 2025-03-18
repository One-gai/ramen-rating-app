const ramens = [
    { id: 1, name: "Shoyu Ramen", restaurant: "Ichiran", image: "shoyu.jpg", rating: 5, comment: "Delicious!" },
    { id: 2, name: "Miso Ramen", restaurant: "Menya", image: "kojiro.jpg", rating: 4, comment: "Very flavorful!" },
    { id: 3, name: "Tonkotsu Ramen", restaurant: "Ramen-ya", image: "gyukotsu.jpg", rating: 4, comment: "Very Chic and Tasty!" },
    { id: 4, name: "Naruto ramen", restaurant: "Ichiraku Ramen", image: "naruto.jpg", rating: 4, comment: "Very Filling!" },
    { id: 5, name: "Nirvana ramen", restaurant: "Nirvana Hotel", image: "nirvana.jpg", rating: 4, comment: "Very Spicy!" },
 ];
 
 function displayRamens(){
   const ramenDetails= document.getElementById ("ramenImageRail");
   ramens.forEach(ramen => {
      const imageElement=document.createElement("img");
      imageElement.src = ramen.image;
      imageElement.alt = ramen.name
      imageElement.dataset.id = ramen.id;
      imageElement.addEventListener('click', handleClick)
      ramenDetails.appendChild(imageElement)

   }
   )
 }
   
 function handleClick(Rapid){
   const ramenId = Rapid.target.dataset.id;
   const ramen = ramens.find (r => r.id == ramenId);
   const myImage = document.getElementById ("ramenImages");
   myImage.src = ramen.image;
   myImage.alt = ramen.name 
   myImage.style.display = "block"
   
   document.getElementById ("nameRamen").textContent = ramen.name
   document.getElementById ("kitchenMade").textContent = ramen.restaurant
   document.getElementById ("ramenPodium").textContent = ramen.rating
   document.getElementById ("commentSection").textContent = ramen.comment
}
 function addSubmitListener(){
   const form = document.getElementById("ramenForm")
   form.addEventListener("submit", (event) => {
     event.preventDefault();

     const name = document.getElementById("ramenFormInput").value;
      const restaurant = document.getElementById("ramenResturantInput").value;
      const rating = document.getElementById("ramenRatingInput").value;
      const comment = document.getElementById("ramenCommentInput").value;
      const img = document.createElement("img");
      img.src = document.getElementById("ramenUrlInput").value
      img.alt = `${name} from ${restaurant}`;
      document.getElementById("ramenSelection").appendChild(img);
 });
 }

 function main(){
   displayRamens();
   addSubmitListener();
 }
 document.addEventListener('DOMContentLoaded', main)