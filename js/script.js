document.getElementById("download-cv").addEventListener("click", async function (event) {
    event.preventDefault();

    const response = await fetch("Tom_Clarke_CV.pdf");
    const blob = await response.blob();

    const url = window.URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = "Tom_Clarke_CV.pdf";

    document.body.appendChild(link);
    link.click();
    link.remove();

    window.URL.revokeObjectURL(url);
});