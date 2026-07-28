// 🔹 Get Data
function getDonors() {
    return JSON.parse(localStorage.getItem("donors")) || [];
}

// 🔹 Save Data
function saveDonors(donors) {
    localStorage.setItem("donors", JSON.stringify(donors));
}

// 🔹 Validation
function validateForm(name, age, gender, blood, district, address, phone) {

    if(name === "" || age === "" || gender === "" || blood === "" || district === "" || address === "" || phone === ""){
        return "All fields are required!";
    }

    if(age < 18 || age > 60){
        return "Age must be between 18 and 60";
    }

    if(phone.length !== 10){
        return "Phone number must be 10 digits";
    }

    return "valid";
}

// 🔹 Register Donor
function registerDonor() {

    let name = document.getElementById("name").value.trim();
    let age = document.getElementById("age").value.trim();
    let gender = document.getElementById("gender").value;
    let bloodGroup = document.getElementById("blood").value;
    let district = document.getElementById("district").value.trim();
    let address = document.getElementById("address").value.trim();
    let phone = document.getElementById("phone").value.trim();

    let check = validateForm(name, age, gender, bloodGroup, district, address, phone);

    if(check !== "valid"){
        document.getElementById("msg").innerText = check;
        document.getElementById("msg").style.color = "red";
        return;
    }

    let donors = getDonors();

    donors.push({
        name,
        age,
        gender,
        bloodGroup,
        district,
        address,
        phone
    });

    saveDonors(donors);

    document.getElementById("msg").innerText = "✅ Registered Successfully!";
    document.getElementById("msg").style.color = "green";

    clearForm();
}

// 🔹 Clear Form
function clearForm(){
    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
    document.getElementById("gender").value = "";
    document.getElementById("blood").value = "";
    document.getElementById("district").value = "";
    document.getElementById("address").value = "";
    document.getElementById("phone").value = "";
}
