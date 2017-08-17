console.log("Addon");

function start() {
    console.log("Addon");
    document.body.style.border = "2px solid pink";
    document.title += "|Altered";    
}

function addElement() {
    console.log("Creating element");
    var div = document.createElement("div");
    div.style.position = "fixed";
    div.style.right = "0px";
    div.style.bottom = "0px";
    div.style.color = "red";
    div.style.zIndex = "10000";
    div.style.padding = "10px";
    div.style.margin = "10px";
    div.style.border = "1px solid";
    div.style.background = "white";
    var node = document.createTextNode("Text " + new Date());
    div.appendChild(node);

    document.body.insertBefore(div,document.body.firstChild);
}

function doReplace() {
    var elements = document.body.querySelectorAll("A,cite");
    
    for (var i = 0; i<elements.length; i++) {
        var element = elements[i];
        if (element.innerHTML.toLowerCase().includes("4ni") || element.href.toLowerCase().includes("http://www.4ni.co.uk")) {
            element.style.background = "yellow";
        }
        
        /*
        console.log(element.tagName);
        var text = element.innerHTML;
        console.log(text);
        text = text.replace(/4ni/g,"REPL");
        element.innerHTML = text;
        */
    }
}

function load() {
    start();
    doReplace();
    addElement();
}

var readyStateCheckInterval = setInterval(function() {
    if (document.readyState === "complete") {
        clearInterval(readyStateCheckInterval);
        load();
    }
}, 10);