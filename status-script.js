const serverIP = "pixelrealms.tech"; // Your Minecraft server's IP
const statusElement = document.getElementById("server-ip");
const versionElement = document.getElementById("server-version");
const motdElement = document.getElementById("server-motd");
const playerCountElement = document.getElementById("player-count");
const playerListElement = document.getElementById("player-names");
const uptimeElement = document.getElementById("server-uptime");

// Fetch Minecraft Server Status
async function fetchServerStatus() {
    try {
        const response = await fetch(`https://api.mcsrvstat.us/2/${serverIP}`);
        const data = await response.json();
        if (data.online) {
            statusElement.innerText = serverIP;
            versionElement.innerText = data.version;
            motdElement.innerText = data.motd.clean || "No MOTD available";
            playerCountElement.innerText = `${data.players.online}/${data.players.max}`;

            if (data.players.list) {
                const playerList = data.players.list.join('<br>');
                playerListElement.innerHTML = playerList;
            } else {
                playerListElement.innerHTML = "No players online";
            }
            uptimeElement.innerText = data.uptime ? `${data.uptime} minutes` : "Loading uptime...";
        } else {
            statusElement.innerText = "Server is Offline";
        }
    } catch (error) {
        statusElement.innerText = "Unable to fetch server status";
    }
}

fetchServerStatus();
