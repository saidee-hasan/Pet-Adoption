// loadAllPets
const loadAllPets = async () => {
  try {
    const res = await fetch(
      "https://openapi.programming-hero.com/api/peddy/pets"
    );
    const data = await res.json();
    displayCard(data.pets);
  } catch (error) {
    console.error("Error:", error);
  }
};
loadAllPets();
const displayCard = (pets) => {
  const cardContainer = document.getElementById("card");

  pets.forEach((pets) => {
    const card = document.createElement("div");
    card.classList = "card card-compact bg-base-100 shadow-xl gap-5 ";

    card.innerHTML = `

  <figure >
    <img
     class="h-full w-full object-cover"
      src=${pets.image}
      alt="Shoes" />
  </figure>
  <div class="card-body">
    <h2 class="card-title font-bold">${pets.breed}</h2>
    <div class="flex">
    <p>Breed : ${pets.breed}</p>
    </div>
      <div class="flex">
    <p>Gender: ${pets.gender}</p>
    </div>
      <div class="flex">
    <p>Price: $ ${pets.price}</p>
    </div>
    
    <hr/>
    <div  class="flex justify-between">
    <button onclick="loadDetailsId('${pets.petId}')" class="btn">Like</button>
    <button class="btn">Adopt</button>
    <button  onclick="loadDetails('${pets.petId}')"  class="btn">Details</button>

    
    </div>
    
  </div>

    
    `;

    cardContainer.append(card);
  });
};
// Image Section

const loadDetailsId = async (petsId) => {
  try {
    const res = await fetch(
      ` https://openapi.programming-hero.com/api/peddy/pet/${petsId}`
    );
    const data = await res.json();
 

    displayImage(data.petData);
    displayDetails(data.petData)
  } catch (error) {
    console.error("Error:", error);
  }
};
// Display Name
const detailContainer = document.getElementById("like-image");

const displayImage = (petData) => {
  const image = document.createElement("div");
  image.classList = "shadow-xl shadow-slate-500 p-2";

  image.innerHTML = `
  <img  src='${petData.image}' alt='' />
 `;
  console.log(image);
  detailContainer.append(image);
};
// Image Section End



const loadDetails = async (petsId) => {
    try {
      const res = await fetch(
        ` https://openapi.programming-hero.com/api/peddy/pet/${petsId}`
      );
      const data = await res.json();
   
  
  
      displayDetails(data.petData)
    } catch (error) {
      console.error("Error:", error);
    }
  };
const displayDetails = (petData)=>{
    console.log(petData)



}