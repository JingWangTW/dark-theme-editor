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

        let homepageArticleElement = document.querySelector(
            "article.main:has(> div.home)"
        );

        if (homepageArticleElement) {
            /*
                Case in Home Page

                3pt: expand bar
                40vw: <article> padding
                1px: dummpy
            */

            homepageArticleElement.style.width = `calc( ${articlePercentage}% - 3pt - 40vw - 1px)`;
        } else {
            /*
                3pt: expand bar
                4%: <article> padding
                1px: dummpy
            */
            document.querySelector(
                "article.main"
            ).style.width = `calc( ${articlePercentage}% - 3pt - 4% - 1px )`;
        }
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

    // sub dir toggle
    document.querySelectorAll("li.dir > span.dir-text").forEach((element) => {
        element.addEventListener("click", function () {
            this.parentNode.classList.toggle("opened-dir");
            this.parentNode.classList.toggle("closed-dir");
        });
    });
});
