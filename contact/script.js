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

let contactName = document.querySelector("#name"),
    contactEmail = document.querySelector("#email"),
    contactSubject = document.querySelector("#subject"),
    contactMessage = document.querySelector("#message");

let errorInput = document.querySelector(".alert");

let alertContact = () => {
    if(contactName.value == "" || contactEmail.value == "" || contactSubject == "" || contactMessage == "") {
        errorInput.classList.add("on");
        setTimeout(() => {errorInput.classList.remove("on")}, 3000);
    } else {
        window.alert(`  your name is : ${contactName.value}
        and your email is : ${contactEmail.value}
        and your subject is : ${contactSubject.value}
        and your message is : ${contactMessage.value}`);
    }

}

