class Pool {
    constructor(pool) {
        this.pool = pool;
    }

    query(sql, values) {
        return new Promise((resolve, reject) => {
            this.pool.query(sql, values, function (error, results) {
                if (!error) {
                    resolve(results);
                } else {
                    reject(error);
                }
            });
        });
    };

    getConnection() {
        return new Promise((resolve, reject) => {
            this.pool.getConnection(function (error, connection) {
                if (!error) {
                    resolve(new Connection(connection));
                } else {
                    reject(error);
                }
            });
        });
    }

    end() {
        this.pool.end();
    }
}

module.exports = Pool;