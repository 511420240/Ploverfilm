const DbBase = require('./DbBase');
class UserModel extends DbBase {
    constructor() {
        super();
        this.table = 'movie';
    }
    //把电影资料上传的数据
    uploadsdata(userinfo, callback) {
        console.log(userinfo)
        let fieldstr = '', field = '';
        let data = [];
        let isFirst = true;
        for (const f in userinfo) {
            if (userinfo.hasOwnProperty(f)) {
                fieldstr += (isFirst ? '' : ', ') + f;   
                field += (isFirst ? '' : ', ') + '?';         
                data.push(userinfo[f]);                 
            }
            isFirst = false;
        }
        let sql = `INSERT INTO ${this.table}(${fieldstr}) VALUES (${field}) `;
        console.log(sql)
        this.mydb.query(sql, data, (err, results) => {
            console.log("***********************")
            console.log(err)
            console.log(results)
            if (err) {
                callback(err);
            } else {
                callback(results);
                console.log(err)

            }
            this.mydb.end();
        });
    }
}
module.exports = UserModel;