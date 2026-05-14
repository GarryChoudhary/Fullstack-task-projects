let students=[
    {
        Name: "Gaurav choudhary",
        marks:"45%",
        class:"10th",
        Address: "India"
    },
    {
        Name: "Rajesh yogi",
        marks:"89%",
        class:"9th",
        Address: "India"
    },
    {
        Name: "Aman meena",
        marks:"38%",
        class:"8th",
        Address: "India"
    },
    {
        Name: "Ravi choudhary",
        marks:"45%",
        class:"11th",
        Address: "India"
    },
    {
        Name: "Ritesh kumar",
        marks:"96%",
        class:"10th",
        Address: "India"
    },
    {
        Name: "Rajesh khanna",
        marks:"67%",
        class:"8th",
        Address: "India"
    },
    {
        Name: "Pritam pyare",
        marks:"45%",
        class:"10th",
        Address: "India"
    },
    {
        Name: "Punita choudhary",
        marks:"90%",
        class:"12th",
        Address: "India"
    },
    {
        Name: "Krishna kumar",
        marks:"58%",
        class:"7th",
        Address: "India"
    }

]


// const newArray = students.filter((data)=> data.Name.toLowerCase().includes(data.Name.toLowerCase())
// )

// console.log(newArray);

function searchByName(input) {
  return students.filter(student =>
    student.Name.toLowerCase().includes(input.toLowerCase())
  );
}

let input="ama"
let result= searchByName(input);
console.log(result);

let results= document.getElementsByClassName('stInfo');


const cardsContainer = document.getElementById("cards");
const searchInput = document.getElementById("search");


// 🔹 Function to display cards using map()
function displayStudents(data) {
    cardsContainer.innerHTML = data.map(student => `
        <div class="stInfo">
            <h3>${student.Name}</h3>
            <p>Marks: ${student.marks}</p>
            <p>Class: ${student.class}</p>
            <p>Address: ${student.Address}</p>
        </div>
    `).join("");
}


// 🔹 Event listener for typing
searchInput.addEventListener("input", () => {
    let value = searchInput.value;
    let filtered = searchByName(value);
    displayStudents(filtered);
});


// 🔹 Show all students initially
displayStudents(students);