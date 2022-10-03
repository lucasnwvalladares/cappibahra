# PAGES

## `movies`

This page is an example of API consumption using FECTH to get the data we're using on this project on this specific page. The API is available at RapidAPI as Streaming Availability, and to request the data, we need to create access to the platform and then use the credentials.

My own KEY to get access to this API is restricted to me. To make the API fecth work on your own device follow the steps below:
    * Go to [Streaming Availability at RapidAPI](https://rapidapi.com/movie-of-the-night-movie-of-the-night-default/api/streaming-availability/);
    * Generate you keys to access the API;
    * Copy the Header Parameter (X-RapidAPI-Key and X-RapidAPI-Host);
    * Go back to the code;
    * Duplicate the .env.example file as a .env file at the root of the project;
    * Change 'XXXXXXXXXXXXXXX' values to be the keys you copied at RapidAPI;

```
MOVIES_API_KEY=XXXXXXXXXXXXXXX
MOVIES_API_HOST=XXXXXXXXXXXXXXX
```