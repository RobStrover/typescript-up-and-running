const inputOne = document.getElementById("input-one") as HTMLInputElement;

inputOne.autofocus = true

inputOne.addEventListener("input", event => {
    const input = event.currentTarget as HTMLInputElement
    console.log(input.value)
})