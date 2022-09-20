const app = document.querySelector('.anim-typewriter');

const typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString("Hello World! I'm Renzo, a Software Engineer. 😎")
    .pauseFor(2500)
    .deleteAll()
    .typeString('Welcome to my website!')
    .pauseFor(2500)
    .deleteChars(7)
    .typeString('<strong>SHEESH</strong>')
    .pauseFor(2500)
    .start();