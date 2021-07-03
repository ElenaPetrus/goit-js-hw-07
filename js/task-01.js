const calcItemEl = items => document.querySelectorAll('.item').length;
console.log("В списке", calcItemEl(), "категории.");



// const CategoryListEl =  document.querySelector('#categories');

// const fistItemEl = CategoryListEl.children[0];
// const nameFistItemEl = fistItemEl.firstElementChild.textContent
// console.log('Категория: ', nameFistItemEl);

// const numberOfEl = fistItemEl.lastElementChild.children;
// console.log("Количество элементов:", numberOfEl.length);

const categoryListEl =  document.querySelectorAll('#categories .item');
// console.dir(categoryListEl);

categoryListEl.forEach( el => {
    const messege =`Категория: ${el.firstElementChild.textContent}, Количество элементов: ${el.lastElementChild.children.length}`;
    console.log(messege) 
  });

