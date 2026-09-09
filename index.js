//template_bahjk3k
//service_uuaxmxg
//Go7v0kj0Xk2YOR9eH

function contact(event) {
    event.preventDefault();
//    emailjs
//    .sendForm(
//        'service_uuaxmxg',
//       'template_bahjk3k',
//        event.target,
//        'Go7v0kj0Xk2YOR9eH'
//    ).then(() => {
//        console.log('SUCCESS!');
//    })

const loading = document.querySelector('.modal__contact--loading');
const success = document.querySelector('.modal__contact--success');
loading.classList += " modal__overlay--visible";

setTimeout(() => {
    console.log('SUCCESS1!');
}, 1000);
loading.classList.remove("modal__overlay--visible");
success.classList += " modal__overlay--visible";
}
