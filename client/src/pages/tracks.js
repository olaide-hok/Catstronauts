import React from 'react'
import {gql} from '@apollo/client'
import {Layout} from '../components'

/**
 * Tracks Page is the Catstronauts home page.
 * We display a grid of tracks fetched with useQuery with the TRACKS query
 */

/** TRACKS query to retrieve all tracks */
const TRACKS = gql`
  query GetTracks {
    tracksForHome {
      id
      title
      thumbnail
      length
      modulesCount
      author {
        id
        name
        photo
      }
    }
  }
`

const Tracks = () => {
    return <Layout grid> </Layout>
}

export default Tracks
