// ── Velvet Voice · Studio TTS Engine & AI Voices ──
// Supports Deepgram Aura Neural AI Voices (Studio HD) & Browser Web Speech API
'use strict';

// ── Deepgram Aura AI Voice Definitions ──
const DEEPGRAM_VOICES = [
  // ── Female AI Voices ──
  { key: 'aura-2-thalia-en',  label: 'Thalia (Aura 2)',   desc: 'Expressive & captivating', gender: 'f', accent: 'us', emoji: '✨', type: 'ai' },
  { key: 'aura-2-asteria-en', label: 'Asteria (Aura 2)',  desc: 'Warm & conversational',    gender: 'f', accent: 'us', emoji: '🌸', type: 'ai' },
  { key: 'aura-2-luna-en',    label: 'Luna (Aura 2)',     desc: 'Soft & expressive',       gender: 'f', accent: 'us', emoji: '🌙', type: 'ai' },
  { key: 'aura-2-stella-en',  label: 'Stella (Aura 2)',   desc: 'Professional & clear',    gender: 'f', accent: 'us', emoji: '💎', type: 'ai' },
  { key: 'aura-2-athena-en',  label: 'Athena (Aura 2)',   desc: 'Calm & articulate',       gender: 'f', accent: 'us', emoji: '🛡️', type: 'ai' },
  { key: 'aura-2-hera-en',    label: 'Hera (Aura 2)',     desc: 'Authoritative & polished', gender: 'f', accent: 'us', emoji: '👑', type: 'ai' },
  { key: 'aura-asteria-en',   label: 'Asteria (Classic)', desc: 'Warm & friendly',         gender: 'f', accent: 'us', emoji: '🌸', type: 'ai' },
  { key: 'aura-luna-en',      label: 'Luna (Classic)',    desc: 'Soft narrator',           gender: 'f', accent: 'us', emoji: '🌙', type: 'ai' },
  { key: 'aura-stella-en',    label: 'Stella (Classic)',  desc: 'Clear & articulate',      gender: 'f', accent: 'us', emoji: '✨', type: 'ai' },
  { key: 'aura-athena-en',    label: 'Athena (Classic)',  desc: 'Gentle & calm',           gender: 'f', accent: 'us', emoji: '🕊️', type: 'ai' },
  { key: 'aura-hera-en',      label: 'Hera (Classic)',    desc: 'Polished speaker',        gender: 'f', accent: 'us', emoji: '👑', type: 'ai' },

  // ── Male AI Voices ──
  { key: 'aura-2-orion-en',   label: 'Orion (Aura 2)',    desc: 'Deep & authoritative',    gender: 'm', accent: 'us', emoji: '🌌', type: 'ai' },
  { key: 'aura-2-arcas-en',   label: 'Arcas (Aura 2)',    desc: 'Rich & resonant narrator',gender: 'm', accent: 'us', emoji: '🎙️', type: 'ai' },
  { key: 'aura-2-perseus-en', label: 'Perseus (Aura 2)',  desc: 'Dynamic & engaging',      gender: 'm', accent: 'us', emoji: '⚔️', type: 'ai' },
  { key: 'aura-2-angus-en',   label: 'Angus (Aura 2)',    desc: 'Deep Irish narrator',     gender: 'm', accent: 'uk', emoji: '🏴󠁧󠁢󠁳󠁣󠁴󠁿', type: 'ai' },
  { key: 'aura-2-orpheus-en', label: 'Orpheus (Aura 2)',  desc: 'Smooth & confident',      gender: 'm', accent: 'us', emoji: '🎭', type: 'ai' },
  { key: 'aura-2-helios-en',  label: 'Helios (Aura 2)',   desc: 'Warm & friendly',         gender: 'm', accent: 'us', emoji: '☀️', type: 'ai' },
  { key: 'aura-2-zeus-en',    label: 'Zeus (Aura 2)',     desc: 'Powerful & commanding',   gender: 'm', accent: 'us', emoji: '⚡', type: 'ai' },
  { key: 'aura-orion-en',     label: 'Orion (Classic)',   desc: 'Deep voice',              gender: 'm', accent: 'us', emoji: '🌌', type: 'ai' },
  { key: 'aura-arcas-en',     label: 'Arcas (Classic)',   desc: 'Audiobook narrator',      gender: 'm', accent: 'us', emoji: '🎙️', type: 'ai' },
  { key: 'aura-perseus-en',   label: 'Perseus (Classic)', desc: 'Energetic voice',         gender: 'm', accent: 'us', emoji: '⚔️', type: 'ai' },
  { key: 'aura-angus-en',     label: 'Angus (Classic)',   desc: 'Scottish/Irish narrator', gender: 'm', accent: 'uk', emoji: '🏴󠁧󠁢󠁳󠁣󠁴󠁿', type: 'ai' },
  { key: 'aura-orpheus-en',   label: 'Orpheus (Classic)', desc: 'Smooth delivery',         gender: 'm', accent: 'us', emoji: '🎭', type: 'ai' },
  { key: 'aura-helios-en',    label: 'Helios (Classic)',  desc: 'Friendly tone',           gender: 'm', accent: 'us', emoji: '☀️', type: 'ai' },
  { key: 'aura-zeus-en',      label: 'Zeus (Classic)',    desc: 'Commanding tone',         gender: 'm', accent: 'us', emoji: '⚡', type: 'ai' },
];

// ── Browser Web Speech Voice Profiles ──
const BROWSER_PROFILES = [
  // Male Profiles
  { key: 'james_deep',  label: 'James',    desc: 'Deep & commanding',     type: 'deep', gender: 'm', accent: 'us', emoji: '🔊', targets: ['google us english male', 'alex', 'daniel', 'fred', 'microsoft david'], pitchOffset: -0.25, rateOffset: -0.05 },
  { key: 'marcus_deep', label: 'Marcus',   desc: 'Rich & authoritative',  type: 'deep', gender: 'm', accent: 'us', emoji: '🎙️', targets: ['fred', 'daniel', 'thomas', 'microsoft david', 'google us english male'], pitchOffset: -0.35, rateOffset: -0.08 },
  { key: 'noah',        label: 'Noah',     desc: 'Smooth & warm narrator', type: 'm',    gender: 'm', accent: 'us', emoji: '🎤', targets: ['alex', 'daniel', 'google us english male', 'microsoft david'], pitchOffset: -0.05, rateOffset: 0 },
  { key: 'oliver',      label: 'Oliver',   desc: 'Crisp British narrator', type: 'm',    gender: 'm', accent: 'uk', emoji: '🫖', targets: ['daniel', 'google uk english male', 'microsoft george', 'rishi'], pitchOffset: -0.08, rateOffset: -0.05 },
  { key: 'rishi_m',     label: 'Rishi',    desc: 'Articulate & clear',    type: 'm',    gender: 'm', accent: 'us', emoji: '👔', targets: ['rishi', 'google us english male', 'alex'], pitchOffset: 0, rateOffset: 0 },

  // Female Profiles
  { key: 'eleanor',     label: 'Eleanor',  desc: 'Expressive & captivating', type: 'f', gender: 'f', accent: 'us', emoji: '🌸', targets: ['samantha', 'victoria', 'google us english female', 'microsoft zira'], pitchOffset: 0.1, rateOffset: 0 },
  { key: 'claire',      label: 'Claire',   desc: 'Clear & bright',           type: 'f', gender: 'f', accent: 'us', emoji: '✨', targets: ['karen', 'moira', 'google us english female', 'microsoft zira'], pitchOffset: 0.2, rateOffset: 0.05 },
  { key: 'serena',      label: 'Serena',   desc: 'Elegant British female',   type: 'f', gender: 'f', accent: 'uk', emoji: '🌹', targets: ['kate', 'google uk english female', 'microsoft hazel', 'fiona'], pitchOffset: 0.05, rateOffset: -0.05 },
  { key: 'fiona_f',     label: 'Fiona',    desc: 'Warm & melodic',           type: 'f', gender: 'f', accent: 'uk', emoji: '🌿', targets: ['fiona', 'kate', 'google uk english female'], pitchOffset: 0.08, rateOffset: -0.02 },
  { key: 'maria',       label: 'Maria',    desc: 'Bright & cheerful',        type: 'ph',gender: 'f', accent: 'ph', emoji: '🌺', targets: ['google filipino', 'fil-ph', 'filipina', 'samantha'], pitchOffset: 0.08, rateOffset: 0.05 },
];

// ── Emotion presets ──
const EMOTIONS = {
  neutral:  { rate: 1.00, pitch: 1.00, label: 'Neutral'   },
  story:    { rate: 0.88, pitch: 0.97, label: 'Story'     },
  warm:     { rate: 0.92, pitch: 1.05, label: 'Warm'      },
  dramatic: { rate: 0.80, pitch: 0.90, label: 'Dramatic'  },
  calm:     { rate: 0.76, pitch: 0.93, label: 'Calm'      },
  news:     { rate: 1.12, pitch: 1.00, label: 'Newscast'  },
  intense:  { rate: 1.05, pitch: 0.85, label: 'Intense'   },
};

// ── Application State ──
let activeEngine        = 'deepgram'; // 'deepgram' or 'browser'
let selectedVoiceKey    = DEEPGRAM_VOICES[0].key;
let selectedEmotion     = 'neutral';
let selectedGenderFilter = 'all'; // 'all', 'f', 'm'
let systemVoices        = [];
let mappedBrowserVoices = {};

let audioContext        = null;
let audioAnalyser       = null;
let audioSource         = null;
let currentAudioObject  = null;
let currentAudioUrl     = null;
let utterance           = null;

let isSpeaking          = false;
let isPaused            = false;
let waveAnim            = null;
let timerInt            = null;
let startTime           = null;
let elapsedOffset       = 0;

const synth = window.speechSynthesis;

// ── Boot ──
window.addEventListener('load', () => {
  initEngineTabs();
  initGenderFilter();
  initApiKey();
  initBrowserVoices();
  initSliders();
  initEmotionChips();
  initTextarea();
  drawWave(false);

  // Set default active voice card
  renderVoiceGrid();

  document.getElementById('btnSpeak').addEventListener('click', speak);
  document.getElementById('btnPause').addEventListener('click', togglePause);
  document.getElementById('btnStop').addEventListener('click', stop);
});

// ── Gender Filter Switcher ──
function initGenderFilter() {
  const row = document.getElementById('genderFilterRow');
  if (!row) return;
  row.addEventListener('click', e => {
    const chip = e.target.closest('.gchip');
    if (!chip) return;
    row.querySelectorAll('.gchip').forEach(c => c.classList.remove('active'));
    chip.classList.add('active');
    selectedGenderFilter = chip.dataset.gender;
    renderVoiceGrid();
  });
}

// ── Engine Mode Switcher ──
function initEngineTabs() {
  const tabDeepgram = document.getElementById('tabDeepgram');
  const tabBrowser  = document.getElementById('tabBrowser');

  tabDeepgram.addEventListener('click', () => switchEngine('deepgram'));
  tabBrowser.addEventListener('click', () => switchEngine('browser'));
}

function switchEngine(engine) {
  activeEngine = engine;

  document.getElementById('tabDeepgram').classList.toggle('active', engine === 'deepgram');
  document.getElementById('tabBrowser').classList.toggle('active', engine === 'browser');

  const engineBadge = document.getElementById('engineBadge');
  const infoBar = document.getElementById('infoBar');
  const infoBarTxt = document.getElementById('infoBarTxt');
  const apiCard = document.getElementById('apiCard');
  const sysVoiceCard = document.getElementById('sysVoiceCard');
  const voiceGridTitle = document.getElementById('voiceGridTitle');
  const voiceCountBadge = document.getElementById('voiceCountBadge');

  if (engine === 'deepgram') {
    engineBadge.textContent = 'DEEPGRAM AI NEURAL';
    engineBadge.classList.remove('browser-mode');

    infoBar.classList.remove('browser-info');
    infoBarTxt.innerHTML = 'Powered by <strong>Deepgram Aura AI Voices</strong> for hyper-realistic speech &amp; direct MP3 downloads. Enter your API key on the right or switch to Browser Voices mode.';

    apiCard.style.display = 'block';
    sysVoiceCard.style.display = 'none';
    voiceGridTitle.textContent = 'AI Neural Voices';
    voiceCountBadge.textContent = `${DEEPGRAM_VOICES.length} Voices`;

    selectedVoiceKey = DEEPGRAM_VOICES[0].key;
  } else {
    engineBadge.textContent = 'BROWSER WEB SPEECH';
    engineBadge.classList.add('browser-mode');

    infoBar.classList.add('browser-info');
    infoBarTxt.innerHTML = 'Using <strong>Browser Web Speech Engine</strong>. Voices depend on your operating system and browser. Select a profile or pick directly from system voices below.';

    apiCard.style.display = 'none';
    sysVoiceCard.style.display = 'block';
    voiceGridTitle.textContent = 'Browser Voice Profiles';
    voiceCountBadge.textContent = `${BROWSER_PROFILES.length} Profiles`;

    selectedVoiceKey = BROWSER_PROFILES[0].key;
  }

  renderVoiceGrid();
}

// ── API Key Management ──
function initApiKey() {
  const keyInput = document.getElementById('apiKeyInput');
  const toggleBtn = document.getElementById('btnToggleKey');
  const statusMsg = document.getElementById('apiKeyStatus');

  const defaultKey = '8adad486ad7238df4b0f711e6395938d8f25b840';
  const savedKey = localStorage.getItem('velvet_deepgram_key') || defaultKey;
  keyInput.value = savedKey;
  localStorage.setItem('velvet_deepgram_key', savedKey);

  statusMsg.textContent = '✓ Ready: API Key active.';
  statusMsg.style.color = 'var(--green)';

  keyInput.addEventListener('input', () => {
    const val = keyInput.value.trim();
    if (val) {
      localStorage.setItem('velvet_deepgram_key', val);
      statusMsg.textContent = '✓ API Key saved.';
      statusMsg.style.color = 'var(--green)';
    } else {
      localStorage.removeItem('velvet_deepgram_key');
      statusMsg.textContent = 'Key cleared.';
      statusMsg.style.color = 'var(--muted)';
    }
  });

  toggleBtn.addEventListener('click', () => {
    keyInput.type = keyInput.type === 'password' ? 'text' : 'password';
  });
}

// ── Load Browser Voices & Deduplicate ──
function initBrowserVoices() {
  const sysSelect = document.getElementById('sysVoiceSelect');

  const loadVoices = () => {
    systemVoices = synth.getVoices();
    if (!systemVoices.length) return;

    // Deduplicate mapping for BROWSER_PROFILES
    mappedBrowserVoices = deduplicateVoiceMapping(systemVoices);

    // Populate direct dropdown
    sysSelect.innerHTML = '';
    const defaultOpt = document.createElement('option');
    defaultOpt.value = '';
    defaultOpt.textContent = '✦ Use Card Selection';
    sysSelect.appendChild(defaultOpt);

    systemVoices.forEach((v, idx) => {
      const opt = document.createElement('option');
      opt.value = idx;
      opt.textContent = `${v.name} (${v.lang})${v.default ? ' — Default' : ''}`;
      sysSelect.appendChild(opt);
    });

    if (activeEngine === 'browser') {
      renderVoiceGrid();
    }
  };

  loadVoices();
  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = loadVoices;
  }
  setTimeout(loadVoices, 500);
  setTimeout(loadVoices, 1500);
}

// Algorithm to ensure distinct cards don't share the same system voice when possible
function deduplicateVoiceMapping(voices) {
  const mapping = {};
  const usedVoiceNames = new Set();

  BROWSER_PROFILES.forEach(profile => {
    let chosen = null;

    // Priority 1: Exact keyword match not yet assigned
    for (const target of profile.targets) {
      const candidate = voices.find(v =>
        v.name.toLowerCase().includes(target.toLowerCase()) && !usedVoiceNames.has(v.name)
      );
      if (candidate) {
        chosen = candidate;
        break;
      }
    }

    // Priority 2: Keyword match even if assigned
    if (!chosen) {
      for (const target of profile.targets) {
        const candidate = voices.find(v => v.name.toLowerCase().includes(target.toLowerCase()));
        if (candidate) {
          chosen = candidate;
          break;
        }
      }
    }

    // Priority 3: Any voice of matching accent/language
    if (!chosen) {
      const lang = profile.accent === 'uk' ? 'en-GB' : 'en-US';
      chosen = voices.find(v => v.lang === lang && !usedVoiceNames.has(v.name))
        || voices.find(v => v.lang === lang)
        || voices[0];
    }

    if (chosen) {
      mapping[profile.key] = chosen;
      usedVoiceNames.add(chosen.name);
    }
  });

  return mapping;
}

// ── Render Voice Cards Grid ──
function renderVoiceGrid() {
  document.getElementById('voiceLoading').style.display = 'none';
  const grid = document.getElementById('voiceGrid');
  grid.style.display = 'flex';
  grid.innerHTML = '';

  const allProfiles = activeEngine === 'deepgram' ? DEEPGRAM_VOICES : BROWSER_PROFILES;
  const filteredProfiles = allProfiles.filter(p => {
    if (selectedGenderFilter === 'f') return p.gender === 'f';
    if (selectedGenderFilter === 'm') return p.gender === 'm';
    return true;
  });

  const voiceCountBadge = document.getElementById('voiceCountBadge');
  if (voiceCountBadge) {
    voiceCountBadge.textContent = `${filteredProfiles.length} Voices`;
  }

  filteredProfiles.forEach(profile => {
    const isDeepgram = activeEngine === 'deepgram';
    const avatarClass = isDeepgram
      ? (profile.gender === 'm' ? 'va-m' : 'va-f')
      : ({ deep: 'va-deep', m: 'va-m', f: 'va-f', ph: 'va-ph' }[profile.type] || 'va-m');

    const badgeText = isDeepgram ? 'AURA AI' : (profile.accent === 'uk' ? 'British' : 'American');
    const badgeClass = isDeepgram ? 'b-ai' : (profile.accent === 'uk' ? 'b-uk' : 'b-us');

    const card = document.createElement('div');
    card.className = 'vcard' + (profile.key === selectedVoiceKey ? ' active' : '');
    card.dataset.key = profile.key;

    let subMeta = '';
    if (isDeepgram) {
      subMeta = `<span style="color:var(--gold)">Studio HD</span>`;
    } else {
      const matched = mappedBrowserVoices[profile.key];
      subMeta = matched ? `· ${matched.name.slice(0, 18)}` : '· Native';
    }

    card.innerHTML = `
      <div class="vavatar ${avatarClass}">${profile.emoji}</div>
      <div class="vinfo">
        <div class="vname">${profile.label} ${profile.gender === 'f' ? '♀' : '♂'}</div>
        <div class="vmeta">${profile.desc} <span style="color:var(--muted)">${subMeta}</span></div>
      </div>
      <span class="vbadge ${badgeClass}">${badgeText}</span>
    `;

    card.addEventListener('click', () => {
      selectedVoiceKey = profile.key;
      document.querySelectorAll('.vcard').forEach(c =>
        c.classList.toggle('active', c.dataset.key === profile.key)
      );
      // Clear direct system voice select if card clicked
      if (document.getElementById('sysVoiceSelect')) {
        document.getElementById('sysVoiceSelect').value = '';
      }
    });

    grid.appendChild(card);
  });
}

// ── Main Speak Dispatcher ──
function speak() {
  const rawText = document.getElementById('textInput').value.trim();
  if (!rawText) { setStatus('error', 'Please enter some text first.'); return; }

  stop(); // Stop any ongoing speech or playback

  if (activeEngine === 'deepgram') {
    speakDeepgram(rawText);
  } else {
    speakBrowser(rawText);
  }
}

// ── Speak via Deepgram Aura TTS API ──
async function speakDeepgram(text) {
  const apiKey = (localStorage.getItem('velvet_deepgram_key') || '').trim();
  if (!apiKey) {
    setStatus('error', 'Deepgram API Key required. Please enter your API key or switch to Browser Voices.');
    document.getElementById('apiKeyInput').focus();
    return;
  }

  const voiceObj = DEEPGRAM_VOICES.find(v => v.key === selectedVoiceKey) || DEEPGRAM_VOICES[0];
  const rateVal = parseFloat(document.getElementById('rateSlider').value);

  setStatus('active', `Generating Deepgram AI voice for ${voiceObj.label}…`);
  setBtnState('speaking');
  startWave();

  try {
    const response = await fetch(`https://api.deepgram.com/v1/speak?model=${voiceObj.key}`, {
      method: 'POST',
      headers: {
        'Authorization': `Token ${apiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ text: text })
    });

    if (!response.ok) {
      let errText = '';
      try {
        const errJson = await response.json();
        errText = errJson.err_msg || errJson.message || response.statusText;
      } catch (_) {
        errText = response.statusText;
      }
      throw new Error(`API Error (${response.status}): ${errText || 'Invalid API Key or quota exceeded'}`);
    }

    const audioBlob = await response.blob();
    if (currentAudioUrl) URL.revokeObjectURL(currentAudioUrl);
    currentAudioUrl = URL.createObjectURL(audioBlob);

    // Update player and download button
    const audioWrap = document.getElementById('audioWrap');
    const audioPlayer = document.getElementById('audioPlayer');
    const dlBtn = document.getElementById('dlBtn');

    audioPlayer.src = currentAudioUrl;
    audioPlayer.playbackRate = rateVal;
    dlBtn.href = currentAudioUrl;
    dlBtn.download = `velvet-voice-${voiceObj.label.toLowerCase()}.mp3`;

    audioWrap.classList.add('visible');

    // Connect Web Audio API for frequency visualizer
    setupAudioContext(audioPlayer);

    audioPlayer.onplay = () => {
      isSpeaking = true;
      isPaused = false;
      setBtnState('speaking');
      setStatus('active', `Playing ${voiceObj.label} (${voiceObj.desc})`);
      startWave();
      startTimer();
    };

    audioPlayer.onpause = () => {
      if (audioPlayer.ended) return;
      isPaused = true;
      setStatus('', 'Paused.');
      stopWave();
      stopTimer();
    };

    audioPlayer.onended = () => {
      isSpeaking = false;
      isPaused = false;
      setBtnState('idle');
      setStatus('done', `✓ Done. ${voiceObj.label} finished speaking.`);
      stopWave();
      stopTimer();
    };

    audioPlayer.onerror = () => {
      isSpeaking = false;
      setBtnState('idle');
      setStatus('error', 'Audio playback error.');
      stopWave();
      stopTimer();
    };

    await audioPlayer.play();

  } catch (err) {
    isSpeaking = false;
    setBtnState('idle');
    stopWave();
    stopTimer();
    setStatus('error', err.message);
    console.error('Deepgram TTS Error:', err);
  }
}

// ── Web Audio API Visualizer Connection ──
function setupAudioContext(audioEl) {
  try {
    if (!audioContext) {
      audioContext = new (window.AudioContext || window.webkitAudioContext)();
      audioAnalyser = audioContext.createAnalyser();
      audioAnalyser.fftSize = 64;
      audioSource = audioContext.createMediaElementSource(audioEl);
      audioSource.connect(audioAnalyser);
      audioAnalyser.connect(audioContext.destination);
    }
    if (audioContext.state === 'suspended') {
      audioContext.resume();
    }
  } catch (e) {
    console.warn('AudioContext setup warning:', e);
  }
}

// ── Speak via Browser Web Speech API ──
function speakBrowser(text) {
  synth.cancel();
  clearAudioPlayer();
  elapsedOffset = 0;

  const sysSelect = document.getElementById('sysVoiceSelect');
  const profile = BROWSER_PROFILES.find(p => p.key === selectedVoiceKey) || BROWSER_PROFILES[0];
  const emotion = EMOTIONS[selectedEmotion];

  const baseRate  = parseFloat(document.getElementById('rateSlider').value);
  const basePitch = parseFloat(document.getElementById('pitchSlider').value);
  const vol       = parseFloat(document.getElementById('volSlider').value);

  const finalRate  = clamp(baseRate  * emotion.rate  + (profile.rateOffset  || 0), 0.5, 2.0);
  const finalPitch = clamp(basePitch * emotion.pitch + (profile.pitchOffset || 0), 0.1, 2.0);

  utterance = new SpeechSynthesisUtterance(applyEmotionText(text, selectedEmotion));
  utterance.rate   = finalRate;
  utterance.pitch  = finalPitch;
  utterance.volume = vol;

  // Determine target voice
  let voiceToUse = null;
  if (sysSelect && sysSelect.value !== '') {
    voiceToUse = systemVoices[parseInt(sysSelect.value, 10)];
  } else {
    voiceToUse = mappedBrowserVoices[profile.key] || systemVoices[0] || null;
  }

  if (voiceToUse) utterance.voice = voiceToUse;

  utterance.onstart = () => {
    isSpeaking = true;
    isPaused = false;
    setBtnState('speaking');
    const nameUsed = voiceToUse ? voiceToUse.name : profile.label;
    setStatus('active', `Speaking as ${nameUsed} · ${emotion.label} tone`);
    startWave();
    startTimer();
  };

  utterance.onend = () => {
    isSpeaking = false;
    isPaused = false;
    setBtnState('idle');
    setStatus('done', `✓ Done finished speaking.`);
    stopWave();
    stopTimer();
  };

  utterance.onerror = (e) => {
    if (e.error === 'interrupted' || e.error === 'canceled') return;
    isSpeaking = false;
    setBtnState('idle');
    setStatus('error', `Speech error: ${e.error}. Try another voice.`);
    stopWave();
    stopTimer();
  };

  synth.speak(utterance);
}

// ── Pause / Resume ──
function togglePause() {
  if (!isSpeaking) return;

  if (activeEngine === 'deepgram') {
    const audioPlayer = document.getElementById('audioPlayer');
    if (audioPlayer.paused) {
      audioPlayer.play();
      isPaused = false;
      document.getElementById('btnPause').textContent = 'Pause';
      setStatus('active', 'Resumed…');
      startTimer();
      startWave();
    } else {
      audioPlayer.pause();
      isPaused = true;
      document.getElementById('btnPause').textContent = 'Resume';
      setStatus('', 'Paused.');
      stopTimer();
      stopWave();
    }
  } else {
    if (isPaused) {
      synth.resume();
      isPaused = false;
      document.getElementById('btnPause').textContent = 'Pause';
      setStatus('active', 'Resumed…');
      startTimer();
      startWave();
    } else {
      synth.pause();
      isPaused = true;
      document.getElementById('btnPause').textContent = 'Resume';
      setStatus('', 'Paused.');
      stopTimer();
      stopWave();
    }
  }
}

// ── Stop ──
function stop() {
  if (activeEngine === 'deepgram') {
    const audioPlayer = document.getElementById('audioPlayer');
    audioPlayer.pause();
    audioPlayer.currentTime = 0;
  }
  synth.cancel();

  isSpeaking = false;
  isPaused = false;
  setBtnState('idle');
  setStatus('', 'Stopped.');
  stopWave();
  stopTimer();
  document.getElementById('btnPause').textContent = 'Pause';
}

// ── Text pre-processing ──
function applyEmotionText(text, emotion) {
  let t = text;
  if (emotion === 'dramatic' || emotion === 'story') {
    t = t.replace(/([.!?])\s+/g, '$1   ').replace(/—/g, ', ');
  }
  if (emotion === 'calm') {
    t = t.replace(/([.!?])\s+/g, '$1    ').replace(/,/g, ',  ');
  }
  return t;
}

// ── UI State ──
function setBtnState(state) {
  const btn = document.getElementById('btnSpeak');
  if (state === 'speaking') {
    btn.innerHTML = `<svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/></svg> Speaking…`;
    btn.classList.add('speaking');
  } else {
    btn.innerHTML = `<svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg> Generate &amp; Speak`;
    btn.classList.remove('speaking');
  }
}

function setStatus(type, msg) {
  const dot = document.getElementById('sdot');
  dot.className = 'sdot' + (type ? ' ' + type : '');
  document.getElementById('statusTxt').textContent = msg;
}

// ── Waveform Canvas Visualizer ──
const canvas = document.getElementById('waveform');
const ctx    = canvas.getContext('2d');

function drawWave(active) {
  const w = canvas.offsetWidth || 500;
  const h = 44;
  canvas.width = w;
  canvas.height = h;
  ctx.clearRect(0, 0, w, h);

  const barW = 3;
  const gap  = 3;
  const bars = Math.floor(w / (barW + gap));

  let freqData = null;
  if (active && audioAnalyser) {
    freqData = new Uint8Array(audioAnalyser.frequencyBinCount);
    audioAnalyser.getByteFrequencyData(freqData);
  }

  for (let i = 0; i < bars; i++) {
    let amp = 3;
    if (active) {
      if (freqData && freqData.length > 0) {
        const val = freqData[i % freqData.length];
        amp = (val / 255) * (h * 0.85) + 3;
      } else {
        const t = Date.now() / 1000;
        amp = Math.abs(Math.sin(t * 3.5 + i * 0.38) * Math.cos(t * 1.2 + i * 0.15)) * (h * 0.42) + 3;
      }
    }

    const x = i * (barW + gap);
    const y = (h - amp) / 2;

    ctx.fillStyle = active
      ? `rgba(176, 141, 87, ${0.5 + Math.abs(Math.sin(i * 0.3)) * 0.5})`
      : '#c9b99a';

    ctx.beginPath();
    if (ctx.roundRect) ctx.roundRect(x, y, barW, amp, 1.5);
    else ctx.rect(x, y, barW, amp);
    ctx.fill();
  }
}

function startWave() {
  clearInterval(waveAnim);
  waveAnim = setInterval(() => drawWave(true), 40);
}
function stopWave() {
  clearInterval(waveAnim);
  waveAnim = null;
  drawWave(false);
}

// ── Timer ──
function startTimer() {
  startTime = Date.now();
  clearInterval(timerInt);
  timerInt = setInterval(() => {
    const totalMs = (Date.now() - startTime) + elapsedOffset;
    const s  = Math.floor(totalMs / 1000);
    const m  = Math.floor(s / 60).toString().padStart(2, '0');
    const sc = (s % 60).toString().padStart(2, '0');
    document.getElementById('playTime').textContent = `${m}:${sc}`;
  }, 200);
}
function stopTimer() {
  clearInterval(timerInt);
  timerInt = null;
}

// ── Emotion Chips ──
function initEmotionChips() {
  document.getElementById('emotionRow').addEventListener('click', e => {
    const chip = e.target.closest('.chip');
    if (!chip) return;
    document.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
    chip.classList.add('active');
    selectedEmotion = chip.dataset.e;

    const em = EMOTIONS[selectedEmotion];
    document.getElementById('rateSlider').value  = em.rate;
    document.getElementById('pitchSlider').value = em.pitch;
    document.getElementById('rateVal').textContent  = em.rate.toFixed(2) + '×';
    document.getElementById('pitchVal').textContent = em.pitch.toFixed(2);
  });
}

// ── Sliders ──
function initSliders() {
  document.getElementById('rateSlider').addEventListener('input', e => {
    const val = parseFloat(e.target.value);
    document.getElementById('rateVal').textContent = val.toFixed(2) + '×';
    const audioPlayer = document.getElementById('audioPlayer');
    if (audioPlayer) audioPlayer.playbackRate = val;
  });
  document.getElementById('pitchSlider').addEventListener('input', e => {
    document.getElementById('pitchVal').textContent = parseFloat(e.target.value).toFixed(2);
  });
  document.getElementById('volSlider').addEventListener('input', e => {
    const val = parseFloat(e.target.value);
    document.getElementById('volVal').textContent = Math.round(val * 100) + '%';
    const audioPlayer = document.getElementById('audioPlayer');
    if (audioPlayer) audioPlayer.volume = val;
  });
}

// ── Textarea ──
function initTextarea() {
  const ta = document.getElementById('textInput');
  const updateCount = () => {
    document.getElementById('charCount').textContent = ta.value.length + ' / 5000';
  };
  ta.addEventListener('input', updateCount);
  updateCount();

  ta.addEventListener('keydown', e => {
    if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
      e.preventDefault();
      speak();
    }
  });
}

function clearAudioPlayer() {
  const wrap = document.getElementById('audioWrap');
  wrap.classList.remove('visible');
}

function clamp(val, min, max) {
  return Math.min(max, Math.max(min, val));
}

window.addEventListener('resize', () => {
  if (!isSpeaking) drawWave(false);
});

// Shortcuts
document.addEventListener('keydown', e => {
  if (e.target.tagName === 'TEXTAREA' || e.target.tagName === 'INPUT') return;
  if (e.code === 'Space') {
    e.preventDefault();
    isSpeaking ? togglePause() : speak();
  }
  if (e.code === 'Escape') {
    stop();
  }
});
