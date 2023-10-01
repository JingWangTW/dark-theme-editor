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
                iconElement.classList.remove("bi-clipboard");
                iconElement.classList.add("bi-clipboard-check-fill");

                window.setTimeout(() => {
                    button.setAttribute("state", "copy");
                    iconElement.classList.remove("bi-clipboard-check-fill");
                    iconElement.classList.add("bi-clipboard");
                }, 3 * 1000);
            }
        });
    });
});
