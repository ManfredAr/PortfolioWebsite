document.addEventListener("DOMContentLoaded", () => {
    const gcseButton = document.getElementById("gcse-but");
    const alevelButton = document.getElementById("alevel-but");
    const uniButton = document.getElementById("uni-but");

    const gcseDiv = document.getElementById("gcse");
    const alevelDiv = document.getElementById("alevel");
    const uniDiv = document.getElementById("uni");

    gcseButton.addEventListener("click", () => {
        gcseDiv.style.display = "block";
        alevelDiv.style.display = "none";
        uniDiv.style.display = "none";
    });

    alevelButton.addEventListener("click", () => {
        gcseDiv.style.display = "none";
        alevelDiv.style.display = "block";
        uniDiv.style.display = "none";
    });

    uniButton.addEventListener("click", () => {
        gcseDiv.style.display = "none";
        alevelDiv.style.display = "none";
        uniDiv.style.display = "block";
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const twitter = document.getElementById("twitter-but");
    const spotify = document.getElementById("spotify-but");

    const twitterDiv = document.getElementById("clone");
    const spotifyDiv = document.getElementById("spotify");

    twitter.addEventListener("click", () => {
        twitterDiv.style.display = "block";
        spotifyDiv.style.display = "none";
    });

    spotify.addEventListener("click", () => {
        twitterDiv.style.display = "none";
        spotifyDiv.style.display = "block";
    });
});
