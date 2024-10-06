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
  console.log(cardContainer);
  pets.forEach((pets) => {
    console.log(pets);
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
    <div class="flex justify-between">
    <button class="btn">Like</button>
    <button class="btn">Adopt</button>
    <button class="btn">Details</button>

    
    </div>
    
  </div>

    
    `;

    cardContainer.append(card);
  });
};
