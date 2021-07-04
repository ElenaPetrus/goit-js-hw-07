const refs = {
    input: document.querySelector("#name-input"),
    topicSpan: document.querySelector("#name-output"),
  };

  refs.input.addEventListener ("input", onInputChange);
  function onInputChange(event) {
    refs.topicSpan.textContent = event.currentTarget.value;
  };