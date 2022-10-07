//selector de elemento por ID
const switchButton = document.getElementById('switch');
changeTheme();
switchButton.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    switchButton.classList.toggle('active');

    if ((document.getElementsByClassName("active") !== null)) {
        changeTheme();
    }
});

function changeTheme() {
    //selector de elementos por nombre de etiqueta
    let element = document.getElementsByTagName("h1")[0];
    element.classList.toggle("text-ligth-theme");
    
    //selector de elementos por nombre de clase
    const elements = document.getElementsByClassName("curved-white");
    for (let i = 0; i < elements.length; i++) {
       elements[i].classList.toggle("curved-white-ligth");
    }

    const elementsBagde = document.getElementsByClassName("inner-bg");
    for (let i = 0; i < elementsBagde.length; i++) {
        elementsBagde[i].classList.toggle("inner-bg-light");
    }

    const elementsP = document.getElementsByClassName("text-white-50");
    for (let i = 0; i < elementsP.length; i++) {
        elementsP[i].classList.toggle("text-ligth-theme-opacity");
    }

    const elementsPOpacity = document.getElementsByClassName("text-opacity-50");
    for (let i = 0; i < elementsPOpacity.length; i++) {
        elementsPOpacity[i].classList.toggle("text-ligth-theme-opacity");
    } 

    const elementsPUsers = document.getElementsByClassName("text-users");
    for (let i = 0; i < elementsPUsers.length; i++) {
        elementsPUsers[i].classList.toggle("text-users-light");
    } 

    const elementsButtonBlue = document.getElementsByClassName("curved-blue");
    for (let i = 0; i < elementsButtonBlue.length; i++) {
        elementsButtonBlue[i].classList.toggle("curved-blue-light");
    } 
   
    const elementsTestimonial = document.getElementsByClassName("testimonial");
    for (let i = 0; i < elementsTestimonial.length; i++) {
        elementsTestimonial[i].classList.toggle("testimonial-light");
    }

    const elementNavbar = document.getElementsByClassName("navbar-format");
    for (let i = 0; i < elementNavbar.length; i++) {
        elementNavbar[i].classList.toggle("navbar-format-light");
    }

    const elementCard = document.getElementsByClassName("card");
    for (let i = 0; i < elementCard.length; i++) {
        elementCard[i].classList.toggle("card-light");
    }

    const elementsH2 = document.getElementsByTagName("h2");
    for (let i = 0; i < elementsH2.length; i++) {
        elementsH2[i].classList.toggle("text-ligth-theme");
    }

    const elementsH3 = document.getElementsByTagName("h3");
    for (let i = 0; i < elementsH3.length; i++) {
        elementsH3[i].classList.toggle("text-ligth-theme");
    }

    const elementsA = document.getElementsByTagName("a");
    for (let i = 0; i < elementsA.length; i++) {
        elementsA[i].classList.toggle("text-ligth-theme");
    }

}

