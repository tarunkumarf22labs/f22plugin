import { define } from 'uelements'
import  App  from './app'
import './index.css'



define(
	"f22-plugin",
	(el) => <App dataURL={(el.getAttribute("dataURL") || "")}  

	/>,
	["dataURL" ],
	() => console.log("F22 Plugin cleanup")
);

let el = document.createElement('f22-plugin')
el.setAttribute('dataUrl', "https://api.jsonbin.io/v3/b/63d5087aebd26539d069c0ac")
document.body.append(el)

// https://api.jsonbin.io/v3/b/63d5087aebd26539d069c0ac

// https://cdn.jsdelivr.net/gh/tarunkumarf22labs/f22plugin@tarunmobilechanges/dist/tolstoyf22.iife.js



// https://cdn.jsdelivr.net/gh/tarunkumarf22labs/f22plugin@refactoring/dist/tolstoyf22.iife.js