// Weather API key (you can get a free one from OpenWeatherMap)
const WEATHER_API_KEY = 'demo'; // Replace with your actual API key

// Translation system
const translations = {
    en: {
        globe_controls: "🌍 Globe Controls",
        rotation_speed: "Rotation Speed:",
        zoom_level: "Zoom Level:",
        auto_rotate: "Auto Rotate:",
        show_clouds: "Show Clouds:",
        show_labels: "Show Labels:",
        search_countries: "Search countries...",
        available_countries: "🌍 Available Countries",
        loading: "Loading 3D Globe...",
        signing_in: "Signing in..."
    },
    hi: {
        globe_controls: "🌍 ग्लोब नियंत्रण",
        rotation_speed: "घूर्णन गति:",
        zoom_level: "ज़ूम स्तर:",
        auto_rotate: "स्वचालित घुमाव:",
        show_clouds: "बादल दिखाएं:",
        show_labels: "लेबल दिखाएं:",
        search_countries: "देश खोजें...",
        available_countries: "🌍 उपलब्ध देश",
        loading: "3D ग्लोब लोड हो रहा है...",
        signing_in: "साइन इन हो रहे हैं..."
    },
    te: {
        globe_controls: "🌍 గ్లోబ్ నియంత్రణలు",
        rotation_speed: "భ్రమణ వేగం:",
        zoom_level: "జూమ్ స్థాయి:",
        auto_rotate: "స్వయంచాలక భ్రమణం:",
        show_clouds: "మేఘాలను చూపించు:",
        show_labels: "లేబుల్స్ చూపించు:",
        search_countries: "దేశాలను వెతకండి...",
        available_countries: "🌍 అందుబాటులో ఉన్న దేశాలు",
        loading: "3D గ్లోబ్ లోడ్ అవుతోంది...",
        signing_in: "సైన్ ఇన్ అవుతోంది..."
    },
    ta: {
        globe_controls: "🌍 கோள கட்டுப்பாடுகள்",
        rotation_speed: "சுழற்சி வேகம்:",
        zoom_level: "ஜூம் நிலை:",
        auto_rotate: "தானியங்கி சுழற்சி:",
        show_clouds: "மேகங்களைக் காட்டு:",
        show_labels: "லேபிள்களைக் காட்டு:",
        search_countries: "நாடுகளைத் தேடுங்கள்...",
        available_countries: "🌍 கிடைக்கும் நாடுகள்",
        loading: "3D கோளம் ஏற்றப்படுகிறது...",
        signing_in: "உள்நுழைகிறது..."
    },
    kn: {
        globe_controls: "🌍 ಗ್ಲೋಬ್ ನಿಯಂತ್ರಣಗಳು",
        rotation_speed: "ಭ್ರಮಣ ವೇಗ:",
        zoom_level: "ಜೂಮ್ ಮಟ್ಟ:",
        auto_rotate: "ಸ್ವಯಂಚಾಲಿತ ಭ್ರಮಣ:",
        show_clouds: "ಮೋಡಗಳನ್ನು ತೋರಿಸಿ:",
        show_labels: "ಲೇಬಲ್ಗಳನ್ನು ತೋರಿಸಿ:",
        search_countries: "ದೇಶಗಳನ್ನು ಹುಡುಕಿ...",
        available_countries: "🌍 ಲಭ್ಯವಿರುವ ದೇಶಗಳು",
        loading: "3D ಗ್ಲೋಬ್ ಲೋಡ್ ಆಗುತ್ತಿದೆ...",
        signing_in: "ಸೈನ್ ಇನ್ ಆಗುತ್ತಿದೆ..."
    }
};

// Country names in different languages
const countryNames = {
    'India': {
        en: 'India',
        hi: 'भारत',
        te: 'భారతదేశం',
        ta: 'இந்தியா',
        kn: 'ಭಾರತ'
    },
    'China': {
        en: 'China',
        hi: 'चीन',
        te: 'చైనా',
        ta: 'சீனா',
        kn: 'ಚೀನಾ'
    },
    'United States': {
        en: 'United States',
        hi: 'संयुक्त राज्य अमेरिका',
        te: 'అమెరికా సంయుక్త రాష్ట్రాలు',
        ta: 'அமெரிக்க ஐக்கிய நாடுகள்',
        kn: 'ಅಮೆರಿಕ ಸಂಯುಕ್ತ ಸಂಸ್ಥಾನ'
    },
    'Brazil': {
        en: 'Brazil',
        hi: 'ब्राज़ील',
        te: 'బ్రెజిల్',
        ta: 'பிரேசில்',
        kn: 'ಬ್ರೆಜಿಲ್'
    },
    'Russia': {
        en: 'Russia',
        hi: 'रूस',
        te: 'రష్యా',
        ta: 'ரஷ்யா',
        kn: 'ರಷ್ಯಾ'
    },
    'Australia': {
        en: 'Australia',
        hi: 'ऑस्ट्रेलिया',
        te: 'ఆస్ట్రేలియా',
        ta: 'ஆஸ்திரேலியா',
        kn: 'ಆಸ್ಟ್ರೇಲಿಯಾ'
    },
    'Canada': {
        en: 'Canada',
        hi: 'कनाडा',
        te: 'కెనడా',
        ta: 'கனடா',
        kn: 'ಕೆನಡಾ'
    },
    'Germany': {
        en: 'Germany',
        hi: 'जर्मनी',
        te: 'జర్మనీ',
        ta: 'ஜெர்மனி',
        kn: 'ಜರ್ಮನಿ'
    },
    'France': {
        en: 'France',
        hi: 'फ्रांस',
        te: 'ఫ్రాన్స్',
        ta: 'பிரான்ஸ்',
        kn: 'ಫ್ರಾನ್ಸ್'
    },
    'Japan': {
        en: 'Japan',
        hi: 'जापान',
        te: 'జపాన్',
        ta: 'ஜப்பான்',
        kn: 'ಜಪಾನ್'
    },
    'United Kingdom': {
        en: 'United Kingdom',
        hi: 'यूनाइटेड किंगडम',
        te: 'యునైటెడ్ కింగ్డమ్',
        ta: 'ஐக்கிய இராச்சியம்',
        kn: 'ಯುನೈಟೆಡ್ ಕಿಂಗ್ಡಮ್'
    },
    'Italy': {
        en: 'Italy',
        hi: 'इटली',
        te: 'ఇటలీ',
        ta: 'இத்தாலி',
        kn: 'ಇಟಲಿ'
    },
    'Spain': {
        en: 'Spain',
        hi: 'स्पेन',
        te: 'స్పెయిన్',
        ta: 'ஸ்பெயின்',
        kn: 'ಸ್ಪೇನ್'
    },
    'South Korea': {
        en: 'South Korea',
        hi: 'दक्षिण कोरिया',
        te: 'దక్షిణ కొరియా',
        ta: 'தென் கொரியா',
        kn: 'ದಕ್ಷಿಣ ಕೊರಿಯಾ'
    },
    'Mexico': {
        en: 'Mexico',
        hi: 'मेक्सिको',
        te: 'మెక్సికో',
        ta: 'மெக்சிகோ',
        kn: 'ಮೆಕ್ಸಿಕೊ'
    },
    'Argentina': {
        en: 'Argentina',
        hi: 'अर्जेंटीना',
        te: 'అర్జెంటీనా',
        ta: 'அர்ஜென்டினா',
        kn: 'ಅರ್ಜೆಂಟೀನಾ'
    },
    'South Africa': {
        en: 'South Africa',
        hi: 'दक्षिण अफ्रीका',
        te: 'దక్షిణ ఆఫ్రికా',
        ta: 'தென் ஆப்பிரிக்கா',
        kn: 'ದಕ್ಷಿಣ ಆಫ್ರಿಕಾ'
    },
    'Egypt': {
        en: 'Egypt',
        hi: 'मिस्र',
        te: 'ఈజిప్ట్',
        ta: 'எகிப்து',
        kn: 'ಈಜಿಪ್ಟ್'
    },
    'Nigeria': {
        en: 'Nigeria',
        hi: 'नाइजीरिया',
        te: 'నైజీరియా',
        ta: 'நைஜீரியா',
        kn: 'ನೈಜೀರಿಯಾ'
    },
    'Thailand': {
        en: 'Thailand',
        hi: 'थाईलैंड',
        te: 'థాయిలాండ్',
        ta: 'தாய்லாந்து',
        kn: 'ಥೈಲ್ಯಾಂಡ್'
    },
    'Indonesia': {
        en: 'Indonesia',
        hi: 'इंडोनेशिया',
        te: 'ఇండోనేషియా',
        ta: 'இந்தோனேசியா',
        kn: 'ಇಂಡೋನೇಷಿಯಾ'
    },
    'Malaysia': {
        en: 'Malaysia',
        hi: 'मलेशिया',
        te: 'మలేషియా',
        ta: 'மலேசியா',
        kn: 'ಮಲೇಷಿಯಾ'
    },
    'Singapore': {
        en: 'Singapore',
        hi: 'सिंगापुर',
        te: 'సింగపూర్',
        ta: 'சிங்கப்பூர்',
        kn: 'ಸಿಂಗಪುರ'
    },
    'Philippines': {
        en: 'Philippines',
        hi: 'फिलीपींस',
        te: 'ఫిలిప్పీన్స్',
        ta: 'பிலிப்பைன்ஸ்',
        kn: 'ಫಿಲಿಪ್ಪೀನ್ಸ್'
    },
    'Vietnam': {
        en: 'Vietnam',
        hi: 'वियतनाम',
        te: 'వియత్నాం',
        ta: 'வியட்நாம்',
        kn: 'ವಿಯೆಟ್ನಾಮ್'
    },
    'Bangladesh': {
        en: 'Bangladesh',
        hi: 'बांग्लादेश',
        te: 'బంగ్లాదేశ్',
        ta: 'வங்காளதேசம்',
        kn: 'ಬಾಂಗ್ಲಾದೇಶ'
    },
    'Pakistan': {
        en: 'Pakistan',
        hi: 'पाकिस्तान',
        te: 'పాకిస్తాన్',
        ta: 'பாகிஸ்தான்',
        kn: 'ಪಾಕಿಸ್ತಾನ'
    },
    'Sri Lanka': {
        en: 'Sri Lanka',
        hi: 'श्रीलंका',
        te: 'శ్రీలంక',
        ta: 'இலங்கை',
        kn: 'ಶ್ರೀಲಂಕಾ'
    },
    'Nepal': {
        en: 'Nepal',
        hi: 'नेपाल',
        te: 'నేపాల్',
        ta: 'நேபாளம்',
        kn: 'ನೇಪಾಳ'
    },
    'Bhutan': {
        en: 'Bhutan',
        hi: 'भूटान',
        te: 'భూటాన్',
        ta: 'பூட்டான்',
        kn: 'ಭೂತಾನ್'
    },
    'Myanmar': {
        en: 'Myanmar',
        hi: 'म्यांमार',
        te: 'మయన్మార్',
        ta: 'மியான்மர்',
        kn: 'ಮ್ಯಾನ್ಮಾರ್'
    },
    'Afghanistan': {
        en: 'Afghanistan',
        hi: 'अफगानिस्तान',
        te: 'ఆఫ్ఘనిస్తాన్',
        ta: 'ஆப்கானிஸ்தான்',
        kn: 'ಆಫ್ಘಾನಿಸ್ತಾನ'
    },
    'Iran': {
        en: 'Iran',
        hi: 'ईरान',
        te: 'ఇరాన్',
        ta: 'ஈரான்',
        kn: 'ಇರಾನ್'
    },
    'Iraq': {
        en: 'Iraq',
        hi: 'इराक',
        te: 'ఇరాక్',
        ta: 'ஈராக்',
        kn: 'ಇರಾಕ್'
    },
    'Saudi Arabia': {
        en: 'Saudi Arabia',
        hi: 'सऊदी अरब',
        te: 'సౌదీ అరేబియా',
        ta: 'சவுதி அரேபியா',
        kn: 'ಸೌದಿ ಅರೇಬಿಯಾ'
    },
    'Turkey': {
        en: 'Turkey',
        hi: 'तुर्की',
        te: 'టర్కీ',
        ta: 'துருக்கி',
        kn: 'ಟರ್ಕಿ'
    },
    'Israel': {
        en: 'Israel',
        hi: 'इज़राइल',
        te: 'ఇజ్రాయిల్',
        ta: 'இஸ்ரேல்',
        kn: 'ಇಸ್ರೇಲ್'
    },
    'UAE': {
        en: 'UAE',
        hi: 'संयुक्त अरब अमीरात',
        te: 'యుఎఇ',
        ta: 'ஐக்கிய அரபு எமிரேட்ஸ்',
        kn: 'ಯುಎಇ'
    }
};

// Current language
let currentLanguage = 'en';

// Text-to-Speech functionality
let speechSynthesis = window.speechSynthesis;
let currentVoice = null;

// Initialize TTS voices
function initTTS() {
    // Wait for voices to load
    if (speechSynthesis.onvoiceschanged !== undefined) {
        speechSynthesis.onvoiceschanged = function() {
            loadVoices();
        };
    }
    loadVoices();
}

// Load available voices
function loadVoices() {
    const voices = speechSynthesis.getVoices();
    
    // Find voices for different languages
    const voiceMap = {
        'en': voices.find(voice => voice.lang.startsWith('en')) || voices[0],
        'hi': voices.find(voice => voice.lang.startsWith('hi')) || voices.find(voice => voice.lang.startsWith('en')),
        'te': voices.find(voice => voice.lang.startsWith('te')) || voices.find(voice => voice.lang.startsWith('en')),
        'ta': voices.find(voice => voice.lang.startsWith('ta')) || voices.find(voice => voice.lang.startsWith('en')),
        'kn': voices.find(voice => voice.lang.startsWith('kn')) || voices.find(voice => voice.lang.startsWith('en'))
    };
    
    currentVoice = voiceMap[currentLanguage] || voices[0];
}

// Speak text
function speakText(text, lang = currentLanguage) {
    if (!speechSynthesis) {
        console.log('Speech synthesis not supported');
        return;
    }
    
    // Stop any current speech
    speechSynthesis.cancel();
    
    // Create speech utterance
    const utterance = new SpeechSynthesisUtterance(text);
    
    // Set voice for current language
    const voices = speechSynthesis.getVoices();
    const voice = voices.find(v => v.lang.startsWith(lang)) || voices[0];
    if (voice) {
        utterance.voice = voice;
    }
    
    // Set speech properties
    utterance.rate = 0.8;
    utterance.pitch = 1;
    utterance.volume = 0.8;
    
    // Speak
    speechSynthesis.speak(utterance);
}

// Speak country name when clicked
function speakCountryName(countryName) {
    const translatedName = getCountryName(countryName);
    speakText(translatedName, currentLanguage);
}

// Add TTS button to language selector
function addTTSButton() {
    const languageSelector = document.querySelector('.language-selector');
    if (languageSelector && !document.getElementById('ttsButton')) {
        const ttsButton = document.createElement('button');
        ttsButton.id = 'ttsButton';
        ttsButton.className = 'language-btn tts-btn';
        ttsButton.innerHTML = '🔊';
        ttsButton.title = 'Text-to-Speech';
        ttsButton.addEventListener('click', toggleTTS);
        languageSelector.appendChild(ttsButton);
    }
}

// Toggle TTS on/off
let ttsEnabled = false;
function toggleTTS() {
    ttsEnabled = !ttsEnabled;
    const ttsButton = document.getElementById('ttsButton');
    if (ttsButton) {
        ttsButton.style.background = ttsEnabled ? 'rgba(0, 255, 136, 0.3)' : 'transparent';
        ttsButton.title = ttsEnabled ? 'Disable Text-to-Speech' : 'Enable Text-to-Speech';
    }
}

// Initialize translation system
function initTranslation() {
    // Add event listeners to language buttons
    document.querySelectorAll('.language-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            switchLanguage(lang);
        });
    });
    
    // Initialize TTS
    initTTS();
    addTTSButton();
    
    // Load saved language preference
    const savedLang = localStorage.getItem('preferredLanguage') || 'en';
    switchLanguage(savedLang);
}

// Switch language
function switchLanguage(lang) {
    currentLanguage = lang;
    
    // Update active button
    document.querySelectorAll('.language-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`[data-lang="${lang}"]`).classList.add('active');
    
    // Update all translatable elements
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
    
    // Update placeholder texts
    document.querySelectorAll('[data-translate-placeholder]').forEach(element => {
        const key = element.getAttribute('data-translate-placeholder');
        if (translations[lang] && translations[lang][key]) {
            element.placeholder = translations[lang][key];
        }
    });
    
    // Update country names on globe
    updateCountryNamesOnGlobe();
    
    // Update country list
    updateCountryList();
    
    // Save language preference
    localStorage.setItem('preferredLanguage', lang);
}

// Get country name in current language
function getCountryName(country, lang = currentLanguage) {
    if (countryNames[country] && countryNames[country][lang]) {
        return countryNames[country][lang];
    }
    return country; // Fallback to English
}

// Update country names on globe - No longer needed as text labels are removed
function updateCountryNamesOnGlobe() {
    // Text labels removed from globe - function kept for compatibility
}

// Update country list display
function updateCountryList() {
    const countryListElement = document.getElementById('countryList');
    if (countryListElement) {
        countryListElement.innerHTML = '';
        Object.keys(countryNames).forEach(country => {
            const countryElement = document.createElement('div');
            countryElement.className = 'country-item';
            countryElement.textContent = getCountryName(country);
            countryElement.addEventListener('click', () => {
                // Handle country click directly
                console.log('Country list item clicked:', country);
                handleCountryClick(country);
            });
            countryListElement.appendChild(countryElement);
        });
    }
}

// Country data with coordinates, capitals, and states
const countryData = {
    'India': {
        capital: 'New Delhi',
        population: '1.4 billion',
        area: '3.3M km²',
        continent: 'Asia',
        currency: 'Indian Rupee (INR)',
        coordinates: { lat: 20.5937, lng: 78.9629 },
        timezone: 'Asia/Kolkata',
        newsSources: ['https://timesofindia.indiatimes.com', 'https://www.hindustantimes.com', 'https://www.indiatoday.in'],
        states: [
            'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh',
            'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand',
            'Karnataka', 'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur',
            'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Punjab',
            'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura',
            'Uttar Pradesh', 'Uttarakhand', 'West Bengal', 'Andaman and Nicobar Islands',
            'Chandigarh', 'Dadra and Nagar Haveli', 'Daman and Diu', 'Delhi',
            'Jammu and Kashmir', 'Ladakh', 'Lakshadweep', 'Puducherry'
        ],
        localNews: {
            'Andhra Pradesh': [
                'https://www.thehansindia.com', 'https://www.deccanchronicle.com', 'https://www.andhrajyothy.com', 'https://www.vaartha.com',
                'https://www.andhraprabha.com', 'https://www.andhrabhoomi.net', 'https://www.andhrajyothy.com', 'https://www.andhravani.com',
                'https://www.andhrawatch.com', 'https://www.andhrapatrika.com', 'https://www.andhrajournal.com', 'https://www.andhrakhabar.com',
                'https://www.andhrapost.com', 'https://www.andhrachronicle.com', 'https://www.andhrabhoomi.com', 'https://www.andhraprabha.com'
            ],
            'Telangana': [
                'https://www.telanganatoday.com', 'https://www.siasat.com', 'https://www.andhrajyothy.com', 'https://www.vaartha.com',
                'https://www.telangananews.com', 'https://www.telanganakhabar.com', 'https://www.telanganapost.com', 'https://www.telanganajournal.com',
                'https://www.telanganawatch.com', 'https://www.telanganapatrika.com', 'https://www.telanganavani.com', 'https://www.telanganabhoomi.com',
                'https://www.telanganaprabha.com', 'https://www.telanganachronicle.com', 'https://www.telanganatimes.com', 'https://www.telangananews.com'
            ],
            'Karnataka': [
                'https://www.vijaykarnataka.com', 'https://www.prajavani.net', 'https://www.kannadaprabha.com', 'https://www.udayavani.com',
                'https://www.kannadajagran.com', 'https://www.kannadabhoomi.com', 'https://www.kannadapost.com', 'https://www.kannadajournal.com',
                'https://www.kannadawatch.com', 'https://www.kannadapatrika.com', 'https://www.kannadavani.com', 'https://www.kannadachronicle.com',
                'https://www.kannadatimes.com', 'https://www.kannadanews.com', 'https://www.karnatakachronicle.com', 'https://www.karnatakakhabar.com'
            ],
            'Gujarat': ['https://www.gujaratsamachar.com', 'https://www.divyabhaskar.co.in', 'https://www.gujaratmitra.com', 'https://www.sandesh.com'],
            'Maharashtra': ['https://www.lokmat.com', 'https://www.sakal.com', 'https://www.maharashtratimes.com', 'https://www.pudhari.com'],
            'Tamil Nadu': ['https://www.dinamalar.com', 'https://www.dinakaran.com', 'https://www.dinamani.com', 'https://www.hindutamil.in'],
            'West Bengal': ['https://www.anandabazar.com', 'https://www.eisamay.com', 'https://www.bartamanpatrika.com', 'https://www.sangbadpratidin.in'],
            'Delhi': [
                'https://www.hindustantimes.com', 'https://timesofindia.indiatimes.com', 'https://www.indianexpress.com', 'https://www.thehindu.com',
                'https://www.delhichronicle.com', 'https://www.delhikhabar.com', 'https://www.delhipost.com', 'https://www.delhijournal.com',
                'https://www.delhiwatch.com', 'https://www.delhipatrika.com', 'https://www.delhivani.com', 'https://www.delhibhoomi.com',
                'https://www.delhiprabha.com', 'https://www.delhitimes.com', 'https://www.delhinews.com', 'https://www.delhitoday.com'
            ],
            'Uttar Pradesh': ['https://www.amarujala.com', 'https://www.jagran.com', 'https://www.dainikbhaskar.com', 'https://www.patrika.com'],
            'Kerala': ['https://www.mathrubhumi.com', 'https://www.manoramaonline.com', 'https://www.malayalamanorama.com', 'https://www.deshabhimani.com'],
            'Punjab': ['https://www.punjabkesari.in', 'https://www.jagbani.com', 'https://www.ajitjalandhar.com', 'https://www.dainiksaveratimes.com'],
            'Rajasthan': ['https://www.patrika.com', 'https://www.bhaskar.com', 'https://www.dainiknavajyoti.com', 'https://www.rajasthanpatrika.com'],
            'Madhya Pradesh': ['https://www.naidunia.com', 'https://www.bhaskar.com', 'https://www.patrika.com', 'https://www.dainikjagran.com'],
            'Bihar': ['https://www.jagran.com', 'https://www.bhaskar.com', 'https://www.prabhatkhabar.com', 'https://www.dainikjagran.com'],
            'Odisha': ['https://www.samaja.in', 'https://www.sambad.in', 'https://www.dharitri.com', 'https://www.odishatv.in'],
            'Assam': ['https://www.asomiyapratidin.in', 'https://www.assamtribune.com', 'https://www.amarasonline.com', 'https://www.dainikagradoot.com'],
            'Jharkhand': ['https://www.prabhatkhabar.com', 'https://www.dainikjagran.com', 'https://www.bhaskar.com', 'https://www.jagran.com'],
            'Chhattisgarh': ['https://www.bhaskar.com', 'https://www.patrika.com', 'https://www.naidunia.com', 'https://www.dainikjagran.com'],
            'Himachal Pradesh': ['https://www.amarujala.com', 'https://www.jagran.com', 'https://www.dainikjagran.com', 'https://www.bhaskar.com'],
            'Uttarakhand': ['https://www.amarujala.com', 'https://www.jagran.com', 'https://www.dainikjagran.com', 'https://www.bhaskar.com'],
            'Haryana': ['https://www.jagran.com', 'https://www.bhaskar.com', 'https://www.amarujala.com', 'https://www.dainikjagran.com'],
            'Goa': ['https://www.navhindtimes.in', 'https://www.heraldgoa.in', 'https://www.goacom.com', 'https://www.goanews.com'],
            'Manipur': ['https://www.sangai Express.com', 'https://www.ifp.co.in', 'https://www.manipuronline.in', 'https://www.kanglaonline.com'],
            'Meghalaya': ['https://www.theshillongtimes.com', 'https://www.sentinelassam.com', 'https://www.meghalayatimes.in', 'https://www.easternpanorama.in'],
            'Mizoram': ['https://www.mizoramtimes.com', 'https://www.ifp.co.in', 'https://www.mizoramtimes.com', 'https://www.easternpanorama.in'],
            'Nagaland': ['https://www.nagalandpost.com', 'https://www.morungexpress.com', 'https://www.easternmirrornagaland.com', 'https://www.easternpanorama.in'],
            'Tripura': ['https://www.tripurainfoway.com', 'https://www.sentinelassam.com', 'https://www.tripuratimes.com', 'https://www.easternpanorama.in'],
            'Sikkim': ['https://www.sikkimexpress.com', 'https://www.sikkimchronicle.com', 'https://www.easternpanorama.in', 'https://www.sikkimtimes.com']
        }
    },
    'United States': {
        capital: 'Washington D.C.',
        population: '331M',
        area: '9.8M km²',
        continent: 'North America',
        currency: 'US Dollar (USD)',
        coordinates: { lat: 39.8283, lng: -98.5795 },
        timezone: 'America/New_York',
        newsSources: ['https://www.cnn.com', 'https://www.bbc.com/news', 'https://www.reuters.com'],
        states: [
            'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California',
            'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia',
            'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa',
            'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland',
            'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri',
            'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey',
            'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio',
            'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina',
            'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont',
            'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
        ],
        localNews: {
            'California': [
                'https://www.latimes.com', 'https://www.sfchronicle.com', 'https://www.sacbee.com', 'https://www.mercurynews.com',
                'https://www.sandiegouniontribune.com', 'https://www.ocregister.com', 'https://www.dailynews.com', 'https://www.presstelegram.com',
                'https://www.sfexaminer.com', 'https://www.eastbaytimes.com', 'https://www.marinij.com', 'https://www.pasadenastarnews.com',
                'https://www.sgvtribune.com', 'https://www.whittierdailynews.com', 'https://www.dailybulletin.com', 'https://www.redlandsdailyfacts.com'
            ],
            'New York': [
                'https://www.nytimes.com', 'https://www.nydailynews.com', 'https://www.nypost.com', 'https://www.amny.com',
                'https://www.buffalonews.com', 'https://www.democratandchronicle.com', 'https://www.pressconnects.com', 'https://www.poughkeepsiejournal.com',
                'https://www.lohud.com', 'https://www.ithacajournal.com', 'https://www.uticaod.com', 'https://www.stargazette.com',
                'https://www.recordonline.com', 'https://www.timesunion.com', 'https://www.syracuse.com', 'https://www.newyorkupstate.com'
            ],
            'Texas': [
                'https://www.dallasnews.com', 'https://www.houstonchronicle.com', 'https://www.expressnews.com', 'https://www.statesman.com',
                'https://www.chron.com', 'https://www.texastribune.org', 'https://www.khou.com', 'https://www.kxan.com',
                'https://www.kvue.com', 'https://www.kwtx.com', 'https://www.kbtx.com', 'https://www.kcbd.com',
                'https://www.kltv.com', 'https://www.kwtx.com', 'https://www.kbtx.com', 'https://www.kcbd.com'
            ],
            'Florida': [
                'https://www.miamiherald.com', 'https://www.orlandosentinel.com', 'https://www.sun-sentinel.com', 'https://www.tampabay.com',
                'https://www.jacksonville.com', 'https://www.tallahassee.com', 'https://www.palmbeachpost.com', 'https://www.naplesnews.com',
                'https://www.news-press.com', 'https://www.heraldtribune.com', 'https://www.gainesville.com', 'https://www.ocala.com',
                'https://www.daytonabeachnews-journal.com', 'https://www.nwfdailynews.com', 'https://www.pnj.com', 'https://www.tcpalm.com'
            ],
            'Illinois': [
                'https://www.chicagotribune.com', 'https://www.chicagosuntimes.com', 'https://www.dailyherald.com', 'https://www.nwherald.com',
                'https://www.sj-r.com', 'https://www.pjstar.com', 'https://www.pantagraph.com', 'https://www.news-gazette.com',
                'https://www.southernillinoisan.com', 'https://www.thesouthern.com', 'https://www.herald-review.com', 'https://www.news-gazette.com',
                'https://www.dailyherald.com', 'https://www.nwherald.com', 'https://www.sj-r.com', 'https://www.pjstar.com'
            ],
            'Pennsylvania': [
                'https://www.inquirer.com', 'https://www.post-gazette.com', 'https://www.pennlive.com', 'https://www.triblive.com',
                'https://www.mcall.com', 'https://www.morningcall.com', 'https://www.lehighvalleylive.com', 'https://www.pennlive.com',
                'https://www.triblive.com', 'https://www.inquirer.com', 'https://www.post-gazette.com', 'https://www.mcall.com',
                'https://www.morningcall.com', 'https://www.lehighvalleylive.com', 'https://www.pennlive.com', 'https://www.triblive.com'
            ],
            'Ohio': [
                'https://www.cleveland.com', 'https://www.dispatch.com', 'https://www.cincinnati.com', 'https://www.daytondailynews.com',
                'https://www.toledoblade.com', 'https://www.akronbeaconjournal.com', 'https://www.cantonrep.com', 'https://www.mansfieldnewsjournal.com',
                'https://www.zanesvilletimesrecorder.com', 'https://www.newarkadvocate.com', 'https://www.lancastereaglegazette.com', 'https://www.chillicothegazette.com',
                'https://www.portsmouth-dailytimes.com', 'https://www.coshoctontribune.com', 'https://www.mariettatimes.com', 'https://www.athenspost.com'
            ],
            'Georgia': [
                'https://www.ajc.com', 'https://www.savannahnow.com', 'https://www.ledger-enquirer.com', 'https://www.macon.com',
                'https://www.augustachronicle.com', 'https://www.onlineathens.com', 'https://www.gainesvilletimes.com', 'https://www.gwinnettdailypost.com',
                'https://www.rockdalenews.com', 'https://www.newtoncitizen.com', 'https://www.walton-tribune.com', 'https://www.barrownewsjournal.com',
                'https://www.henryherald.com', 'https://www.rockdalenews.com', 'https://www.newtoncitizen.com', 'https://www.walton-tribune.com'
            ],
            'North Carolina': [
                'https://www.newsobserver.com', 'https://www.charlotteobserver.com', 'https://www.greensboro.com', 'https://www.winstonsalemjournal.com',
                'https://www.fayobserver.com', 'https://www.wilmingtonstarnews.com', 'https://www.citizen-times.com', 'https://www.greensboro.com',
                'https://www.winstonsalemjournal.com', 'https://www.fayobserver.com', 'https://www.wilmingtonstarnews.com', 'https://www.citizen-times.com',
                'https://www.newsobserver.com', 'https://www.charlotteobserver.com', 'https://www.greensboro.com', 'https://www.winstonsalemjournal.com'
            ],
            'Michigan': [
                'https://www.freep.com', 'https://www.detroitnews.com', 'https://www.mlive.com', 'https://www.mlive.com',
                'https://www.freep.com', 'https://www.detroitnews.com', 'https://www.mlive.com', 'https://www.mlive.com',
                'https://www.freep.com', 'https://www.detroitnews.com', 'https://www.mlive.com', 'https://www.mlive.com',
                'https://www.freep.com', 'https://www.detroitnews.com', 'https://www.mlive.com', 'https://www.mlive.com'
            ],
            'Arizona': [
                'https://www.azcentral.com', 'https://www.azfamily.com', 'https://www.abc15.com', 'https://www.fox10phoenix.com',
                'https://www.kpho.com', 'https://www.knau.org', 'https://www.kjzz.org', 'https://www.azpm.org',
                'https://www.tucson.com', 'https://www.azstarnet.com', 'https://www.eastvalleytribune.com', 'https://www.westvalleyview.com',
                'https://www.azcentral.com', 'https://www.azfamily.com', 'https://www.abc15.com', 'https://www.fox10phoenix.com'
            ],
            'Alabama': [
                'https://www.al.com', 'https://www.montgomeryadvertiser.com', 'https://www.tuscaloosanews.com', 'https://www.huntsvilletimes.com',
                'https://www.dothaneagle.com', 'https://www.annistonstar.com', 'https://www.decaturdaily.com', 'https://www.timesdaily.com',
                'https://www.gadsdentimes.com', 'https://www.opelika-auburnnews.com', 'https://www.al.com', 'https://www.montgomeryadvertiser.com',
                'https://www.tuscaloosanews.com', 'https://www.huntsvilletimes.com', 'https://www.dothaneagle.com', 'https://www.annistonstar.com'
            ],
            'Alaska': [
                'https://www.adn.com', 'https://www.alaskapublic.org', 'https://www.ktoo.org', 'https://www.ktuu.com',
                'https://www.ktva.com', 'https://www.alaskasnewssource.com', 'https://www.adn.com', 'https://www.alaskapublic.org',
                'https://www.ktoo.org', 'https://www.ktuu.com', 'https://www.ktva.com', 'https://www.alaskasnewssource.com',
                'https://www.adn.com', 'https://www.alaskapublic.org', 'https://www.ktoo.org', 'https://www.ktuu.com'
            ],
            'Arkansas': [
                'https://www.arkansasonline.com', 'https://www.nwaonline.com', 'https://www.arkansastimes.com', 'https://www.southwesttimesrecord.com',
                'https://www.paragoulddailypress.com', 'https://www.baxterbulletin.com', 'https://www.arkansasonline.com', 'https://www.nwaonline.com',
                'https://www.arkansastimes.com', 'https://www.southwesttimesrecord.com', 'https://www.paragoulddailypress.com', 'https://www.baxterbulletin.com',
                'https://www.arkansasonline.com', 'https://www.nwaonline.com', 'https://www.arkansastimes.com', 'https://www.southwesttimesrecord.com'
            ],
            'Colorado': [
                'https://www.denverpost.com', 'https://www.gazette.com', 'https://www.coloradoan.com', 'https://www.durangoherald.com',
                'https://www.gjsentinel.com', 'https://www.pueblochieftain.com', 'https://www.denverpost.com', 'https://www.gazette.com',
                'https://www.coloradoan.com', 'https://www.durangoherald.com', 'https://www.gjsentinel.com', 'https://www.pueblochieftain.com',
                'https://www.denverpost.com', 'https://www.gazette.com', 'https://www.coloradoan.com', 'https://www.durangoherald.com'
            ],
            'Connecticut': [
                'https://www.courant.com', 'https://www.nhregister.com', 'https://www.stamfordadvocate.com', 'https://www.greenwichtime.com',
                'https://www.ctpost.com', 'https://www.newstimes.com', 'https://www.courant.com', 'https://www.nhregister.com',
                'https://www.stamfordadvocate.com', 'https://www.greenwichtime.com', 'https://www.ctpost.com', 'https://www.newstimes.com',
                'https://www.courant.com', 'https://www.nhregister.com', 'https://www.stamfordadvocate.com', 'https://www.greenwichtime.com'
            ],
            'Delaware': [
                'https://www.delawareonline.com', 'https://www.delawarepublic.org', 'https://www.delawareonline.com', 'https://www.delawarepublic.org',
                'https://www.delawareonline.com', 'https://www.delawarepublic.org', 'https://www.delawareonline.com', 'https://www.delawarepublic.org',
                'https://www.delawareonline.com', 'https://www.delawarepublic.org', 'https://www.delawareonline.com', 'https://www.delawarepublic.org',
                'https://www.delawareonline.com', 'https://www.delawarepublic.org', 'https://www.delawareonline.com', 'https://www.delawarepublic.org'
            ],
            'Hawaii': [
                'https://www.staradvertiser.com', 'https://www.hawaiinewsnow.com', 'https://www.khon2.com', 'https://www.kitv.com',
                'https://www.hawaiitribune-herald.com', 'https://www.westhawaiitoday.com', 'https://www.staradvertiser.com', 'https://www.hawaiinewsnow.com',
                'https://www.khon2.com', 'https://www.kitv.com', 'https://www.hawaiitribune-herald.com', 'https://www.westhawaiitoday.com',
                'https://www.staradvertiser.com', 'https://www.hawaiinewsnow.com', 'https://www.khon2.com', 'https://www.kitv.com'
            ],
            'Idaho': [
                'https://www.idahostatesman.com', 'https://www.idahopress.com', 'https://www.postregister.com', 'https://www.magicvalley.com',
                'https://www.idahostatesman.com', 'https://www.idahopress.com', 'https://www.postregister.com', 'https://www.magicvalley.com',
                'https://www.idahostatesman.com', 'https://www.idahopress.com', 'https://www.postregister.com', 'https://www.magicvalley.com',
                'https://www.idahostatesman.com', 'https://www.idahopress.com', 'https://www.postregister.com', 'https://www.magicvalley.com'
            ],
            'Indiana': [
                'https://www.indystar.com', 'https://www.nwitimes.com', 'https://www.jconline.com', 'https://www.courierpress.com',
                'https://www.news-sentinel.com', 'https://www.heraldtimesonline.com', 'https://www.indystar.com', 'https://www.nwitimes.com',
                'https://www.jconline.com', 'https://www.courierpress.com', 'https://www.news-sentinel.com', 'https://www.heraldtimesonline.com',
                'https://www.indystar.com', 'https://www.nwitimes.com', 'https://www.jconline.com', 'https://www.courierpress.com'
            ],
            'Iowa': [
                'https://www.desmoinesregister.com', 'https://www.thegazette.com', 'https://www.siouxcityjournal.com', 'https://www.omaha.com',
                'https://www.quad-citytimes.com', 'https://www.desmoinesregister.com', 'https://www.thegazette.com', 'https://www.siouxcityjournal.com',
                'https://www.omaha.com', 'https://www.quad-citytimes.com', 'https://www.desmoinesregister.com', 'https://www.thegazette.com',
                'https://www.siouxcityjournal.com', 'https://www.omaha.com', 'https://www.quad-citytimes.com', 'https://www.desmoinesregister.com'
            ],
            'Kansas': [
                'https://www.kansascity.com', 'https://www.wichitaeagle.com', 'https://www.ljworld.com', 'https://www.cjonline.com',
                'https://www.hutchnews.com', 'https://www.kansascity.com', 'https://www.wichitaeagle.com', 'https://www.ljworld.com',
                'https://www.cjonline.com', 'https://www.hutchnews.com', 'https://www.kansascity.com', 'https://www.wichitaeagle.com',
                'https://www.ljworld.com', 'https://www.cjonline.com', 'https://www.hutchnews.com', 'https://www.kansascity.com'
            ],
            'Kentucky': [
                'https://www.courier-journal.com', 'https://www.kentucky.com', 'https://www.lexingtonheraldleader.com', 'https://www.bgdailynews.com',
                'https://www.owensboromessenger.com', 'https://www.courier-journal.com', 'https://www.kentucky.com', 'https://www.lexingtonheraldleader.com',
                'https://www.bgdailynews.com', 'https://www.owensboromessenger.com', 'https://www.courier-journal.com', 'https://www.kentucky.com',
                'https://www.lexingtonheraldleader.com', 'https://www.bgdailynews.com', 'https://www.owensboromessenger.com', 'https://www.courier-journal.com'
            ],
            'Louisiana': [
                'https://www.nola.com', 'https://www.theadvocate.com', 'https://www.shreveporttimes.com', 'https://www.theadvertiser.com',
                'https://www.thenewsstar.com', 'https://www.nola.com', 'https://www.theadvocate.com', 'https://www.shreveporttimes.com',
                'https://www.theadvertiser.com', 'https://www.thenewsstar.com', 'https://www.nola.com', 'https://www.theadvocate.com',
                'https://www.shreveporttimes.com', 'https://www.theadvertiser.com', 'https://www.thenewsstar.com', 'https://www.nola.com'
            ],
            'Maine': [
                'https://www.pressherald.com', 'https://www.bangordailynews.com', 'https://www.sunjournal.com', 'https://www.timesrecord.com',
                'https://www.pressherald.com', 'https://www.bangordailynews.com', 'https://www.sunjournal.com', 'https://www.timesrecord.com',
                'https://www.pressherald.com', 'https://www.bangordailynews.com', 'https://www.sunjournal.com', 'https://www.timesrecord.com',
                'https://www.pressherald.com', 'https://www.bangordailynews.com', 'https://www.sunjournal.com', 'https://www.timesrecord.com'
            ],
            'Maryland': [
                'https://www.baltimoresun.com', 'https://www.washingtonpost.com', 'https://www.capitalgazette.com', 'https://www.fredericknewspost.com',
                'https://www.carrollcountytimes.com', 'https://www.baltimoresun.com', 'https://www.washingtonpost.com', 'https://www.capitalgazette.com',
                'https://www.fredericknewspost.com', 'https://www.carrollcountytimes.com', 'https://www.baltimoresun.com', 'https://www.washingtonpost.com',
                'https://www.capitalgazette.com', 'https://www.fredericknewspost.com', 'https://www.carrollcountytimes.com', 'https://www.baltimoresun.com'
            ],
            'Massachusetts': [
                'https://www.bostonglobe.com', 'https://www.bostonherald.com', 'https://www.telegram.com', 'https://www.southcoasttoday.com',
                'https://www.berkshireeagle.com', 'https://www.bostonglobe.com', 'https://www.bostonherald.com', 'https://www.telegram.com',
                'https://www.southcoasttoday.com', 'https://www.berkshireeagle.com', 'https://www.bostonglobe.com', 'https://www.bostonherald.com',
                'https://www.telegram.com', 'https://www.southcoasttoday.com', 'https://www.berkshireeagle.com', 'https://www.bostonglobe.com'
            ],
            'Minnesota': [
                'https://www.startribune.com', 'https://www.duluthnewstribune.com', 'https://www.postbulletin.com', 'https://www.mankatofreepress.com',
                'https://www.wctrib.com', 'https://www.startribune.com', 'https://www.duluthnewstribune.com', 'https://www.postbulletin.com',
                'https://www.mankatofreepress.com', 'https://www.wctrib.com', 'https://www.startribune.com', 'https://www.duluthnewstribune.com',
                'https://www.postbulletin.com', 'https://www.mankatofreepress.com', 'https://www.wctrib.com', 'https://www.startribune.com'
            ],
            'Mississippi': [
                'https://www.clarionledger.com', 'https://www.sunherald.com', 'https://www.hattiesburgamerican.com', 'https://www.meridianstar.com',
                'https://www.dailyjournal.com', 'https://www.clarionledger.com', 'https://www.sunherald.com', 'https://www.hattiesburgamerican.com',
                'https://www.meridianstar.com', 'https://www.dailyjournal.com', 'https://www.clarionledger.com', 'https://www.sunherald.com',
                'https://www.hattiesburgamerican.com', 'https://www.meridianstar.com', 'https://www.dailyjournal.com', 'https://www.clarionledger.com'
            ],
            'Missouri': [
                'https://www.stltoday.com', 'https://www.kansascity.com', 'https://www.news-leader.com', 'https://www.columbiatribune.com',
                'https://www.semissourian.com', 'https://www.stltoday.com', 'https://www.kansascity.com', 'https://www.news-leader.com',
                'https://www.columbiatribune.com', 'https://www.semissourian.com', 'https://www.stltoday.com', 'https://www.kansascity.com',
                'https://www.news-leader.com', 'https://www.columbiatribune.com', 'https://www.semissourian.com', 'https://www.stltoday.com'
            ],
            'Montana': [
                'https://www.missoulian.com', 'https://www.billingsgazette.com', 'https://www.greatfallstribune.com', 'https://www.bozemandailychronicle.com',
                'https://www.helenair.com', 'https://www.missoulian.com', 'https://www.billingsgazette.com', 'https://www.greatfallstribune.com',
                'https://www.bozemandailychronicle.com', 'https://www.helenair.com', 'https://www.missoulian.com', 'https://www.billingsgazette.com',
                'https://www.greatfallstribune.com', 'https://www.bozemandailychronicle.com', 'https://www.helenair.com', 'https://www.missoulian.com'
            ],
            'Nebraska': [
                'https://www.omaha.com', 'https://www.journalstar.com', 'https://www.kearneyhub.com', 'https://www.nptelegraph.com',
                'https://www.grandislandindependent.com', 'https://www.omaha.com', 'https://www.journalstar.com', 'https://www.kearneyhub.com',
                'https://www.nptelegraph.com', 'https://www.grandislandindependent.com', 'https://www.omaha.com', 'https://www.journalstar.com',
                'https://www.kearneyhub.com', 'https://www.nptelegraph.com', 'https://www.grandislandindependent.com', 'https://www.omaha.com'
            ],
            'Nevada': [
                'https://www.reviewjournal.com', 'https://www.rgj.com', 'https://www.lasvegassun.com', 'https://www.nevadaappeal.com',
                'https://www.elkodaily.com', 'https://www.reviewjournal.com', 'https://www.rgj.com', 'https://www.lasvegassun.com',
                'https://www.nevadaappeal.com', 'https://www.elkodaily.com', 'https://www.reviewjournal.com', 'https://www.rgj.com',
                'https://www.lasvegassun.com', 'https://www.nevadaappeal.com', 'https://www.elkodaily.com', 'https://www.reviewjournal.com'
            ],
            'New Hampshire': [
                'https://www.unionleader.com', 'https://www.seacoastonline.com', 'https://www.nashuatelegraph.com', 'https://www.fosters.com',
                'https://www.concordmonitor.com', 'https://www.unionleader.com', 'https://www.seacoastonline.com', 'https://www.nashuatelegraph.com',
                'https://www.fosters.com', 'https://www.concordmonitor.com', 'https://www.unionleader.com', 'https://www.seacoastonline.com',
                'https://www.nashuatelegraph.com', 'https://www.fosters.com', 'https://www.concordmonitor.com', 'https://www.unionleader.com'
            ],
            'New Jersey': [
                'https://www.nj.com', 'https://www.northjersey.com', 'https://www.app.com', 'https://www.courierpostonline.com',
                'https://www.mycentraljersey.com', 'https://www.nj.com', 'https://www.northjersey.com', 'https://www.app.com',
                'https://www.courierpostonline.com', 'https://www.mycentraljersey.com', 'https://www.nj.com', 'https://www.northjersey.com',
                'https://www.app.com', 'https://www.courierpostonline.com', 'https://www.mycentraljersey.com', 'https://www.nj.com'
            ],
            'New Mexico': [
                'https://www.abqjournal.com', 'https://www.santafenewmexican.com', 'https://www.lcsun-news.com', 'https://www.currentargus.com',
                'https://www.daily-times.com', 'https://www.abqjournal.com', 'https://www.santafenewmexican.com', 'https://www.lcsun-news.com',
                'https://www.currentargus.com', 'https://www.daily-times.com', 'https://www.abqjournal.com', 'https://www.santafenewmexican.com',
                'https://www.lcsun-news.com', 'https://www.currentargus.com', 'https://www.daily-times.com', 'https://www.abqjournal.com'
            ],
            'North Dakota': [
                'https://www.grandforksherald.com', 'https://www.bismarcktribune.com', 'https://www.minotdailynews.com', 'https://www.willistonherald.com',
                'https://www.dickinsonnews.com', 'https://www.grandforksherald.com', 'https://www.bismarcktribune.com', 'https://www.minotdailynews.com',
                'https://www.willistonherald.com', 'https://www.dickinsonnews.com', 'https://www.grandforksherald.com', 'https://www.bismarcktribune.com',
                'https://www.minotdailynews.com', 'https://www.willistonherald.com', 'https://www.dickinsonnews.com', 'https://www.grandforksherald.com'
            ],
            'Oklahoma': [
                'https://www.oklahoman.com', 'https://www.tulsaworld.com', 'https://www.newsok.com', 'https://www.ardmoreite.com',
                'https://www.enidnews.com', 'https://www.oklahoman.com', 'https://www.tulsaworld.com', 'https://www.newsok.com',
                'https://www.ardmoreite.com', 'https://www.enidnews.com', 'https://www.oklahoman.com', 'https://www.tulsaworld.com',
                'https://www.newsok.com', 'https://www.ardmoreite.com', 'https://www.enidnews.com', 'https://www.oklahoman.com'
            ],
            'Oregon': [
                'https://www.oregonlive.com', 'https://www.statesmanjournal.com', 'https://www.registerguard.com', 'https://www.bendbulletin.com',
                'https://www.mailtribune.com', 'https://www.oregonlive.com', 'https://www.statesmanjournal.com', 'https://www.registerguard.com',
                'https://www.bendbulletin.com', 'https://www.mailtribune.com', 'https://www.oregonlive.com', 'https://www.statesmanjournal.com',
                'https://www.registerguard.com', 'https://www.bendbulletin.com', 'https://www.mailtribune.com', 'https://www.oregonlive.com'
            ],
            'Rhode Island': [
                'https://www.providencejournal.com', 'https://www.valleybreeze.com', 'https://www.providencejournal.com', 'https://www.valleybreeze.com',
                'https://www.providencejournal.com', 'https://www.valleybreeze.com', 'https://www.providencejournal.com', 'https://www.valleybreeze.com',
                'https://www.providencejournal.com', 'https://www.valleybreeze.com', 'https://www.providencejournal.com', 'https://www.valleybreeze.com',
                'https://www.providencejournal.com', 'https://www.valleybreeze.com', 'https://www.providencejournal.com', 'https://www.valleybreeze.com'
            ],
            'South Carolina': [
                'https://www.postandcourier.com', 'https://www.thestate.com', 'https://www.greenvilleonline.com', 'https://www.heraldonline.com',
                'https://www.islandpacket.com', 'https://www.postandcourier.com', 'https://www.thestate.com', 'https://www.greenvilleonline.com',
                'https://www.heraldonline.com', 'https://www.islandpacket.com', 'https://www.postandcourier.com', 'https://www.thestate.com',
                'https://www.greenvilleonline.com', 'https://www.heraldonline.com', 'https://www.islandpacket.com', 'https://www.postandcourier.com'
            ],
            'South Dakota': [
                'https://www.argusleader.com', 'https://www.rapidcityjournal.com', 'https://www.aberdeennews.com', 'https://www.watertowndailytimes.com',
                'https://www.mitchellrepublic.com', 'https://www.argusleader.com', 'https://www.rapidcityjournal.com', 'https://www.aberdeennews.com',
                'https://www.watertowndailytimes.com', 'https://www.mitchellrepublic.com', 'https://www.argusleader.com', 'https://www.rapidcityjournal.com',
                'https://www.aberdeennews.com', 'https://www.watertowndailytimes.com', 'https://www.mitchellrepublic.com', 'https://www.argusleader.com'
            ],
            'Tennessee': [
                'https://www.tennessean.com', 'https://www.commercialappeal.com', 'https://www.knoxnews.com', 'https://www.timesfreepress.com',
                'https://www.johnsoncitypress.com', 'https://www.tennessean.com', 'https://www.commercialappeal.com', 'https://www.knoxnews.com',
                'https://www.timesfreepress.com', 'https://www.johnsoncitypress.com', 'https://www.tennessean.com', 'https://www.commercialappeal.com',
                'https://www.knoxnews.com', 'https://www.timesfreepress.com', 'https://www.johnsoncitypress.com', 'https://www.tennessean.com'
            ],
            'Utah': [
                'https://www.sltrib.com', 'https://www.deseret.com', 'https://www.standard.net', 'https://www.thespectrum.com',
                'https://www.heraldextra.com', 'https://www.sltrib.com', 'https://www.deseret.com', 'https://www.standard.net',
                'https://www.thespectrum.com', 'https://www.heraldextra.com', 'https://www.sltrib.com', 'https://www.deseret.com',
                'https://www.standard.net', 'https://www.thespectrum.com', 'https://www.heraldextra.com', 'https://www.sltrib.com'
            ],
            'Vermont': [
                'https://www.burlingtonfreepress.com', 'https://www.rutlandherald.com', 'https://www.timesargus.com', 'https://www.benningtonbanner.com',
                'https://www.addisonindependent.com', 'https://www.burlingtonfreepress.com', 'https://www.rutlandherald.com', 'https://www.timesargus.com',
                'https://www.benningtonbanner.com', 'https://www.addisonindependent.com', 'https://www.burlingtonfreepress.com', 'https://www.rutlandherald.com',
                'https://www.timesargus.com', 'https://www.benningtonbanner.com', 'https://www.addisonindependent.com', 'https://www.burlingtonfreepress.com'
            ],
            'Virginia': [
                'https://www.pilotonline.com', 'https://www.richmond.com', 'https://www.roanoke.com', 'https://www.dailypress.com',
                'https://www.newsleader.com', 'https://www.pilotonline.com', 'https://www.richmond.com', 'https://www.roanoke.com',
                'https://www.dailypress.com', 'https://www.newsleader.com', 'https://www.pilotonline.com', 'https://www.richmond.com',
                'https://www.roanoke.com', 'https://www.dailypress.com', 'https://www.newsleader.com', 'https://www.pilotonline.com'
            ],
            'Washington': [
                'https://www.seattletimes.com', 'https://www.spokesman.com', 'https://www.thenewstribune.com', 'https://www.heraldnet.com',
                'https://www.yakimaherald.com', 'https://www.seattletimes.com', 'https://www.spokesman.com', 'https://www.thenewstribune.com',
                'https://www.heraldnet.com', 'https://www.yakimaherald.com', 'https://www.seattletimes.com', 'https://www.spokesman.com',
                'https://www.thenewstribune.com', 'https://www.heraldnet.com', 'https://www.yakimaherald.com', 'https://www.seattletimes.com'
            ],
            'West Virginia': [
                'https://www.wvgazettemail.com', 'https://www.herald-dispatch.com', 'https://www.register-herald.com', 'https://www.timeswv.com',
                'https://www.parkersburgnews.com', 'https://www.wvgazettemail.com', 'https://www.herald-dispatch.com', 'https://www.register-herald.com',
                'https://www.timeswv.com', 'https://www.parkersburgnews.com', 'https://www.wvgazettemail.com', 'https://www.herald-dispatch.com',
                'https://www.register-herald.com', 'https://www.timeswv.com', 'https://www.parkersburgnews.com', 'https://www.wvgazettemail.com'
            ],
            'Wisconsin': [
                'https://www.jsonline.com', 'https://www.madison.com', 'https://www.greenbaypressgazette.com', 'https://www.postcrescent.com',
                'https://www.wisconsinrapidstribune.com', 'https://www.jsonline.com', 'https://www.madison.com', 'https://www.greenbaypressgazette.com',
                'https://www.postcrescent.com', 'https://www.wisconsinrapidstribune.com', 'https://www.jsonline.com', 'https://www.madison.com',
                'https://www.greenbaypressgazette.com', 'https://www.postcrescent.com', 'https://www.wisconsinrapidstribune.com', 'https://www.jsonline.com'
            ],
            'Wyoming': [
                'https://www.wyomingnews.com', 'https://www.trib.com', 'https://www.casperstartribune.net', 'https://www.gillettenewsrecord.com',
                'https://www.sheridanmedia.com', 'https://www.wyomingnews.com', 'https://www.trib.com', 'https://www.casperstartribune.net',
                'https://www.gillettenewsrecord.com', 'https://www.sheridanmedia.com', 'https://www.wyomingnews.com', 'https://www.trib.com',
                'https://www.casperstartribune.net', 'https://www.gillettenewsrecord.com', 'https://www.sheridanmedia.com', 'https://www.wyomingnews.com'
            ]
        }
    },
    'China': {
        capital: 'Beijing',
        population: '1.4B',
        area: '9.6M km²',
        continent: 'Asia',
        currency: 'Chinese Yuan (CNY)',
        coordinates: { lat: 35.8617, lng: 104.1954 },
        timezone: 'Asia/Shanghai',
        newsSources: ['https://www.xinhuanet.com', 'https://www.chinadaily.com.cn', 'https://www.globaltimes.cn'],
        states: [
            'Anhui', 'Beijing', 'Chongqing', 'Fujian', 'Gansu',
            'Guangdong', 'Guangxi', 'Guizhou', 'Hainan', 'Hebei',
            'Heilongjiang', 'Henan', 'Hubei', 'Hunan', 'Inner Mongolia',
            'Jiangsu', 'Jiangxi', 'Jilin', 'Liaoning', 'Ningxia',
            'Qinghai', 'Shaanxi', 'Shandong', 'Shanghai', 'Shanxi',
            'Sichuan', 'Tianjin', 'Tibet', 'Xinjiang', 'Yunnan', 'Zhejiang'
        ],
        localNews: {
            'Beijing': [
                'https://www.beijing.gov.cn', 'https://www.bjnews.com.cn', 'https://www.beijingtimes.com.cn', 'https://www.bjrb.com.cn',
                'https://www.beijingdaily.com.cn', 'https://www.bjwb.com.cn', 'https://www.beijingeveningnews.com', 'https://www.bjwb.com.cn',
                'https://www.beijingtimes.com.cn', 'https://www.bjrb.com.cn', 'https://www.beijingdaily.com.cn', 'https://www.bjwb.com.cn',
                'https://www.beijingeveningnews.com', 'https://www.bjwb.com.cn', 'https://www.beijingtimes.com.cn', 'https://www.bjrb.com.cn'
            ],
            'Shanghai': [
                'https://www.shanghai.gov.cn', 'https://www.shanghaidaily.com', 'https://www.eastday.com', 'https://www.shanghainews.com',
                'https://www.shanghaidaily.com', 'https://www.eastday.com', 'https://www.shanghai.gov.cn', 'https://www.shanghainews.com',
                'https://www.shanghaidaily.com', 'https://www.eastday.com', 'https://www.shanghai.gov.cn', 'https://www.shanghainews.com',
                'https://www.shanghaidaily.com', 'https://www.eastday.com', 'https://www.shanghai.gov.cn', 'https://www.shanghainews.com'
            ],
            'Guangdong': [
                'https://www.gd.gov.cn', 'https://www.southcn.com', 'https://www.gdnews.com.cn', 'https://www.gd.gov.cn',
                'https://www.southcn.com', 'https://www.gdnews.com.cn', 'https://www.gd.gov.cn', 'https://www.southcn.com',
                'https://www.gdnews.com.cn', 'https://www.gd.gov.cn', 'https://www.southcn.com', 'https://www.gdnews.com.cn',
                'https://www.gd.gov.cn', 'https://www.southcn.com', 'https://www.gdnews.com.cn', 'https://www.gd.gov.cn'
            ],
            'Jiangsu': [
                'https://www.jiangsu.gov.cn', 'https://www.xhby.net', 'https://www.jsnews.com.cn', 'https://www.jiangsu.gov.cn',
                'https://www.xhby.net', 'https://www.jsnews.com.cn', 'https://www.jiangsu.gov.cn', 'https://www.xhby.net',
                'https://www.jsnews.com.cn', 'https://www.jiangsu.gov.cn', 'https://www.xhby.net', 'https://www.jsnews.com.cn',
                'https://www.jiangsu.gov.cn', 'https://www.xhby.net', 'https://www.jsnews.com.cn', 'https://www.jiangsu.gov.cn'
            ],
            'Zhejiang': [
                'https://www.zj.gov.cn', 'https://www.zjol.com.cn', 'https://www.zjnews.com.cn', 'https://www.zj.gov.cn',
                'https://www.zjol.com.cn', 'https://www.zjnews.com.cn', 'https://www.zj.gov.cn', 'https://www.zjol.com.cn',
                'https://www.zjnews.com.cn', 'https://www.zj.gov.cn', 'https://www.zjol.com.cn', 'https://www.zjnews.com.cn',
                'https://www.zj.gov.cn', 'https://www.zjol.com.cn', 'https://www.zjnews.com.cn', 'https://www.zj.gov.cn'
            ],
            'Sichuan': [
                'https://www.sc.gov.cn', 'https://www.scdaily.cn', 'https://www.scnews.com.cn', 'https://www.sc.gov.cn',
                'https://www.scdaily.cn', 'https://www.scnews.com.cn', 'https://www.sc.gov.cn', 'https://www.scdaily.cn',
                'https://www.scnews.com.cn', 'https://www.sc.gov.cn', 'https://www.scdaily.cn', 'https://www.scnews.com.cn',
                'https://www.sc.gov.cn', 'https://www.scdaily.cn', 'https://www.scnews.com.cn', 'https://www.sc.gov.cn'
            ],
            'Hubei': [
                'https://www.hubei.gov.cn', 'https://www.hbnews.net', 'https://www.hbnews.com.cn', 'https://www.hubei.gov.cn',
                'https://www.hbnews.net', 'https://www.hbnews.com.cn', 'https://www.hubei.gov.cn', 'https://www.hbnews.net',
                'https://www.hbnews.com.cn', 'https://www.hubei.gov.cn', 'https://www.hbnews.net', 'https://www.hbnews.com.cn',
                'https://www.hubei.gov.cn', 'https://www.hbnews.net', 'https://www.hbnews.com.cn', 'https://www.hubei.gov.cn'
            ],
            'Shandong': [
                'https://www.shandong.gov.cn', 'https://www.dzwww.com', 'https://www.sdnews.com.cn', 'https://www.shandong.gov.cn',
                'https://www.dzwww.com', 'https://www.sdnews.com.cn', 'https://www.shandong.gov.cn', 'https://www.dzwww.com',
                'https://www.sdnews.com.cn', 'https://www.shandong.gov.cn', 'https://www.dzwww.com', 'https://www.sdnews.com.cn',
                'https://www.shandong.gov.cn', 'https://www.dzwww.com', 'https://www.sdnews.com.cn', 'https://www.shandong.gov.cn'
            ],
            'Henan': [
                'https://www.henan.gov.cn', 'https://www.dahe.cn', 'https://www.hnby.com.cn', 'https://www.henan.gov.cn',
                'https://www.dahe.cn', 'https://www.hnby.com.cn', 'https://www.henan.gov.cn', 'https://www.dahe.cn',
                'https://www.hnby.com.cn', 'https://www.henan.gov.cn', 'https://www.dahe.cn', 'https://www.hnby.com.cn',
                'https://www.henan.gov.cn', 'https://www.dahe.cn', 'https://www.hnby.com.cn', 'https://www.henan.gov.cn'
            ],
            'Hunan': [
                'https://www.hunan.gov.cn', 'https://www.hnby.com.cn', 'https://www.changsha.cn', 'https://www.hunan.gov.cn',
                'https://www.hnby.com.cn', 'https://www.changsha.cn', 'https://www.hunan.gov.cn', 'https://www.hnby.com.cn',
                'https://www.changsha.cn', 'https://www.hunan.gov.cn', 'https://www.hnby.com.cn', 'https://www.changsha.cn',
                'https://www.hunan.gov.cn', 'https://www.hnby.com.cn', 'https://www.changsha.cn', 'https://www.hunan.gov.cn'
            ],
            'Anhui': [
                'https://www.ah.gov.cn', 'https://www.ahnews.com.cn', 'https://www.hefei.gov.cn', 'https://www.ah.gov.cn',
                'https://www.ahnews.com.cn', 'https://www.hefei.gov.cn', 'https://www.ah.gov.cn', 'https://www.ahnews.com.cn',
                'https://www.hefei.gov.cn', 'https://www.ah.gov.cn', 'https://www.ahnews.com.cn', 'https://www.hefei.gov.cn',
                'https://www.ah.gov.cn', 'https://www.ahnews.com.cn', 'https://www.hefei.gov.cn', 'https://www.ah.gov.cn'
            ],
            'Liaoning': [
                'https://www.ln.gov.cn', 'https://www.lnd.com.cn', 'https://www.shenyang.gov.cn', 'https://www.ln.gov.cn',
                'https://www.lnd.com.cn', 'https://www.shenyang.gov.cn', 'https://www.ln.gov.cn', 'https://www.lnd.com.cn',
                'https://www.shenyang.gov.cn', 'https://www.ln.gov.cn', 'https://www.lnd.com.cn', 'https://www.shenyang.gov.cn',
                'https://www.ln.gov.cn', 'https://www.lnd.com.cn', 'https://www.shenyang.gov.cn', 'https://www.ln.gov.cn'
            ],
            'Hebei': [
                'https://www.hebei.gov.cn', 'https://www.hebnews.cn', 'https://www.sjz.gov.cn', 'https://www.hebei.gov.cn',
                'https://www.hebnews.cn', 'https://www.sjz.gov.cn', 'https://www.hebei.gov.cn', 'https://www.hebnews.cn',
                'https://www.sjz.gov.cn', 'https://www.hebei.gov.cn', 'https://www.hebnews.cn', 'https://www.sjz.gov.cn',
                'https://www.hebei.gov.cn', 'https://www.hebnews.cn', 'https://www.sjz.gov.cn', 'https://www.hebei.gov.cn'
            ],
            'Fujian': [
                'https://www.fujian.gov.cn', 'https://www.fjnews.com.cn', 'https://www.fuzhou.gov.cn', 'https://www.fujian.gov.cn',
                'https://www.fjnews.com.cn', 'https://www.fuzhou.gov.cn', 'https://www.fujian.gov.cn', 'https://www.fjnews.com.cn',
                'https://www.fuzhou.gov.cn', 'https://www.fujian.gov.cn', 'https://www.fjnews.com.cn', 'https://www.fuzhou.gov.cn',
                'https://www.fujian.gov.cn', 'https://www.fjnews.com.cn', 'https://www.fuzhou.gov.cn', 'https://www.fujian.gov.cn'
            ],
            'Jiangxi': [
                'https://www.jiangxi.gov.cn', 'https://www.jxnews.com.cn', 'https://www.nanchang.gov.cn', 'https://www.jiangxi.gov.cn',
                'https://www.jxnews.com.cn', 'https://www.nanchang.gov.cn', 'https://www.jiangxi.gov.cn', 'https://www.jxnews.com.cn',
                'https://www.nanchang.gov.cn', 'https://www.jiangxi.gov.cn', 'https://www.jxnews.com.cn', 'https://www.nanchang.gov.cn',
                'https://www.jiangxi.gov.cn', 'https://www.jxnews.com.cn', 'https://www.nanchang.gov.cn', 'https://www.jiangxi.gov.cn'
            ],
            'Shanxi': [
                'https://www.shanxi.gov.cn', 'https://www.sxrb.com', 'https://www.taiyuan.gov.cn', 'https://www.shanxi.gov.cn',
                'https://www.sxrb.com', 'https://www.taiyuan.gov.cn', 'https://www.shanxi.gov.cn', 'https://www.sxrb.com',
                'https://www.taiyuan.gov.cn', 'https://www.shanxi.gov.cn', 'https://www.sxrb.com', 'https://www.taiyuan.gov.cn',
                'https://www.shanxi.gov.cn', 'https://www.sxrb.com', 'https://www.taiyuan.gov.cn', 'https://www.shanxi.gov.cn'
            ],
            'Guangxi': [
                'https://www.gxzf.gov.cn', 'https://www.gxnews.com.cn', 'https://www.nanning.gov.cn', 'https://www.gxzf.gov.cn',
                'https://www.gxnews.com.cn', 'https://www.nanning.gov.cn', 'https://www.gxzf.gov.cn', 'https://www.gxnews.com.cn',
                'https://www.nanning.gov.cn', 'https://www.gxzf.gov.cn', 'https://www.gxnews.com.cn', 'https://www.nanning.gov.cn',
                'https://www.gxzf.gov.cn', 'https://www.gxnews.com.cn', 'https://www.nanning.gov.cn', 'https://www.gxzf.gov.cn'
            ],
            'Yunnan': [
                'https://www.yn.gov.cn', 'https://www.yunnan.cn', 'https://www.kunming.gov.cn', 'https://www.yn.gov.cn',
                'https://www.yunnan.cn', 'https://www.kunming.gov.cn', 'https://www.yn.gov.cn', 'https://www.yunnan.cn',
                'https://www.kunming.gov.cn', 'https://www.yn.gov.cn', 'https://www.yunnan.cn', 'https://www.kunming.gov.cn',
                'https://www.yn.gov.cn', 'https://www.yunnan.cn', 'https://www.kunming.gov.cn', 'https://www.yn.gov.cn'
            ],
            'Guizhou': [
                'https://www.guizhou.gov.cn', 'https://www.gog.com.cn', 'https://www.guiyang.gov.cn', 'https://www.guizhou.gov.cn',
                'https://www.gog.com.cn', 'https://www.guiyang.gov.cn', 'https://www.guizhou.gov.cn', 'https://www.gog.com.cn',
                'https://www.guiyang.gov.cn', 'https://www.guizhou.gov.cn', 'https://www.gog.com.cn', 'https://www.guiyang.gov.cn',
                'https://www.guizhou.gov.cn', 'https://www.gog.com.cn', 'https://www.guiyang.gov.cn', 'https://www.guizhou.gov.cn'
            ],
            'Xinjiang': [
                'https://www.xinjiang.gov.cn', 'https://www.ts.cn', 'https://www.urumqi.gov.cn', 'https://www.xinjiang.gov.cn',
                'https://www.ts.cn', 'https://www.urumqi.gov.cn', 'https://www.xinjiang.gov.cn', 'https://www.ts.cn',
                'https://www.urumqi.gov.cn', 'https://www.xinjiang.gov.cn', 'https://www.ts.cn', 'https://www.urumqi.gov.cn',
                'https://www.xinjiang.gov.cn', 'https://www.ts.cn', 'https://www.urumqi.gov.cn', 'https://www.xinjiang.gov.cn'
            ],
            'Gansu': [
                'https://www.gansu.gov.cn', 'https://www.gsrb.com.cn', 'https://www.lanzhou.gov.cn', 'https://www.gansu.gov.cn',
                'https://www.gsrb.com.cn', 'https://www.lanzhou.gov.cn', 'https://www.gansu.gov.cn', 'https://www.gsrb.com.cn',
                'https://www.lanzhou.gov.cn', 'https://www.gansu.gov.cn', 'https://www.gsrb.com.cn', 'https://www.lanzhou.gov.cn',
                'https://www.gansu.gov.cn', 'https://www.gsrb.com.cn', 'https://www.lanzhou.gov.cn', 'https://www.gansu.gov.cn'
            ],
            'Hainan': [
                'https://www.hainan.gov.cn', 'https://www.hinews.cn', 'https://www.haikou.gov.cn', 'https://www.hainan.gov.cn',
                'https://www.hinews.cn', 'https://www.haikou.gov.cn', 'https://www.hainan.gov.cn', 'https://www.hinews.cn',
                'https://www.haikou.gov.cn', 'https://www.hainan.gov.cn', 'https://www.hinews.cn', 'https://www.haikou.gov.cn',
                'https://www.hainan.gov.cn', 'https://www.hinews.cn', 'https://www.haikou.gov.cn', 'https://www.hainan.gov.cn'
            ],
            'Tibet': [
                'https://www.xizang.gov.cn', 'https://www.tibet.cn', 'https://www.lasa.gov.cn', 'https://www.xizang.gov.cn',
                'https://www.tibet.cn', 'https://www.lasa.gov.cn', 'https://www.xizang.gov.cn', 'https://www.tibet.cn',
                'https://www.lasa.gov.cn', 'https://www.xizang.gov.cn', 'https://www.tibet.cn', 'https://www.lasa.gov.cn',
                'https://www.xizang.gov.cn', 'https://www.tibet.cn', 'https://www.lasa.gov.cn', 'https://www.xizang.gov.cn'
            ],
            'Inner Mongolia': [
                'https://www.nmg.gov.cn', 'https://www.northnews.cn', 'https://www.hohhot.gov.cn', 'https://www.nmg.gov.cn',
                'https://www.northnews.cn', 'https://www.hohhot.gov.cn', 'https://www.nmg.gov.cn', 'https://www.northnews.cn',
                'https://www.hohhot.gov.cn', 'https://www.nmg.gov.cn', 'https://www.northnews.cn', 'https://www.hohhot.gov.cn',
                'https://www.nmg.gov.cn', 'https://www.northnews.cn', 'https://www.hohhot.gov.cn', 'https://www.nmg.gov.cn'
            ],
            'Heilongjiang': [
                'https://www.hlj.gov.cn', 'https://www.hljnews.cn', 'https://www.harbin.gov.cn', 'https://www.hlj.gov.cn',
                'https://www.hljnews.cn', 'https://www.harbin.gov.cn', 'https://www.hlj.gov.cn', 'https://www.hljnews.cn',
                'https://www.harbin.gov.cn', 'https://www.hlj.gov.cn', 'https://www.hljnews.cn', 'https://www.harbin.gov.cn',
                'https://www.hlj.gov.cn', 'https://www.hljnews.cn', 'https://www.harbin.gov.cn', 'https://www.hlj.gov.cn'
            ],
            'Jilin': [
                'https://www.jl.gov.cn', 'https://www.chinajilin.com.cn', 'https://www.changchun.gov.cn', 'https://www.jl.gov.cn',
                'https://www.chinajilin.com.cn', 'https://www.changchun.gov.cn', 'https://www.jl.gov.cn', 'https://www.chinajilin.com.cn',
                'https://www.changchun.gov.cn', 'https://www.jl.gov.cn', 'https://www.chinajilin.com.cn', 'https://www.changchun.gov.cn',
                'https://www.jl.gov.cn', 'https://www.chinajilin.com.cn', 'https://www.changchun.gov.cn', 'https://www.jl.gov.cn'
            ],
            'Ningxia': [
                'https://www.nx.gov.cn', 'https://www.nxnews.net', 'https://www.yinchuan.gov.cn', 'https://www.nx.gov.cn',
                'https://www.nxnews.net', 'https://www.yinchuan.gov.cn', 'https://www.nx.gov.cn', 'https://www.nxnews.net',
                'https://www.yinchuan.gov.cn', 'https://www.nx.gov.cn', 'https://www.nxnews.net', 'https://www.yinchuan.gov.cn',
                'https://www.nx.gov.cn', 'https://www.nxnews.net', 'https://www.yinchuan.gov.cn', 'https://www.nx.gov.cn'
            ],
            'Qinghai': [
                'https://www.qh.gov.cn', 'https://www.qhnews.com', 'https://www.xining.gov.cn', 'https://www.qh.gov.cn',
                'https://www.qhnews.com', 'https://www.xining.gov.cn', 'https://www.qh.gov.cn', 'https://www.qhnews.com',
                'https://www.xining.gov.cn', 'https://www.qh.gov.cn', 'https://www.qhnews.com', 'https://www.xining.gov.cn',
                'https://www.qh.gov.cn', 'https://www.qhnews.com', 'https://www.xining.gov.cn', 'https://www.qh.gov.cn'
            ],
            'Shaanxi': [
                'https://www.shaanxi.gov.cn', 'https://www.sxdaily.com.cn', 'https://www.xian.gov.cn', 'https://www.shaanxi.gov.cn',
                'https://www.sxdaily.com.cn', 'https://www.xian.gov.cn', 'https://www.shaanxi.gov.cn', 'https://www.sxdaily.com.cn',
                'https://www.xian.gov.cn', 'https://www.shaanxi.gov.cn', 'https://www.sxdaily.com.cn', 'https://www.xian.gov.cn',
                'https://www.shaanxi.gov.cn', 'https://www.sxdaily.com.cn', 'https://www.xian.gov.cn', 'https://www.shaanxi.gov.cn'
            ],
            'Tianjin': [
                'https://www.tj.gov.cn', 'https://www.tianjinwe.com', 'https://www.tj.gov.cn', 'https://www.tianjinwe.com',
                'https://www.tj.gov.cn', 'https://www.tianjinwe.com', 'https://www.tj.gov.cn', 'https://www.tianjinwe.com',
                'https://www.tj.gov.cn', 'https://www.tianjinwe.com', 'https://www.tj.gov.cn', 'https://www.tianjinwe.com',
                'https://www.tj.gov.cn', 'https://www.tianjinwe.com', 'https://www.tj.gov.cn', 'https://www.tianjinwe.com'
            ],
            'Chongqing': [
                'https://www.cq.gov.cn', 'https://www.cqnews.net', 'https://www.cq.gov.cn', 'https://www.cqnews.net',
                'https://www.cq.gov.cn', 'https://www.cqnews.net', 'https://www.cq.gov.cn', 'https://www.cqnews.net',
                'https://www.cq.gov.cn', 'https://www.cqnews.net', 'https://www.cq.gov.cn', 'https://www.cqnews.net',
                'https://www.cq.gov.cn', 'https://www.cqnews.net', 'https://www.cq.gov.cn', 'https://www.cqnews.net'
            ]
        }
    },
    'Brazil': {
        capital: 'Brasília',
        population: '215M',
        area: '8.5M km²',
        continent: 'South America',
        currency: 'Brazilian Real (BRL)',
        coordinates: { lat: -14.2350, lng: -51.9253 },
        timezone: 'America/Sao_Paulo',
        newsSources: ['https://g1.globo.com', 'https://www.folha.uol.com.br', 'https://www.estadao.com.br'],
        states: [
            'Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia',
            'Ceará', 'Distrito Federal', 'Espírito Santo', 'Goiás', 'Maranhão',
            'Mato Grosso', 'Mato Grosso do Sul', 'Minas Gerais', 'Pará', 'Paraíba',
            'Paraná', 'Pernambuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte',
            'Rio Grande do Sul', 'Rondônia', 'Roraima', 'Santa Catarina', 'São Paulo',
            'Sergipe', 'Tocantins'
        ],
        localNews: {
            'São Paulo': [
                'https://g1.globo.com/sp', 'https://www.folha.uol.com.br/sp', 'https://www.estadao.com.br/sp', 'https://www.uol.com.br/sp',
                'https://www.terra.com.br/sp', 'https://www.r7.com/sp', 'https://www.ig.com.br/sp', 'https://www.bol.com.br/sp',
                'https://www.globo.com/sp', 'https://www.sbt.com.br/sp', 'https://www.recordtv.com.br/sp', 'https://www.band.com.br/sp',
                'https://www.redeglobo.globo.com/sp', 'https://www.cultura.com.br/sp', 'https://www.tvcultura.com.br/sp', 'https://www.tvbrasil.com.br/sp'
            ],
            'Rio de Janeiro': [
                'https://g1.globo.com/rj', 'https://odia.ig.com.br', 'https://www.extra.globo.com', 'https://www.oglobo.globo.com',
                'https://www.estadao.com.br/rj', 'https://www.uol.com.br/rj', 'https://www.terra.com.br/rj', 'https://www.r7.com/rj',
                'https://www.ig.com.br/rj', 'https://www.bol.com.br/rj', 'https://www.globo.com/rj', 'https://www.sbt.com.br/rj',
                'https://www.recordtv.com.br/rj', 'https://www.band.com.br/rj', 'https://www.redeglobo.globo.com/rj', 'https://www.cultura.com.br/rj'
            ],
            'Minas Gerais': [
                'https://g1.globo.com/mg', 'https://www.em.com.br', 'https://www.otempo.com.br', 'https://www.hojeemdia.com.br',
                'https://www.estadao.com.br/mg', 'https://www.uol.com.br/mg', 'https://www.terra.com.br/mg', 'https://www.r7.com/mg',
                'https://www.ig.com.br/mg', 'https://www.bol.com.br/mg', 'https://www.globo.com/mg', 'https://www.sbt.com.br/mg',
                'https://www.recordtv.com.br/mg', 'https://www.band.com.br/mg', 'https://www.redeglobo.globo.com/mg', 'https://www.cultura.com.br/mg'
            ],
            'Bahia': [
                'https://g1.globo.com/ba', 'https://www.correio24horas.com.br', 'https://www.tribunadabahia.com.br', 'https://www.bahianoticias.com.br',
                'https://www.estadao.com.br/ba', 'https://www.uol.com.br/ba', 'https://www.terra.com.br/ba', 'https://www.r7.com/ba',
                'https://www.ig.com.br/ba', 'https://www.bol.com.br/ba', 'https://www.globo.com/ba', 'https://www.sbt.com.br/ba',
                'https://www.recordtv.com.br/ba', 'https://www.band.com.br/ba', 'https://www.redeglobo.globo.com/ba', 'https://www.cultura.com.br/ba'
            ],
            'Paraná': [
                'https://g1.globo.com/pr', 'https://www.gazetadopovo.com.br', 'https://www.tribunadoparana.com.br', 'https://www.parana-online.com.br',
                'https://www.estadao.com.br/pr', 'https://www.uol.com.br/pr', 'https://www.terra.com.br/pr', 'https://www.r7.com/pr',
                'https://www.ig.com.br/pr', 'https://www.bol.com.br/pr', 'https://www.globo.com/pr', 'https://www.sbt.com.br/pr',
                'https://www.recordtv.com.br/pr', 'https://www.band.com.br/pr', 'https://www.redeglobo.globo.com/pr', 'https://www.cultura.com.br/pr'
            ],
            'Santa Catarina': [
                'https://g1.globo.com/sc', 'https://www.nsctotal.com.br', 'https://www.clicrbs.com.br/sc', 'https://www.diariocatarinense.com.br',
                'https://www.estadao.com.br/sc', 'https://www.uol.com.br/sc', 'https://www.terra.com.br/sc', 'https://www.r7.com/sc',
                'https://www.ig.com.br/sc', 'https://www.bol.com.br/sc', 'https://www.globo.com/sc', 'https://www.sbt.com.br/sc',
                'https://www.recordtv.com.br/sc', 'https://www.band.com.br/sc', 'https://www.redeglobo.globo.com/sc', 'https://www.cultura.com.br/sc'
            ],
            'Rio Grande do Sul': [
                'https://g1.globo.com/rs', 'https://gauchazh.clicrbs.com.br', 'https://www.zerohora.com', 'https://www.correiodopovo.com.br',
                'https://www.estadao.com.br/rs', 'https://www.uol.com.br/rs', 'https://www.terra.com.br/rs', 'https://www.r7.com/rs',
                'https://www.ig.com.br/rs', 'https://www.bol.com.br/rs', 'https://www.globo.com/rs', 'https://www.sbt.com.br/rs',
                'https://www.recordtv.com.br/rs', 'https://www.band.com.br/rs', 'https://www.redeglobo.globo.com/rs', 'https://www.cultura.com.br/rs'
            ],
            'Ceará': [
                'https://g1.globo.com/ce', 'https://www.opovo.com.br', 'https://www.diariodonordeste.com.br', 'https://www.verdesmares.com.br',
                'https://www.estadao.com.br/ce', 'https://www.uol.com.br/ce', 'https://www.terra.com.br/ce', 'https://www.r7.com/ce',
                'https://www.ig.com.br/ce', 'https://www.bol.com.br/ce', 'https://www.globo.com/ce', 'https://www.sbt.com.br/ce',
                'https://www.recordtv.com.br/ce', 'https://www.band.com.br/ce', 'https://www.redeglobo.globo.com/ce', 'https://www.cultura.com.br/ce'
            ]
        }
    },
    'Russia': {
        capital: 'Moscow',
        population: '146M',
        area: '17.1M km²',
        continent: 'Europe/Asia',
        currency: 'Russian Ruble (RUB)',
        coordinates: { lat: 61.5240, lng: 105.3188 },
        states: [
            'Adygea', 'Altai', 'Bashkortostan', 'Buryatia', 'Chechnya',
            'Chuvashia', 'Dagestan', 'Ingushetia', 'Kabardino-Balkaria', 'Kalmykia',
            'Karachay-Cherkessia', 'Karelia', 'Khakassia', 'Komi', 'Mari El',
            'Mordovia', 'North Ossetia-Alania', 'Sakha', 'Tatarstan', 'Tuva',
            'Udmurtia', 'Altai Krai', 'Kamchatka Krai', 'Khabarovsk Krai', 'Krasnodar Krai',
            'Krasnoyarsk Krai', 'Perm Krai', 'Primorsky Krai', 'Stavropol Krai', 'Zabaykalsky Krai',
            'Amur Oblast', 'Arkhangelsk Oblast', 'Astrakhan Oblast', 'Belgorod Oblast', 'Bryansk Oblast',
            'Chelyabinsk Oblast', 'Irkutsk Oblast', 'Ivanovo Oblast', 'Kaliningrad Oblast', 'Kaluga Oblast',
            'Kemerovo Oblast', 'Kirov Oblast', 'Kostroma Oblast', 'Kurgan Oblast', 'Kursk Oblast',
            'Leningrad Oblast', 'Lipetsk Oblast', 'Magadan Oblast', 'Moscow Oblast', 'Murmansk Oblast',
            'Nizhny Novgorod Oblast', 'Novgorod Oblast', 'Novosibirsk Oblast', 'Omsk Oblast', 'Orenburg Oblast',
            'Oryol Oblast', 'Penza Oblast', 'Pskov Oblast', 'Rostov Oblast', 'Ryazan Oblast',
            'Sakhalin Oblast', 'Samara Oblast', 'Saratov Oblast', 'Smolensk Oblast', 'Sverdlovsk Oblast',
            'Tambov Oblast', 'Tomsk Oblast', 'Tula Oblast', 'Tver Oblast', 'Tyumen Oblast',
            'Ulyanovsk Oblast', 'Vladimir Oblast', 'Volgograd Oblast', 'Vologda Oblast', 'Voronezh Oblast',
            'Yaroslavl Oblast', 'Moscow', 'Saint Petersburg', 'Sevastopol'
        ],
        localNews: {
            'Moscow': [
                'https://www.mos.ru', 'https://www.mk.ru', 'https://www.kp.ru', 'https://www.kommersant.ru',
                'https://www.vedomosti.ru', 'https://www.rbc.ru', 'https://www.gazeta.ru', 'https://www.lenta.ru',
                'https://www.ria.ru', 'https://www.tass.ru', 'https://www.interfax.ru', 'https://www.regnum.ru',
                'https://www.moscowtimes.ru', 'https://www.themoscowtimes.com', 'https://www.moscow24.ru', 'https://www.mosday.ru'
            ],
            'Saint Petersburg': [
                'https://www.spb.ru', 'https://www.fontanka.ru', 'https://www.dp.ru', 'https://www.rosbalt.ru',
                'https://www.spbdnevnik.ru', 'https://www.spb.aif.ru', 'https://www.spb.kp.ru', 'https://www.spb.mk.ru',
                'https://www.spb.vedomosti.ru', 'https://www.spb.rbc.ru', 'https://www.spb.gazeta.ru', 'https://www.spb.lenta.ru',
                'https://www.spb.ria.ru', 'https://www.spb.tass.ru', 'https://www.spb.interfax.ru', 'https://www.spb.regnum.ru'
            ],
            'Novosibirsk': [
                'https://www.nsk.ru', 'https://www.nsk.aif.ru', 'https://www.nsk.kp.ru', 'https://www.nsk.mk.ru',
                'https://www.nsk.vedomosti.ru', 'https://www.nsk.rbc.ru', 'https://www.nsk.gazeta.ru', 'https://www.nsk.lenta.ru',
                'https://www.nsk.ria.ru', 'https://www.nsk.tass.ru', 'https://www.nsk.interfax.ru', 'https://www.nsk.regnum.ru',
                'https://www.nsk.ru', 'https://www.nsk.aif.ru', 'https://www.nsk.kp.ru', 'https://www.nsk.mk.ru'
            ],
            'Yekaterinburg': [
                'https://www.ekb.ru', 'https://www.ekb.aif.ru', 'https://www.ekb.kp.ru', 'https://www.ekb.mk.ru',
                'https://www.ekb.vedomosti.ru', 'https://www.ekb.rbc.ru', 'https://www.ekb.gazeta.ru', 'https://www.ekb.lenta.ru',
                'https://www.ekb.ria.ru', 'https://www.ekb.tass.ru', 'https://www.ekb.interfax.ru', 'https://www.ekb.regnum.ru',
                'https://www.ekb.ru', 'https://www.ekb.aif.ru', 'https://www.ekb.kp.ru', 'https://www.ekb.mk.ru'
            ]
        }
    },
    'Canada': {
        capital: 'Ottawa',
        population: '38M',
        area: '10M km²',
        continent: 'North America',
        currency: 'Canadian Dollar (CAD)',
        coordinates: { lat: 56.1304, lng: -106.3468 },
        states: [
            'Alberta', 'British Columbia', 'Manitoba', 'New Brunswick', 'Newfoundland and Labrador',
            'Northwest Territories', 'Nova Scotia', 'Nunavut', 'Ontario', 'Prince Edward Island',
            'Quebec', 'Saskatchewan', 'Yukon'
        ]
    },
    'Australia': {
        capital: 'Canberra',
        population: '26M',
        area: '7.7M km²',
        continent: 'Oceania',
        currency: 'Australian Dollar (AUD)',
        coordinates: { lat: -25.2744, lng: 133.7751 },
        states: [
            'New South Wales', 'Queensland', 'South Australia', 'Tasmania', 'Victoria',
            'Western Australia', 'Australian Capital Territory', 'Northern Territory'
        ]
    },
    'Germany': {
        capital: 'Berlin',
        population: '83M',
        area: '357K km²',
        continent: 'Europe',
        currency: 'Euro (EUR)',
        coordinates: { lat: 51.1657, lng: 10.4515 },
        states: [
            'Baden-Württemberg', 'Bavaria', 'Berlin', 'Brandenburg', 'Bremen',
            'Hamburg', 'Hesse', 'Lower Saxony', 'Mecklenburg-Vorpommern', 'North Rhine-Westphalia',
            'Rhineland-Palatinate', 'Saarland', 'Saxony', 'Saxony-Anhalt', 'Schleswig-Holstein', 'Thuringia'
        ]
    },
    'France': {
        capital: 'Paris',
        population: '67M',
        area: '643K km²',
        continent: 'Europe',
        currency: 'Euro (EUR)',
        coordinates: { lat: 46.2276, lng: 2.2137 },
        states: [
            'Auvergne-Rhône-Alpes', 'Bourgogne-Franche-Comté', 'Brittany', 'Centre-Val de Loire',
            'Corsica', 'Grand Est', 'Hauts-de-France', 'Île-de-France', 'Normandy',
            'Nouvelle-Aquitaine', 'Occitanie', 'Pays de la Loire', 'Provence-Alpes-Côte d\'Azur'
        ],
        localNews: {
            'Île-de-France': [
                'https://www.bbc.com/news/world/europe', 'https://www.bbc.com/french', 'https://www.lemonde.fr', 'https://www.lefigaro.fr',
                'https://www.liberation.fr', 'https://www.leparisien.fr', 'https://www.20minutes.fr', 'https://www.franceinfo.fr',
                'https://www.bfmtv.com', 'https://www.france24.com', 'https://www.rfi.fr', 'https://www.tf1.fr',
                'https://www.france2.fr', 'https://www.france3.fr', 'https://www.m6.fr', 'https://www.canalplus.fr'
            ],
            'Provence-Alpes-Côte d\'Azur': [
                'https://www.bbc.com/news/world/europe', 'https://www.bbc.com/french', 'https://www.laprovence.com', 'https://www.nicematin.com',
                'https://www.varmatin.com', 'https://www.ledauphine.com', 'https://www.laprovence.com', 'https://www.nicematin.com',
                'https://www.varmatin.com', 'https://www.ledauphine.com', 'https://www.laprovence.com', 'https://www.nicematin.com',
                'https://www.varmatin.com', 'https://www.ledauphine.com', 'https://www.laprovence.com', 'https://www.nicematin.com'
            ],
            'Auvergne-Rhône-Alpes': [
                'https://www.bbc.com/news/world/europe', 'https://www.bbc.com/french', 'https://www.leprogres.fr', 'https://www.ledauphine.com',
                'https://www.lamontagne.fr', 'https://www.leprogres.fr', 'https://www.ledauphine.com', 'https://www.lamontagne.fr',
                'https://www.leprogres.fr', 'https://www.ledauphine.com', 'https://www.lamontagne.fr', 'https://www.leprogres.fr',
                'https://www.ledauphine.com', 'https://www.lamontagne.fr', 'https://www.leprogres.fr', 'https://www.ledauphine.com'
            ],
            'Grand Est': [
                'https://www.bbc.com/news/world/europe', 'https://www.bbc.com/french', 'https://www.dna.fr', 'https://www.lalsace.fr',
                'https://www.estrepublicain.fr', 'https://www.dna.fr', 'https://www.lalsace.fr', 'https://www.estrepublicain.fr',
                'https://www.dna.fr', 'https://www.lalsace.fr', 'https://www.estrepublicain.fr', 'https://www.dna.fr',
                'https://www.lalsace.fr', 'https://www.estrepublicain.fr', 'https://www.dna.fr', 'https://www.lalsace.fr'
            ],
            'Hauts-de-France': [
                'https://www.bbc.com/news/world/europe', 'https://www.bbc.com/french', 'https://www.lavoixdunord.fr', 'https://www.courrier-picard.fr',
                'https://www.nordlittoral.fr', 'https://www.lavoixdunord.fr', 'https://www.courrier-picard.fr', 'https://www.nordlittoral.fr',
                'https://www.lavoixdunord.fr', 'https://www.courrier-picard.fr', 'https://www.nordlittoral.fr', 'https://www.lavoixdunord.fr',
                'https://www.courrier-picard.fr', 'https://www.nordlittoral.fr', 'https://www.lavoixdunord.fr', 'https://www.courrier-picard.fr'
            ]
        }
    },
    'Japan': {
        capital: 'Tokyo',
        population: '125M',
        area: '378K km²',
        continent: 'Asia',
        currency: 'Japanese Yen (JPY)',
        coordinates: { lat: 36.2048, lng: 138.2529 },
        states: [
            'Hokkaido', 'Aomori', 'Iwate', 'Miyagi', 'Akita', 'Yamagata', 'Fukushima',
            'Ibaraki', 'Tochigi', 'Gunma', 'Saitama', 'Chiba', 'Tokyo', 'Kanagawa',
            'Niigata', 'Toyama', 'Ishikawa', 'Fukui', 'Yamanashi', 'Nagano',
            'Gifu', 'Shizuoka', 'Aichi', 'Mie', 'Shiga', 'Kyoto', 'Osaka',
            'Hyogo', 'Nara', 'Wakayama', 'Tottori', 'Shimane', 'Okayama',
            'Hiroshima', 'Yamaguchi', 'Tokushima', 'Kagawa', 'Ehime', 'Kochi',
            'Fukuoka', 'Saga', 'Nagasaki', 'Kumamoto', 'Oita', 'Miyazaki',
            'Kagoshima', 'Okinawa'
        ],
        localNews: {
            'Tokyo': [
                'https://www.bbc.com/news/world/asia', 'https://www.bbc.com/japanese', 'https://www.nhk.or.jp', 'https://www.asahi.com',
                'https://www.yomiuri.co.jp', 'https://www.mainichi.jp', 'https://www.sankei.com', 'https://www.tokyo-np.co.jp',
                'https://www.nikkei.com', 'https://www.jiji.com', 'https://www.kyodo.co.jp', 'https://www.japantimes.co.jp',
                'https://www.tokyoshimbun.com', 'https://www.tokyo-np.co.jp', 'https://www.nikkei.com', 'https://www.jiji.com'
            ],
            'Osaka': [
                'https://www.bbc.com/news/world/asia', 'https://www.bbc.com/japanese', 'https://www.nhk.or.jp', 'https://www.asahi.com',
                'https://www.yomiuri.co.jp', 'https://www.mainichi.jp', 'https://www.sankei.com', 'https://www.osaka-np.co.jp',
                'https://www.nikkei.com', 'https://www.jiji.com', 'https://www.kyodo.co.jp', 'https://www.japantimes.co.jp',
                'https://www.osaka-np.co.jp', 'https://www.osaka-np.co.jp', 'https://www.nikkei.com', 'https://www.jiji.com'
            ],
            'Kyoto': [
                'https://www.bbc.com/news/world/asia', 'https://www.bbc.com/japanese', 'https://www.nhk.or.jp', 'https://www.asahi.com',
                'https://www.yomiuri.co.jp', 'https://www.mainichi.jp', 'https://www.sankei.com', 'https://www.kyoto-np.co.jp',
                'https://www.nikkei.com', 'https://www.jiji.com', 'https://www.kyodo.co.jp', 'https://www.japantimes.co.jp',
                'https://www.kyoto-np.co.jp', 'https://www.kyoto-np.co.jp', 'https://www.nikkei.com', 'https://www.jiji.com'
            ],
            'Hokkaido': [
                'https://www.bbc.com/news/world/asia', 'https://www.bbc.com/japanese', 'https://www.nhk.or.jp', 'https://www.asahi.com',
                'https://www.yomiuri.co.jp', 'https://www.mainichi.jp', 'https://www.sankei.com', 'https://www.hokkaido-np.co.jp',
                'https://www.nikkei.com', 'https://www.jiji.com', 'https://www.kyodo.co.jp', 'https://www.japantimes.co.jp',
                'https://www.hokkaido-np.co.jp', 'https://www.hokkaido-np.co.jp', 'https://www.nikkei.com', 'https://www.jiji.com'
            ],
            'Fukuoka': [
                'https://www.bbc.com/news/world/asia', 'https://www.bbc.com/japanese', 'https://www.nhk.or.jp', 'https://www.asahi.com',
                'https://www.yomiuri.co.jp', 'https://www.mainichi.jp', 'https://www.sankei.com', 'https://www.nishinippon.co.jp',
                'https://www.nikkei.com', 'https://www.jiji.com', 'https://www.kyodo.co.jp', 'https://www.japantimes.co.jp',
                'https://www.nishinippon.co.jp', 'https://www.nishinippon.co.jp', 'https://www.nikkei.com', 'https://www.jiji.com'
            ]
        }
    }
};

// Create galaxy background
function createStars() {
    const starsContainer = document.getElementById('stars');
    const numStars = 500;
    
    for (let i = 0; i < numStars; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.width = Math.random() * 2 + 0.5 + 'px';
        star.style.height = star.style.width;
        star.style.animationDelay = Math.random() * 3 + 's';
        star.style.animationDuration = (Math.random() * 4 + 2) + 's';
        star.style.background = `hsl(${Math.random() * 60 + 200}, 70%, ${Math.random() * 30 + 70}%)`;
        starsContainer.appendChild(star);
    }
}

// Create ocean areas for clicking
function createOceanAreas() {
    const oceanZones = [
        // Major Oceans - Multiple zones for better coverage
        { name: 'North Pacific Ocean', lat: 20, lng: -150, size: 0.5 },
        { name: 'North Pacific Ocean', lat: 30, lng: -120, size: 0.4 },
        { name: 'North Pacific Ocean', lat: 40, lng: -180, size: 0.4 },
        { name: 'South Pacific Ocean', lat: -20, lng: -150, size: 0.5 },
        { name: 'South Pacific Ocean', lat: -30, lng: -120, size: 0.4 },
        { name: 'South Pacific Ocean', lat: -40, lng: -180, size: 0.4 },
        
        { name: 'North Atlantic Ocean', lat: 30, lng: -45, size: 0.4 },
        { name: 'North Atlantic Ocean', lat: 40, lng: -20, size: 0.3 },
        { name: 'South Atlantic Ocean', lat: -30, lng: -30, size: 0.4 },
        { name: 'South Atlantic Ocean', lat: -40, lng: -10, size: 0.3 },
        
        { name: 'Indian Ocean', lat: -20, lng: 80, size: 0.4 },
        { name: 'Indian Ocean', lat: -10, lng: 60, size: 0.3 },
        { name: 'Indian Ocean', lat: -30, lng: 100, size: 0.3 },
        
        { name: 'Arctic Ocean', lat: 80, lng: 0, size: 0.3 },
        { name: 'Arctic Ocean', lat: 75, lng: -90, size: 0.25 },
        { name: 'Arctic Ocean', lat: 75, lng: 90, size: 0.25 },
        
        { name: 'Southern Ocean', lat: -70, lng: 0, size: 0.3 },
        { name: 'Southern Ocean', lat: -65, lng: -90, size: 0.25 },
        { name: 'Southern Ocean', lat: -65, lng: 90, size: 0.25 },
        
        // Seas and Gulfs
        { name: 'Mediterranean Sea', lat: 35, lng: 15, size: 0.2 },
        { name: 'Caribbean Sea', lat: 15, lng: -75, size: 0.2 },
        { name: 'Gulf of Mexico', lat: 25, lng: -90, size: 0.15 },
        { name: 'Red Sea', lat: 20, lng: 40, size: 0.12 },
        { name: 'Persian Gulf', lat: 27, lng: 52, size: 0.1 },
        { name: 'Bay of Bengal', lat: 15, lng: 88, size: 0.2 },
        { name: 'Arabian Sea', lat: 15, lng: 65, size: 0.2 },
        { name: 'South China Sea', lat: 15, lng: 110, size: 0.2 },
        { name: 'East China Sea', lat: 30, lng: 125, size: 0.15 },
        { name: 'Sea of Japan', lat: 40, lng: 135, size: 0.12 },
        { name: 'Bering Sea', lat: 60, lng: -170, size: 0.18 },
        { name: 'North Sea', lat: 55, lng: 3, size: 0.12 },
        { name: 'Baltic Sea', lat: 60, lng: 20, size: 0.1 },
        { name: 'Black Sea', lat: 43, lng: 35, size: 0.1 },
        { name: 'Caspian Sea', lat: 42, lng: 50, size: 0.1 }
    ];
    
    oceanZones.forEach(ocean => {
        const position = latLngToVector3(ocean.lat, ocean.lng, 1.01);
        
        // Create ocean clickable area
        const oceanSphere = new THREE.Mesh(
            new THREE.SphereGeometry(ocean.size, 16, 16),
            new THREE.MeshBasicMaterial({ 
                transparent: true, 
                opacity: 0.0,
                color: 0x0066cc
            })
        );
        oceanSphere.position.copy(position);
        oceanSphere.userData = { oceanName: ocean.name, type: 'ocean' };
        scene.add(oceanSphere);
    });
}

// Initialize Three.js scene
let scene, camera, renderer, globe, clouds, controls, raycaster, mouse;
let rotationSpeed = 0.005;
let autoRotate = true;
let showClouds = true;
let showLabels = true;
let countryLabels = [];
let font;

// Convert lat/lng to 3D coordinates
function latLngToVector3(lat, lng, radius = 1.02) {
    const phi = (90 - lat) * (Math.PI / 180);
    const theta = (lng + 180) * (Math.PI / 180);
    
    return new THREE.Vector3(
        -(radius * Math.sin(phi) * Math.cos(theta)),
        radius * Math.cos(phi),
        radius * Math.sin(phi) * Math.sin(theta)
    );
}

// Create country labels that rotate with the globe
function createCountryLabels() {
    if (!font) return;
    
    countryLabels.forEach(label => {
        if (label.mesh) scene.remove(label.mesh);
    });
    countryLabels = [];

    Object.keys(countryData).forEach(countryName => {
        const country = countryData[countryName];
        const coords = country.coordinates;
        const position = latLngToVector3(coords.lat, coords.lng, 1.02);
        
        // Get translated country name
        const translatedName = getCountryName(countryName);
        
        // Country names removed from globe - only clickable spheres remain
        
        // Add clickable sphere for easier clicking
        const clickSphere = new THREE.Mesh(
            new THREE.SphereGeometry(0.12, 8, 8), // Increased size for easier clicking
            new THREE.MeshBasicMaterial({ 
                transparent: true, 
                opacity: 0.0,
                color: 0xff6b6b
            })
        );
        clickSphere.position.copy(position);
        clickSphere.userData = { countryName: countryName, type: 'country' };
        scene.add(clickSphere);
        countryLabels.push({ 
            mesh: clickSphere, 
            countryName: countryName, 
            translatedName: translatedName 
        });
    });
}

function init() {
    // Create scene
    scene = new THREE.Scene();
    
    // Create camera
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(0, 0, 3);
    camera.lookAt(0, 0, 0);
    
    console.log('Camera position:', camera.position);
    console.log('Camera looking at:', camera.getWorldDirection(new THREE.Vector3()));
    
    // Create renderer
    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 1);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    document.getElementById('globe-container').appendChild(renderer.domElement);
    
    // Add orbit controls
    controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.enableZoom = true;
    controls.enablePan = false;
    controls.minDistance = 1.5;
    controls.maxDistance = 8;
    
    // Initialize raycaster and mouse
    raycaster = new THREE.Raycaster();
    mouse = new THREE.Vector2();
    
    // Create realistic Earth geometry with high detail
    const geometry = new THREE.SphereGeometry(1, 64, 64);
    
    // Load Earth textures for realistic appearance
    const loader = new THREE.TextureLoader();
    
    // Earth surface texture
    const earthTexture = loader.load('https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_atmos_2048.jpg');
    
    // Earth normal map for surface detail
    const earthNormalMap = loader.load('https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_normal_2048.jpg');
    
    // Earth specular map for water reflections
    const earthSpecularMap = loader.load('https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_specular_2048.jpg');
    
    // Create realistic Earth material
    const earthMaterial = new THREE.MeshPhongMaterial({
        map: earthTexture,
        normalMap: earthNormalMap,
        normalScale: new THREE.Vector2(0.3, 0.3),
        specularMap: earthSpecularMap,
        shininess: 1000,
        transparent: false,
        side: THREE.FrontSide
    });
    
    // Create Earth mesh
    globe = new THREE.Mesh(geometry, earthMaterial);
    globe.userData = { type: 'globe' };
    globe.position.set(0, 0, 0);
    globe.castShadow = true;
    globe.receiveShadow = true;
    scene.add(globe);
    
    // Add atmospheric glow effect
    const atmosphereGeometry = new THREE.SphereGeometry(1.05, 32, 32);
    const atmosphereMaterial = new THREE.MeshBasicMaterial({
        color: 0x87CEEB,
        transparent: true,
        opacity: 0.15,
        side: THREE.BackSide
    });
    const atmosphere = new THREE.Mesh(atmosphereGeometry, atmosphereMaterial);
    atmosphere.userData = { type: 'atmosphere' };
    scene.add(atmosphere);
    
    // Add inner glow effect
    const innerGlowGeometry = new THREE.SphereGeometry(1.02, 32, 32);
    const innerGlowMaterial = new THREE.MeshBasicMaterial({
        color: 0x4A90E2,
        transparent: true,
        opacity: 0.1,
        side: THREE.BackSide
    });
    const innerGlow = new THREE.Mesh(innerGlowGeometry, innerGlowMaterial);
    innerGlow.userData = { type: 'inner-glow' };
    scene.add(innerGlow);
    
    // Add cloud layer
    const cloudGeometry = new THREE.SphereGeometry(1.01, 32, 32);
    const cloudTexture = loader.load('https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_clouds_1024.png');
    const cloudMaterial = new THREE.MeshLambertMaterial({
        map: cloudTexture,
        transparent: true,
        opacity: 0.4,
        side: THREE.DoubleSide
    });
    
    clouds = new THREE.Mesh(cloudGeometry, cloudMaterial);
    clouds.userData = { type: 'clouds' };
    scene.add(clouds);
    
    console.log('Realistic Earth globe created with textures');
    console.log('Atmosphere and clouds added');
    
    // Add a bright test cube to ensure rendering works
    const testGeometry = new THREE.BoxGeometry(0.2, 0.2, 0.2);
    const testMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
    const testCube = new THREE.Mesh(testGeometry, testMaterial);
    testCube.position.set(1.5, 0, 0);
    scene.add(testCube);
    
    // Remove test cube after 5 seconds
    setTimeout(() => {
        scene.remove(testCube);
        console.log('Test cube removed');
    }, 5000);
    
    // Skip complex atmosphere and clouds for now - focus on basic globe visibility
    console.log('Skipping atmosphere and clouds for basic visibility');
    
    // Create realistic lighting setup
    // Ambient light for overall illumination
    const ambientLight = new THREE.AmbientLight(0x404040, 0.3);
    scene.add(ambientLight);
    
    // Main sun light (directional)
    const sunLight = new THREE.DirectionalLight(0xffffff, 1.2);
    sunLight.position.set(5, 3, 5);
    sunLight.castShadow = true;
    sunLight.shadow.mapSize.width = 2048;
    sunLight.shadow.mapSize.height = 2048;
    sunLight.shadow.camera.near = 0.5;
    sunLight.shadow.camera.far = 50;
    sunLight.shadow.camera.left = -10;
    sunLight.shadow.camera.right = 10;
    sunLight.shadow.camera.top = 10;
    sunLight.shadow.camera.bottom = -10;
    scene.add(sunLight);
    
    // Rim light for atmospheric effect
    const rimLight = new THREE.DirectionalLight(0x87CEEB, 0.4);
    rimLight.position.set(-5, 0, -5);
    scene.add(rimLight);
    
    // Point light for additional illumination
    const pointLight = new THREE.PointLight(0xffffff, 0.5, 100);
    pointLight.position.set(0, 5, 0);
    scene.add(pointLight);
    
    console.log('Realistic lighting setup complete');
    
    // Add starfield background for space realism
    const starGeometry = new THREE.BufferGeometry();
    const starCount = 1000;
    const starPositions = new Float32Array(starCount * 3);
    
    for (let i = 0; i < starCount * 3; i++) {
        starPositions[i] = (Math.random() - 0.5) * 2000;
    }
    
    starGeometry.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));
    
    const starMaterial = new THREE.PointsMaterial({
        color: 0xffffff,
        size: 2,
        transparent: true,
        opacity: 0.8
    });
    
    const stars = new THREE.Points(starGeometry, starMaterial);
    stars.userData = { type: 'stars' };
    scene.add(stars);
    
    console.log('Starfield background added');
    
    const pointLight2 = new THREE.PointLight(0xffffff, 0.6, 100);
    pointLight2.position.set(0, 5, 0);
    scene.add(pointLight2);
    
    const pointLight3 = new THREE.PointLight(0xffffff, 0.4, 100);
    pointLight3.position.set(5, -3, -5);
    scene.add(pointLight3);
    
    // Load font for text labels
    const fontLoader = new THREE.FontLoader();
    fontLoader.load('https://threejs.org/examples/fonts/helvetiker_regular.typeface.json', function(loadedFont) {
        font = loadedFont;
        createCountryLabels(); // Re-enabled for clicking functionality
        createOceanAreas(); // Create ocean clickable areas
    });
    
    // Add click event listener
    renderer.domElement.addEventListener('click', onMouseClick);
    
    // Add click outside handler to close popup
    document.addEventListener('click', (event) => {
        const popup = document.getElementById('countryPopup');
        if (popup && !popup.contains(event.target) && !event.target.closest('#globe-container')) {
            closeCountryPopup();
        }
    });
    
    // Hide loading screen
    document.getElementById('loading').style.display = 'none';
    
    // Final scene check
    console.log('Scene children count:', scene.children.length);
    console.log('Scene children:', scene.children.map(child => child.userData.type || 'unknown'));
    
    // Start animation
    animate();
}

// Mouse click handler for country selection
function onMouseClick(event) {
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    
    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObjects(scene.children, true);
    
    console.log('Click detected, intersects:', intersects.length); // Debug log
    
    let countryClicked = false;
    let oceanClicked = false;
    
    for (let i = 0; i < intersects.length; i++) {
        const object = intersects[i].object;
        console.log('Intersected object:', object, 'userData:', object.userData); // Debug log
        
        if (object.userData && object.userData.type === 'country') {
            const countryName = object.userData.countryName;
            countryClicked = true;
            console.log('Country clicked:', countryName); // Debug log
            
            // Speak country name if TTS is enabled
            if (ttsEnabled) {
                speakCountryName(countryName);
            }
            
            // Show country name display
            showCountryNameDisplay(countryName, event.clientX, event.clientY);
            // Add visual feedback
            showClickFeedback(event.clientX, event.clientY, countryName);
            // Show historical animations
            showHistoricalAnimations(countryName);
            // Add 3D animations
            triggerCountryAnimations(countryName);
            // Redirect to states after animations
            setTimeout(() => {
                console.log('Redirecting to states for:', countryName); // Debug log
                redirectToStates(countryName);
            }, 3000); // 3 seconds of historical animations
            return;
        } else if (object.userData && object.userData.type === 'ocean') {
            const oceanName = object.userData.oceanName;
            oceanClicked = true;
            // Show ocean name display
            showOceanNameDisplay(oceanName, event.clientX, event.clientY);
            return;
        }
    }
    
    // If clicked on globe but not on country or ocean, determine what was clicked
    const globeIntersects = raycaster.intersectObject(globe);
    if (globeIntersects.length > 0 && !countryClicked && !oceanClicked) {
        const point = globeIntersects[0].point;
        
        // First try to find if we're near a country
        const countryName = findNearestCountry(point);
        if (countryName) {
            // Show country name display
            showCountryNameDisplay(countryName, event.clientX, event.clientY);
            // Add visual feedback
            showClickFeedback(event.clientX, event.clientY, countryName);
            // Show historical animations
            showHistoricalAnimations(countryName);
            // Add 3D animations
            triggerCountryAnimations(countryName);
            // Redirect to states after animations
            setTimeout(() => {
                redirectToStates(countryName);
            }, 3000);
            return;
        }
        
        // If not near a country, show ocean name
        const oceanName = debugOceanDetection(point);
        if (oceanName) {
            showOceanNameDisplay(oceanName, event.clientX, event.clientY);
        }
    }
}

// Find nearest country to a point with improved accuracy
function findNearestCountry(point) {
    let nearestCountry = null;
    let minDistance = Infinity;
    
    // Convert point to lat/lng for more accurate detection
    const clickLat = Math.asin(point.y) * 180 / Math.PI;
    let clickLng = Math.atan2(point.x, point.z) * 180 / Math.PI;
    if (clickLng > 180) clickLng -= 360;
    if (clickLng < -180) clickLng += 360;
    
    Object.keys(countryData).forEach(countryName => {
        const country = countryData[countryName];
        const coords = country.coordinates;
        
        // Calculate distance using lat/lng for more accuracy
        const latDiff = clickLat - coords.lat;
        const lngDiff = clickLng - coords.lng;
        const distance = Math.sqrt(latDiff * latDiff + lngDiff * lngDiff);
        
        // Use different thresholds based on country size
        let threshold = 0.5; // Default threshold
        
        // Adjust threshold based on country characteristics
        if (countryName === 'Russia' || countryName === 'Canada' || countryName === 'China' || countryName === 'United States' || countryName === 'Brazil' || countryName === 'Australia') {
            threshold = 1.0; // Larger threshold for big countries
        } else if (countryName === 'India' || countryName === 'Argentina' || countryName === 'Kazakhstan' || countryName === 'Algeria') {
            threshold = 0.8; // Medium threshold for medium countries
        } else {
            threshold = 0.4; // Smaller threshold for small countries
        }
        
        if (distance < minDistance && distance < threshold) {
            minDistance = distance;
            nearestCountry = countryName;
        }
    });
    
    return nearestCountry;
}

// Show country name display
function showCountryNameDisplay(countryName, x, y) {
    // Remove existing country display
    const existingDisplay = document.getElementById('countryNameDisplay');
    if (existingDisplay) {
        existingDisplay.remove();
    }
    
    // Create country name display
    const display = document.createElement('div');
    display.id = 'countryNameDisplay';
    display.innerHTML = `
        <div class="country-name-content">
            <div class="country-flag">🌍</div>
            <div class="country-name">${countryName}</div>
            <div class="country-subtitle">Click to explore states & news</div>
        </div>
    `;
    
    display.style.position = 'fixed';
    display.style.left = Math.min(x + 20, window.innerWidth - 300) + 'px';
    display.style.top = Math.min(y - 50, window.innerHeight - 100) + 'px';
    display.style.zIndex = '2500';
    
    document.body.appendChild(display);
    
    // Add entrance animation
    display.style.opacity = '0';
    display.style.transform = 'scale(0.8) translateY(20px)';
    display.style.transition = 'all 0.3s ease-out';
    
    setTimeout(() => {
        display.style.opacity = '1';
        display.style.transform = 'scale(1) translateY(0)';
    }, 10);
    
    // Auto-remove after 2.5 seconds
    setTimeout(() => {
        display.style.opacity = '0';
        display.style.transform = 'scale(0.8) translateY(20px)';
        setTimeout(() => {
            if (display.parentNode) {
                display.parentNode.removeChild(display);
            }
        }, 300);
    }, 2500);
}

// Show ocean name display
function showOceanNameDisplay(oceanName, x, y) {
    // Remove existing ocean display
    const existingDisplay = document.getElementById('oceanNameDisplay');
    if (existingDisplay) {
        existingDisplay.remove();
    }
    
    // Create ocean name display
    const display = document.createElement('div');
    display.id = 'oceanNameDisplay';
    display.innerHTML = `
        <div class="ocean-name-content">
            <div class="ocean-icon">🌊</div>
            <div class="ocean-name">${oceanName}</div>
            <div class="ocean-subtitle">Ocean</div>
        </div>
    `;
    
    display.style.position = 'fixed';
    display.style.left = Math.min(x + 20, window.innerWidth - 300) + 'px';
    display.style.top = Math.min(y - 50, window.innerHeight - 100) + 'px';
    display.style.zIndex = '2500';
    
    document.body.appendChild(display);
    
    // Add entrance animation
    display.style.opacity = '0';
    display.style.transform = 'scale(0.8) translateY(20px)';
    display.style.transition = 'all 0.3s ease-out';
    
    setTimeout(() => {
        display.style.opacity = '1';
        display.style.transform = 'scale(1) translateY(0)';
    }, 10);
    
    // Auto-remove after 2 seconds
    setTimeout(() => {
        display.style.opacity = '0';
        display.style.transform = 'scale(0.8) translateY(20px)';
        setTimeout(() => {
            if (display.parentNode) {
                display.parentNode.removeChild(display);
            }
        }, 300);
    }, 2000);
}

// Debug function to test ocean detection
function debugOceanDetection(point) {
    const lat = Math.asin(point.y) * 180 / Math.PI;
    let lng = Math.atan2(point.x, point.z) * 180 / Math.PI;
    
    if (lng > 180) lng -= 360;
    if (lng < -180) lng += 360;
    
    console.log(`Clicked at: Lat ${lat.toFixed(2)}, Lng ${lng.toFixed(2)}`);
    const oceanName = getOceanNameFromCoordinates(point);
    console.log(`Detected ocean: ${oceanName}`);
    
    return oceanName;
}

// Get ocean name from coordinates with exact ocean names
function getOceanNameFromCoordinates(point) {
    // Convert 3D point to lat/lng
    const lat = Math.asin(point.y) * 180 / Math.PI;
    let lng = Math.atan2(point.x, point.z) * 180 / Math.PI;
    
    // Normalize longitude to -180 to 180
    if (lng > 180) lng -= 360;
    if (lng < -180) lng += 360;
    
    // Arctic Ocean (North of 60°N)
    if (lat > 60) return 'Arctic Ocean';
    
    // Southern Ocean (South of 60°S)
    if (lat < -60) return 'Southern Ocean';
    
    // Mediterranean Sea (specific region)
    if (lat > 30 && lat < 45 && lng > -10 && lng < 40) {
        return 'Mediterranean Sea';
    }
    
    // Caribbean Sea
    if (lat > 10 && lat < 25 && lng > -90 && lng < -60) {
        return 'Caribbean Sea';
    }
    
    // Gulf of Mexico
    if (lat > 18 && lat < 30 && lng > -100 && lng < -80) {
        return 'Gulf of Mexico';
    }
    
    // Red Sea
    if (lat > 12 && lat < 30 && lng > 32 && lng < 44) {
        return 'Red Sea';
    }
    
    // Persian Gulf
    if (lat > 24 && lat < 30 && lng > 48 && lng < 57) {
        return 'Persian Gulf';
    }
    
    // Bay of Bengal
    if (lat > 5 && lat < 22 && lng > 80 && lng < 100) {
        return 'Bay of Bengal';
    }
    
    // Arabian Sea
    if (lat > 5 && lat < 25 && lng > 60 && lng < 80) {
        return 'Arabian Sea';
    }
    
    // South China Sea
    if (lat > 0 && lat < 25 && lng > 100 && lng < 120) {
        return 'South China Sea';
    }
    
    // East China Sea
    if (lat > 25 && lat < 35 && lng > 120 && lng < 130) {
        return 'East China Sea';
    }
    
    // Sea of Japan
    if (lat > 35 && lat < 45 && lng > 130 && lng < 140) {
        return 'Sea of Japan';
    }
    
    // Bering Sea
    if (lat > 50 && lat < 65 && lng > -180 && lng < -160) {
        return 'Bering Sea';
    }
    
    // North Sea
    if (lat > 50 && lat < 60 && lng > -5 && lng < 10) {
        return 'North Sea';
    }
    
    // Baltic Sea
    if (lat > 54 && lat < 66 && lng > 10 && lng < 30) {
        return 'Baltic Sea';
    }
    
    // Black Sea
    if (lat > 40 && lat < 47 && lng > 25 && lng < 42) {
        return 'Black Sea';
    }
    
    // Caspian Sea
    if (lat > 36 && lat < 47 && lng > 46 && lng < 55) {
        return 'Caspian Sea';
    }
    
    // Pacific Ocean regions
    if ((lng >= 120 && lng <= 180) || (lng >= -180 && lng <= -60)) {
        if (lat > 0) return 'North Pacific Ocean';
        else return 'South Pacific Ocean';
    }
    
    // Atlantic Ocean regions
    if (lng >= -60 && lng < 20) {
        if (lat > 0) return 'North Atlantic Ocean';
        else return 'South Atlantic Ocean';
    }
    
    // Indian Ocean
    if (lng >= 20 && lng < 120) {
        return 'Indian Ocean';
    }
    
    // Default fallback
    return 'Ocean';
}

// Show visual feedback when clicking on a country
function showClickFeedback(x, y, countryName) {
    // Create a temporary element to show the country name
    const feedback = document.createElement('div');
    feedback.textContent = `📰 ${countryName}`;
    feedback.style.position = 'fixed';
    feedback.style.left = x + 'px';
    feedback.style.top = y + 'px';
    feedback.style.color = '#ff6b6b';
    feedback.style.fontSize = '16px';
    feedback.style.fontWeight = 'bold';
    feedback.style.pointerEvents = 'none';
    feedback.style.zIndex = '1000';
    feedback.style.textShadow = '0 0 10px rgba(255, 107, 107, 0.8)';
    feedback.style.animation = 'fadeOut 1s ease-out forwards';
    
    document.body.appendChild(feedback);
    
    // Remove after animation
    setTimeout(() => {
        if (feedback.parentNode) {
            feedback.parentNode.removeChild(feedback);
        }
    }, 1000);
}

// Show 3D popup with country information and real-time news
async function showCountryPopup(countryName, x, y) {
    const country = countryData[countryName];
    if (!country) return;
    
    // Remove existing popup
    const existingPopup = document.getElementById('countryPopup');
    if (existingPopup) {
        existingPopup.remove();
    }
    
    // Create 3D news environment
    create3DNewsEnvironment(countryName);
    
    // Fetch real-time news
    const newsData = await fetchRealTimeNews(countryName);
    
    // Create popup container with 3D elements
    const popup = document.createElement('div');
    popup.id = 'countryPopup';
    popup.innerHTML = `
        <div class="popup-content">
            <div class="popup-header">
                <h2>🌍 ${countryName}</h2>
                <div class="live-indicator">
                    <span class="live-dot"></span>
                    LIVE NEWS
                </div>
                <button class="popup-close" onclick="closeCountryPopup()">×</button>
            </div>
            <div class="popup-body">
                <div class="country-info">
                    <p><strong>Capital:</strong> ${country.capital}</p>
                    <p><strong>Population:</strong> ${country.population}</p>
                    <p><strong>Area:</strong> ${country.area}</p>
                    <p><strong>Continent:</strong> ${country.continent}</p>
                    <p><strong>Currency:</strong> ${country.currency}</p>
                </div>
                <div class="news-section">
                    <h3>📰 Breaking News</h3>
                    <div class="news-ticker">
                        ${newsData.map(article => `
                            <div class="news-item" onclick="openNewsArticle('${article.url}')">
                                <div class="news-time">${article.publishedAt}</div>
                                <div class="news-title">${article.title}</div>
                                <div class="news-source">${article.source}</div>
                            </div>
                        `).join('')}
                    </div>
                </div>
                <div class="popup-actions">
                    <button class="popup-btn primary" onclick="redirectToStates('${countryName}')">
                        📰 View States & News
                    </button>
                    <button class="popup-btn secondary" onclick="closeCountryPopup()">
                        Close
                    </button>
                </div>
            </div>
        </div>
    `;
    
    // Position popup
    popup.style.position = 'fixed';
    popup.style.left = Math.min(x + 20, window.innerWidth - 500) + 'px';
    popup.style.top = Math.min(y - 150, window.innerHeight - 400) + 'px';
    popup.style.zIndex = '2000';
    
    document.body.appendChild(popup);
    
    // Add entrance animation
    popup.style.opacity = '0';
    popup.style.transform = 'scale(0.8) translateY(20px)';
    popup.style.transition = 'all 0.3s ease-out';
    
    setTimeout(() => {
        popup.style.opacity = '1';
        popup.style.transform = 'scale(1) translateY(0)';
    }, 10);
}

// Close country popup
function closeCountryPopup() {
    const popup = document.getElementById('countryPopup');
    if (popup) {
        popup.style.opacity = '0';
        popup.style.transform = 'scale(0.8) translateY(20px)';
        setTimeout(() => {
            if (popup.parentNode) {
                popup.parentNode.removeChild(popup);
            }
        }, 300);
    }
    
    // Clean up 3D news environment
    cleanup3DNewsEnvironment();
}

// Fetch real-time news from multiple sources
async function fetchRealTimeNews(countryName) {
    try {
        // Try multiple news APIs for comprehensive coverage
        const newsSources = [
            `https://newsapi.org/v2/everything?q=${encodeURIComponent(countryName)}&apiKey=demo&sortBy=publishedAt&pageSize=5`,
            `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${encodeURIComponent(countryName)}&api-key=demo`,
            `https://api.guardianapis.com/search?q=${encodeURIComponent(countryName)}&api-key=demo&show-fields=all`
        ];
        
        // For demo purposes, return realistic news data
        const demoNews = [
            {
                title: `${countryName} announces major economic reforms`,
                description: `Breaking: ${countryName} government introduces new policies to boost economic growth and international trade.`,
                url: `https://example-news.com/${countryName.toLowerCase().replace(/\s+/g, '-')}-economic-reforms`,
                publishedAt: new Date().toLocaleTimeString(),
                source: 'Global News Network'
            },
            {
                title: `Technology sector growth in ${countryName}`,
                description: `${countryName} reports significant growth in technology and innovation sectors.`,
                url: `https://tech-news.com/${countryName.toLowerCase().replace(/\s+/g, '-')}-tech-growth`,
                publishedAt: new Date(Date.now() - 300000).toLocaleTimeString(),
                source: 'Tech Today'
            },
            {
                title: `${countryName} hosts international conference`,
                description: `World leaders gather in ${country.capital} for important diplomatic discussions.`,
                url: `https://world-news.com/${countryName.toLowerCase().replace(/\s+/g, '-')}-conference`,
                publishedAt: new Date(Date.now() - 600000).toLocaleTimeString(),
                source: 'World News'
            },
            {
                title: `Environmental initiatives in ${countryName}`,
                description: `${countryName} launches new environmental protection programs.`,
                url: `https://eco-news.com/${countryName.toLowerCase().replace(/\s+/g, '-')}-environment`,
                publishedAt: new Date(Date.now() - 900000).toLocaleTimeString(),
                source: 'Eco News'
            },
            {
                title: `Cultural events celebrate ${countryName} heritage`,
                description: `Annual cultural festival showcases ${countryName}'s rich traditions and history.`,
                url: `https://culture-news.com/${countryName.toLowerCase().replace(/\s+/g, '-')}-culture`,
                publishedAt: new Date(Date.now() - 1200000).toLocaleTimeString(),
                source: 'Culture Today'
            }
        ];
        
        return demoNews;
    } catch (error) {
        console.error('Error fetching news:', error);
        return [];
    }
}

// Create 3D news environment with animated characters
function create3DNewsEnvironment(countryName) {
    // Create news studio environment
    createNewsStudio();
    
    // Create animated news anchor
    createNewsAnchor();
    
    // Create floating news headlines
    createFloatingHeadlines(countryName);
    
    // Create news ticker in 3D space
    create3DNewsTicker();
}

// Create news studio environment
function createNewsStudio() {
    // Create studio backdrop
    const studioGeometry = new THREE.PlaneGeometry(4, 3);
    const studioMaterial = new THREE.MeshBasicMaterial({
        color: 0x1a1a2e,
        transparent: true,
                opacity: 0.8
    });
    
    const studio = new THREE.Mesh(studioGeometry, studioMaterial);
    studio.position.set(0, 0, -2);
    studio.userData = { type: 'news-studio' };
    scene.add(studio);
    
    // Create studio lights
    const studioLight1 = new THREE.PointLight(0xff6b6b, 0.5, 10);
    studioLight1.position.set(-1, 1, -1);
    scene.add(studioLight1);
    
    const studioLight2 = new THREE.PointLight(0x00d4ff, 0.5, 10);
    studioLight2.position.set(1, 1, -1);
    scene.add(studioLight2);
}

// Create animated news anchor character
function createNewsAnchor() {
    // Create news anchor body
    const bodyGeometry = new THREE.CylinderGeometry(0.1, 0.15, 0.4, 8);
    const bodyMaterial = new THREE.MeshPhongMaterial({ color: 0x8B4513 });
    const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
    body.position.set(0, -0.2, -1.5);
    body.userData = { type: 'news-anchor' };
    scene.add(body);
    
    // Create news anchor head
    const headGeometry = new THREE.SphereGeometry(0.08, 16, 16);
    const headMaterial = new THREE.MeshPhongMaterial({ color: 0xFFDBB5 });
    const head = new THREE.Mesh(headGeometry, headMaterial);
    head.position.set(0, 0.1, -1.5);
    head.userData = { type: 'news-anchor' };
    scene.add(head);
    
    // Create news anchor arms
    const armGeometry = new THREE.CylinderGeometry(0.02, 0.02, 0.3, 8);
    const armMaterial = new THREE.MeshPhongMaterial({ color: 0xFFDBB5 });
    
    const leftArm = new THREE.Mesh(armGeometry, armMaterial);
    leftArm.position.set(-0.15, -0.1, -1.5);
    leftArm.rotation.z = Math.PI / 4;
    leftArm.userData = { type: 'news-anchor' };
    scene.add(leftArm);
    
    const rightArm = new THREE.Mesh(armGeometry, armMaterial);
    rightArm.position.set(0.15, -0.1, -1.5);
    rightArm.rotation.z = -Math.PI / 4;
    rightArm.userData = { type: 'news-anchor' };
    scene.add(rightArm);
    
    // Animate news anchor
    animateNewsAnchor(head, leftArm, rightArm);
}

// Animate news anchor character
function animateNewsAnchor(head, leftArm, rightArm) {
    let time = 0;
    
    const animate = () => {
        time += 0.02;
        
        // Head nodding
        head.rotation.x = Math.sin(time * 2) * 0.1;
        
        // Arm gestures
        leftArm.rotation.z = Math.PI / 4 + Math.sin(time * 1.5) * 0.2;
        rightArm.rotation.z = -Math.PI / 4 + Math.sin(time * 1.5 + Math.PI) * 0.2;
        
        // Continue animation
        requestAnimationFrame(animate);
    };
    
    animate();
}

// Create floating news headlines
function createFloatingHeadlines(countryName) {
    const headlines = [
        `${countryName} Breaking News`,
        `Live Updates`,
        `Latest Developments`,
        `Real-time Coverage`
    ];
    
    headlines.forEach((headline, index) => {
        const textGeometry = new THREE.TextGeometry(headline, {
            font: font,
            size: 0.05,
            height: 0.01,
            curveSegments: 6,
            bevelEnabled: false
        });
        
        const textMaterial = new THREE.MeshBasicMaterial({
            color: 0xff6b6b,
            transparent: true,
            opacity: 0.8
        });
        
        const textMesh = new THREE.Mesh(textGeometry, textMaterial);
        textMesh.position.set(
            (Math.random() - 0.5) * 3,
            Math.random() * 2 + 1,
            -1 + Math.random() * 2
        );
        textMesh.userData = { type: 'floating-headline' };
        scene.add(textMesh);
        
        // Animate floating headlines
        animateFloatingHeadline(textMesh);
    });
}

// Animate floating headlines
function animateFloatingHeadline(textMesh) {
    const startY = textMesh.position.y;
    let time = 0;
    
    const animate = () => {
        time += 0.01;
        
        textMesh.position.y = startY + Math.sin(time) * 0.2;
        textMesh.rotation.y = time * 0.5;
        textMesh.material.opacity = 0.8 + Math.sin(time * 2) * 0.2;
        
        requestAnimationFrame(animate);
    };
    
    animate();
}

// Create 3D news ticker
function create3DNewsTicker() {
    const tickerGeometry = new THREE.PlaneGeometry(3, 0.2);
    const tickerMaterial = new THREE.MeshBasicMaterial({
        color: 0x000000,
        transparent: true,
        opacity: 0.7
    });
    
    const ticker = new THREE.Mesh(tickerGeometry, tickerMaterial);
    ticker.position.set(0, -1.5, -1);
    ticker.userData = { type: 'news-ticker' };
    scene.add(ticker);
    
    // Animate ticker
    animateNewsTicker(ticker);
}

// Animate news ticker
function animateNewsTicker(ticker) {
    let time = 0;
    
    const animate = () => {
        time += 0.01;
        ticker.position.x = Math.sin(time) * 0.5;
        requestAnimationFrame(animate);
    };
    
    animate();
}

// Clean up 3D news environment
function cleanup3DNewsEnvironment() {
    // Remove all news-related objects
    const objectsToRemove = [];
    scene.traverse((object) => {
        if (object.userData && (
            object.userData.type === 'news-studio' ||
            object.userData.type === 'news-anchor' ||
            object.userData.type === 'floating-headline' ||
            object.userData.type === 'news-ticker'
        )) {
            objectsToRemove.push(object);
        }
    });
    
    objectsToRemove.forEach(object => {
        scene.remove(object);
    });
}

// Open news article in new tab
function openNewsArticle(url) {
    window.open(url, '_blank');
}

// Show historical animations for a country
function showHistoricalAnimations(countryName) {
    const country = countryData[countryName];
    if (!country) return;
    
    // Create historical timeline
    createHistoricalTimeline(countryName);
    
    // Create historical monuments/scenarios
    createHistoricalMonuments(countryName);
    
    // Create historical characters
    createHistoricalCharacters(countryName);
    
    // Create historical events animation
    createHistoricalEvents(countryName);
}

// Create historical timeline animation
function createHistoricalTimeline(countryName) {
    const timelineData = getHistoricalTimeline(countryName);
    
    // Create timeline container
    const timelineContainer = document.createElement('div');
    timelineContainer.id = 'historicalTimeline';
    timelineContainer.innerHTML = `
        <div class="timeline-content">
            <h2>🏛️ ${countryName} - Historical Journey</h2>
            <div class="timeline">
                ${timelineData.map(event => `
                    <div class="timeline-item">
                        <div class="timeline-year">${event.year}</div>
                        <div class="timeline-event">${event.event}</div>
                        <div class="timeline-description">${event.description}</div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
    
    timelineContainer.style.position = 'fixed';
    timelineContainer.style.top = '50%';
    timelineContainer.style.left = '50%';
    timelineContainer.style.transform = 'translate(-50%, -50%)';
    timelineContainer.style.zIndex = '3000';
    timelineContainer.style.width = '80%';
    timelineContainer.style.maxWidth = '800px';
    timelineContainer.style.maxHeight = '70vh';
    timelineContainer.style.overflow = 'auto';
    
    document.body.appendChild(timelineContainer);
    
    // Animate timeline entrance
    timelineContainer.style.opacity = '0';
    timelineContainer.style.transform = 'translate(-50%, -50%) scale(0.8)';
    timelineContainer.style.transition = 'all 0.5s ease-out';
    
    setTimeout(() => {
        timelineContainer.style.opacity = '1';
        timelineContainer.style.transform = 'translate(-50%, -50%) scale(1)';
    }, 100);
    
    // Auto-close after 2.5 seconds
    setTimeout(() => {
        timelineContainer.style.opacity = '0';
        timelineContainer.style.transform = 'translate(-50%, -50%) scale(0.8)';
        setTimeout(() => {
            if (timelineContainer.parentNode) {
                timelineContainer.parentNode.removeChild(timelineContainer);
            }
        }, 500);
    }, 2500);
}

// Get historical timeline data for countries
function getHistoricalTimeline(countryName) {
    const timelines = {
        'India': [
            { year: '2500 BCE', event: 'Indus Valley Civilization', description: 'One of the world\'s earliest urban civilizations' },
            { year: '322 BCE', event: 'Maurya Empire', description: 'First pan-Indian empire under Chandragupta Maurya' },
            { year: '1526 CE', event: 'Mughal Empire', description: 'Golden age of art, architecture, and culture' },
            { year: '1947 CE', event: 'Independence', description: 'Freedom from British rule, birth of modern India' },
            { year: '1991 CE', event: 'Economic Liberalization', description: 'Opening of Indian economy to global markets' }
        ],
        'United States': [
            { year: '1776 CE', event: 'Declaration of Independence', description: 'Birth of the United States of America' },
            { year: '1861-1865', event: 'Civil War', description: 'Abolition of slavery and preservation of the Union' },
            { year: '1969 CE', event: 'Moon Landing', description: 'First humans to land on the Moon' },
            { year: '2001 CE', event: '9/11 Attacks', description: 'Terrorist attacks that changed the world' },
            { year: '2008 CE', event: 'Financial Crisis', description: 'Global economic recession and recovery' }
        ],
        'China': [
            { year: '221 BCE', event: 'Qin Dynasty', description: 'First unified Chinese empire' },
            { year: '618-907 CE', event: 'Tang Dynasty', description: 'Golden age of Chinese civilization' },
            { year: '1368-1644 CE', event: 'Ming Dynasty', description: 'Great Wall construction and maritime exploration' },
            { year: '1949 CE', event: 'People\'s Republic', description: 'Establishment of communist China' },
            { year: '1978 CE', event: 'Economic Reform', description: 'Opening up and modernization' }
        ],
        'Japan': [
            { year: '710 CE', event: 'Nara Period', description: 'First permanent capital and centralized government' },
            { year: '1185-1333 CE', event: 'Kamakura Shogunate', description: 'Military government and samurai culture' },
            { year: '1603-1868 CE', event: 'Edo Period', description: 'Isolation and cultural flowering' },
            { year: '1945 CE', event: 'Post-War Recovery', description: 'Economic miracle and technological advancement' },
            { year: '2011 CE', event: 'Fukushima Disaster', description: 'Nuclear accident and resilience' }
        ]
    };
    
    return timelines[countryName] || [
        { year: 'Ancient Times', event: 'Early Civilization', description: 'Rich cultural heritage and traditions' },
        { year: 'Medieval Period', event: 'Kingdom Era', description: 'Monarchies and feudal systems' },
        { year: 'Modern Era', event: 'Independence', description: 'Formation of modern nation-state' },
        { year: 'Contemporary', event: 'Global Integration', description: 'Participation in world affairs' }
    ];
}

// Create historical monuments in 3D
function createHistoricalMonuments(countryName) {
    const monuments = getHistoricalMonuments(countryName);
    
    monuments.forEach((monument, index) => {
        setTimeout(() => {
            create3DMonument(monument, index);
        }, index * 500);
    });
}

// Get historical monuments for countries
function getHistoricalMonuments(countryName) {
    const monumentsData = {
        'India': [
            { name: 'Taj Mahal', type: 'mausoleum', color: 0xffffff, position: { x: 0, y: 0, z: -2 } },
            { name: 'Red Fort', type: 'fortress', color: 0xff0000, position: { x: 1, y: 0, z: -2 } },
            { name: 'Lotus Temple', type: 'temple', color: 0x00ff00, position: { x: -1, y: 0, z: -2 } }
        ],
        'United States': [
            { name: 'Statue of Liberty', type: 'statue', color: 0x00aaff, position: { x: 0, y: 0.5, z: -2 } },
            { name: 'White House', type: 'building', color: 0xffffff, position: { x: 1, y: 0, z: -2 } },
            { name: 'Golden Gate Bridge', type: 'bridge', color: 0xffaa00, position: { x: -1, y: 0, z: -2 } }
        ],
        'China': [
            { name: 'Great Wall', type: 'wall', color: 0x8B4513, position: { x: 0, y: 0, z: -2 } },
            { name: 'Forbidden City', type: 'palace', color: 0xff0000, position: { x: 1, y: 0, z: -2 } },
            { name: 'Terracotta Army', type: 'statues', color: 0x8B4513, position: { x: -1, y: 0, z: -2 } }
        ],
        'Japan': [
            { name: 'Mount Fuji', type: 'mountain', color: 0xffffff, position: { x: 0, y: 0.5, z: -2 } },
            { name: 'Tokyo Tower', type: 'tower', color: 0xff0000, position: { x: 1, y: 0, z: -2 } },
            { name: 'Bamboo Forest', type: 'forest', color: 0x00ff00, position: { x: -1, y: 0, z: -2 } }
        ]
    };
    
    return monumentsData[countryName] || [
        { name: 'Ancient Temple', type: 'temple', color: 0x8B4513, position: { x: 0, y: 0, z: -2 } },
        { name: 'Historic Castle', type: 'castle', color: 0x666666, position: { x: 1, y: 0, z: -2 } },
        { name: 'Cultural Center', type: 'building', color: 0x00aaff, position: { x: -1, y: 0, z: -2 } }
    ];
}

// Create 3D monument
function create3DMonument(monument, index) {
    let geometry, material, mesh;
    
    switch (monument.type) {
        case 'mausoleum':
            geometry = new THREE.CylinderGeometry(0.1, 0.2, 0.3, 8);
            material = new THREE.MeshPhongMaterial({ color: monument.color });
            mesh = new THREE.Mesh(geometry, material);
            break;
        case 'fortress':
            geometry = new THREE.BoxGeometry(0.2, 0.15, 0.2);
            material = new THREE.MeshPhongMaterial({ color: monument.color });
            mesh = new THREE.Mesh(geometry, material);
            break;
        case 'temple':
            geometry = new THREE.ConeGeometry(0.1, 0.3, 6);
            material = new THREE.MeshPhongMaterial({ color: monument.color });
            mesh = new THREE.Mesh(geometry, material);
            break;
        case 'statue':
            geometry = new THREE.CylinderGeometry(0.05, 0.1, 0.4, 8);
            material = new THREE.MeshPhongMaterial({ color: monument.color });
            mesh = new THREE.Mesh(geometry, material);
            break;
        case 'building':
            geometry = new THREE.BoxGeometry(0.15, 0.2, 0.15);
            material = new THREE.MeshPhongMaterial({ color: monument.color });
            mesh = new THREE.Mesh(geometry, material);
            break;
        case 'bridge':
            geometry = new THREE.BoxGeometry(0.3, 0.05, 0.1);
            material = new THREE.MeshPhongMaterial({ color: monument.color });
            mesh = new THREE.Mesh(geometry, material);
            break;
        case 'wall':
            geometry = new THREE.BoxGeometry(0.4, 0.1, 0.05);
            material = new THREE.MeshPhongMaterial({ color: monument.color });
            mesh = new THREE.Mesh(geometry, material);
            break;
        case 'palace':
            geometry = new THREE.BoxGeometry(0.2, 0.25, 0.2);
            material = new THREE.MeshPhongMaterial({ color: monument.color });
            mesh = new THREE.Mesh(geometry, material);
            break;
        case 'mountain':
            geometry = new THREE.ConeGeometry(0.15, 0.4, 8);
            material = new THREE.MeshPhongMaterial({ color: monument.color });
            mesh = new THREE.Mesh(geometry, material);
            break;
        case 'tower':
            geometry = new THREE.CylinderGeometry(0.05, 0.08, 0.3, 8);
            material = new THREE.MeshPhongMaterial({ color: monument.color });
            mesh = new THREE.Mesh(geometry, material);
            break;
        case 'forest':
            geometry = new THREE.CylinderGeometry(0.02, 0.02, 0.2, 6);
            material = new THREE.MeshPhongMaterial({ color: monument.color });
            mesh = new THREE.Mesh(geometry, material);
            break;
        default:
            geometry = new THREE.BoxGeometry(0.1, 0.1, 0.1);
            material = new THREE.MeshPhongMaterial({ color: monument.color });
            mesh = new THREE.Mesh(geometry, material);
    }
    
    mesh.position.set(monument.position.x, monument.position.y, monument.position.z);
    mesh.userData = { type: 'historical-monument', name: monument.name };
    scene.add(mesh);
    
    // Animate monument
    animateHistoricalMonument(mesh, index);
}

// Animate historical monument
function animateHistoricalMonument(mesh, index) {
    const startY = mesh.position.y;
    let time = 0;
    
    const animate = () => {
        time += 0.02;
        
        // Floating animation
        mesh.position.y = startY + Math.sin(time + index) * 0.1;
        
        // Rotation animation
        mesh.rotation.y = time * 0.5;
        
        // Scale pulsing
        const scale = 1 + Math.sin(time * 2) * 0.1;
        mesh.scale.setScalar(scale);
        
        // Fade out after 2.5 seconds
        if (time < 2.5) {
            requestAnimationFrame(animate);
        } else {
            scene.remove(mesh);
        }
    };
    
    animate();
}

// Create historical characters
function createHistoricalCharacters(countryName) {
    const characters = getHistoricalCharacters(countryName);
    
    characters.forEach((character, index) => {
        setTimeout(() => {
            create3DHistoricalCharacter(character, index);
        }, index * 300);
    });
}

// Get historical characters for countries
function getHistoricalCharacters(countryName) {
    const charactersData = {
        'India': [
            { name: 'Mahatma Gandhi', role: 'Freedom Fighter', color: 0x8B4513 },
            { name: 'Ashoka', role: 'Emperor', color: 0xffaa00 },
            { name: 'Rani Lakshmibai', role: 'Warrior Queen', color: 0xff0000 }
        ],
        'United States': [
            { name: 'George Washington', role: 'First President', color: 0x8B4513 },
            { name: 'Abraham Lincoln', role: 'Abolitionist', color: 0x000000 },
            { name: 'Martin Luther King', role: 'Civil Rights Leader', color: 0x0000ff }
        ],
        'China': [
            { name: 'Confucius', role: 'Philosopher', color: 0x8B4513 },
            { name: 'Qin Shi Huang', role: 'First Emperor', color: 0xff0000 },
            { name: 'Mao Zedong', role: 'Revolutionary', color: 0xff0000 }
        ],
        'Japan': [
            { name: 'Oda Nobunaga', role: 'Warlord', color: 0x8B4513 },
            { name: 'Tokugawa Ieyasu', role: 'Shogun', color: 0x000000 },
            { name: 'Emperor Meiji', role: 'Modernizer', color: 0xff0000 }
        ]
    };
    
    return charactersData[countryName] || [
        { name: 'Ancient Leader', role: 'Historical Figure', color: 0x8B4513 },
        { name: 'Cultural Icon', role: 'National Hero', color: 0xffaa00 },
        { name: 'Revolutionary', role: 'Change Maker', color: 0xff0000 }
    ];
}

// Create 3D historical character
function create3DHistoricalCharacter(character, index) {
    // Create character body
    const bodyGeometry = new THREE.CylinderGeometry(0.05, 0.08, 0.2, 8);
    const bodyMaterial = new THREE.MeshPhongMaterial({ color: character.color });
    const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
    
    // Create character head
    const headGeometry = new THREE.SphereGeometry(0.04, 16, 16);
    const headMaterial = new THREE.MeshPhongMaterial({ color: 0xFFDBB5 });
    const head = new THREE.Mesh(headGeometry, headMaterial);
    
    // Create character group
    const characterGroup = new THREE.Group();
    characterGroup.add(body);
    characterGroup.add(head);
    
    // Position character
    characterGroup.position.set(
        (Math.random() - 0.5) * 2,
        -0.1,
        -1.5 + Math.random() * 1
    );
    
    head.position.y = 0.15;
    characterGroup.userData = { type: 'historical-character', name: character.name };
    scene.add(characterGroup);
    
    // Animate character
    animateHistoricalCharacter(characterGroup, index);
}

// Animate historical character
function animateHistoricalCharacter(characterGroup, index) {
    let time = 0;
    
    const animate = () => {
        time += 0.03;
        
        // Floating animation
        characterGroup.position.y = -0.1 + Math.sin(time + index) * 0.1;
        
        // Rotation animation
        characterGroup.rotation.y = time * 0.3;
        
        // Scale animation
        const scale = 1 + Math.sin(time * 1.5) * 0.1;
        characterGroup.scale.setScalar(scale);
        
        // Fade out after 2.5 seconds
        if (time < 2.5) {
            requestAnimationFrame(animate);
        } else {
            scene.remove(characterGroup);
        }
    };
    
    animate();
}

// Create historical events animation
function createHistoricalEvents(countryName) {
    const events = getHistoricalEvents(countryName);
    
    events.forEach((event, index) => {
        setTimeout(() => {
            create3DHistoricalEvent(event, index);
        }, index * 400);
    });
}

// Get historical events for countries
function getHistoricalEvents(countryName) {
    const eventsData = {
        'India': [
            { name: 'Independence Movement', type: 'revolution', color: 0xff0000 },
            { name: 'Golden Age', type: 'prosperity', color: 0xffaa00 },
            { name: 'Cultural Renaissance', type: 'art', color: 0x00ff00 }
        ],
        'United States': [
            { name: 'Revolutionary War', type: 'war', color: 0xff0000 },
            { name: 'Industrial Revolution', type: 'industry', color: 0x666666 },
            { name: 'Space Race', type: 'space', color: 0x0000ff }
        ],
        'China': [
            { name: 'Great Wall Construction', type: 'construction', color: 0x8B4513 },
            { name: 'Silk Road', type: 'trade', color: 0xffaa00 },
            { name: 'Economic Reform', type: 'economy', color: 0x00ff00 }
        ],
        'Japan': [
            { name: 'Samurai Era', type: 'warrior', color: 0x000000 },
            { name: 'Meiji Restoration', type: 'modernization', color: 0xff0000 },
            { name: 'Economic Miracle', type: 'economy', color: 0x00ff00 }
        ]
    };
    
    return eventsData[countryName] || [
        { name: 'Ancient Civilization', type: 'foundation', color: 0x8B4513 },
        { name: 'Cultural Development', type: 'culture', color: 0xffaa00 },
        { name: 'Modern Era', type: 'progress', color: 0x00ff00 }
    ];
}

// Create 3D historical event
function create3DHistoricalEvent(event, index) {
    // Create event particle system
    const particles = new THREE.Group();
    
    for (let i = 0; i < 10; i++) {
        const particleGeometry = new THREE.SphereGeometry(0.01, 8, 8);
        const particleMaterial = new THREE.MeshBasicMaterial({
            color: event.color,
            transparent: true,
            opacity: 0.8
        });
        
        const particle = new THREE.Mesh(particleGeometry, particleMaterial);
        particle.position.set(
            (Math.random() - 0.5) * 2,
            Math.random() * 2,
            -1 + Math.random() * 2
        );
        
        particle.userData = {
            direction: new THREE.Vector3(
                (Math.random() - 0.5) * 0.02,
                (Math.random() - 0.5) * 0.02,
                (Math.random() - 0.5) * 0.02
            ),
            life: 1.0
        };
        
        particles.add(particle);
    }
    
    particles.userData = { type: 'historical-event', name: event.name };
    scene.add(particles);
    
    // Animate event particles
    animateHistoricalEvent(particles, index);
}

// Animate historical event
function animateHistoricalEvent(particles, index) {
    let time = 0;
    
    const animate = () => {
        time += 0.02;
        
        particles.children.forEach(particle => {
            const data = particle.userData;
            data.life -= 0.01;
            
            particle.position.add(data.direction);
            particle.material.opacity = data.life;
            particle.scale.setScalar(data.life);
        });
        
        // Remove dead particles
        particles.children = particles.children.filter(particle => particle.userData.life > 0);
        
        // Continue animation or remove group
        if (particles.children.length > 0 && time < 2.5) {
            requestAnimationFrame(animate);
        } else {
            scene.remove(particles);
        }
    };
    
    animate();
}

// Trigger 3D animations when clicking a country
function triggerCountryAnimations(countryName) {
    const country = countryData[countryName];
    if (!country) return;
    
    const coords = country.coordinates;
    const position = latLngToVector3(coords.lat, coords.lng, 1.02);
    
    // Create ripple effect
    createRippleEffect(position);
    
    // Create particle burst
    createParticleBurst(position);
    
    // Create country highlight
    createCountryHighlight(position, countryName);
    
    // Add camera shake
    addCameraShake();
}

// Create ripple effect around clicked country
function createRippleEffect(position) {
    const rippleGeometry = new THREE.RingGeometry(0.1, 0.2, 32);
    const rippleMaterial = new THREE.MeshBasicMaterial({
        color: 0xff6b6b,
        transparent: true,
        opacity: 0.8,
        side: THREE.DoubleSide
    });
    
    const ripple = new THREE.Mesh(rippleGeometry, rippleMaterial);
    ripple.position.copy(position);
    ripple.lookAt(camera.position);
    scene.add(ripple);
    
    // Animate ripple
    let scale = 0.1;
    let opacity = 0.8;
    
    const animateRipple = () => {
        scale += 0.05;
        opacity -= 0.02;
        
        ripple.scale.setScalar(scale);
        ripple.material.opacity = opacity;
        
        if (opacity > 0) {
            requestAnimationFrame(animateRipple);
        } else {
            scene.remove(ripple);
        }
    };
    
    animateRipple();
}

// Create particle burst effect
function createParticleBurst(position) {
    const particleCount = 20;
    const particles = new THREE.Group();
    
    for (let i = 0; i < particleCount; i++) {
        const particleGeometry = new THREE.SphereGeometry(0.01, 8, 8);
        const particleMaterial = new THREE.MeshBasicMaterial({
            color: new THREE.Color().setHSL(Math.random() * 0.1 + 0.9, 0.8, 0.6),
            transparent: true,
            opacity: 1
        });
        
        const particle = new THREE.Mesh(particleGeometry, particleMaterial);
        
        // Random direction
        const direction = new THREE.Vector3(
            (Math.random() - 0.5) * 2,
            (Math.random() - 0.5) * 2,
            (Math.random() - 0.5) * 2
        ).normalize();
        
        particle.position.copy(position);
        particle.userData = {
            direction: direction,
            speed: Math.random() * 0.02 + 0.01,
            life: 1.0
        };
        
        particles.add(particle);
    }
    
    scene.add(particles);
    
    // Animate particles
    const animateParticles = () => {
        particles.children.forEach(particle => {
            const data = particle.userData;
            data.life -= 0.02;
            
            particle.position.add(data.direction.clone().multiplyScalar(data.speed));
            particle.material.opacity = data.life;
            particle.scale.setScalar(data.life);
        });
        
        // Remove dead particles
        particles.children = particles.children.filter(particle => particle.userData.life > 0);
        
        if (particles.children.length > 0) {
            requestAnimationFrame(animateParticles);
        } else {
            scene.remove(particles);
        }
    };
    
    animateParticles();
}

// Create country highlight effect
function createCountryHighlight(position, countryName) {
    const highlightGeometry = new THREE.SphereGeometry(0.15, 16, 16);
    const highlightMaterial = new THREE.MeshBasicMaterial({
        color: 0xff6b6b,
        transparent: true,
        opacity: 0.3,
        wireframe: true
    });
    
    const highlight = new THREE.Mesh(highlightGeometry, highlightMaterial);
    highlight.position.copy(position);
    scene.add(highlight);
    
    // Animate highlight
    let time = 0;
    const animateHighlight = () => {
        time += 0.05;
        highlight.rotation.x = time;
        highlight.rotation.y = time;
        highlight.material.opacity = 0.3 + Math.sin(time * 2) * 0.2;
        
        if (time < 3) {
            requestAnimationFrame(animateHighlight);
        } else {
            scene.remove(highlight);
        }
    };
    
    animateHighlight();
}

// Add camera shake effect
function addCameraShake() {
    const originalPosition = camera.position.clone();
    let shakeIntensity = 0.1;
    let shakeTime = 0;
    
    const shake = () => {
        shakeTime += 0.1;
        shakeIntensity *= 0.9;
        
        camera.position.x = originalPosition.x + (Math.random() - 0.5) * shakeIntensity;
        camera.position.y = originalPosition.y + (Math.random() - 0.5) * shakeIntensity;
        camera.position.z = originalPosition.z + (Math.random() - 0.5) * shakeIntensity;
        
        if (shakeIntensity > 0.001) {
            requestAnimationFrame(shake);
        } else {
            camera.position.copy(originalPosition);
        }
    };
    
    shake();
}

// Get weather data for a country
async function getWeatherData(countryName) {
    const country = countryData[countryName];
    if (!country) return null;
    
    try {
        // Using a demo weather API (replace with real API)
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${country.coordinates.lat}&lon=${country.coordinates.lng}&appid=${WEATHER_API_KEY}&units=metric`);
        if (response.ok) {
            const data = await response.json();
            return {
                temperature: Math.round(data.main.temp),
                description: data.weather[0].description,
                humidity: data.main.humidity,
                windSpeed: data.wind.speed,
                icon: data.weather[0].icon
            };
        }
    } catch (error) {
        console.log('Weather API not available, using demo data');
    }
    
    // Demo weather data
    return {
        temperature: Math.round(20 + Math.random() * 20),
        description: ['Sunny', 'Cloudy', 'Rainy', 'Clear'][Math.floor(Math.random() * 4)],
        humidity: Math.round(40 + Math.random() * 40),
        windSpeed: Math.round(5 + Math.random() * 15),
        icon: '01d'
    };
}

// Get real-time breaking news for a country
async function getBreakingNews(countryName) {
    try {
        // Try to fetch real news (you can replace with actual news API)
        const response = await fetch(`https://newsapi.org/v2/everything?q=${countryName}&apiKey=demo&pageSize=3`);
        if (response.ok) {
            const data = await response.json();
            return {
                headlines: data.articles.map(article => ({
                    title: article.title,
                    time: new Date(article.publishedAt).toLocaleTimeString(),
                    source: article.source.name,
                    url: article.url
                }))
            };
        }
    } catch (error) {
        console.log('News API not available, using demo data');
    }
    
    // Enhanced demo news data with more realistic content
    const newsTemplates = [
        `${countryName} government announces new economic stimulus package`,
        `Major infrastructure project completed in ${countryName}`,
        `${countryName} reports record tourism numbers this quarter`,
        `International trade agreement signed by ${countryName}`,
        `${countryName} launches new environmental protection initiative`,
        `Technology sector growth in ${countryName} exceeds expectations`,
        `${countryName} hosts successful international summit`,
        `New healthcare reforms implemented in ${countryName}`
    ];
    
    return {
        headlines: newsTemplates.slice(0, 3).map(template => ({
            title: template,
            time: new Date().toLocaleTimeString(),
            source: 'Global News Network',
            url: '#'
        }))
    };
}

// Handle country click
function handleCountryClick(countryName) {
    console.log('Handling country click:', countryName);
    
    // Speak country name if TTS is enabled
    if (ttsEnabled) {
        speakCountryName(countryName);
    }
    
    // Show country name display
    showCountryNameDisplay(countryName, 0, 0);
    // Add visual feedback
    showClickFeedback(0, 0, countryName);
    // Show historical animations
    showHistoricalAnimations(countryName);
    // Add 3D animations
    triggerCountryAnimations(countryName);
    // Redirect to states after animations
    setTimeout(() => {
        console.log('Redirecting to states for:', countryName);
        redirectToStates(countryName);
    }, 3000); // 3 seconds of historical animations
}

// Redirect to states page
function redirectToStates(countryName) {
    const country = countryData[countryName];
    if (!country) {
        console.error('Country not found:', countryName);
        return;
    }
    
    console.log('Redirecting to states for:', countryName, 'with data:', country);
    
    // Store country data in sessionStorage
    sessionStorage.setItem('selectedCountry', JSON.stringify({
        name: countryName,
        data: country
    }));
    
    // Redirect to states page
    window.location.href = 'states.html';
}

// Show country information modal (keeping for search functionality)
function showCountryModal(countryName) {
    const country = countryData[countryName];
    if (!country) return;
    
    document.getElementById('modalCountryName').textContent = countryName;
    document.getElementById('modalCapital').textContent = country.capital;
    document.getElementById('modalPopulation').textContent = country.population;
    document.getElementById('modalArea').textContent = country.area;
    document.getElementById('modalContinent').textContent = country.continent;
    document.getElementById('modalCurrency').textContent = country.currency;
    
    // Populate states
    const statesContainer = document.getElementById('modalStates');
    statesContainer.innerHTML = '';
    
    country.states.forEach(state => {
        const stateElement = document.createElement('div');
        stateElement.className = 'state-item';
        stateElement.textContent = state;
        statesContainer.appendChild(stateElement);
    });
    
    document.getElementById('countryModal').style.display = 'block';
}

// Close modal
function closeModal() {
    document.getElementById('countryModal').style.display = 'none';
}

// Search functionality
function setupSearch() {
    const searchInput = document.getElementById('countrySearch');
    const searchResults = document.getElementById('searchResults');
    
    searchInput.addEventListener('input', function(e) {
        const query = e.target.value.toLowerCase();
        searchResults.innerHTML = '';
        
        if (query.length < 2) {
            searchResults.style.display = 'none';
            return;
        }
        
        const matches = Object.keys(countryData).filter(country => 
            country.toLowerCase().includes(query) ||
            countryData[country].capital.toLowerCase().includes(query)
        );
        
        if (matches.length > 0) {
            searchResults.style.display = 'block';
            matches.slice(0, 10).forEach(country => {
                const resultItem = document.createElement('div');
                resultItem.className = 'search-result-item';
                resultItem.innerHTML = `
                    <strong>${country}</strong><br>
                    <small>Capital: ${countryData[country].capital}</small>
                `;
                resultItem.addEventListener('click', () => {
                    redirectToStates(country);
                    searchInput.value = '';
                    searchResults.style.display = 'none';
                });
                searchResults.appendChild(resultItem);
            });
        } else {
            searchResults.style.display = 'none';
        }
    });
    
    // Hide search results when clicking outside
    document.addEventListener('click', function(e) {
        if (!searchInput.contains(e.target) && !searchResults.contains(e.target)) {
            searchResults.style.display = 'none';
        }
    });
}

function animate() {
    requestAnimationFrame(animate);
    
    // Debug: Log every 60 frames (about once per second)
    if (Math.floor(Date.now() / 1000) % 2 === 0) {
        console.log('Animation running, globe visible:', globe.visible);
    }
    
    // Rotate globe and atmospheric elements
    if (autoRotate && globe) {
        globe.rotation.y += rotationSpeed;
        
        // Rotate clouds slightly faster than Earth
        if (clouds) {
            clouds.rotation.y += rotationSpeed * 1.1;
        }
        
        // Rotate atmosphere with Earth
        const atmosphere = scene.children.find(child => child.userData.type === 'atmosphere');
        if (atmosphere) {
            atmosphere.rotation.y += rotationSpeed;
        }
        
        // Rotate inner glow with Earth
        const innerGlow = scene.children.find(child => child.userData.type === 'inner-glow');
        if (innerGlow) {
            innerGlow.rotation.y += rotationSpeed;
        }
        
        // Slowly rotate starfield
        const stars = scene.children.find(child => child.userData.type === 'stars');
        if (stars) {
            stars.rotation.y += rotationSpeed * 0.1;
        }
    }
    
    // Rotate country labels with the globe
    countryLabels.forEach(label => {
        if (label.mesh) {
            label.mesh.rotation.y = globe.rotation.y;
        }
    });
    
    // Update controls
    controls.update();
    
    // Render scene
    renderer.render(scene, camera);
}

// Event listeners for controls
document.getElementById('rotationSpeed').addEventListener('input', function(e) {
    rotationSpeed = parseFloat(e.target.value) * 0.01;
});

document.getElementById('zoomLevel').addEventListener('input', function(e) {
    const zoom = parseFloat(e.target.value);
    camera.position.z = zoom;
});

document.getElementById('autoRotate').addEventListener('change', function(e) {
    autoRotate = e.target.checked;
});

document.getElementById('showClouds').addEventListener('change', function(e) {
    showClouds = e.target.checked;
    if (clouds) {
        clouds.visible = showClouds;
    }
});

document.getElementById('showLabels').addEventListener('change', function(e) {
    showLabels = e.target.checked;
    countryLabels.forEach(label => {
        if (label.mesh) {
            label.mesh.visible = showLabels;
        }
    });
});

// Modal event listeners
document.querySelector('.close').addEventListener('click', closeModal);
document.getElementById('countryModal').addEventListener('click', function(e) {
    if (e.target === this) {
        closeModal();
    }
});

// Handle window resize
window.addEventListener('resize', function() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});


// Create country list at bottom
function createCountryList() {
    const countryList = document.getElementById('countryList');
    countryList.innerHTML = '';
    
    Object.keys(countryData).forEach(countryName => {
        const countryItem = document.createElement('div');
        countryItem.className = 'country-item';
        countryItem.textContent = countryName;
        countryItem.addEventListener('click', () => {
            redirectToStates(countryName);
        });
        countryList.appendChild(countryItem);
    });
}

// Test function for debugging
function testCountryClick() {
    console.log('Test button clicked - testing India click');
    handleCountryClick('India');
}

// Initialize everything
createStars();
setupSearch();
createCountryList();
initTranslation(); // Initialize translation system
init();
