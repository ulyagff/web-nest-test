import Drift from '../drift/dist/Drift.js';


var demoTrigger = document.querySelector('.zoom-trigger');
var paneContainer = document.querySelector('.detail');

new Drift(demoTrigger, {
    paneContainer: paneContainer,
    inlinePane: false,
});