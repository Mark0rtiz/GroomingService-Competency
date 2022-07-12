function displayCardPets(){
    //travel the array
    let card=""
    for (let i = 0; i < groomingService.pets.length; i++){
        let pet=groomingService.pets[i];
        card+=`
            <div id="${pet.id}class="petCard">
            <h4>Name: ${pet.name}</h4>
            <p>Age: ${pet.age}</p>
            <p>Gender: ${pet.gender}</p>
            <p>Breed: ${pet.breed}</p>
            <p>Service: ${pet.service}</p>
            <p>Owner: ${pet.owner}</p>
            <p>Phone Number: ${pet.phone}</p>
            <button class="btn btn-danger" onclick="deletePet${pet.id}"> Delete </button>
        </div>
        `;
    }

    //create the card (HTML)

    //inject card into HTML (register.html)
    document.getElementById("pet-cards").innerHTML=card;


}

function displayPetsTable(){
    //travel array, r+= (tr, th, td), inject into HTML table
    let tr=""
    for (let i = 0; i < groomingService.pets.length; i++){
        let pet=groomingService.pets[i];
        tr+=`
        <tr id= "${pet.id}">
            <td>${pet.name}</td>
            <td>${pet.age}</td>
            <td>${pet.gender}</td>
            <td>${pet.breed}</td>
            <td>${pet.service}</td>
            <td>${pet.owner}</td>
            <td>${pet.phone}</td>
            <td><button class="btn btn-danger" onclick="deletePet(${pet.id})"> Delete </button></td>
        </tr>
`;
        document.getElementById("pet-table").innerHTML=tr;
}
}