const express = require('express');
const mysql = require('mysql');
const UserModel = require('../Model/UploadsModel');
const multer = require('multer');
const fs = require('fs');
const host = 'http://localhost:81/'
const router = express.Router();

let storage = multer.diskStorage({
    destination: function (req, file, cb) {
        let fileType = req.body.fileType
        let dirname = __dirname + '/uploads/' + fileType;
        if (!fs.existsSync(dirname)) {
            fs.mkdirSync(dirname, { recursive: true });
        }
        cb(null, dirname)
    },
    filename: function (req, file, cb) {
        // 文件名称不能重复  
        // 需要加上后缀
        cb(null, new Date().valueOf() + '_' + Math.random().toString().substr(2, 6) + '.' + file.originalname.split('.').pop())
    }
});
let upload = multer({ storage: storage });
router.post('/upload', upload.single('file'), function (req, res) {
    let fileType = req.body.fileType
    let dirname = 'uploads/' + fileType + '/';
    let file = req.file
    res.json({
        code: 1,
        data: host + dirname + file.filename,
        msg: '上传成功'
    })
})





router.post('/msave', (req, res) => {
    let userModel = new UserModel();
    userModel.uploadsdata(req.body, (results) => {
        if(results.insertId){
            res.json({code:1, Msg:'上传成功'});
        }else{
            res.json({code:-1, Msg:'上传失败'});
        }
    });













    {

        // let mdata = req.body
        // console.log(mdata)
        // let fieldstr = '', field = '';
        // let data = [];
        // let isFirst = true;
        // for (const f in mdata) {
        //     if (mdata.hasOwnProperty(f)) {
        //         fieldstr += (isFirst ? '' : ', ') + f;
        //         field += (isFirst ? '' : ', ') + '?';
        //         data.push(mdata[f]);
        //     }
        //     isFirst = false;
        // }
        // console.log(fieldstr)
        // let sql = `INSERT INTO movie(${fieldstr}) VALUES (${field}) `;
        // this.mydb.query(sql, (err, results) => {
        //     if (err) {
        //         return res.json({
        //             code: 0,
        //             msg: "上传失败"
        //         })
        //     }
        //     res.json({
        //         code: 1,
        //         msg: '上传成功'
        //     })
        // })
    }
})








router.post('/', (req, res) => {

})
router.post('/', (req, res) => {

})

router.post('/', (req, res) => {

})



module.exports = router;