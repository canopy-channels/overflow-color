var ocTopColor,
    ocBottomColor;

var ocStyleTag;

var currentColor;

function setBgColor(color) {

    currentColor = color;

    if (ocStyleTag) {
        ocStyleTag.parentNode.removeChild(ocStyleTag);
    }

    var css = "html { background: " + color + "; }",
    head = document.head || document.getElementsByTagName('head')[0];
    ocStyleTag = document.createElement("style");

    if (ocStyleTag.styleSheet){
        ocStyleTag.styleSheet.cssText = css;
    }
    else {
        ocStyleTag.appendChild(document.createTextNode(css));
    }

    head.appendChild(ocStyleTag);

}

function handleScroll() {

    if (document.body.scrollHeight === window.innerHeight) {
        setBgColor(ocBottomColor);
    }
    else {

        var diffTop = document.body.scrollTop;
        var diffBottom = document.body.scrollHeight - (document.body.scrollTop + window.innerHeight);

        if (diffTop < diffBottom && currentColor !== ocTopColor) {
            setBgColor(ocTopColor);
        }
        else if (diffTop > diffBottom && currentColor !== ocBottomColor) {
            setBgColor(ocBottomColor);
        }

    }

}

function initOverflowColor() {

    var topEl = document.querySelector("[data-oc-top]");
    if (topEl) {
        ocTopColor = topEl.getAttribute("data-oc-top");
    }

    var bottomEl = document.querySelector("[data-oc-bottom]");
    if (bottomEl) {
        ocBottomColor = bottomEl.getAttribute("data-oc-bottom");
    }

    if (!ocTopColor && !ocBottomColor) {
        return;
    }
    if (!ocTopColor && ocBottomColor) {
        ocTopColor = ocBottomColor;
    }
    if (ocTopColor && !ocBottomColor) {
        ocBottomColor = ocTopColor;
    }

    if (document.body.scrollHeight > window.innerHeight) {
        setBgColor(ocTopColor);
    }
    else {
        setBgColor(ocBottomColor);
    }

    if (typeof window.addEventListener !== "undefined") {
        window.addEventListener("scroll", handleScroll, false);
        window.addEventListener("resize", handleScroll, false);
    }
    else {
        window.attachEvent("scroll", handleScroll);
        window.attachEvent("resize", handleScroll);
    }

}

if (typeof document.addEventListener !== "undefined") {
    document.addEventListener("DOMContentLoaded", initOverflowColor, false);
}
else {
    document.attachEvent("onreadystatechange", initOverflowColor);
}