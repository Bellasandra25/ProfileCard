function updateTime() {
    const now = new Date();
    document.getElementById("utcTime").textContent = `UTC Time: ${now.toISOString().slice(0, 19).replace('T', ' ')}`;
}
updateTime();