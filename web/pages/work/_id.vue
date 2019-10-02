<template>
  <section class="container">
  </section>
</template>

<script>
import BlockContent from 'sanity-blocks-vue-component'
import groq from 'groq'
import sanityClient from '~/sanityClient'

const query = groq`
  *[_type == "session" && _id == $id] {
    ...,
    persons[] {
      person-> {
        ...,
        image {
          ...,
          asset->
        }
      }
    }
  }[0]
`

export default {
  components: {
  },
  data() {
    return {
      serializers: {
        types: {
          personReference: PersonBlock
        }
      }
    }
  },
  async asyncData({ params }) {
    return await sanityClient.fetch(query, params)
  }
}
</script>

<style scoped>
</style>
