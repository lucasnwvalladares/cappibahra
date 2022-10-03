# CappiBahra

## Build Setup
- Make sure to have ![node](https://img.shields.io/static/v1?label=node&message=JS&color=lightgreen) installed and running on your machine. If you don't have it installed yet, download it [here](https://nodejs.org/en/download/).

```bash
# clone repository locally on your machine
$ git clone https://github.com/lucasnwvalladares/cappibahra.git

# access directory
$ cd cappibahra

# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out the [documentation](https://nuxtjs.org).

## Special Directories

You can create the following extra directories, some of which have special behaviors. Only `pages` is required; you can delete them if you don't want to use their functionality.

### [`assets`](https://github.com/lucasnwvalladares/cappibahra/tree/master/assets)

The assets directory contains your uncompiled assets such as Stylus or Sass files, images, or fonts.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/assets).

### [`components`](https://github.com/lucasnwvalladares/cappibahra/tree/master/components)

The components directory contains your Vue.js components. Components make up the different parts of your page and can be reused and imported into your pages, layouts and even other components.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/components).

### [`layouts`](https://github.com/lucasnwvalladares/cappibahra/tree/master/layouts)

Layouts are a great help when you want to change the look and feel of your Nuxt app, whether you want to include a sidebar or have distinct layouts for mobile and desktop.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/layouts).


### [`pages`](https://github.com/lucasnwvalladares/cappibahra/tree/master/pages)

This directory contains your application views and routes. Nuxt will read all the `*.vue` files inside this directory and setup Vue Router automatically.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/get-started/routing).

#### [`movies`](https://github.com/lucasnwvalladares/cappibahra/blob/master/pages/movies.vue)

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

#### [`contact-us`](https://github.com/lucasnwvalladares/cappibahra/blob/master/pages/contact-us.vue)

![form](https://img.shields.io/static/v1?label=v-form&message=Vuetify&color=lightblue)

This page is an example of a form built with [Vuetify](https://vuetifyjs.com/en/). When it comes to forms validation, Vuetify has a multitude of integrations and baked-in functionality. The internal ![form](https://img.shields.io/static/v1?label=v-form&message=Vuetify&color=lightblue) component makes it easy to add validation to form inputs. All input components have a rules prop that accepts arrays of types function, boolean, and string. These allow you to specify conditions in which the input is ![input](https://img.shields.io/static/v1?label=input&message=valid&color=green) or ![input](https://img.shields.io/static/v1?label=input&message=invalid&color=red). Whenever the value of an input is changed, each function in the array will receive the new value and each array element will be evaluated. If a function or array element returns false or a string, validation has failed and the string value will be presented as an error message.

### [`plugins`](https://github.com/lucasnwvalladares/cappibahra/tree/master/plugins)

The plugins directory contains JavaScript plugins that you want to run before instantiating the root Vue.js Application. This is the place to add Vue plugins and to inject functions or constants. Every time you need to use `Vue.use()`, you should create a file in `plugins/` and add its path to plugins in `nuxt.config.js`.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/plugins).

### [`static`](https://github.com/lucasnwvalladares/cappibahra/tree/master/static)

This directory contains your static files. Each file inside this directory is mapped to `/`.

Example: `/static/robots.txt` is mapped as `/robots.txt`.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/static).

### [`store`](https://github.com/lucasnwvalladares/cappibahra/tree/master/store)

This directory contains your Vuex store files. Creating a file in this directory automatically activates Vuex.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/store).


## README Shields ![shields](https://img.shields.io/static/v1?label=shields&message=IO&color=black)

Shields on this readme were made with [Shields.io](https://shields.io/).
