<template>
  <div class="container">
    <div>
      <v-btn
        class="go_top_button md-5 mr-3"
        elevation="2"
        rounded
        outlined
        small
        color="green"
        @click="$fetch"
        >Refresh List</v-btn
      >
    </div>
    <div class="container">
      <p v-if="$fetchState.pending">Fetching Movies...</p>
      <p v-else-if="$fetchState.error">An error occurred :(</p>
      <div v-else>
        <h1>Movies</h1>
        <p>
          This page is an example of API consumption using FECTH to get the data
          we're using on this project on this specific page. The API is
          available at RapidAPI as Streaming Availability, and to request the
          data, we need to create access to the platform and then use the
          credentials.
        </p>
        <ul>
          <div v-for="item of movies[0]" :key="item.id">
            <div class="movies-card">
              <v-row>
                <v-col>
                  <v-row class="">
                    <v-col class="center" align-self="center">
                      <h2>{{ item.originalTitle }}</h2>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col align-self="center">
                      <v-chip class="ma-2" color="green" outlined small>
                        {{ item.year }}
                      </v-chip>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col>
                      <p>{{ item.overview }}</p>
                    </v-col>
                  </v-row>
                  <v-row>
                    <div v-for="genre of item.genres" :key="genre.id">
                      <div v-for="desc of genresArray" :key="desc.id">
                        <div v-if="genre == desc.id">
                          <v-chip class="ma-2" color="black">
                            {{ desc.name }}
                          </v-chip>
                        </div>
                      </div>
                    </div>
                  </v-row>
                  <div class="center" align-self="center">
                    <v-row>
                      <v-col class="stars col-lg-4 col-md-6 col-sm-8">
                        <v-rating
                          background-color="green lighten-2"
                          color="blue"
                          hover
                          length="5"
                          size="22"
                        ></v-rating>
                      </v-col>
                      <v-col class="col-lg-2 col-md-2 col-sm-4">
                        <v-chip class="ma-2" small color="green">
                          {{ item.imdbRating / 10 }}
                        </v-chip>
                      </v-col>
                    </v-row>
                  </div>
                </v-col>
                <v-col>
                  <img
                    class="background-img"
                    :src="item.backdropURLs.original"
                    :alt="item.alt"
                  />
                </v-col>
              </v-row>
            </div>
          </div>
        </ul>
        <div>
          <v-btn
            class="go_top_button md-5 mr-3"
            elevation="2"
            rounded
            outlined
            small
            color="green"
            @click="pageUp"
            >Page Up</v-btn
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ENV from '@/env'
export default {
  data() {
    return {
      movies: [],
      genresArray: [
        { id: 1, name: "Biography" },
        { id: 2, name: "Film Noir" },
        { id: 3, name: "Game Show" },
        { id: 4, name: "Musical" },
        { id: 5, name: "Sport" },
        { id: 6, name: "Short" },
        { id: 7, name: "Adult" },
        { id: 12, name: "Adventure" },
        { id: 14, name: "Fantasy" },
        { id: 16, name: "Animation" },
        { id: 18, name: "Drama" },
        { id: 27, name: "Horror" },
        { id: 28, name: "Action" },
        { id: 35, name: "Comedy" },
        { id: 36, name: "History" },
        { id: 37, name: "Western" },
        { id: 53, name: "Thriller" },
        { id: 80, name: "Crime" },
        { id: 99, name: "Documentary" },
        { id: 878, name: "Science Fiction" },
        { id: 9648, name: "Mystery" },
        { id: 10402, name: "Music" },
        { id: 10749, name: "Romance" },
        { id: 10751, name: "Family" },
        { id: 10752, name: "War" },
        { id: 10763, name: "News" },
        { id: 10764, name: "Reality" },
        { id: 10767, name: "Talk Show" },
      ],
    };
  },
  async fetch() {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": ENV.moviesAPI.key,
        "X-RapidAPI-Host": ENV.moviesAPI.host,
      },
    };
    await fetch(
      "https://streaming-availability.p.rapidapi.com/search/basic?country=us&service=netflix&type=movie&genre=18&page=1&output_language=en&language=en",
      options
    )
      .then((response) => response.json())
      .then((response) => {
        this.pushMovies(response.results);
      })
      .then((response) => console.log(response))
      .catch((err) => console.error(err));
  },
  methods: {
    pushMovies(data) {
      this.movies.push(data);
    },
    pageUp() {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    },
  },
};
</script>

<style scoped>
.movies-card {
  max-width: 200em;
  background-color: #1f1f29;
  margin: 1em;
  word-wrap: break-word;
  padding: 1em;
}
.background-img {
  max-width: 80%;
  max-height: 100%;
  float: right;
  mask-image: linear-gradient(to left, rgba(0, 0, 0, 1) 50%, transparent 100%);
}
.stars {
  text-align: right;
  margin-right: 1em;
}
.go_top_button {
  float: right;
}
</style>