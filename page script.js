const text_List = [
    "hallo",
    "ola",
    "ello",
    "Kon'nichiwa",
    "Ciao",
    "Sain uu",
    "Bonjour",
    "Privet."
];

function displayRandomText() {
    const randomIndex = Math.floor(Math.random() * text_List.length);
    document.getElementById("random-text-display").textContent = text_List[randomIndex];
}
    window.onload = displayRandomText;
