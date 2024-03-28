/*
// Array of song objects. Add at least 5 songs with title, artist, and genre properties.
const songs = [
    { title: "Hooked on a Feeling", artist: "Blue Swede", genre: "Pop" },
    { title: "Moonage Daydream", artist: "David Bowie", genre: "Rock" },
    { title: "I Want You Back", artist: "The Jackson 5", genre: "Pop" },
    { title: "Spirit in the Sky", artist: "Norman Greenbaum", genre: "Rock" },
    { title: "Cherry Bomb", artist: "The Runaways", genre: "Rock" },
    { title: "Escape (The Piña Colada Song)", artist: "Rupert Holmes", genre: "Pop" },
    { title: "O-O-H Child", artist: "The Five Stairsteps", genre: "R&B" },
    { title: "Ain't No Mountain High Enough", artist: "Marvin Gaye & Tammi Terrell", genre: "R&B" },
    { title: "Come and Get Your Love", artist: "Redbone", genre: "Rock" },
    { title: "I'm Not in Love", artist: "10cc", genre: "Pop" },
    { title: "Fooled Around and Fell in Love", artist: "Elvin Bishop", genre: "Rock" },
    // Feel free to add even more songs
];


// Object containing each Guardian's preferred genre
const guardians = {
    "Star-Lord": "Rock",
    "Gamora": "Pop",
    // Add preferences for Drax, Rocket, and Groot
};

// Function to generate playlist based on preferred genre
function generatePlaylist(guardians, songs) {
    // Use the map() function to create playlists for each Guardian
    // Your code here
}

// Call generatePlaylist and display the playlists for each Guardian
generatePlaylist(guardians, songs);*/
// Array of song objects. Add at least 5 songs with title, artist, and genre properties.

const songs = [
    { title: "Hooked on a Feeling", artist: "Blue Swede", genre: "Pop" },
    { title: "Moonage Daydream", artist: "David Bowie", genre: "Rock" },
    { title: "I Want You Back", artist: "The Jackson 5", genre: "Pop" },
    { title: "Spirit in the Sky", artist: "Norman Greenbaum", genre: "Rock" },
    { title: "Cherry Bomb", artist: "The Runaways", genre: "Rock" },
    { title: "Escape (The Piña Colada Song)", artist: "Rupert Holmes", genre: "Pop" },
    { title: "O-O-H Child", artist: "The Five Stairsteps", genre: "R&B" },
    { title: "Ain't No Mountain High Enough", artist: "Marvin Gaye & Tammi Terrell", genre: "R&B" },
    { title: "Come and Get Your Love", artist: "Redbone", genre: "Rock" },
    { title: "I'm Not in Love", artist: "10cc", genre: "Pop" },
    { title: "Fooled Around and Fell in Love", artist: "Elvin Bishop", genre: "Rock" },
    { title: "Bohemian Rhapsody", artist: "Queen", genre: "Rock" },
    { title: "Dancing Queen", artist: "ABBA", genre: "Pop" },
    { title: "Back in Black", artist: "AC/DC", genre: "Rock" },
    { title: "Thriller", artist: "Michael Jackson", genre: "Pop" },
    { title: "Sweet Child o' Mine", artist: "Guns N' Roses", genre: "Rock" }
];

// Object containing each Guardian's preferred genre
const guardians = {
    "Star-Lord": "Rock",
    "Gamora": "Pop",
    "Drax": "R&B",
    "Rocket": "Pop",
    "Groot": "Rock"
};


function generatePlaylist(guardians, songs) {
    const playlists = Object.entries(guardians).map(([guardian, genre]) => {
        const filteredSongs = songs.filter((song) => song.genre === genre);
        return { 
            guardian: guardian,
            playlist: filteredSongs };
    });
    return playlists;

}


const playlists = generatePlaylist(guardians, songs);
displayPlaylists(playlists);


function displayPlaylists(playlists) {

    const playlistsContainer = document.getElementById("playlists");
    playlists.forEach((playlist) => {
        const playlistDiv = document.createElement("div");
        playlistDiv.classList.add("playlist");
        const h4 = document.createElement("h4");
        // const ul = document.createElement("ul");
        h4.textContent = `${playlist.guardian}'s Playlist:`;
        playlistDiv.appendChild(h4);

        playlist.playlist.forEach((song) => {
            const p = document.createElement("p");
            p.classList.add("song");
            // li.classList.add("song-title");
            const songT = document.createElement("span")
            songT.classList.add("song-title")
            songT.textContent = song.title
            p.appendChild(songT);

            const songA = document.createElement("span")

            songA.textContent = ` by ${song.artist}`;
            p.appendChild(songA);
            // p.textContent = `${song.title}` ;
          
            playlistDiv.appendChild(p);
        });
        
        playlistsContainer.appendChild(playlistDiv);
    });
}
