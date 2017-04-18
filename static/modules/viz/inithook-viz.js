// locate previous DOM node, take innerHTML as non-html input
var thisScript=document.currentScript;
var textDiv=thisScript.previousElementSibling;
var textpre=textDiv.childNodes[0];
var diagramText=textpre.innerText||textDiv.textContext;
// create diagram from text
var diagram=Viz(diagramText);
// insert new after text node.
var diagramDiv=document.createElement('div');
diagramDiv.innerHTML=diagram;
textDiv.parentNode.insertBefore(diagramDiv,textDiv.nextSibling);
textDiv.remove();
