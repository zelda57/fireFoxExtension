console.log("Addon");

document.body.style.border = "1px solid blue";
document.title += "poo";

function test() {
    var elements = document.body.getElementsByTagName("cite");
    
    for (var i = 0; i<elements.length; i++) {
        var element = elements[i];
        
        if (element.tagName!=="A") {
            element.innerHTML.replace(/4ni/g,"xxxx");
            console.log(element.innerHTML);
            }
    }
}

test();