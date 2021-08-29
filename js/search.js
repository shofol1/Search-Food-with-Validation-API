const searchFood=()=>{
   const inputField=document.getElementById('input-food');
   const foodText=inputField.value;
   const errorDiv=document.getElementById('error');
   if(foodText){
    errorDiv.innerHTML='';
    url=`https://www.themealdb.com/api/json/v1/1/search.php?s=${foodText}`;
    fetch(url)
    .then(res=>res.json())
    .then(data=>setFoods(data.meals))
    inputField.value='';
   }else{
    const errorMessage=document.getElementById('error');
    console.log(errorMessage)
    errorMessage.style.display='block';
   }
}
const setFoods=meals=>{
    const foodRow=document.getElementById('food-row');
    foodRow.textContent='';
    meals.forEach((meal) => {
       const div=document.createElement('div');
       div.classList.add('col');
       div.innerHTML=`
       <div onclick="loadModalFood('${meal.idMeal}')" class="card" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
         <img src="${meal.strMealThumb}" class="card-img-top img-fluid" alt="...">
         <div class="card-body">
           <h5 class="card-title">${meal.strMeal}</h5>
           <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
         </div>
       </div>
       `
       foodRow.appendChild(div);
    })
}
const loadModalFood=id=>{
  url=`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
  fetch(url)
  .then(res=>res.json()
  .then(data=>displayDetails(data.meals[0])));
}
const displayDetails=details=>{
  const modalDialog=document.getElementById('modal-dialog');
  modalDialog.textContent='';
  const div=document.createElement('div');
  div.classList.add('modal-dialog');
  div.innerHTML=`
  <div class="modal-content">
  <div class="row">
  <div class="col-6"></div>
  <div class="col-6">
    <button type="button" class="btn-close me-2 mt-2 float-end" data-bs-dismiss="modal" aria-label="Close"></button>
  </div>
</div>
  <div class="modal-header">
      <img class="img-thumbnail w-50 mx-auto" src="${details.strMealThumb}" >

      </div>
      <div class="modal-body ">
      <h5 class="modal-title text-center" id="staticBackdropLabel">${details.strMeal}</h5>
      <p class="modal-title text-center" id="staticBackdropLabel">${details.strInstructions.slice(0,100)}</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-danger mx-auto" >Order Now</button>
      </div>
    </div>
  `
  modalDialog.appendChild(div);

}