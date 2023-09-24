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
});
