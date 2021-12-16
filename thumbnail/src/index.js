const title = document.getElementById("title");
const artist = document.getElementById("artist");
const album = document.getElementById("album");

onLoad();

async function onLoad() {
    let songData = await fetch("../chart/song.ini");
    songData = await songData.text();
    songData = parseINIString(songData);

    console.log(songData)
    title.innerHTML = "<b>Title: </b>" + songData.Song.name
    artist.innerHTML = "<b>Artist: </b>" + songData.Song.artist
    album.innerHTML = "<b>Album: </b>" + songData.Song.album

    let chart = getChartData();
    console.log(await chart);
}

async function getChartData() {
    let chart = await fetch("../chart/notes.chart");
    chart = await chart.text();
    chart = parseINIString(chart)

    // console.log(chart)
    return chart
}