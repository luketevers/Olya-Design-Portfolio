<template lang='pug'>
  section
</template>

<script>
import { dateFilter } from 'vue-date-fns'

import sanityClient from '../sanityClient'

const query = `
  {
    "info": *[_id == "eventInformation"] {
      ..., image { ..., asset->}
    }[0]
  }
`

export default {
  components: {
  },
  filters: {
    dateFilter
  },
  data() {
    return {
      program: this.$store.getters.getProgram
    }
  },
  asyncData() {
    return sanityClient.fetch(query)
  },
  head() {
    if (!this || !this.info) {
      return
    }
    return {
      title: this.info.name,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.info.description
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: this.info.keywords.join(',')
        }
      ]
    }
  }
}
</script>

<style scoped></style>
