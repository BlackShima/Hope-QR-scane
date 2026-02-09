// Namelist and audio sources
const teacherList = [
    { nameEN: "Ajarn Somchai", nameJP: "ソムチャイ先生", audio: "audio/teacher1.mp3" },
    { nameEN: "Ajarn Yuki", nameJP: "ユキ先生", audio: "audio/teacher2.mp3" },
    { nameEN: "Ajarn John", nameJP: "ジョン先生", audio: "audio/teacher3.mp3" }
];

const randomBtn = document.getElementById('random-btn');
const nameDisplay = document.getElementById('teacher-name');
const audioPlayer = document.getElementById('blessing-audio');

randomBtn.addEventListener('click', () => {

    const randomIndex = Math.floor(Math.random() * teacherList.length);
    const selected = teacherList[randomIndex];

    nameDisplay.innerText = selected.nameEN;

    audioPlayer.src = selected.audio;
    audioPlayer.load(); 
    
    alert("Random Complete! Please press play to hear the blessing.");
});

const translations = {
    en: {
        title: "Random For Blessing",
        randomBtn: "Random",
        instruction: "Click Random to Start",
        statusComplete: "Random Complete! Press play to hear the blessing."
    },
    jp: {
        title: "おみくじ (Blessing)",
        randomBtn: "ランダム (Random)",
        instruction: "開始するにはランダムをクリックしてください",
        statusComplete: "おみくじ完了！再生ボタンを押して聞いてください。"
    }
};

let currentLang = 'en';

function switchLanguage(lang) {
    currentLang = lang;
    
    document.getElementById('title').innerText = translations[lang].title;
    document.getElementById('random-btn').innerText = translations[lang].randomBtn;
    document.getElementById('teacher-name').innerText = translations[lang].instruction;
    
    document.getElementById('lang-en').classList.toggle('active', lang === 'en');
    document.getElementById('lang-jp').classList.toggle('active', lang === 'jp');
}

randomBtn.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * teacherList.length);
    const selected = teacherList[randomIndex];

    nameDisplay.innerText = (currentLang === 'en') ? selected.nameEN : selected.nameJP;
    
    audioPlayer.src = selected.audio;
    audioPlayer.load();
});