const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];

  const navEl = document.querySelector ("ul#ingredients");

  const makeIngredientList = ingredientList => {
    return ingredientList.map(ingredient => {
      const navItemEl = document.createElement('li');
      navItemEl.textContent = ingredient;
  
        return navItemEl;
    });
  };
  
  const elements = makeIngredientList(ingredients);
  navEl.append(...elements);

