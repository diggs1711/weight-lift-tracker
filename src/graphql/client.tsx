import React from 'react'
import { Provider, createClient } from 'urql'

const client = createClient({
    url: 'https://weight-lifting-tracker.herokuapp.com/v1/graphql'
})

const GraphqlClient = ({children} : any) => (
    <Provider value={client}>
        {children}
    </Provider>
)

export default GraphqlClient