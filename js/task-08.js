// const inputContainer = document.getElementById ("controls").firstElementChild;
// inputContainer.classList.add('inputField');


const refs = {
    input: document.querySelector('[type="number"]'),
    renderBtn:document.querySelector('[data-action="render"]'),
    clearBtn: document.querySelector('[data-action="destroy"]'),
    boxesContainer:document.getElementById ('boxes'),
  };
  
  refs.renderBtn.addEventListener ('click', onRenderBtn);
  refs.clearBtn.addEventListener('click', onClearBtn);
  refs.input.addEventListener('input', onInputFill);

  function onInputFill (event) {
  return refs.input.value;
  }

  
  function onRenderBtn(event) {
      const amount = refs.input.value;
    createBoxes(amount) ;
  };

  function createBoxes (amount) {
    let divSize = 30;
    for (let i = 1; i <= amount; i += 1){
          let divColor = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
          divSize += 10;
          const boxEl = '<div class = "box" style="background-color: #${divColor}; width: ${divSize}px; margin: 15px; height:${divSize}px;"></div>'
          refs.boxesContainer.insertAdjacentHTML('beforeend', boxEl);
      }

  };
  
  function onClearBtn() {
    refs.input.value = '';
    // boxesContainer.innerHTML = '';
    while (refs.boxesContainer.firstChild) {
        refs.boxesContainer.removeChild(refs.boxesContainer.firstChild);
  }
};