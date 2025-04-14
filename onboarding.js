
let step = 1;

function nextStep() {
    document.getElementById(`step${step}`).style.display = "none";
    step++;
    document.getElementById(`step${step}`).style.display = "block";
}

function updateAgeLabel() {
    const age = document.getElementById("ageSlider").value;
    document.getElementById("ageLabel").innerText = "Age: " + age;
}

function finishSetup() {
    const name = document.getElementById("nameInput").value;
    localStorage.setItem("mirror_user_name", name);
    document.getElementById("step8").style.display = "none";
    document.getElementById("finalStep").style.display = "block";
    document.getElementById("finalName").textContent = name;
}

    const animal = document.getElementById("animal").value;
    localStorage.setItem("mirror_user_animal", animal);
    window.location.href = "dashboard.html";
