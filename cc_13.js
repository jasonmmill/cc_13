// Task 1: Creating Base Structure (all in html file)

// Task 2: Adding employee cards dynamically
const employeeContainerG = document.getElementById("employeeContainer") // select employee container
const employeeContainerQ = document.querySelector("employeeContainer") // select employee container

function createEmployeeCard(name, position, id) { // function to create employee card
    const newCard = document.createElement("div") // create div tag
    newCard.setAttribute("class","employee-card") // set css class
    newCard.setAttribute("id", id) // set id

    const cardName = document.createElement("h3") // create h3 to house name
    cardName.textContent = name

    const cardPosition = document.createElement("p") // create paragraph to house position
    cardPosition.textContent = position
   
    const deleteBtn = document.createElement("button") // create delete button 
    deleteBtn.textContent = "Remove Employee" // text to show in button
    deleteBtn.setAttribute("class", "btn") // set css class
    
    newCard.appendChild(cardName) // append to new card
    newCard.appendChild(cardPosition) // append to new card
    newCard.appendChild(deleteBtn) // append to new card

// Task 4: Implementing Removal of Employee Cards with Event Bubbling 
    newCard.addEventListener("click", () => { // event listener
        console.log(`Clicked ${newCard.id}`) // log message with new card id on click
    })

    deleteBtn.addEventListener("click", (event) => { // event listenet
        newCard.remove() // remove card on click
        event.stopPropagation() // stops bubbling
    })
// End Task 4

// Task 5: Additional Challenge - Inline Editing of Employee Details
const editBtn = document.createElement("button") // create edit button
editBtn.textContent = "Edit Employee Details" // text to show in button
editBtn.setAttribute("class", "btn") // set css class
newCard.appendChild(editBtn) // append to new card

editBtn.addEventListener("click", (event) => { // event listener

    event.stopPropagation() // stops bubbling 
    let nameInput = document.createElement("input") // input
    nameInput.value = newCard.children[0].textContent // input value starts at current value

    let positionInput = document.createElement("input") // input
    positionInput.value = newCard.children[1].textContent // input value starts at current value

    let saveBtn = document.createElement("button") // create save button
    saveBtn.textContent = "Save" // text to show in button
    saveBtn.setAttribute("class", "btn") // set css class

    newCard.innerHTML = "" // empty html
    newCard.appendChild(nameInput) // append to empty new card
    newCard.appendChild(positionInput) // append to empty new card
    newCard.appendChild(saveBtn) // append to empty new card

    saveBtn.addEventListener("click", (event) => { // event listener
        event.stopPropagation() // stops bubbling
        newCard.innerHTML = `<h3>${nameInput.value}</h3><p>${positionInput.value}</p>` // new html
        newCard.appendChild(editBtn) // append new input to new card
        newCard.appendChild(deleteBtn) // append new input to new card
    })});
// End Task 5

    employeeContainerG.appendChild(newCard) // append new card to employee container
}

createEmployeeCard("Jason Miller", "Supply Chain Manager", "card1") // creation of card1
createEmployeeCard("Galo Rebelo", "Financial Analyst", "card2") // creation of card2
createEmployeeCard("Eric Torres", "Senior Consultant", "card3") // creation of card3

// Task 3: Converting NodeLists to Arrays for Bulk Updates
const allCards = document.querySelectorAll(".employee-card") // find all employee cards
allCardsArray = Array.from(allCards) // create array of all cards

allCardsArray.forEach(card => { // for each card in the array
    card.style.backgroundColor = "powderblue" // background color set to plum
})