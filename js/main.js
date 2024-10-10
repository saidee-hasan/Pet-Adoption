// loadAllPets
const loadAllPets = async () => {
  try {
    const res = await fetch(
      "https://openapi.programming-hero.com/api/peddy/pets"
    );
    const data = await res.json();
     if(!displayCard(data.pets))return console.log("Saidee")
      ;
  
   
   
  } catch (error) {
    console.error("Error:", error);
  }
};
const loadCategories = async (id) => {
  try {
    const res = await fetch(
      `https://openapi.programming-hero.com/api/peddy/category/${id}`
    );
    const data = await res.json();
   
     if(!displayCard(data.data)){
      
      document.getElementById("hide").classList.remove("hidden")
      setTimeout(()=>{
        document.getElementById("hide").classList.add("hidden")
        document.getElementById("card").classList.remove("hidden")
        
      },1000)
    document.getElementById("card").classList.add("hidden")
    }

  
      
 
  } catch (error) {
    console.error("Error:", error);
  }
};



loadCategories();

loadAllPets();
const displayCard = (pets) => {
  


  const cardContainer = document.getElementById("card");
  cardContainer.innerHTML = "";
  if(pets.length == 0){
  cardContainer.classList.remove("grid")
   cardContainer.innerHTML = `
    <div class='min-h-screen  flex flex-col gap-5 justify-center items-center'>
    <img src="../images/error.webp " alt=""/>
    <h2 class="text-center text-xl font-bold ">
    No Information Available
    
    </h2>
    <p>It is a long established fact that a reader will be distracted by the readable content <br/>  of a page when looking at 
 its layout. The point of using Lorem Ipsum is that it has a.</p>
    </div>
    
    `;
    return;
  }else{
    cardContainer.classList.add("grid")
  }


 // runs every 1 second

  pets.forEach((item) => {

    const card = document.createElement("div");
  
    card.classList = "card card-compact bg-base-100 shadow-xl gap-5 p-2";

    card.innerHTML = `

  <figure >
    <img
     class="h-full w-full object-cover"
      src=${item.image}
      alt="Shoes" />
  </figure>
  <div class="p-2">

  <h2 class="card-title font-bold">${item.pet_name}</h2>

  
   
    <div class="flex">
    ${item.breed !== undefined?`<p>  Breed : ${item.breed}</p>`:` <p>  Breed : fdyhrt</p> `}
   
    </div>
      <div class="flex">
      ${item.gender!== undefined?`<p>Gender: ${item.gender}</p>`:`<p>Gender:</p>`}
    
    </div>
      <div class="flex">
      ${item.price == null ?  `<p>$ Price: $ 000</p>`:    `<p>$ Price: $ ${item.price}</p>` }

    </div>
    <br/>
    <hr/>
    <br/>
    <div  class="flex justify-between">
    <button class="btn xl:w-20 lg:p-1 md:p-1 rounded-sm" onclick="loadDetailsId('${item.petId}')" >   <img class="w-8 h-8 mx-auto" src="../images/like2.png" alt=""/>  </button>
    <button class="btn xl:w-20 lg:p-1 md:p-1 btn-outline btn-success"  onclick="Adopt()"  >Adopt</button>
    <button class="btn xl:w-20 lg:p-1 md:p-1 btn-outline btn-accent" onclick="loadDetails('${item.petId}')"  >Details</button>

    
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
  image.classList = "shadow-xl shadow-slate-500  ";

  image.innerHTML = `
  <img class="w-full p-2" src='${petData.image}' alt='' />
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
    console.log(data);

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
    displayCategory(data.categories);
   
  } catch (error) {
    console.error("Error:", error);
  }
};

fetchCategories();

const displayCategory = (categories) => {
  const categoryContainer = document.getElementById("categoryBtn");

  if (categories) {
    categories.forEach((item) => {
    
      // create a btn
      const buttonContainer = document.createElement("div");
      buttonContainer.innerHTML = `
      <button  id="active-color" onclick="loadCategories('${item.category}')"  class=" btn focus:outline-none focus:rounded-3xl  focus:ring focus:ring-black w-full">  <img class="w-8 h-8" src='${item.category_icon}' alt='' />  ${item.category}</button>
      
      
      `;

      categoryContainer.append(buttonContainer);
      // your code her
    });
  }
};






//  Adopt Button Behavior

const Adopt = ()=>{


  let count = 4;
const intervalId = setInterval(function() {
  count--;

  const atopContainer = document.getElementById("modal-adopt");
  document.getElementById("my_modal_2").showModal();

  atopContainer.innerHTML = `
    <div >
   
    <h2 class=" font-bold  text-5xl">${count}</h2>
</div>
 
   
    `;





  if (count === 0) {
    clearInterval(intervalId);
    console.log("Blast off!",count);
    document.getElementById('button-adopt').click();
  }
}, 500); 

}

const SortPrice=async()=>{
  try {
    const res = await fetch(
      "https://openapi.programming-hero.com/api/peddy/pets"
    );
    const data = await res.json();
     console.log(data.pets)
     data.pets.sort((a, b) => b.price - a.price);
   
   if(!displayCard(data.pets)){
      
    document.getElementById("hide").classList.remove("hidden")
    setTimeout(()=>{
      document.getElementById("hide").classList.add("hidden")
      document.getElementById("card").classList.remove("hidden")
      
    },1000)
  document.getElementById("card").classList.add("hidden")
  }
   
   
  } catch (error) {
    console.error("Error:", error);
  }
}