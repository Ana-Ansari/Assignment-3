document.addEventListener('DOMContentLoaded', function() {
	
	(async function() {
		const response = await fetch('./data.json');
		const movies = await response.json();
		// console.log(movies);

		
		const inputGenre = document.getElementById('genre');
		const inputYear = document.getElementById('year');
		const inputLang = document.getElementById('lang');
		// const inputRating = document.getElementById('rating');
		const searchBtn = document.getElementById('searchBtn');
		const tableBody = document.getElementById('tableBody');
		
		function displayResults(results) {
			tableBody.innerHTML = '';
			results.forEach(function(movie) {
				const row = document.createElement('tr');
				const body = `
				<td>${movie.id}</td>
				<td><img class="image" src="https://image.tmdb.org/t/p/w45${movie.poster_path}"</td>
				<td><div id="title">${movie.title}</div> <div id="cert">${movie.certification}</div> <div id="gen">${movie.genres}</div></td>
				<td>${movie.release_date}</td>
				`;
				row.innerHTML = body;
				tableBody.appendChild(row);
			});
		}	
		
		function search() {
			const genreQuery = inputGenre.value.toLowerCase();
			const yearQuery = inputYear.value.toLowerCase();
			const langQuery = inputLang.value.toLowerCase();
			// const ratingQuery = inputRating.value;
			
            
			const result = movies.filter(function(movie) {
				return (
					movie.release_date.includes(yearQuery) &&
					movie.original_language.toLowerCase().includes(langQuery) &&
					movie.genres.toString(',').toLowerCase().includes(genreQuery)
                    // movie.rating.toString(',').toLowerCase().includes(ratingQuery)
					);
				});
				console.log(result);
				displayResults(result);
				
			}
			
			searchBtn.addEventListener('click', search);

    })();
		});