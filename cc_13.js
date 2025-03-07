// Task 1: Creating Base Structure (all in html file)

// Task 2: Adding employee cards dynamically
employeeContainerG = document.getElementById("employeeContainer")
employeeContainerQ = document.querySelector("employeeContainer")

function createEmployeeCard(name, position) {
    const newCard = document.createElement("div")
    newCard.setAttribute("class","employee-card")
    newCard.setAttribute("id", "employeeCard")
    newCard.innerHTML = `<h3>${name}</h3><p>${position}</p><button>Remove</button>`
    employeeContainerG.appendChild(newCard)
}

createEmployeeCard("Jason Miller", "Supply Chain Manager")
createEmployeeCard("Galo Rebelo", "Financial Analyst")
createEmployeeCard("Eric Torres", "Senior Consultant")
