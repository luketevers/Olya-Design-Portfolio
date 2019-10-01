// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// document types
import caseStudy from './documents/caseStudy'
import bio from './documents/bio'
import resume from './documents/resume'

// Object types
import basicButton from './objects/basicButton'
import caseStudySection from './objects/caseStudySection'
import bioPortableText from './objects/bioPortableText'
import iconItem from './objects/iconItem'
import mainImage from './objects/mainImage'
import resumeItem from './objects/resumeItem'
import titleText from './objects/titleText'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'designer',
  // Then proceed to concatenate our our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.
    bio,
    caseStudy,
    resume,

    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
    basicButton,
    bioPortableText,
    caseStudySection,
    iconItem,
    mainImage,
    resumeItem,
    titleText
  ])
})
