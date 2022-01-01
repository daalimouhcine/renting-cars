let mobilMenu = () => {
    document.querySelector("nav").classList.toggle("menu-on");
}

let gearBoxes = document.querySelector("#gearboxes"),
    type = document.querySelector("#type"),
    fuel = document.querySelector("#fuel"),
    days = document.querySelector("#days"),
    submit = document.querySelector("#submit");

let mType = ["Citadine", "Compact", "Utilitaire", "Engin de Chantier"],
    aType = ["Berline", "Camion"],
    oType = "Moto";


let electric = ["Moto", "Citadine"],
    hybrid = ["Citadine", "Compact", "Berline"],
    gasoline = ["Moto", "Citadine", "Berline", "Compact", "Engin_de_Chantier"],
    diesel = ["Citadine", "Compact", "Berline", "Utilitaire", "Engin de Chantier", "Camion"];



gearBoxes.addEventListener("change",() => {
    if(gearBoxes.value == "manual") {
        document.querySelectorAll(".re-steps")[1].classList.add("on-re-steps");
        type.innerHTML = `<option value="none">--Choose--</option>`;
        mType.forEach(m => {
            type.innerHTML += `<option value="${m}">${m}</option>`;
        });

    } else if(gearBoxes.value == "automatique") {
        document.querySelectorAll(".re-steps")[1].classList.add("on-re-steps");
        type.innerHTML = `<option value="none">--Choose--</option>`;
        aType.forEach(a => {
            type.innerHTML += `<option value="${a}">${a}</option>`;
        });

    } else if(gearBoxes.value == "other") {
        document.querySelectorAll(".re-steps")[1].classList.add("on-re-steps");
        type.innerHTML = `<option value="none">--Choose--</option>`;
        type.innerHTML += `<option value="${oType}">${oType}</option>`;

    } else {
        document.querySelectorAll(".re-steps")[1].classList.remove("on-re-steps");
        document.querySelectorAll(".re-steps")[2].classList.remove("on-re-steps");
        document.querySelectorAll(".re-steps")[3].classList.remove("on-re-steps");
        type.innerHTML = `<option value="none">--Choose--</option>`;
        fuel.innerHTML = `<option value="none">--Choose--</option>`;


    }


})

type.addEventListener("change",() => {
    fuel.innerHTML = `<option value="none">--Choose--</option>`;
    if (electric.includes(type.value)) {
        document.querySelectorAll(".re-steps")[2].classList.add("on-re-steps");
        fuel.innerHTML += `<option value="Electric">Electric</option>`;

    }
    if (hybrid.includes(type.value)) {
        document.querySelectorAll(".re-steps")[2].classList.add("on-re-steps");
        fuel.innerHTML += `<option value="Hybrid">Hybrid</option>`;

    }
    if (gasoline.includes(type.value)) {
        document.querySelectorAll(".re-steps")[2].classList.add("on-re-steps");
        fuel.innerHTML += `<option value="Gasoline">Gasoline</option>`;

    } 
    if (diesel.includes(type.value)) {
        document.querySelectorAll(".re-steps")[2].classList.add("on-re-steps");
        fuel.innerHTML += `<option value="Diesel">Diesel</option>`;

    }
    if (type.value == "none") {
        document.querySelectorAll(".re-steps")[2].classList.remove("on-re-steps");
        fuel.innerHTML = `<option value="none">--Choose--</option>`;
    }
});

fuel.addEventListener("change", () => {
    if (fuel.value !== "none") {
        document.querySelectorAll(".re-steps")[3].classList.add("on-re-steps");
        days.focus();

    } else {
        document.querySelectorAll(".re-steps")[3].classList.remove("on-re-steps");
        days.value = "";
    }
});


submit.addEventListener("click", (e) => {
    e.preventDefault();
    let result = 0,
        typePris = 0,
        fuelPris = 0;
    switch (fuel.value) {
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

    switch (type.value) {
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
    
    if(gearBoxes.value = "automatique") {
        result = (typePris * days.value) * fuelPris * 1.19;
    } else {
        result = (typePris * days.value) * fuelPris;
    }
    window.alert(Math.round(result) + "$");
})