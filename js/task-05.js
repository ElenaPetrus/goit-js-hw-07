const refs = {
    input: document.querySelector("#name-input"),
    headerSpan: document.querySelector("#name-output"),
  };

  refs.input.addEventListener ("input", onInputChange);
  function onInputChange(event) {
    refs.headerSpan.textContent = event.currentTarget.value;
  };