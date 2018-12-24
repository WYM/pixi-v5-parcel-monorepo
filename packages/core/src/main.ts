import * as PIXI from 'pixi.js';

var ProjectEcho = 'Hello, World';

const render = function (): HTMLCanvasElement {
    const app = new PIXI.Application(window.innerWidth, window.innerHeight, {
        backgroundColor: 0x007BA7,
    });

    const bunnyImgURL = 'https://pixijs.io/examples/required/assets/basics/bunny.png';
    const bunny = PIXI.Sprite.fromImage(bunnyImgURL);
    bunny.anchor.set(0.5);
    bunny.x = window.innerWidth / 2;
    bunny.y = window.innerHeight / 4;
    app.stage.addChild(bunny);

    app.ticker.add((delta) => {
        bunny.rotation += 0.1 * delta;
    });

    return app.view;
}

export { ProjectEcho, render };