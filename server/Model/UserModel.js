const DbBase = require('./DbBase');
class UserModel extends DbBase {
    constructor() {
        super();
        this.table = 'user';
    }
    reguser(userinfo, callback) {
        console.log(userinfo)
        let fieldstr = '', field = '';
        let data = [];
        let isFirst = true;
        for (const f in userinfo) {
            if (userinfo.hasOwnProperty(f)) {
                fieldstr += (isFirst ? '' : ', ') + f;    //组装字段  也可以组装成数组 最后JOIN
                field += (isFirst ? '' : ', ') + '?';         //组装字段
                data.push(userinfo[f]);                 //组装字段对应的值
            }
            isFirst = false;
        }
        let sql = `INSERT INTO ${this.table}(${fieldstr}) VALUES (${field}) `;
        // sql = 'insert into users(email, username, tel) values (?,?,?)';
        this.mydb.query(sql, data, (err, results) => {
            if (err) {
                callback(err);
            } else {
                callback(results);
            }
            this.mydb.end();
        });
    }



    loginuser(account, callback) {
        let sql = `SELECT * FROM ${this.table} WHERE account = ? LIMIt 1`;
        this.mydb.query(sql, [account], (err, results)=>{
            if(err) {
                callback(err);
            }else{
                callback(results);
            }
            
            this.mydb.end();
        });
    }
    changeuser(account,callback){
        let sql = `SELECT * FROM ${this.table} WHERE account = ? LIMIt 1`;
        this.mydb.query(sql, [account], (err, results)=>{
            if(err) {
                callback(err);
            }else{
                callback(results);
            }
            
            this.mydb.end();
        });
   
    }




}
module.exports = UserModel;