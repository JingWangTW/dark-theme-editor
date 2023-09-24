window.addEventListener("load", function () {
    // sub dir toggle
    document.querySelectorAll("li.dir > span.dir-text").forEach((element) => {
        element.addEventListener("click", function () {
            this.parentNode.classList.toggle("opened-dir");
            this.parentNode.classList.toggle("closed-dir");
        });
    });
});
