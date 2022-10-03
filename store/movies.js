export const state = () => ({
    movies: [],
})

export const getters = {
    getAllMovies(state) {
        return state.movies
    }
}

export const actions = {
    async fetchAllMovies({ commit }) {
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '2IoOFziLK4msheCek4JXEsRxm4Zzp1s42GsjsnaKmY8qOZWI5W',
                'X-RapidAPI-Host': 'utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com'
            }
        }
        await this.$axios.$get('https://utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com/idlookup?source_id=tt3398228&source=imdb&country=us', options)
            .then(response => {
                commit('SET_MOVIES', response)
                console.log(response, "FIRST THEN")
            })
            .then(response => console.log(response, "SECOND THEN"))
            .catch(err => console.error(err));
    }
}

export const mutations = {
    SET_MOVIES(state, movies) {
        state.movies = movies
    }
}