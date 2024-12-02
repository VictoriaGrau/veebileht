   
function navigateToPage() {
    const select = document.getElementById("page-select");
    const selectedPage = select.value;

    if (selectedPage) {
        window.location.href = selectedPage;
    }
}

// Kood on pärit.
// W3Schools.(). How TO -Clickable Dropdown. W3Schools. Kasutatud 05.11.2024, https://www.w3schools.com/howto/howto_js_dropdown.asp