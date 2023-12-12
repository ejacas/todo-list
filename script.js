const form = document.querySelector("form")
const input = document.getElementById("input")
const list = document.querySelector("ul")
let listArray = []

const populate = (item) => {
    const newLi = document.createElement("li")
    newLi.innerHTML = 
    `
		<span>${item}</span>
		<button>
        <img src="svg/garbage.svg" alt="">
		</button>
    `
    list.append(newLi)

    
    const delBtn = newLi.querySelector("button")
    delBtn.addEventListener("click", () => {
        const parentNode = delBtn.parentNode
        const index = listArray.indexOf(parentNode.innerText)
        parentNode.remove()
    
        listArray.splice(index, 1)
        localStorage.setItem("listArray", listArray)
    })

}

form.addEventListener("submit", (e) => {
    if(input.value == ""){
        alert("Please write something...")
    } else {
        e.preventDefault()
    
        populate(input.value)
    
        listArray.push(input.value)
        localStorage.setItem("listArray", listArray)
    
        input.value = ""
    }
})

let getItem = localStorage.getItem("listArray")
if(getItem) {
    listArray = getItem.split(",")

    listArray.forEach(item => {
        populate(item)
    })
}
