<template lang="">
    <div>
        <v-navigation-drawer
            v-model="drawer"
            :mini-variant="miniVariant"
            :clipped="clipped"
            fixed
            app
        >
            <v-list-item>
                <v-list-item-content>
                    <v-card
                        class="mx-auto"
                        style="background:inherit"
                        max-width="100%"
                        tile
                    >
                        <v-img class="logo" src="/logo-rmbg.png"></v-img>
                    </v-card>
                </v-list-item-content>
            </v-list-item>

            <v-divider></v-divider>

            <v-list>
                <v-list-item
                    v-for="(item, i) in items"
                    :key="i"
                    :to="item.to"
                    router
                    exact
                >
                    <v-list-item-action>
                        <v-icon>{{ item.icon }}</v-icon>
                    </v-list-item-action>

                    <v-list-item-content>
                        <v-list-item-title v-text="item.title" />
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>

        <v-app-bar
            :clipped-left="clipped"
            fixed
            app
        >
            <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
            <v-btn
                icon
                @click.stop="miniVariant = !miniVariant"
            >
                <v-icon>mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon>
            </v-btn>
            <v-spacer />
        </v-app-bar>
    </div>
</template>

<script>
export default {
    data() {
        return {
            clipped: false,
            drawer: false,
            fixed: false,
            items: [
                {
                    icon: "mdi-web",
                    title: "Welcome",
                    to: "/",
                },
                {
                    icon: "mdi-movie-search-outline",
                    title: "Movies",
                    to: "/movies",
                },
                {
                    icon: "mdi-store",
                    title: "E-Commerce",
                    to: "/ecommerce",
                },
                {
                    icon: "mdi-api",
                    title: "API",
                    to: "/api",
                },
                {
                    icon: "mdi-controller",
                    title: "GAME",
                    to: "/game",
                },
                {
                    icon: "mdi-camera-timer",
                    title: "Timer",
                    to: "/timer",
                },
                {
                    icon: "mdi-card-account-mail-outline",
                    title: "Contact Us",
                    to: "/contact-us",
                },
                {
                    icon: "mdi-chart-bubble",
                    title: "Inspire",
                    to: "/inspire",
                },
            ],
            miniVariant: false,
            right: true,
            rightDrawer: false,
            title: "Vuetify.js",
        };
    },
};
</script>
