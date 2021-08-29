fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
.then(res=>res.json())
.then(data=>setFoods(data.categories));


const setFoods=foods=>{
    console.log(foods)
const foodRow=document.getElementById('food-row');
foods.forEach((food) => {
    const div=document.createElement('div');
    div.classList.add('col-md-4');
    div.innerHTML= `
    <div class="card m-2 rounded" style="width: 18rem;">
  <img src="${food.strCategoryThumb}" class="card-img-top img-fluid" alt="...">
  <div class="card-body">
    <p class="card-text">${food.strCategoryDescription.slice(0,100)}</p>
    <button onclick=displayModal('${food.idCategory}') type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button>
  </div>
</div>
    `
    foodRow.appendChild(div)
})
}

const displayModal=id=>{
    url=`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
    fetch(url)
    .then(res=>res.json())
    .then(data=>console.log(data.meals))
}
