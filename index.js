let isModalOpen = false;
let contrastToggle = false;

function toggleContrast() {
    contrastToggle = !contrastToggle;
    if (contrastToggle) {
        document.body.classList += " dark-theme";
    } else {
        document.body.classList.remove(" dark-theme");
    }
}

function contact(event) {
    event.preventDefault();
    const loading = document.querySelector('.modal__overlay--loading');
    const success = document.querySelector('.modal__overlay--success');
    loading.classList += " modal__overlay--visible";

    emailjs
    .sendForm(
        'service_uuaxmxg',       
        'template_bahjk3k',
        event.target
    ).then(() => {
        loading.classList.remove("modal__overlay--visible");
        success.classList += " modal__overlay--visible";
        console.log('SUCCESS!');
  }).catch((error) => {
        console.log('FAILED...', error);
        loading.classList.remove("modal__overlay--visible");
        alert(
            "The Email service is temporarily unavailable. Please contact me directly at aikipezman@gmail.com"
        )
    });
}

function toggleModal() {
    if (isModalOpen) {
        isModalOpen = false;
        return document.body.classList.remove("modal--open");
    }
    isModalOpen = true;
    document.body.classList += " modal--open";
}
