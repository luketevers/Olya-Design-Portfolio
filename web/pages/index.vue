<template lang='pug'>
  section
    pre {{ info }}
</template>

<script>
import sanityClient from '../sanityClient'

const query = `
  {
    "info": *[_type == "caseStudy"] {
      ...
    }
  }
`

export default {
  data () {
    return {
      program: this.$store.getters.getProgram
    }
  },
  asyncData () {
    return sanityClient.fetch(query)
  },
  head () {
    if (!this || !this.info) {
      return
    }
    return {
      title: this.info.name,
      meta: [
        {
          hid: 'description',
          name: 'description',
        },
        {
          hid: 'keywords',
          name: 'keywords',
        }
      ]
    }
  }
}
</script>
