const songs = [
        "The Beatles - Eleanor Rigby",
        "Hozier - Take Me To Church (Official Video)",
        "Lana Del Rey - Young and Beautiful (Official Music Video)",
        "The Neighbourhood - A Little Death",
        "Vampire Weekend - Campus (Album)",
];

const player = document.getElementById('player')

function createSongList() {
        const list = document.createElement("ol");
        for (let i = 0; i < songs.length; i++){
            const item = document.createElement("li");
            item.appendChild(document.createTextNode(songs[i]));
            list.appendChild(item);

        }
        return list
}


const songList = document.getElementById("songsList")
songList.appendChild(createSongList());

const links = document.querySelectorAll('li');
for(const link of links) {
        link.addEventListener('click', setSong)
}


function setSong(e) {
        document.getElementById('pic').classList.remove('pulse')
        const source = document.getElementById('source')
        source.src = "songs/" + e.target.innerText + ".mp3";

        document.querySelector('#currentSong').innerText = `Now Playing: ${e.target.innerText}`

        
        player.load();
        player.play();

        document.getElementById('pic').classList.add('pulse')


}

function playAudio() {
       
       if(player.readyState) {
        player.play();
       }
       

}
function pauseAudio() {
        player.pause();
}

const slider = document.getElementById('volumeSlider');
slider.oninput = function(e) {
        const volume = e.target.value;
        player.volume = volume;
}

function updateProgress() {
        if(player.currentTime > 0) {
                const progressBar = document.getElementById('progress');
        progressBar.value = (player.currentTime / player.duration ) * 100
        }
        
}



