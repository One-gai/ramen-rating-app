const ramens = [
    { id: 1, name: "Shoyu Ramen", restaurant: "Ichiran", image: "shoyu.jpg", rating: 5, comment: "Delicious!" },
    { id: 2, name: "Miso Ramen", restaurant: "Menya", image: "kojiro.jpg", rating: 4, comment: "Very flavorful!" },
    { id: 3, name: "Tonkotsu Ramen", restaurant: "Ramen-ya", image: "gyukotsu.jpg" },
    { id: 4, name: "Naruto ramen", restaurant: "Ichiraku Ramen", image: "naruto.jpg", rating: 4, comment: "Very Filling!" },
    { id: 5, name: "Nirvana ramen", restaurant: "Nirvana Hotel", image: "nirvana.jpg", rating: 4, comment: "Very Spicy!" },
 ];
 
 function displayRamens(){
   const ramenDetails= document.getElementById ("ramenImageRail");
   ramens.forEach(ramen => {
      const imageElement=document.createElement("img");
      imageElement.src = ramen.image;
      imageElement.alt = ramen.alt
      imageElement.dataset.id = ramen.id;
      imageElement.addEventListener('click', handleclick)
      ramenDetails.appendChild(imageElement)

   }
   )
 }
   
 function handleclick(Rapid){
   const ramenId = Rapid.target.dataset.id;
   const ramen = ramens.find (r => r.id == ramenId);
   const myImage = document.getElementById ("ImageDisplay");
   myImage.src = ramen.image;
   myImage.alt = ramen.name 
   myImage.style.display = "block"
   
   document.getElementById ("nameRamen").value
   document.getElementById ("kitchenMade").value
   document.getElementById ("ramenPodium").value
   document.getElementById ("commentSection").value
}
 function addSubmitListener(){
   const form = document.getElementById("ramenForm")
   form.addEventListener('submit'),(e)=> {
     e.preventDefault()

     const name = document.getElementById("ramenFormInput").value;
      const restaurant = document.getElementById("ramenResturantInput").value;
      const rating = document.getElementById("ramenRatingInput").value;
      const comment = document.getElementById("ramenCommentInput").value;
      const img = document.createElement("img");
      img.src = ramens  
      img.alt = `${name} from ${restaurant}`;
      document.getElementById("ramenSelection").appendChild("");
 }
}

 function main(){
   displayRamens()
 }
 document.addEventListener('DOMContentLoaded', main)