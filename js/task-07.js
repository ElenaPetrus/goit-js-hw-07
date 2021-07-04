const refs ={
    input:document.querySelector("#font-size-control"),
    spanText:document.querySelector("#text"),
}
    refs.input.addEventListener("input", onInputChange);

    function onInputChange(event) {
        const size = refs.input.value;
        refs.spanText.style.fontSize = size + "px";;
      };