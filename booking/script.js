// mobile menu script
let mobilMenu = () => {
    document.querySelector("nav").classList.toggle("menu-on");
}

// scroll to top script
const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
}


// booking script
    // variables of the select tags 
let form = document.querySelector("form"),
    days = document.querySelector("#days"),
    submit = document.querySelector("#submit");

    // variables of the types input 
let mType = ["Citadine", "Compact", "Utilitaire", "Engin de Chantier"],
    aType = ["Berline", "Camion"],
    oType = "Moto";


    // variables of the fuel input 
let electric = ["Moto", "Citadine"],
    hybrid = ["Citadine", "Compact", "Berline"],
    gasoline = ["Moto", "Citadine", "Berline", "Compact", "Engin_de_Chantier"],
    diesel = ["Citadine", "Compact", "Berline", "Utilitaire", "Engin de Chantier", "Camion"];


// if the user select one of the element on the gearBoxes select this script well start working
form.gearboxes.addEventListener("change",() => {
    days.value = "";
    form.fuel.innerHTML = `<option value="none">--Choose--</option>`;
    if(form.gearboxes.value == "manual") {
        document.querySelectorAll(".re-steps")[1].classList.add("on-re-steps");
        form.type.innerHTML = `<option value="none">--Choose--</option>`;
        mType.forEach(m => {
            form.type.innerHTML += `<option value="${m}">${m}</option>`;
        });

    } else if(form.gearboxes.value == "automatique") {
        document.querySelectorAll(".re-steps")[1].classList.add("on-re-steps");
        form.type.innerHTML = `<option value="none">--Choose--</option>`;   
        aType.forEach(a => {
            form.type.innerHTML += `<option value="${a}">${a}</option>`;
        });

    } else if(form.gearboxes.value == "other") {
        document.querySelectorAll(".re-steps")[1].classList.add("on-re-steps");
        form.type.innerHTML = `<option value="none">--Choose--</option>`;
        form.type.innerHTML += `<option value="${oType}">${oType}</option>`;

    } else {
        document.querySelectorAll(".re-steps")[1].classList.remove("on-re-steps");
        document.querySelectorAll(".re-steps")[2].classList.remove("on-re-steps");
        document.querySelectorAll(".re-steps")[3].classList.remove("on-re-steps");
        form.type.innerHTML = `<option value="none">--Choose--</option>`;
        form.fuel.innerHTML = `<option value="none">--Choose--</option>`;
    }
});



// if the user select one of the element on the types select this script well continue working
form.type.addEventListener("change",() => {
    form.fuel.innerHTML = `<option value="none">--Choose--</option>`;
    days.value = "";
    if (electric.includes(form.type.value)) {
        document.querySelectorAll(".re-steps")[2].classList.add("on-re-steps");
        form.fuel.innerHTML += `<option value="Electric">Electric</option>`;

    }
    if (hybrid.includes(form.type.value)) {
        document.querySelectorAll(".re-steps")[2].classList.add("on-re-steps");
        form.fuel.innerHTML += `<option value="Hybrid">Hybrid</option>`;

    }
    if (gasoline.includes(form.type.value)) {
        document.querySelectorAll(".re-steps")[2].classList.add("on-re-steps");
        form.fuel.innerHTML += `<option value="Gasoline">Gasoline</option>`;

    } 
    if (diesel.includes(form.type.value)) {
        document.querySelectorAll(".re-steps")[2].classList.add("on-re-steps");
        form.fuel.innerHTML += `<option value="Diesel">Diesel</option>`;

    }
    if (form.type.value == "none") {
        document.querySelectorAll(".re-steps")[2].classList.remove("on-re-steps");
        form.fuel.innerHTML = `<option value="none">--Choose--</option>`;
    }
});


// if the user select one of the element on the fuel select this script well continue working
form.fuel.addEventListener("change", () => {
    days.value = "";
    if (form.fuel.value !== "none") {
        document.querySelectorAll(".re-steps")[3].classList.add("on-re-steps");
        days.focus();

    } else {
        document.querySelectorAll(".re-steps")[3].classList.remove("on-re-steps");
        days.value = "";
    }
});


// when the user click the submit button the calculation will start.
submit.addEventListener("click", (e) => {
    e.preventDefault();
    let result = 0,
        typePris = 0,
        fuelPris = 0;

    switch (form.type.value) {
        case "Moto":
            typePris = 10;
            break;
        case "Citadine":
            typePris = 12;
            break;
        case "Compact":
            typePris = 14;
            break;
        case "Berline":
            typePris = 20;
            break;
        case "Utilitaire":
            typePris = 16;
            break;
        case "Engin_de_Chantier":
            typePris = 900;
            break;
        case "Camion":
            typePris = 250;
            break;
    }

    switch (form.fuel.value) {
        case "Electric":
            fuelPris = 1.05;
            break;
        case "Hybrid":
            fuelPris = 1.09;
            break;
        case "Gasoline":
            fuelPris = 1.14;
            break;
        case "Diesel":
            fuelPris = 1.21;
            break;
    }
    
    // store the prise on the result variable depending on the gearBoxes.
    if(form.gearboxes.value == "automatique") {
        result = (typePris * days.value) * fuelPris * 1.19;
    } else {
        result = (typePris * days.value) * fuelPris;
    }

    // display the result.
    Swal.fire(Math.trunc(result) + "€");
})