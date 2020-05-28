// store the html and css that will be edited by the user
let html, css;

/**
 * Set the initial HTML value that will be shown in the editor.
 * @param {String} _html 
 */
function setInitialHTML(_html) {
    html = _html;
}

/**
 * Set the initial CSS value that will be shown in the editor.
 * @param {String} _css 
 */
function setInitialCSS(_css) {
    css = _css;
}

window.onload = function() {
    // create splitter panel
    $(".panel-left").resizable({
        handleSelector: ".splitter",
        resizeHeight: false
    });
    
    // create CodeMirror editor
    const editor = CodeMirror(document.getElementById("editor"), {
        mode: "text/html",
        lineNumbers: true,
        indentWithTabs: true,
        indentUnit: 4,
        lineWrapping: true,
        styleActiveLine: { nonEmpty: true },
        value: html
    });

    let currentTab = "index.html";
    function updatePreview() {
        if (currentTab == "index.html") {
            document.getElementById("preview").innerHTML = html;
        }
        else if (currentTab == "style.css") {
            document.getElementById("userStyle").innerHTML = css;
        }
    }

    // when the editor is updated handler
    let delay;
    editor.on("change", () => {
        clearTimeout(delay);
        delay = setTimeout(updatePreview, 300);
    });

    // show initial preview
    updatePreview();

    // Add click listener to the menu file tabs
    for (const li of document.getElementsByTagName("li")) {
        li.addEventListener("click", e => {
            // do not modify content if clicking on already active tab
            if (e.srcElement.className == "active") return;

            // get rid of previously active element
            document.getElementsByClassName("active")[0].className = "";

            // make the clicked tab active and change the current tab
            e.srcElement.className = "active";
            currentTab = e.srcElement.innerHTML;

            // if just clicked on index.html tab
            if (currentTab == "index.html") {
                // save css content
                css = editor.getValue();

                // show html content
                editor.setValue(html);
                editor.setOption("mode", "text/html");
            }
            // if just clicked on style.css tab
            else if (currentTab == "style.css") {
                // save html content
                html = editor.getValue();

                // show css content
                editor.setValue(css);
                editor.setOption("mode", "css");
            }
        });
    }
}