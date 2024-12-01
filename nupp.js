   
function navigateToPage() {
    const select = document.getElementById("page-select");
    const selectedPage = select.value;

    if (selectedPage) {
        window.location.href = selectedPage;
    }
}
