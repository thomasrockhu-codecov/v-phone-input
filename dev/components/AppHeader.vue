<template>
  <header data-cy="app-header">
    <h1 class="text-h4 text-sm-h2 text-center mb-4">
      VPhoneInput
    </h1>
    <p class="text-body-1 text-sm-h5 text-center mb-4">
      International phone field for Vuetify 2.0 and Vue JS 2.
    </p>
    <div class="d-flex align-center justify-center flex-wrap">
      <v-btn
        v-for="({ url, icon }, name) in links"
        :key="`links-${name}`"
        :href="url"
        target="_blank"
        rel="noopener"
        class="mx-1"
        :small="$vuetify.breakpoint.xsOnly"
        :large="$vuetify.breakpoint.smAndUp"
        text
      >
        <v-icon
          size="24"
          left
        >
          {{ icon }}
        </v-icon>
        {{ name }}
        <span class="d-sr-only">
          (open in new tab)
        </span>
      </v-btn>
    </div>
  </header>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'AppHeader',
  data: () => ({
    links: {
      NPM: {
        url: 'https://www.npmjs.com/package/v-phone-input',
        icon: 'mdi-npm',
      },
      GitHub: {
        url: 'https://github.com/paul-thebaud/v-phone-input',
        icon: 'mdi-github',
      },
      Docs: {
        url: 'https://github.com/paul-thebaud/v-phone-input#documentation',
        icon: 'mdi-book-open-variant',
      },
    },
  }),
});
</script>
