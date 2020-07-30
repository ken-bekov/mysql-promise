class Connection {
    constructor(connection) {
        this.connection = connection;
    }

    query(sql, values) {
        return new Promise((resolve, reject) => {
            this.connection.query(sql, values, function (error, results) {
                if (!error) {
                    resolve(results);
                } else {
                    reject(error);
                }
            });
        });
    }

    beginTransaction() {
        return new Promise((resolve, reject) => {
            this.connection.beginTransaction(function (error) {
                if (!error) {
                    resolve();
                } else {
                    reject(error);
                }
            });
        });
    }

    commit() {
        return new Promise((resolve, reject) => {
            this.connection.commit(function (error) {
                if (!error) {
                    resolve();
                } else {
                    reject(error);
                }
            });
        });
    }

    rollback() {
        return new Promise((resolve) => {
            this.connection.rollback(function () {
                resolve();
            })
        });
    }

    release() {
        this.connection.release();
    }
}

module.exports = Connection;