function getDonors() {
    return JSON.parse(localStorage.getItem("donors")) || [];
}

function saveDonors(donors) {
    localStorage.setItem("donors", JSON.stringify(donors));
}

// ✅ Register
function registerDonor() {
    let name = document.getElementById("name").value;
    let location = document.getElementById("location").value;
    let blood = document.getElementById("blood").value;

    let donors = getDonors();

    donors.push({ name, location, blood });

    saveDonors(donors);

    document.getElementById("msg").innerText = "Registered Successfully!";
}

// ✅ Search
function searchDonor() {
    let location = document.getElementById("searchLocation").value;
    let blood = document.getElementById("searchBlood").value;

    let donors = getDonors();

    let result = donors.filter(d => 
        d.location.toLowerCase() === location.toLowerCase() &&
        d.blood === blood
    );

    let output = "";

    if (result.length === 0) {
        output = "No donors found";
    } else {
        result.forEach(d => {
            output += `<p>${d.name} - ${d.blood} - ${d.location}</p>`;
        });
    }

    document.getElementById("result").innerHTML = output;
}

// ✅ Stats
function showStats() {
    let donors = getDonors();

    let counts = {};

    donors.forEach(d => {
        counts[d.blood] = (counts[d.blood] || 0) + 1;
    });

    let output = "";

    for (let blood in counts) {
        output += `<p>${blood} : ${counts[blood]} donors</p>`;
    }

    document.getElementById("stats").innerHTML = output;
}
