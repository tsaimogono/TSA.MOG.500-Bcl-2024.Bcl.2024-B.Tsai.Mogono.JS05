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
generatePlaylist(guardians, songs);**/



/*const guardians = {
    "Star-Lord": "Rock",
    "Gamora": "Pop",
    "Drax": "Pop",
    "Rocket": "Rock",
    "Groot": "R&B"
};
function generatePlaylist(guardians, songs) {
    const playlists = Object.keys(guardians).map(guardian => {
        const playlist = songs.filter(song => song.genre === guardians[guardian]);
        return {
            guardian,
            playlist
        };
    });
    return playlists;
}
const playlists = generatePlaylist(guardians, songs);
const playlistsDiv = document.getElementById("playlists");

playlists.forEach((playlist) => {
    const playlistDiv = document.createElement("div");
    const h3 = document.createElement("h3");
    h3.textContent = `${playlist.guardian}'s Playlist`;
    playlistDiv.appendChild(h3);

    const ul = document.createElement("ul");
    playlist.playlist.forEach((song) => {
        const li = document.createElement("li");
        li.textContent = `${song.title} - ${song.artist}`;
        ul.appendChild(li);
    });
    playlistDiv.appendChild(ul);

    playlistsDiv.appendChild(playlistDiv);
});**/


const guardians = {
    "Star-Lord": "Rock",
    "Gamora": "Pop",
    "Drax": "Rock",
    "Rocket": "Pop",
    "Groot": "Rock"
};
function generatePlaylist(guardians, songs) {
    return Object.entries(guardians).map(([guardian, genre]) => {
        const playlist = songs.filter(song => song.genre === genre).map(song => song.title);
        return { guardian, playlist };
    });
}
const playlistsContainer = document.getElementById('playlists');
const playlists = generatePlaylist(guardians, songs);

playlists.forEach(({ guardian, playlist }) => {
    const playlistElement = document.createElement('div');
    playlistElement.innerHTML = `<h3>${guardian}'s Playlist</h3><ul>${playlist.map(song => `<li>${song}</li>`).join('')}</ul>`;
    playlistsContainer.appendChild(playlistElement);
});
