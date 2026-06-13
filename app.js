// ==========================================================================
// CURRENCY DATABASE & METADATA (160+ Currencies)
// ==========================================================================
const currencies = {
    USD: { code: 'USD', name: 'US Dollar', flag: 'us', symbol: '$' },
    EUR: { code: 'EUR', name: 'Euro', flag: 'eu', symbol: '€' },
    GBP: { code: 'GBP', name: 'British Pound', flag: 'gb', symbol: '£' },
    JPY: { code: 'JPY', name: 'Japanese Yen', flag: 'jp', symbol: '¥' },
    AUD: { code: 'AUD', name: 'Australian Dollar', flag: 'au', symbol: 'A$' },
    CAD: { code: 'CAD', name: 'Canadian Dollar', flag: 'ca', symbol: 'C$' },
    CHF: { code: 'CHF', name: 'Swiss Franc', flag: 'ch', symbol: 'Fr' },
    CNY: { code: 'CNY', name: 'Chinese Yuan', flag: 'cn', symbol: '¥' },
    INR: { code: 'INR', name: 'Indian Rupee', flag: 'in', symbol: '₹' },
    NZD: { code: 'NZD', name: 'New Zealand Dollar', flag: 'nz', symbol: 'NZ$' },
    AED: { code: 'AED', name: 'UAE Dirham', flag: 'ae', symbol: 'د.إ' },
    AFN: { code: 'AFN', name: 'Afghan Afghani', flag: 'af', symbol: '؋' },
    ALL: { code: 'ALL', name: 'Albanian Lek', flag: 'al', symbol: 'L' },
    AMD: { code: 'AMD', name: 'Armenian Dram', flag: 'am', symbol: '֏' },
    ANG: { code: 'ANG', name: 'Netherlands Antillean Guilder', flag: 'an', symbol: 'ƒ' },
    AOA: { code: 'AOA', name: 'Angolan Kwanza', flag: 'ao', symbol: 'Kz' },
    ARS: { code: 'ARS', name: 'Argentine Peso', flag: 'ar', symbol: '$' },
    AWG: { code: 'AWG', name: 'Aruban Florin', flag: 'aw', symbol: 'Aƒ' },
    AZN: { code: 'AZN', name: 'Azerbaijani Manat', flag: 'az', symbol: '₼' },
    BAM: { code: 'BAM', name: 'Bosnia-Herzegovina Convertible Mark', flag: 'ba', symbol: 'KM' },
    BBD: { code: 'BBD', name: 'Barbadian Dollar', flag: 'bb', symbol: '$' },
    BDT: { code: 'BDT', name: 'Bangladeshi Taka', flag: 'bd', symbol: '৳' },
    BGN: { code: 'BGN', name: 'Bulgarian Lev', flag: 'bg', symbol: 'лв' },
    BHD: { code: 'BHD', name: 'Bahraini Dinar', flag: 'bh', symbol: '.د.ب' },
    BIF: { code: 'BIF', name: 'Burundian Franc', flag: 'bi', symbol: 'FBu' },
    BMD: { code: 'BMD', name: 'Bermudian Dollar', flag: 'bm', symbol: '$' },
    BND: { code: 'BND', name: 'Brunei Dollar', flag: 'bn', symbol: '$' },
    BOB: { code: 'BOB', name: 'Bolivian Boliviano', flag: 'bo', symbol: 'Bs.' },
    BRL: { code: 'BRL', name: 'Brazilian Real', flag: 'br', symbol: 'R$' },
    BSD: { code: 'BSD', name: 'Bahamian Dollar', flag: 'bs', symbol: '$' },
    BTN: { code: 'BTN', name: 'Bhutanese Ngultrum', flag: 'bt', symbol: 'Nu.' },
    BWP: { code: 'BWP', name: 'Botswanan Pula', flag: 'bw', symbol: 'P' },
    BYN: { code: 'BYN', name: 'Belarusian Ruble', flag: 'by', symbol: 'Br' },
    BZD: { code: 'BZD', name: 'Belize Dollar', flag: 'bz', symbol: '$' },
    CLP: { code: 'CLP', name: 'Chilean Peso', flag: 'cl', symbol: '$' },
    COP: { code: 'COP', name: 'Colombian Peso', flag: 'co', symbol: '$' },
    CRC: { code: 'CRC', name: 'Costa Rican Colón', flag: 'cr', symbol: '₡' },
    CUP: { code: 'CUP', name: 'Cuban Peso', flag: 'cu', symbol: '$' },
    CVE: { code: 'CVE', name: 'Cape Verdean Escudo', flag: 'cv', symbol: 'Esc' },
    CZK: { code: 'CZK', name: 'Czech Koruna', flag: 'cz', symbol: 'Kč' },
    DJF: { code: 'DJF', name: 'Djiboutian Franc', flag: 'dj', symbol: 'Fdj' },
    DKK: { code: 'DKK', name: 'Danish Krone', flag: 'dk', symbol: 'kr' },
    DOP: { code: 'DOP', name: 'Dominican Peso', flag: 'do', symbol: '$' },
    DZD: { code: 'DZD', name: 'Algerian Dinar', flag: 'dz', symbol: 'د.ج' },
    EGP: { code: 'EGP', name: 'Egyptian Pound', flag: 'eg', symbol: 'E£' },
    ERN: { code: 'ERN', name: 'Eritrean Nakfa', flag: 'er', symbol: 'Nfk' },
    ETB: { code: 'ETB', name: 'Ethiopian Birr', flag: 'et', symbol: 'Br' },
    FJD: { code: 'FJD', name: 'Fijian Dollar', flag: 'fj', symbol: '$' },
    FKP: { code: 'FKP', name: 'Falkland Islands Pound', flag: 'fk', symbol: '£' },
    GEL: { code: 'GEL', name: 'Georgian Lari', flag: 'ge', symbol: '₾' },
    GGP: { code: 'GGP', name: 'Guernsey Pound', flag: 'gg', symbol: '£' },
    GHS: { code: 'GHS', name: 'Ghanaian Cedi', flag: 'gh', symbol: '₵' },
    GIP: { code: 'GIP', name: 'Gibraltar Pound', flag: 'gi', symbol: '£' },
    GMD: { code: 'GMD', name: 'Gambian Dalasi', flag: 'gm', symbol: 'D' },
    GNF: { code: 'GNF', name: 'Guinean Franc', flag: 'gn', symbol: 'FG' },
    GTQ: { code: 'GTQ', name: 'Guatemalan Quetzal', flag: 'gt', symbol: 'Q' },
    GYD: { code: 'GYD', name: 'Guyanese Dollar', flag: 'gy', symbol: '$' },
    HKD: { code: 'HKD', name: 'Hong Kong Dollar', flag: 'hk', symbol: 'HK$' },
    HNL: { code: 'HNL', name: 'Honduran Lempira', flag: 'hn', symbol: 'L' },
    HRK: { code: 'HRK', name: 'Croatian Kuna', flag: 'hr', symbol: 'kn' },
    HTG: { code: 'HTG', name: 'Haitian Gourde', flag: 'ht', symbol: 'G' },
    HUF: { code: 'HUF', name: 'Hungarian Forint', flag: 'hu', symbol: 'Ft' },
    IDR: { code: 'IDR', name: 'Indonesian Rupiah', flag: 'id', symbol: 'Rp' },
    ILS: { code: 'ILS', name: 'Israeli New Shekel', flag: 'il', symbol: '₪' },
    IMP: { code: 'IMP', name: 'Isle of Man Pound', flag: 'im', symbol: '£' },
    IQD: { code: 'IQD', name: 'Iraqi Dinar', flag: 'iq', symbol: 'ع.د' },
    IRR: { code: 'IRR', name: 'Iranian Rial', flag: 'ir', symbol: '﷼' },
    ISK: { code: 'ISK', name: 'Icelandic Króna', flag: 'is', symbol: 'kr' },
    JEP: { code: 'JEP', name: 'Jersey Pound', flag: 'je', symbol: '£' },
    JMD: { code: 'JMD', name: 'Jamaican Dollar', flag: 'jm', symbol: '$' },
    JOD: { code: 'JOD', name: 'Jordanian Dinar', flag: 'jo', symbol: 'د.ا' },
    KES: { code: 'KES', name: 'Kenyan Shilling', flag: 'ke', symbol: 'KSh' },
    KGS: { code: 'KGS', name: 'Kyrgyzstani Som', flag: 'kg', symbol: 'сом' },
    KHR: { code: 'KHR', name: 'Cambodian Riel', flag: 'kh', symbol: '៛' },
    KID: { code: 'KID', name: 'Kiribati Dollar', flag: 'ki', symbol: '$' },
    KMF: { code: 'KMF', name: 'Comorian Franc', flag: 'km', symbol: 'CF' },
    KRW: { code: 'KRW', name: 'South Korean Won', flag: 'kr', symbol: '₩' },
    KWD: { code: 'KWD', name: 'Kuwaiti Dinar', flag: 'kw', symbol: 'د.ك' },
    KYD: { code: 'KYD', name: 'Cayman Islands Dollar', flag: 'ky', symbol: '$' },
    KZT: { code: 'KZT', name: 'Kazakhstani Tenge', flag: 'kz', symbol: '₸' },
    LAK: { code: 'LAK', name: 'Laotian Kip', flag: 'la', symbol: '₭' },
    LBP: { code: 'LBP', name: 'Lebanese Pound', flag: 'lb', symbol: 'ل.ل' },
    LKR: { code: 'LKR', name: 'Sri Lankan Rupee', flag: 'lk', symbol: '₨' },
    LRD: { code: 'LRD', name: 'Liberian Dollar', flag: 'lr', symbol: '$' },
    LSL: { code: 'LSL', name: 'Lesotho Loti', flag: 'ls', symbol: 'L' },
    LYD: { code: 'LYD', name: 'Libyan Dinar', flag: 'ly', symbol: 'ل.د' },
    MAD: { code: 'MAD', name: 'Moroccan Dirham', flag: 'ma', symbol: 'د.م.' },
    MDL: { code: 'MDL', name: 'Moldovan Leu', flag: 'md', symbol: 'L' },
    MGA: { code: 'MGA', name: 'Malagasy Ariary', flag: 'mg', symbol: 'Ar' },
    MKD: { code: 'MKD', name: 'Macedonian Denar', flag: 'mk', symbol: 'ден' },
    MMK: { code: 'MMK', name: 'Myanmar Kyat', flag: 'mm', symbol: 'K' },
    MNT: { code: 'MNT', name: 'Mongolian Tughrik', flag: 'mn', symbol: '₮' },
    MOP: { code: 'MOP', name: 'Macanese Pataca', flag: 'mo', symbol: 'MOP$' },
    MRU: { code: 'MRU', name: 'Mauritanian Ouguiya', flag: 'mr', symbol: 'UM' },
    MUR: { code: 'MUR', name: 'Mauritian Rupee', flag: 'mu', symbol: '₨' },
    MVR: { code: 'MVR', name: 'Maldivian Rufiyaa', flag: 'mv', symbol: 'Rf' },
    MWK: { code: 'MWK', name: 'Malawian Kwacha', flag: 'mw', symbol: 'MK' },
    MXN: { code: 'MXN', name: 'Mexican Peso', flag: 'mx', symbol: '$' },
    MYR: { code: 'MYR', name: 'Malaysian Ringgit', flag: 'my', symbol: 'RM' },
    MZN: { code: 'MZN', name: 'Mozambican Metical', flag: 'mz', symbol: 'MT' },
    NAD: { code: 'NAD', name: 'Namibian Dollar', flag: 'na', symbol: '$' },
    NGN: { code: 'NGN', name: 'Nigerian Naira', flag: 'ng', symbol: '₦' },
    NIO: { code: 'NIO', name: 'Nicaraguan Córdoba', flag: 'ni', symbol: 'C$' },
    NOK: { code: 'NOK', name: 'Norwegian Krone', flag: 'no', symbol: 'kr' },
    NPR: { code: 'NPR', name: 'Nepalese Rupee', flag: 'np', symbol: '₨' },
    OMR: { code: 'OMR', name: 'Omani Rial', flag: 'om', symbol: 'ر.ع.' },
    PAB: { code: 'PAB', name: 'Panamanian Balboa', flag: 'pa', symbol: 'B/.' },
    PEN: { code: 'PEN', name: 'Peruvian Sol', flag: 'pe', symbol: 'S/.' },
    PGK: { code: 'PGK', name: 'Papua New Guinean Kina', flag: 'pg', symbol: 'K' },
    PHP: { code: 'PHP', name: 'Philippine Peso', flag: 'ph', symbol: '₱' },
    PKR: { code: 'PKR', name: 'Pakistani Rupee', flag: 'pk', symbol: '₨' },
    PLN: { code: 'PLN', name: 'Polish Złoty', flag: 'pl', symbol: 'zł' },
    PYG: { code: 'PYG', name: 'Paraguayan Guaraní', flag: 'py', symbol: '₲' },
    QAR: { code: 'QAR', name: 'Qatari Riyal', flag: 'qa', symbol: 'ر.ق' },
    RON: { code: 'RON', name: 'Romanian Leu', flag: 'ro', symbol: 'lei' },
    RSD: { code: 'RSD', name: 'Serbian Dinar', flag: 'rs', symbol: 'дин.' },
    RUB: { code: 'RUB', name: 'Russian Ruble', flag: 'ru', symbol: '₽' },
    RWF: { code: 'RWF', name: 'Rwandan Franc', flag: 'rw', symbol: 'FRw' },
    SAR: { code: 'SAR', name: 'Saudi Riyal', flag: 'sa', symbol: 'ر.س' },
    SBD: { code: 'SBD', name: 'Solomon Islands Dollar', flag: 'sb', symbol: '$' },
    SCR: { code: 'SCR', name: 'Seychellois Rupee', flag: 'sc', symbol: '₨' },
    SDG: { code: 'SDG', name: 'Sudanese Pound', flag: 'sd', symbol: 'ج.س.' },
    SEK: { code: 'SEK', name: 'Swedish Krona', flag: 'se', symbol: 'kr' },
    SGD: { code: 'SGD', name: 'Singapore Dollar', flag: 'sg', symbol: 'S$' },
    SHP: { code: 'SHP', name: 'St. Helena Pound', flag: 'sh', symbol: '£' },
    SLL: { code: 'SLL', name: 'Sierra Leonean Leone', flag: 'sl', symbol: 'Le' },
    SOS: { code: 'SOS', name: 'Somali Shilling', flag: 'so', symbol: 'Sh' },
    SRD: { code: 'SRD', name: 'Surinamese Dollar', flag: 'sr', symbol: '$' },
    SSP: { code: 'SSP', name: 'South Sudanese Pound', flag: 'ss', symbol: '£' },
    STN: { code: 'STN', name: 'São Tomé & Príncipe Dobra', flag: 'st', symbol: 'Db' },
    SYP: { code: 'SYP', name: 'Syrian Pound', flag: 'sy', symbol: 'ل.س' },
    SZL: { code: 'SZL', name: 'Swazi Lilangeni', flag: 'sz', symbol: 'L' },
    THB: { code: 'THB', name: 'Thai Baht', flag: 'th', symbol: '฿' },
    TJS: { code: 'TJS', name: 'Tajikistani Somoni', flag: 'tj', symbol: 'ЅM' },
    TMT: { code: 'TMT', name: 'Turkmenistani Manat', flag: 'tm', symbol: 'T' },
    TND: { code: 'TND', name: 'Tunisian Dinar', flag: 'tn', symbol: 'د.ت' },
    TOP: { code: 'TOP', name: 'Tongan Paʻanga', flag: 'to', symbol: 'T$' },
    TRY: { code: 'TRY', name: 'Turkish Lira', flag: 'tr', symbol: '₺' },
    TTD: { code: 'TTD', name: 'Trinidad & Tobago Dollar', flag: 'tt', symbol: '$' },
    TWD: { code: 'TWD', name: 'New Taiwan Dollar', flag: 'tw', symbol: 'NT$' },
    TZS: { code: 'TZS', name: 'Tanzanian Shilling', flag: 'tz', symbol: 'TSh' },
    UAH: { code: 'UAH', name: 'Ukrainian Hryvnia', flag: 'ua', symbol: '₴' },
    UGX: { code: 'UGX', name: 'Ugandan Shilling', flag: 'ug', symbol: 'USh' },
    UYU: { code: 'UYU', name: 'Uruguayan Peso', flag: 'uy', symbol: '$' },
    UZS: { code: 'UZS', name: 'Uzbekistani Som', flag: 'uz', symbol: 'soʻm' },
    VES: { code: 'VES', name: 'Venezuelan Bolívar', flag: 've', symbol: 'Bs.S' },
    VND: { code: 'VND', name: 'Vietnamese Đồng', flag: 'vn', symbol: '₫' },
    VUV: { code: 'VUV', name: 'Vanuatu Vatu', flag: 'vu', symbol: 'VT' },
    WST: { code: 'WST', name: 'Samoan Tālā', flag: 'ws', symbol: 'WS$' },
    XAF: { code: 'XAF', name: 'Central African CFA Franc', flag: 'cf', symbol: 'FCFA' },
    XCD: { code: 'XCD', name: 'East Caribbean Dollar', flag: 'dm', symbol: '$' },
    XOF: { code: 'XOF', name: 'West African CFA Franc', flag: 'sn', symbol: 'CFA' },
    XPF: { code: 'XPF', name: 'CFP Franc', flag: 'pf', symbol: '₣' },
    YER: { code: 'YER', name: 'Yemeni Rial', flag: 'ye', symbol: '﷼' },
    ZAR: { code: 'ZAR', name: 'South African Rand', flag: 'za', symbol: 'R' },
    ZMW: { code: 'ZMW', name: 'Zambian Kwacha', flag: 'zm', symbol: 'ZK' },
    ZWL: { code: 'ZWL', name: 'Zimbabwean Dollar', flag: 'zw', symbol: '$' }
};

// Frankfurter supported currencies for historical charts
const frankfurterSupported = new Set([
    'USD', 'EUR', 'JPY', 'BGN', 'CZK', 'DKK', 'GBP', 'HUF', 'PLN', 'RON', 
    'SEK', 'CHF', 'ISK', 'NOK', 'TRY', 'AUD', 'BRL', 'CAD', 'CNY', 'HKD', 
    'IDR', 'ILS', 'INR', 'KRW', 'MXN', 'MYR', 'NZD', 'PHP', 'SGD', 'THB', 'ZAR'
]);

// Popular Pairs configurations
const POPULAR_PAIRS = ['USD/EUR', 'EUR/GBP', 'GBP/USD', 'USD/INR', 'AUD/USD', 'USD/CAD'];

// Application State
const state = {
    fromCurrency: 'USD',
    toCurrency: 'EUR',
    amount: 100,
    rates: {},
    ratesLastUpdated: null,
    historicalData: null,
    isOffline: false
};

// Cache parameters (1 hour cache)
const CACHE_EXPIRY = 60 * 60 * 1000; 

// ==========================================================================
// DOM ELEMENT SELECTORS
// ==========================================================================
const amountInput = document.getElementById('amount-input');
const amountSymbol = document.getElementById('amount-currency-symbol');
const convertBtn = document.getElementById('convert-submit-btn');
const swapBtn = document.getElementById('swap-currencies-btn');
const toastContainer = document.getElementById('toast-container');

// Result elements
const resultSkeleton = document.getElementById('result-skeleton');
const resultContentBox = document.getElementById('result-content-box');
const calcInputAmount = document.getElementById('calc-input-amount');
const calcInputCode = document.getElementById('calc-input-code');
const calcOutputAmount = document.getElementById('calc-output-amount');
const calcOutputCode = document.getElementById('calc-output-code');
const rateCaption = document.getElementById('exchange-rate-caption');

// Chart elements
const chartSkeleton = document.getElementById('chart-skeleton');
const chartCanvasBox = document.getElementById('chart-canvas-box');
const trendSvg = document.getElementById('trend-svg');
const chartLinePath = document.getElementById('chart-line-path');
const chartAreaPath = document.getElementById('chart-area-path');
const chartStartDate = document.getElementById('chart-start-date');
const chartEndDate = document.getElementById('chart-end-date');
const chartMaxVal = document.getElementById('chart-max-val');
const chartMinVal = document.getElementById('chart-min-val');
const chartTooltipGroup = document.getElementById('chart-tooltip-group');
const tooltipLine = document.getElementById('tooltip-line');
const tooltipDot = document.getElementById('tooltip-dot');
const chartHoverInfo = document.getElementById('chart-hover-info');

// Dropdown Elements
const fromContainer = document.getElementById('from-select-container');
const fromTrigger = document.getElementById('from-select-trigger');
const fromDropdown = document.getElementById('from-select-dropdown');
const fromSearch = document.getElementById('from-search-input');
const fromOptions = document.getElementById('from-options-list');
const fromFlag = document.getElementById('from-flag-icon');
const fromCode = document.getElementById('from-currency-code');
const fromName = document.getElementById('from-currency-name');

const toContainer = document.getElementById('to-select-container');
const toTrigger = document.getElementById('to-select-trigger');
const toDropdown = document.getElementById('to-select-dropdown');
const toSearch = document.getElementById('to-search-input');
const toOptions = document.getElementById('to-options-list');
const toFlag = document.getElementById('to-flag-icon');
const toCode = document.getElementById('to-currency-code');
const toName = document.getElementById('to-currency-name');

const popularPairsGrid = document.getElementById('popular-pairs-grid');

// ==========================================================================
// TOAST NOTIFICATIONS LOGIC
// ==========================================================================
function showToast(message, type = 'success', duration = 4000) {
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    
    // Choose appropriate SVG icon based on toast type
    let iconSvg = '';
    if (type === 'success') {
        iconSvg = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>`;
    } else if (type === 'warning') {
        iconSvg = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>`;
    } else {
        iconSvg = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>`;
    }

    toast.innerHTML = `
        <span class="toast-icon">${iconSvg}</span>
        <span class="toast-message">${message}</span>
    `;

    toastContainer.appendChild(toast);

    // Fade out and remove
    setTimeout(() => {
        toast.classList.add('removing');
        toast.addEventListener('animationend', () => {
            toast.remove();
        });
    }, duration);
}

// ==========================================================================
// DROP DOWN DROPDOWN IMPLEMENTATION (SEARCHABLE SELECTS)
// ==========================================================================

// Populates dropdown lists with currency elements
function populateDropdownOptions() {
    const currencyArray = Object.values(currencies).sort((a, b) => a.code.localeCompare(b.code));
    
    let fromOptionsHTML = '';
    let toOptionsHTML = '';

    currencyArray.forEach(curr => {
        const isFromSelected = curr.code === state.fromCurrency ? 'selected' : '';
        const isToSelected = curr.code === state.toCurrency ? 'selected' : '';
        
        const markup = `
            <li class="option-item ${isFromSelected}" data-code="${curr.code}" role="option">
                <img src="https://flagcdn.com/w40/${curr.flag}.png" alt="${curr.name}" class="flag-icon" loading="lazy">
                <span class="currency-code">${curr.code}</span>
                <span class="currency-name">${curr.name}</span>
            </li>
        `;

        fromOptionsHTML += markup;
        
        const markupTo = `
            <li class="option-item ${isToSelected}" data-code="${curr.code}" role="option">
                <img src="https://flagcdn.com/w40/${curr.flag}.png" alt="${curr.name}" class="flag-icon" loading="lazy">
                <span class="currency-code">${curr.code}</span>
                <span class="currency-name">${curr.name}</span>
            </li>
        `;
        toOptionsHTML += markupTo;
    });

    fromOptions.innerHTML = fromOptionsHTML;
    toOptions.innerHTML = toOptionsHTML;
    
    bindDropdownEvents();
}

// Setup Event Listeners on Dropdowns
function bindDropdownEvents() {
    // Dropdown toggle events
    fromTrigger.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleSelectDropdown(fromContainer);
    });

    toTrigger.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleSelectDropdown(toContainer);
    });

    // Option selections
    fromOptions.querySelectorAll('.option-item').forEach(item => {
        item.addEventListener('click', (e) => {
            const code = item.getAttribute('data-code');
            selectCurrency('from', code);
            closeSelectDropdown(fromContainer);
        });
    });

    toOptions.querySelectorAll('.option-item').forEach(item => {
        item.addEventListener('click', (e) => {
            const code = item.getAttribute('data-code');
            selectCurrency('to', code);
            closeSelectDropdown(toContainer);
        });
    });

    // Dropdown search filters
    fromSearch.addEventListener('input', (e) => {
        filterDropdown(fromOptions, e.target.value);
    });

    toSearch.addEventListener('input', (e) => {
        filterDropdown(toOptions, e.target.value);
    });

    // Keyboard accessibility for dropdown triggers
    setupKeyboardAccessibility(fromTrigger, fromContainer, fromOptions, 'from');
    setupKeyboardAccessibility(toTrigger, toContainer, toOptions, 'to');
}

function toggleSelectDropdown(container) {
    const isActive = container.classList.contains('active');
    
    // Close other dropdowns
    closeSelectDropdown(fromContainer);
    closeSelectDropdown(toContainer);

    if (!isActive) {
        container.classList.add('active');
        const input = container.querySelector('.search-input');
        input.value = '';
        input.focus();
        
        // Reset list highlights and scrolls
        const optionsList = container.querySelector('.options-list');
        filterDropdown(optionsList, '');
        scrollToSelected(optionsList);
    }
}

function closeSelectDropdown(container) {
    container.classList.remove('active');
}

function filterDropdown(optionsList, query) {
    const items = optionsList.querySelectorAll('.option-item');
    const lowerQuery = query.toLowerCase().trim();
    
    items.forEach(item => {
        const code = item.querySelector('.currency-code').textContent.toLowerCase();
        const name = item.querySelector('.currency-name').textContent.toLowerCase();
        
        if (code.includes(lowerQuery) || name.includes(lowerQuery)) {
            item.classList.remove('hidden');
        } else {
            item.classList.add('hidden');
        }
    });
}

function scrollToSelected(optionsList) {
    const selected = optionsList.querySelector('.option-item.selected');
    if (selected) {
        optionsList.scrollTop = selected.offsetTop - optionsList.clientHeight / 2 + selected.clientHeight / 2;
    }
}

// Selects and updates state for target element
function selectCurrency(type, code) {
    if (type === 'from') {
        state.fromCurrency = code;
        updateTriggerUI(fromTrigger, code);
        updateSymbolUI();
        highlightSelectedItem(fromOptions, code);
    } else {
        state.toCurrency = code;
        updateTriggerUI(toTrigger, code);
        highlightSelectedItem(toOptions, code);
    }
    
    // Auto convert
    performConvert();
    fetchTrendData();
}

function updateTriggerUI(trigger, code) {
    const details = currencies[code];
    trigger.querySelector('.flag-icon').src = `https://flagcdn.com/w40/${details.flag}.png`;
    trigger.querySelector('.currency-code').textContent = code;
    trigger.querySelector('.currency-name').textContent = details.name;
}

function updateSymbolUI() {
    const details = currencies[state.fromCurrency];
    amountSymbol.textContent = details.symbol || '$';
}

function highlightSelectedItem(optionsList, code) {
    optionsList.querySelectorAll('.option-item').forEach(item => {
        if (item.getAttribute('data-code') === code) {
            item.classList.add('selected');
        } else {
            item.classList.remove('selected');
        }
    });
}

// Keyboard interactions support
function setupKeyboardAccessibility(trigger, container, optionsList, type) {
    trigger.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowDown' || e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            toggleSelectDropdown(container);
        }
    });

    const searchInput = container.querySelector('.search-input');
    searchInput.addEventListener('keydown', (e) => {
        const visibleItems = Array.from(optionsList.querySelectorAll('.option-item:not(.hidden)'));
        let highlighted = optionsList.querySelector('.option-item.highlighted');
        let index = visibleItems.indexOf(highlighted);

        if (e.key === 'ArrowDown') {
            e.preventDefault();
            if (index < visibleItems.length - 1) {
                if (highlighted) highlighted.classList.remove('highlighted');
                index++;
                visibleItems[index].classList.add('highlighted');
                visibleItems[index].scrollIntoView({ block: 'nearest' });
            }
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            if (index > 0) {
                if (highlighted) highlighted.classList.remove('highlighted');
                index--;
                visibleItems[index].classList.add('highlighted');
                visibleItems[index].scrollIntoView({ block: 'nearest' });
            }
        } else if (e.key === 'Enter') {
            e.preventDefault();
            if (highlighted) {
                const code = highlighted.getAttribute('data-code');
                selectCurrency(type, code);
                closeSelectDropdown(container);
            } else if (visibleItems.length > 0) {
                const code = visibleItems[0].getAttribute('data-code');
                selectCurrency(type, code);
                closeSelectDropdown(container);
            }
        } else if (e.key === 'Escape') {
            closeSelectDropdown(container);
            trigger.focus();
        }
    });
}

// Close dropdowns if clicking outside
document.addEventListener('click', (e) => {
    if (!fromContainer.contains(e.target)) {
        closeSelectDropdown(fromContainer);
    }
    if (!toContainer.contains(e.target)) {
        closeSelectDropdown(toContainer);
    }
});


// ==========================================================================
// SWAP CURRENCIES LOGIC
// ==========================================================================
function swapCurrencies() {
    // Trigger button rotation animation
    const svgIcon = swapBtn.querySelector('svg');
    svgIcon.style.transform = svgIcon.style.transform === 'rotate(180deg)' ? 'rotate(0deg)' : 'rotate(180deg)';
    
    // Swap code states
    const temp = state.fromCurrency;
    state.fromCurrency = state.toCurrency;
    state.toCurrency = temp;

    // Update UI elements
    updateTriggerUI(fromTrigger, state.fromCurrency);
    updateTriggerUI(toTrigger, state.toCurrency);
    updateSymbolUI();
    
    highlightSelectedItem(fromOptions, state.fromCurrency);
    highlightSelectedItem(toOptions, state.toCurrency);

    // Refresh rates and trend graph
    performConvert();
    fetchTrendData();
    
    showToast(`Swapped to ${state.fromCurrency} → ${state.toCurrency}`, 'success');
}

swapBtn.addEventListener('click', swapCurrencies);


// ==========================================================================
// API DATA RETRIEVAL (LIVE EXCHANGE RATES WITH LOCAL STORAGE CACHING)
// ==========================================================================

async function fetchExchangeRates() {
    const cachedData = localStorage.getItem('currenx_usd_rates');
    const cachedTime = localStorage.getItem('currenx_usd_time');
    
    const now = Date.now();
    
    // Check if cache is valid
    if (cachedData && cachedTime && (now - cachedTime < CACHE_EXPIRY)) {
        state.rates = JSON.parse(cachedData);
        state.ratesLastUpdated = parseInt(cachedTime);
        state.isOffline = false;
        return;
    }

    try {
        const response = await fetch('https://open.er-api.com/v6/latest/USD');
        if (!response.ok) throw new Error('API fetch error');
        
        const data = await response.json();
        
        if (data && data.rates) {
            state.rates = data.rates;
            state.ratesLastUpdated = now;
            state.isOffline = false;
            
            // Save to cache
            localStorage.setItem('currenx_usd_rates', JSON.stringify(data.rates));
            localStorage.setItem('currenx_usd_time', now.toString());
        } else {
            throw new Error('Malformed API rates payload');
        }
    } catch (error) {
        console.error('Rates fetch failed:', error);
        
        // Fallback to cache if network fails
        if (cachedData) {
            state.rates = JSON.parse(cachedData);
            state.ratesLastUpdated = parseInt(cachedTime);
            state.isOffline = true;
            showToast('Offline Mode: Displaying cached currency rates.', 'warning');
        } else {
            state.isOffline = true;
            throw new Error('No connection and no cached exchange rates found');
        }
    }
}

// Convert core calculations
function performConvert() {
    // Read input amount
    let rawAmount = parseFloat(amountInput.value);
    if (isNaN(rawAmount) || rawAmount < 0) {
        rawAmount = 0;
    }
    state.amount = rawAmount;

    // Loader display
    resultSkeleton.classList.remove('hidden');
    resultContentBox.classList.add('hidden');

    try {
        const rates = state.rates;
        
        if (!rates || Object.keys(rates).length === 0) {
            throw new Error('Rates database unavailable');
        }

        const usdToFromRate = rates[state.fromCurrency];
        const usdToTargetRate = rates[state.toCurrency];

        if (!usdToFromRate || !usdToTargetRate) {
            throw new Error(`Unsupported currency code pair: ${state.fromCurrency} / ${state.toCurrency}`);
        }

        // Cross-rate calculation (From -> USD -> To)
        const exchangeRate = usdToTargetRate / usdToFromRate;
        const convertedResult = state.amount * exchangeRate;

        // Render result displays
        calcInputAmount.textContent = formatCurrencyAmount(state.amount, state.fromCurrency);
        calcInputCode.textContent = state.fromCurrency;
        
        calcOutputAmount.textContent = formatCurrencyAmount(convertedResult, state.toCurrency);
        calcOutputCode.textContent = state.toCurrency;

        // Display exchange rate formula and timestamps
        const timestampDate = new Date(state.ratesLastUpdated);
        const formatOptions = { month: 'short', day: 'numeric', year: 'numeric', hour: '2-digit', minute: '2-digit' };
        const formattedTime = timestampDate.toLocaleDateString('en-US', formatOptions);
        
        rateCaption.innerHTML = `
            1 ${state.fromCurrency} = ${exchangeRate.toFixed(5)} ${state.toCurrency} 
            • Last updated: ${formattedTime} ${state.isOffline ? '<span style="color:var(--accent)">(Offline Cache)</span>' : ''}
        `;

        // Hide loader and display panel
        setTimeout(() => {
            resultSkeleton.classList.add('hidden');
            resultContentBox.classList.remove('hidden');
        }, 150);

        // Update popular pairs grid after updates
        renderPopularPairs();

    } catch (err) {
        console.error(err);
        rateCaption.textContent = 'Failed to calculate conversion. Please check details.';
        showToast('Error during calculation. Please try again.', 'error');
    }
}

function formatCurrencyAmount(val, code) {
    // Setup locale decimal formatting
    return val.toLocaleString('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 4
    });
}

// Perform triggers
convertBtn.addEventListener('click', () => {
    performConvert();
});

amountInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        performConvert();
    }
});


// ==========================================================================
// HISTORICAL CHART INTEGRATION (SVG SPARKLINE CHART DRAWING)
// ==========================================================================

async function fetchTrendData() {
    chartSkeleton.classList.remove('hidden');
    chartCanvasBox.classList.add('hidden');
    
    // Hide active hover tooltip pointer
    chartTooltipGroup.classList.add('hidden');
    chartHoverInfo.textContent = 'Hover chart for historical rates';

    const fromSymbol = state.fromCurrency;
    const toSymbol = state.toCurrency;

    // Check if Frankfurter API supports this pair
    const isSupported = frankfurterSupported.has(fromSymbol) && frankfurterSupported.has(toSymbol);

    // Date computation (last 30 days)
    const end = new Date();
    const start = new Date();
    start.setDate(end.getDate() - 30);
    
    const startString = start.toISOString().split('T')[0];
    const endString = end.toISOString().split('T')[0];

    chartStartDate.textContent = start.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    chartEndDate.textContent = 'Today';

    if (!isSupported) {
        // Fallback: Generate mock visual trends
        setTimeout(() => {
            const simulatedRates = generateMockHistoricalRates(fromSymbol, toSymbol);
            state.historicalData = simulatedRates;
            drawSVGChart(simulatedRates);
            
            chartSkeleton.classList.add('hidden');
            chartCanvasBox.classList.remove('hidden');
        }, 300);
        return;
    }

    try {
        const url = `https://api.frankfurter.app/${startString}..${endString}?from=${fromSymbol}&to=${toSymbol}`;
        const response = await fetch(url);
        
        if (!response.ok) throw new Error('Historical API error status');
        const data = await response.json();
        
        if (data && data.rates) {
            const formattedRates = [];
            Object.keys(data.rates).forEach(date => {
                formattedRates.push({
                    date: date,
                    rate: data.rates[date][toSymbol]
                });
            });
            
            state.historicalData = formattedRates;
            drawSVGChart(formattedRates);
            
            chartSkeleton.classList.add('hidden');
            chartCanvasBox.classList.remove('hidden');
        } else {
            throw new Error('Empty historical data set');
        }
    } catch (e) {
        console.error('Frankfurter fetch error, falling back to simulation:', e);
        // Fallback to simulated trend line
        const simulatedRates = generateMockHistoricalRates(fromSymbol, toSymbol);
        state.historicalData = simulatedRates;
        drawSVGChart(simulatedRates);
        
        chartSkeleton.classList.add('hidden');
        chartCanvasBox.classList.remove('hidden');
    }
}

// Generate realistic looking simulated historical currency trends
function generateMockHistoricalRates(from, to) {
    const rates = [];
    const end = new Date();
    
    // Initial rate based on current rates
    let currentRate = 1.0;
    if (state.rates[from] && state.rates[to]) {
        currentRate = state.rates[to] / state.rates[from];
    }
    
    // Walk backward 30 days creating dynamic steps (random walk model)
    let driftBase = currentRate;
    for (let i = 30; i >= 0; i--) {
        const dateObj = new Date();
        dateObj.setDate(end.getDate() - i);
        const dateStr = dateObj.toISOString().split('T')[0];
        
        // Random walk: +/- 1.5% maximum deviation daily
        const change = (Math.random() - 0.5) * 0.015 * driftBase;
        driftBase += change;
        
        rates.push({
            date: dateStr,
            rate: parseFloat(driftBase.toFixed(6))
        });
    }
    return rates;
}

// Draw the dynamic SVG Sparkline Chart
function drawSVGChart(dataPoints) {
    if (!dataPoints || dataPoints.length === 0) return;

    const rates = dataPoints.map(d => d.rate);
    const minRate = Math.min(...rates);
    const maxRate = Math.max(...rates);
    
    // Safety margin to prevent lines sticking to chart borders
    const marginRatio = 0.15;
    const rateRange = maxRate - minRate;
    const chartMin = rateRange === 0 ? minRate * 0.9 : minRate - rateRange * marginRatio;
    const chartMax = rateRange === 0 ? maxRate * 1.1 : maxRate + rateRange * marginRatio;
    const adjustedRange = chartMax - chartMin;

    chartMaxVal.textContent = maxRate.toFixed(4);
    chartMinVal.textContent = minRate.toFixed(4);

    // SVG coordinates constants (viewBox = "0 0 500 160")
    const svgWidth = 500;
    const svgHeight = 160;
    const paddingBottom = 15;
    const paddingTop = 15;
    const graphHeight = svgHeight - paddingTop - paddingBottom; // 130px area

    // Compute coordinate arrays
    const coordinates = dataPoints.map((pt, idx) => {
        const x = (idx / (dataPoints.length - 1)) * svgWidth;
        // Map rate value to Y axis (inversion since Y = 0 is top)
        const y = svgHeight - paddingBottom - ((pt.rate - chartMin) / adjustedRange) * graphHeight;
        return { x, y, rate: pt.rate, date: pt.date };
    });

    // Save coords onto state for hover mapping
    state.chartCoords = coordinates;

    // Draw Line Path string
    let linePathString = `M ${coordinates[0].x} ${coordinates[0].y}`;
    for (let i = 1; i < coordinates.length; i++) {
        linePathString += ` L ${coordinates[i].x} ${coordinates[i].y}`;
    }
    chartLinePath.setAttribute('d', linePathString);

    // Draw Area Fill Path string
    const areaPathString = `${linePathString} L ${coordinates[coordinates.length - 1].x} ${svgHeight} L ${coordinates[0].x} ${svgHeight} Z`;
    chartAreaPath.setAttribute('d', areaPathString);
}

// Hover Interaction handling for Sparkline
trendSvg.addEventListener('mousemove', (e) => {
    if (!state.chartCoords || state.chartCoords.length === 0) return;

    const rect = trendSvg.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const svgMouseX = (mouseX / rect.width) * 500; // Translate relative to viewBox

    // Find closest coordinate point on X Axis
    let closestPoint = state.chartCoords[0];
    let minDistance = Math.abs(closestPoint.x - svgMouseX);

    for (let i = 1; i < state.chartCoords.length; i++) {
        const dist = Math.abs(state.chartCoords[i].x - svgMouseX);
        if (dist < minDistance) {
            minDistance = dist;
            closestPoint = state.chartCoords[i];
        }
    }

    // Update tooltip UI details
    tooltipLine.setAttribute('x1', closestPoint.x);
    tooltipLine.setAttribute('x2', closestPoint.x);
    
    tooltipDot.setAttribute('cx', closestPoint.x);
    tooltipDot.setAttribute('cy', closestPoint.y);
    
    chartTooltipGroup.classList.remove('hidden');

    const hoverDate = new Date(closestPoint.date);
    const dateFormatted = hoverDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
    
    chartHoverInfo.innerHTML = `
        <span style="color: var(--primary); font-weight:700">${dateFormatted}</span>: 
        1 ${state.fromCurrency} = <span style="color:var(--text-primary); font-weight:700">${closestPoint.rate.toFixed(4)}</span> ${state.toCurrency}
    `;
});

trendSvg.addEventListener('mouseleave', () => {
    chartTooltipGroup.classList.add('hidden');
    chartHoverInfo.textContent = 'Hover chart for historical rates';
});


// ==========================================================================
// POPULAR CONVERSIONS RENDERING
// ==========================================================================
function renderPopularPairs() {
    let gridHTML = '';
    
    POPULAR_PAIRS.forEach(pair => {
        const [from, to] = pair.split('/');
        
        let rateDisplay = '-';
        if (state.rates[from] && state.rates[to]) {
            const calculatedRate = state.rates[to] / state.rates[from];
            rateDisplay = calculatedRate.toFixed(4);
        }

        gridHTML += `
            <div class="pair-card" data-pair="${pair}">
                <div class="pair-names">${pair}</div>
                <div class="pair-rate">${rateDisplay}</div>
            </div>
        `;
    });

    popularPairsGrid.innerHTML = gridHTML;

    // Attach click events to popular pairs
    popularPairsGrid.querySelectorAll('.pair-card').forEach(card => {
        card.addEventListener('click', () => {
            const pair = card.getAttribute('data-pair');
            const [from, to] = pair.split('/');
            
            // Set selections
            selectCurrency('from', from);
            selectCurrency('to', to);
            
            showToast(`Switched view to ${pair}`, 'success');
        });
    });
}


// ==========================================================================
// MAIN APP INITIALIZATION
// ==========================================================================
async function initApp() {
    try {
        populateDropdownOptions();
        updateSymbolUI();
        
        // Fetch rates and draw chart
        await fetchExchangeRates();
        performConvert();
        fetchTrendData();
        
        showToast('CurrenX loaded successfully with live rates!', 'success');
    } catch (e) {
        console.error('Initial load failed:', e);
        showToast('Failed to load rates. Running in offline/simulation mode.', 'error');
        
        // Build mock layout if server fails completely
        state.isOffline = true;
        const fallbackRates = {};
        Object.keys(currencies).forEach((c, idx) => {
            fallbackRates[c] = 1.0 + (idx * 0.05); // Simulated flat progression
        });
        state.rates = fallbackRates;
        state.ratesLastUpdated = Date.now();
        
        performConvert();
        fetchTrendData();
    }
}

// Boot
window.addEventListener('DOMContentLoaded', initApp);
