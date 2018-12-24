import { ProjectEcho, render } from '@project/core';

console.log(`Project echo: ${ProjectEcho}`);
var view = render();
window.onload = function() {
    document.body.appendChild(view);
}