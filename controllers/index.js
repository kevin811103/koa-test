
const mysql = require('mysql')
const config = require('../config/config')
// const userInfoService = require('./../services/user-info')
const homeService = require('./../services/home')
module.exports = async (ctx) => {


    var pool = mysql.createPool({
        host: config.database.HOST,
        user: config.database.USERNAME,
        password: config.database.PASSWORD,
        database: config.database.DATABASE
    });

    let query = function (sql, values) {

        return new Promise((resolve, reject) => {
            pool.getConnection(function (err, connection) {
                if (err) {
                    resolve(err)
                } else {
                    connection.query(sql, values, (err, rows) => {

                        if (err) {
                            reject(err)
                        } else {
                            resolve(rows)
                        }
                        connection.release()
                    })
                }
            })
        })

    }

    // 查询hez数据库
    let findHez1 = function () {
        let _sql = `
        SELECT * FROM test
    `
        return query(_sql)


        console.log("1234")
    }


    let bodys = '11111'

    await findHez1()
    .then(result => {
        console.log(result);
        bodys = JSON.parse(JSON.stringify(result))
        console.log(bodys)
    })

    ctx.response.body =bodys



    // ctx.response.body ="1234"


// cos


}