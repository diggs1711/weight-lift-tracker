import knex from 'knex'

const knexConfig = knex({
    client: 'pg',
    connection: {
        host: '127.0.0.1',
        user: 'apple',
        database: 'apple'
    }
})

export default knexConfig