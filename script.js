// Script to dynamically update Discord members count
async function fetchDiscordStatus() {
    try {
        const response = await fetch('https://discord.com/api/guilds/1291709389941510164/widget.json');
        const data = await response.json();
        document.getElementById('discord-members').innerText = `${data.members.length} Members Online`;
    } catch (error) {
        document.getElementById('discord-members').innerText = "Unable to fetch Discord members";
    }
}

fetchDiscordStatus();
