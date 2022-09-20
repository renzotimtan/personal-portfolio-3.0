const app = document.querySelector('.anim-typewriter');

const typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString("Hello World! I'm Renzo, a Software Engineer. 😎")
    .pauseFor(2500)
    .deleteAll()
    .typeString('Welcome to my handsome website!')
    .pauseFor(2500)
    .deleteAll()
    .typeString('SHEESH')
    .pauseFor(2500)
    .start();