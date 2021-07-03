
    const inputRef = document.querySelector("#validation-input");
    inputRef.addEventListener("focus", onInputFocus);
    
    function onInputFocus(event) {

    if (Number(event.target.value.length) === Number(inputRef.dataset.length)) 
    {
        inputRef.classList.remove('invalid');
        inputRef.classList.add('valid');
      } else {
        inputRef.classList.remove('valid');
        inputRef.classList.add('invalid');
      }
    };

    
