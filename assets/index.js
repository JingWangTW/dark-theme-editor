let isSidebarExpand = false;
let isSidebarShow = false;

function isSidebarExpandStart() {
    isSidebarExpand = true;
}

function isSidebarExpandEnd() {
    isSidebarExpand = false;
}

function isSidebarExpanding(e) {
    if (!isSidebarExpand) return;

    const sidebarPercentage = (e.pageX / window.innerWidth) * 100;

    if (sidebarPercentage > 10 && sidebarPercentage < 50) {
        const articlePercentage = 100 - sidebarPercentage;

        document.querySelector(
            "aside.sidebar"
        ).style.width = `${sidebarPercentage}%`;

        const originWidth = getComputedStyle(
            document.querySelector("article.main")
        ).getPropertyValue("--artile_main_width");

        const newWidth = originWidth.replace(/[\d.]+/, articlePercentage);

        document
            .querySelector("article.main")
            .style.setProperty("--artile_main_width", newWidth);
    }
}

function showSidebar() {
    document.querySelector("aside.sidebar").style.display = "block";

    isSidebarShow = true;
    document
        .querySelector("button.sidebar-toggle-btn")
        .setAttribute("aria-expanded", "true");
}

function hideSidebar() {
    if (isSidebarShow) {
        // remove the attribute instead, if set to "hudden", it would overwrite the rule in css.
        document.querySelector("aside.sidebar").style.display = "";

        isSidebarShow = false;
        document
            .querySelector("button.sidebar-toggle-btn")
            .setAttribute("aria-expanded", "false");
    }
}

window.addEventListener("load", function () {
    document.querySelectorAll("button.copy-button").forEach((element) => {
        element.addEventListener("click", (event) => {
            let button = event.currentTarget;

            if (button.getAttribute("state") === "copy") {
                navigator.clipboard.writeText(
                    decodeURI(button.getAttribute("data"))
                );

                button.setAttribute("state", "copied");
                button.textContent = "Copied !";

                window.setTimeout(() => {
                    button.setAttribute("state", "copy");
                    button.textContent = "Copy";
                }, 3 * 1000);
            }
        });
    });

    // sidebar expanble
    document
        .querySelector("aside.exapandable")
        .addEventListener("mousedown", isSidebarExpandStart);
    document
        .querySelector("aside.exapandable")
        .addEventListener("touchstart", isSidebarExpandStart);
    window.addEventListener("mousemove", isSidebarExpanding);
    window.addEventListener("touchmove", isSidebarExpanding);
    window.addEventListener("mouseup", isSidebarExpandEnd);
    window.addEventListener("touchend", isSidebarExpandEnd);

    // responsive sidebar
    document
        .querySelector("button.sidebar-toggle-btn")
        .addEventListener("click", (event) => {
            event.stopPropagation();
            event.preventDefault();

            if (event.currentTarget.getAttribute("aria-expanded") === "true") {
                hideSidebar();
            } else {
                showSidebar();
            }
        });

    this.document
        .querySelector("article.main")
        .addEventListener("click", hideSidebar);
    this.document
        .querySelector("article.main")
        .addEventListener("touchstart", hideSidebar);
    this.document
        .querySelector("article.main")
        .addEventListener("mousedown", hideSidebar);

    // remove generated element style when windows enlarge
    this.window.addEventListener("resize", () => {
        if (window.innerWidth > 900) {
            isSidebarShow = false;

            document.querySelector("aside.sidebar").style.display = "";
            document
                .querySelector("button.sidebar-toggle-btn")
                .setAttribute("aria-expanded", "false");
        }
    });

    // re-calculate the width when resizing the window
    this.window.addEventListener("resize", () => {
        let artileElement = document.querySelector("article.main");

        // get the currently configured width
        const widthProperty = artileElement.style.getPropertyValue(
            "--artile_main_width"
        );

        if (widthProperty) {
            // find the width set currently
            const sidebarPercentage = widthProperty.match(/[\d.]+/)[0];

            // reset the width
            artileElement.style.setProperty("--artile_main_width", "");

            // to find out the width set by the stylesheet
            const appliedSWidthStyle = getComputedStyle(artileElement)
                .getPropertyValue("--artile_main_width")
                .replace(/[\d.]+/, sidebarPercentage);

            // add the width setting set by the user
            artileElement.style.setProperty(
                "--artile_main_width",
                appliedSWidthStyle
            );
        }
    });

    // sub dir toggle
    document.querySelectorAll("li.dir > span.dir-text").forEach((element) => {
        element.addEventListener("click", function () {
            this.parentNode.classList.toggle("opened-dir");
            this.parentNode.classList.toggle("closed-dir");
        });
    });
});
