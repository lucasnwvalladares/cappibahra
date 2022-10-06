# PAGES

## [`movies`](https://github.com/lucasnwvalladares/cappibahra/blob/master/pages/movies.vue) ![fetch](https://img.shields.io/static/v1?label=fetch&message=API&color=green)

This page is an example of API consumption using ![fetch](https://img.shields.io/static/v1?label=fetch&message=API&color=green) to get the data we're using on this project on this specific page. The API is available at RapidAPI as Streaming Availability, and to request the data, we need to create access to the platform and then use the credentials.

The KEY used to get access to this API is restricted to me. To make the ![fetch](https://img.shields.io/static/v1?label=fetch&message=API&color=green) work on your own device follow the steps below:

- Go to [Streaming Availability at RapidAPI](https://rapidapi.com/movie-of-the-night-movie-of-the-night-default/api/streaming-availability/);
- Generate your keys to access the API;
- Copy the Header Parameters (***X-RapidAPI-Key*** and ***X-RapidAPI-Host***);
- Go back to the code;
- Duplicate the ![file](https://img.shields.io/static/v1?label=.env.example&message=FILE&color=blue) as a ![file](https://img.shields.io/static/v1?label=.env&message=FILE&color=blue) at the ![file](https://img.shields.io/static/v1?label=root&message=FILE&color=blue) of the project;
- Change **'XXXXXXXXXXXXXXX'** values to be the keys you copied at RapidAPI;

```
MOVIES_API_KEY=XXXXXXXXXXXXXXX
MOVIES_API_HOST=XXXXXXXXXXXXXXX
```

## [`contact-us`](https://github.com/lucasnwvalladares/cappibahra/blob/master/pages/contact-us.vue) ![form](https://img.shields.io/static/v1?label=v-form&message=Vuetify&color=lightblue)

This page is an example of a form built with [Vuetify](https://vuetifyjs.com/en/). When it comes to forms validation, Vuetify has a multitude of integrations and baked-in functionality. The internal ![form](https://img.shields.io/static/v1?label=v-form&message=Vuetify&color=lightblue) component makes it easy to add validation to form inputs. All input components have a rules prop that accepts arrays of types function, boolean, and string. These allow you to specify conditions in which the input is ![input](https://img.shields.io/static/v1?label=input&message=valid&color=green) or ![input](https://img.shields.io/static/v1?label=input&message=invalid&color=red). Whenever the value of an input is changed, each function in the array will receive the new value and each array element will be evaluated. If a function or array element returns false or a string, validation has failed and the string value will be presented as an error message.

