//template_bahjk3k
//service_uuaxmxg
//Go7v0kj0Xk2YOR9eH

function contact(event) {
    event.preventDefault();
    const loading = document.querySelector('.modal__contact--loading');
    const success = document.querySelector('.modal__contact--success');
    loading.classList += " modal__overlay--visible";

    emailjs
    .sendForm(
        'service_uuaxmxg',       
        'template_bahjk3k',
        event.target,
         'Go7v0kj0Xk2YOR9eH'
    ).then(() => {
        loading.classList.remove("modal__overlay--visible");
        success.classList += " modal__overlay--visible";
        console.log('SUCCESS!');
  }).catch(() => {
        loading.classList.remove("modal__overlay--visible");
        alert(
            "The Email service is temporarily unavailable. Please contact me directly at aikipezman@gmail.com"
        )
    });

setTimeout(() => {
    ;
console.log('It Worked 1');
}, 1000);
}
