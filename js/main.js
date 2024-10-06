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
    <h2 class="card-title font-bold">${pets.pet_name}</h2>
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
  <img class="w-full" src='${petData.image}' alt='' />
 `;
  console.log(image);
  detailContainer.append(image);
};
// Image Section End

// loadDetails

const loadDetails = async (petsId) => {
  try {
    const res = await fetch(
      ` https://openapi.programming-hero.com/api/peddy/pet/${petsId}`
    );
    const data = await res.json();
    console.log(data)

    displayDetails(data.petData);
  } catch (error) {
    console.error("Error:", error);
  }
};

const displayDetails = (petData) => {
  console.log(petData);

  const detailContainer = document.getElementById("modal-content");
  document.getElementById("customModal").showModal();
  detailContainer.innerHTML = `
    <div>
    <img class='w-full' src='${petData.image}' alt='' />
    <h2 class="card-title font-bold">${petData.pet_name}</h2>
<div class="grid grid-cols-2">
 
 <section>
    <div class="flex">
    <p>Breed : ${petData.breed}</p>
    </div>
      <div class="flex">
    <p>Gender: ${petData.gender}</p>
    </div>
</section>
      <div class="flex">
    <p>Price: $ ${petData.price}</p>
    </div>

</div>
<br/>
<hr/>
<br/>
<p>${petData.pet_details}</p>



</div>
 
   
    `;
};
// loadDetails End
// Fetch All Pet Categories

const fetchCategories = async () => {
    try {
      const res = await fetch(
        `https://openapi.programming-hero.com/api/peddy/categories`
      );
      const data = await res.json();
      displayCategory(data.categories)
  
      
    } catch (error) {
      console.error("Error:", error);
    }
  };
  fetchCategories()

  const displayCategory = (categories)=>{

    const categoryContainer = document.getElementById("categoryBtn");

    categories.forEach((item) => {
        console.log(item)
      // create a btn
      const buttonContainer = document.createElement("div");
      buttonContainer.innerHTML = `
      <button class="btn w-full">  <img class="w-8 h-8" src='${item.category_icon}' alt='' />  ${item.category}</button>
      
      
      `;
  
     
      categoryContainer.append(buttonContainer);
    });
    

  }
  displayCategory()