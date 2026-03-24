const events = [
  {
    id: 1,
    name: "Street Food Carnival",
    category: "Food",
    date: "Sat, Jul 19 · 12:00 PM",
    location: "Liberty Grounds, Lahore",
    desc: "30+ vendors, endless flavours. Dumplings, BBQ, fusion bites and more — all in one bustling, open-air food celebration.",
    color: "#2a1200",
    accent: "#e8a838",
  },
  {
    id: 2,
    name: "Glow Beauty Expo",
    category: "Makeup",
    date: "Sun, Jul 20 · 11:00 AM",
    location: "Expo Centre, Lahore",
    desc: "Meet top makeup artists, explore the latest beauty brands, and enjoy live makeover demos and skincare masterclasses.",
    color: "#2a0a20",
    accent: "#e85899",
  },
  {
    id: 3,
    name: "Fashion Forward Show",
    category: "Cloth",
    date: "Mon, Jul 21 · 4:00 PM",
    location: "Pearl Continental, Karachi",
    desc: "Pakistan's hottest designers unveil their summer collections on the runway. Style stalls and pop-up shops all day long.",
    color: "#0a1535",
    accent: "#5882e8",
  },
  {
    id: 4,
    name: "Neon Nights Concert",
    category: "Concert",
    date: "Thu, Jul 24 · 8:00 PM",
    location: "Jinnah Park Amphitheatre, Islamabad",
    desc: "Live performances by top artists under the open sky. Expect electrifying music, laser lights, and an unforgettable crowd.",
    color: "#0d0a1f",
    accent: "#a238c4",
  },
  {
    id: 5,
    name: "Explore Hunza Valley",
    category: "Tour",
    date: "Sat, Jul 26 · 6:00 AM",
    location: "Departure: Islamabad",
    desc: "A guided 3-day tour through the breathtaking Hunza Valley. Includes transport, accommodation, and scenic trek stops.",
    color: "#0a1f10",
    accent: "#38c46a",
  },
];

function renderCards(list) {
  const grid  = document.getElementById('eventsGrid');
  const noRes = document.getElementById('noResults');

  [...grid.querySelectorAll('.event-card')].forEach(c => c.remove());

  if (list.length === 0) {
    noRes.style.display = 'block';
    return;
  }
  noRes.style.display = 'none';

  list.forEach((ev, i) => {
    const card = document.createElement('article');
    card.className = 'event-card';
    card.style.animationDelay = `${i * 80}ms`;

    card.innerHTML = `
      <div class="card-banner" style="background: linear-gradient(160deg, ${ev.color} 0%, ${ev.accent}55 100%);">
        <span class="card-category">${ev.category}</span>
      </div>
      <div class="card-body">
        <div class="card-meta">
          <span class="meta-tag">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>
            </svg>
            ${ev.date}
          </span>
          <span class="meta-tag">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/><circle cx="12" cy="9" r="2.5"/>
            </svg>
            ${ev.location}
          </span>
        </div>
        <h3 class="card-title">${ev.name}</h3>
        <p class="card-desc">${ev.desc}</p>
        <button class="register-btn" onclick="handleRegister(this, '${ev.name}')">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
            <path d="M20 12V22H4V12"/><path d="M22 7H2v5h20V7z"/>
            <path d="M12 22V7"/><path d="M12 7H7.5a2.5 2.5 0 010-5C11 2 12 7 12 7z"/>
            <path d="M12 7h4.5a2.5 2.5 0 000-5C13 2 12 7 12 7z"/>
          </svg>
          Register
        </button>
      </div>
    `;
    grid.insertBefore(card, noRes);
  });
}

document.getElementById('searchInput').addEventListener('input', function () {
  const q = this.value.toLowerCase().trim();
  renderCards(
    q
      ? events.filter(e =>
          e.name.toLowerCase().includes(q) ||
          e.category.toLowerCase().includes(q) ||
          e.location.toLowerCase().includes(q)
        )
      : events
  );
});

function handleRegister(btn, name) {
  btn.textContent = '✓ Registered!';
  btn.style.background   = '#0d0d0d';
  btn.style.color        = '#fff';
  btn.style.borderColor  = '#0d0d0d';
  btn.disabled = true;
}

const hamburger  = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

hamburger.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
});

function closeMenu() {
  mobileMenu.classList.remove('open');
}
renderCards(events);
