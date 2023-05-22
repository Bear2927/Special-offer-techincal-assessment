const form = document.getElementById("submit-form")
const formName = document.getElementById("name")
const email = document.getElementById("email")
const handle = document.getElementById("handle")

form.addEventListener("submit", (e) => {
    e.preventDefault()
    console.log(formName.value)
    console.log(email.value)
    console.log(handle.value)
})