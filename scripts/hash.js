function showPage(pageId) {
    // Alle Seiten verbergen
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.classList.remove('active');
    });

    // Gewählte Seite anzeigen
    const activePage = document.getElementById(pageId);
    if (activePage) {
        activePage.classList.add('active');
    }
}

async function generateHash() {
    const input = document.getElementById("hashInput").value;
    const hashResultElement = document.getElementById("hashResult");

    // Wenn das Input-Feld leer ist, Hash zurücksetzen
    if (input.trim() === "") {
        hashResultElement.innerText = "-"; // Leeren Wert anzeigen
        return;
    }

    // Generiere den SHA-256 Hash
    const hashBuffer = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(input));
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');

    console.log(hashHex)
    // Zeige den generierten Hash an
    hashResultElement.innerText = hashHex;
} 