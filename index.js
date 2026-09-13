//template_bahjk3k
//service_uuaxmxg
//Go7v0kj0Xk2YOR9eH

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

let isModalOpen = false;
function toggleModal() {
    if (isModalOpen) {
        isModalOpen = false;
        return document.body.classList.remove("modal--open");
    }
    isModalOpen = true;
    document.body.classList += " modal--open";
}
