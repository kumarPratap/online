// =============================================
//  Dark Mode Toggle — Pratap's Cosmos
//  Uses localStorage so the choice is saved
//  and remembered across ALL pages.
// =============================================

const themeBtn = document.getElementById('themeBtn');

// Function to apply the saved theme on page load
function applyTheme(isDark) {
    if (isDark) {
        document.body.classList.add('dark-mode');
        if (themeBtn) themeBtn.textContent = '☀️';
    } else {
        document.body.classList.remove('dark-mode');
        if (themeBtn) themeBtn.textContent = '🌙';
    }
}

// On every page load, check what the user chose last time
const savedTheme = localStorage.getItem('theme');
applyTheme(savedTheme === 'dark');

// When the button is clicked, toggle and save
if (themeBtn) {
    themeBtn.addEventListener('click', function () {
        const isDark = document.body.classList.toggle('dark-mode');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
        themeBtn.textContent = isDark ? '☀️' : '🌙';
    });
}


// =============================================
//  Live Clock — Shows current time in the footer
//  Updates every second, uses visitor's local time
// =============================================

function updateClock() {
    const clockEl = document.getElementById('liveClock');
    if (!clockEl) return;

    const now = new Date();

    // Format: "Thu, 21 Aug 2026 · 11:24:30 PM IST"
    const options = {
        weekday: 'short',
        day: 'numeric',
        month: 'short',
        year: 'numeric'
    };
    const dateStr = now.toLocaleDateString('en-IN', options);

    const timeStr = now.toLocaleTimeString('en-IN', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
    });

    // Get timezone abbreviation
    const tzName = Intl.DateTimeFormat('en', { timeZoneName: 'short' })
        .formatToParts(now)
        .find(part => part.type === 'timeZoneName');
    const tz = tzName ? tzName.value : '';

    clockEl.textContent = dateStr + ' · ' + timeStr + ' ' + tz;
}

// Start the clock
updateClock();
setInterval(updateClock, 1000);


// =============================================
//  Cosmic Landmark / Moon Map Switcher
// =============================================
const cosmicTabBtns = document.querySelectorAll('.cosmic-tab-btn');
const cosmicMapFrame = document.getElementById('cosmicMapFrame');

if (cosmicTabBtns.length > 0 && cosmicMapFrame) {
    cosmicTabBtns.forEach(btn => {
        btn.addEventListener('click', function () {
            cosmicTabBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            const targetSrc = this.getAttribute('data-src');
            const targetTitle = this.getAttribute('data-title');
            if (targetSrc) {
                cosmicMapFrame.src = targetSrc;
                if (targetTitle) cosmicMapFrame.title = targetTitle;
            }
        });
    });
}

