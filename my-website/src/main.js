let paragraphOne = document.getElementById("paragraph-1")
let paragraphTwo = document.getElementById("paragraph-2")

function setInnerTextFromFile(url, htmlTag) {
    fetch(url)
        .then((response) => {
            if (!response.ok) {
                throw new Error(`HTTP error: ${response.status}`);
            }
            return response.text()
        })
        .then((text) => {
            htmlTag.innerText = text
        })
        .catch((error) => {
            console.log("Fetch failed", error)
        })
}

setInnerTextFromFile("/test.txt", paragraphOne)
setInnerTextFromFile("/test.txt", paragraphTwo)