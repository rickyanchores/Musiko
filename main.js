let result = document.querySelector(".result")
let btn = document.querySelector(".btn")



const fetchData = async () => {
	
    //GET API from RAPID API //
    let url = 'https://genius-song-lyrics1.p.rapidapi.com/artist/songs/?id=344497&per_page=20&page=1';
  
    const options = {
	method: 'GET',
	headers: {
		'content-type': 'application/octet-stream',
		'X-RapidAPI-Key': 'bc22f11f37mshcbe9e742a1ed8cap1c4dbcjsna5ccd20c55bc',
		'X-RapidAPI-Host': 'genius-song-lyrics1.p.rapidapi.com'
	}
  }
  ////////////////////////////////////////////////////////////
  try{
  	let resolve = await fetch(url,options)
    let data = await resolve.json()
    console.log(data.songs[0])
    return data
  }
  catch(error){
  	console.log("Something went wrong", error)
  }
}

const renderData = async () => {
	let data = await fetchData()
  let songs = data.songs[0]
  let content = `<p>Title: ${songs.full_title}</p>
  								<p>Artist: ${songs.artist_names}</p>
                  <p>Url: <a href="${songs.url}" target="_blank">Lyrics</a> </p>`
  
  
  result.innerHTML = content
  console.log("render")
}



btn.addEventListener("click", () => {
	renderData()
})