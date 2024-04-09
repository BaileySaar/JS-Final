
const container = document.querySelector('#container')
const movieDiv = document.querySelector('#movie')
const previousBtn = container.querySelector('#previous')
const nextBtn = container.querySelector('#next')
const quoteP = movieDiv.querySelector('.quote')
const movieP = movieDiv.querySelector('.movie')

let currentId = 0

const fetchMovie = async (url) => {
	console.log(url)
	const response = await fetch(url)
	const { id, quote, movie, imageUrl } = await response.json()
	currentId = parseInt(id)
	
	quoteP.textContent = quote
	movieP.textContent = movie
	movieDiv.style.backgroundImage = `url(${imageUrl})`
}

fetchMovie('/api/v1/movie/random')

previousBtn.addEventListener('click', () => fetchMovie(`/api/v1/movie/${currentId - 1}`))
nextBtn.addEventListener('click', () => fetchMovie(`/api/v1/movie/${currentId + 1}`))