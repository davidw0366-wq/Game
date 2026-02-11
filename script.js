function launchGame(url) {
    document.getElementById('gameFrame').src = url;
    document.getElementById('gameModal').style.display = "block";
}

function closeGame() {
    document.getElementById('gameModal').style.display = "none";
    document.getElementById('gameFrame').src = ""; // Stops the game sound when closed
}