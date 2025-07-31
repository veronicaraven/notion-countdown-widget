let startDate = new Date(); // Default: now
let endDate = new Date("2025-12-13T00:00:00");

function updateCountdown() {
  const now = new Date();
  const effectiveStart = startDate < now ? now : startDate;
  const distance = endDate - effectiveStart;

  const countdownEl = document.getElementById("countdown");

  if (distance <= 0) {
    countdownEl.innerText = "Countdown Complete!";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((distance / (1000 * 60)) % 60);
  const seconds = Math.floor((distance / 1000) % 60);

  countdownEl.innerText = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

setInterval(updateCountdown, 1000);
updateCountdown();

document.getElementById("setDatesBtn").addEventListener("click", () => {
  const startInput = prompt("Enter the START date (YYYY-MM-DD):", startDate.toISOString().slice(0,10));
  const endInput = prompt("Enter the END date (YYYY-MM-DD):", endDate.toISOString().slice(0,10));

  if (startInput && endInput) {
    const newStart = new Date(startInput);
    const newEnd = new Date(endInput);

    if (!isNaN(newStart) && !isNaN(newEnd) && newEnd > newStart) {
      startDate = newStart;
      endDate = newEnd;
      alert(`Countdown updated:\nStart: ${startInput}\nEnd: ${endInput}`);
    } else {
      alert("Invalid dates entered. Please try again.");
    }
  }
});
