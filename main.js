console.log('hello world');
let elSearch = document.querySelector('.search__input');
let elCategory = document.querySelector('.select__category');
let elRating = document.querySelector('.select__rating');
let elYear = document.querySelector('.select__year');

let ul = document.querySelector('.list');
let dataa = movies.splice(0,1000);
mapper(dataa);
function mapper(data){
  ul.innerHTML = '';
  data.forEach(item => {
    
    let newLi = document.createElement('li');
    ul.appendChild(newLi);
    newLi.innerHTML = `<div class="card" style="width: 18rem;">
    <img src="http://i.ytimg.com/vi/${item.ytid}/hqdefault.jpg" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${item.Title.toString().length > 23 ? item.Title.toString().split("").splice(0,23).join("") + ' ...':item.Title.toString()}</h5>
      <p class="card-text">${item.Categories.toString().split("").splice(0,27).join("")}</p>
      <p class="card-text">Rating: ${item.imdb_rating.toString().split("").splice(0,27).join("")}</p>
      <p class="card-text">Year: ${item.movie_year.toString().split("").splice(0,27).join("")}</p>
      <a href="https://www.youtube.com/watch?v=${item.ytid}" target="_blank" class="btn btn-primary">Watch treiler</a>
    </div>
  </div>`
  });
}

elSearch.addEventListener('keyup',e => {
  // ul.innerHTML = '';
  let searchValue = e.target.value;
  const searchData = [];
  dataa.map(item => {
    if(item.Title.toString().toLocaleLowerCase().indexOf(searchValue.toLocaleLowerCase()) != -1){
      searchData.push(item);
    }else{
      console.log('not faund');
    }
  })
  mapper(searchData);
});

let categoryList = [];
dataa.forEach(e => {
  if(categoryList.includes(e.Categories) != true){
    categoryList.push(e.Categories);
  }
});

categoryList.forEach(e => {
  let elOPtion = document.createElement('option');
  elOPtion.textContent = e;
  elCategory.appendChild(elOPtion);

});


elCategory.addEventListener('change',e => {
  let categoryValue = [];
  // ul.innerHTML = '';
  let changeCategory = e.target.value;

  dataa.forEach(item => {
    if(item.Categories == changeCategory){
      categoryValue.push(item);
    }
  });
  mapper(categoryValue);
});

elRating.addEventListener('change', e => {
  // ul.innerHTML = '';
  let rating = e.target.value;
  if(rating == 'max'){
    dataa.sort((a,b) => a.imdb_rating - b.imdb_rating).reverse();
  }else{
    dataa.sort((a,b) => a.imdb_rating - b.imdb_rating);
  }
  mapper(dataa)
});

elYear.addEventListener('change', e => {
  // ul.innerHTML = '';
  let year = e.target.value;
  if(year == 'max'){
    dataa.sort((a,b) => a.movie_year - b.movie_year).reverse();
  }else{
    dataa.sort((a,b) => a.movie_year - b.movie_year);
  }
  mapper(dataa)
});