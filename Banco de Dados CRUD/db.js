const pg = require('pg');

const config = {
    host: 'hansken.db.elephantsql.com.',
    // Do not hard code your username and password.
    // Consider using Node environment variables.
    user: 'iejleagu',
    password: 'TxXaBJ2y4wuIl3gQPzIWyKfNq0V9snYZ',
    database: 'iejleagu',
    port: 5432,
    ssl: true
};

const client = new pg.Client(config);

client.connect(err => {
    if (err) throw err;
    else { queryDatabase(); }
});

function queryDatabase() {

    console.log(`Running query to PostgreSQL server: ${config.host}`);

    const query = 'SELECT * FROM inventory;';

    client.query(query)
        .then(res => {
            const rows = res.rows;

            rows.map(row => {
                console.log(`Read: ${JSON.stringify(row)}`);
            });

            process.exit();
        })
        .catch(err => {
            console.log(err);
        });
}