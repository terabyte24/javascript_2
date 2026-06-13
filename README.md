# CurrenX 💱

**CurrenX** is a refined, premium currency converter and analytics web application built entirely using pure HTML, CSS, and modern vanilla JavaScript DOM manipulation. It provides instant live conversions, a smooth interactive user experience, and visual historical data analytics.

## ✨ Features

- **Real-time Conversion**: Fetches live exchange rates using the ExchangeRate-API free tier.
- **Glassmorphism UI**: Beautiful semi-transparent container with background radial glowing orbs, elegant layout transitions, and hover-triggered micro-animations.
- **Searchable Dropdowns**: Completely custom-built dropdown lists for 160+ currencies with search filters and dynamic flag matching.
- **Instant Swap**: Reverse selected currencies with a 180-degree rotating arrow animation.
- **30-Day Trend Charts**: Visual line chart drawn dynamically using SVG paths, utilizing rates fetched from Frankfurter API.
- **SVG Sparkline Tooltips**: Hover over the historical chart to see rates for specific dates.
- **Local Storage Caching**: Caches live rates for 1 hour to optimize network requests and enable offline conversion fallback.
- **Popular Pair Cards**: Quick links to view rates for USD, EUR, GBP, JPY, CAD, AUD, and INR conversions.
- **Toast Notifications**: Slide-down banners displaying application state (success/error alerts, connection status warnings).

---

## 🛠️ Technology Stack

1. **HTML5**: Structured semantic layout with SEO tags.
2. **CSS3**: Variables, custom scrollbars, keyframe animations, responsive grid/flexbox systems, glassmorphism, and radial glowing filters.
3. **Vanilla JavaScript (ES6)**: State management, DOM events, SVG path generation, fetch API integrations, and local caching.
4. **APIs Used**:
   - [ExchangeRate-API](https://open.er-api.com): Fetches rapid, daily updated live currency database rates relative to USD.
   - [Frankfurter API](https://api.frankfurter.app): Fetches 30-day historical conversion trends.
   - [FlagCDN](https://flagcdn.com): Serves country flag icons based on ISO 3166 codes.

---

## 🚀 How to Run Locally

Since the application uses standard web technologies with no compilation/bundling steps, it can be run directly in any browser:

1. Clone this repository:
   ```bash
   git clone https://github.com/terabyte24/javascript_2.git
   ```
2. Navigate to the folder:
   ```bash
   cd javascript_2
   ```
3. Open `index.html` in your browser. You can:
   - Double-click the file to open it directly.
   - Or use a local web server extension (e.g., Live Server in VS Code, Python's `http.server`, or Node's `http-server`).
     ```bash
     python -m http.server 8000
     ```
     Then navigate to `http://localhost:8000`.

---

## 📂 Project Structure

```text
javascript_2/
├── index.html        # Main semantic HTML structure, inputs, and SVG containers
├── style.css         # Styling system, responsive styling, variables, glassmorphism, animations
├── app.js            # Live currency rates fetch, searchable dropdowns, SVG chart engine, caching
├── .gitignore        # Standard ignore patterns for OS/editor temp files
└── README.md         # Project description, guidelines, and setup instructions
```

---

## 💡 Engineering Highlights

### ⚡ Cross-Rate Caching
Instead of sending a network request every time a user switches the source currency, CurrenX fetches a single USD base rates object. This contains rates for all 160+ currencies. Any custom A-to-B conversion is computed mathematically:
$$\text{Rate}_{A \to B} = \frac{\text{Rate}_{\text{USD} \to B}}{\text{Rate}_{\text{USD} \to A}}$$
This decreases network latency, prevents API rate-limiting, and enables instant local conversion.

### 📈 Dynamic SVG Sparkline Graph
Instead of loading large visualization libraries like Chart.js, CurrenX calculates rate coordinates relative to an SVG viewport (`500x160`) and renders an SVG `<path>` and `<linearGradient>` area dynamically:
- Rates are scaled linearly into coordinates with protective border margins.
- A custom hover coordinate selector maps mouse positions to the nearest historical date point, rendering a dashed grid line and rate summary widget instantly.
- Fallback mock walking logic is integrated to simulate visual rates if the Frankfurter database is down or a currency pair is unsupported.
