window.addEventListener("load", function () {
    document.querySelectorAll("button.copy-button").forEach((element) => {
        element.addEventListener("click", (event) => {
            let button = event.currentTarget;
            let iconElement = button.querySelector("i");

            if (button.getAttribute("state") === "copy") {
                navigator.clipboard.writeText(
                    decodeURI(button.getAttribute("data"))
                );

                button.setAttribute("state", "copied");
                iconElement.classList.remove("bi-copy");
                iconElement.classList.add("bi-check2-all");

                window.setTimeout(() => {
                    button.setAttribute("state", "copy");
                    iconElement.classList.remove("bi-check2-all");
                    iconElement.classList.add("bi-copy");
                }, 2 * 1000);
            }
        });
    });
});
