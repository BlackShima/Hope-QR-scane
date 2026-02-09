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