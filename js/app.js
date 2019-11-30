function heading() {
    let heading = document.createElement('p')
    heading.innerText = "2048"
    document.body.append(heading)
}

document.addEventListener("DOMContentLoaded", () => {
    heading();
});