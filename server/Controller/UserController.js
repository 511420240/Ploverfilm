const express = require('express');
const UserModel = require('../Model/UserModel');
const router = express.Router();
router.post('/reg', (req, res) => {
    let userModel  = new UserModel();
    delete req.body.rePassW;//删除多余的
    req.body.Rtime = new Date().toLocaleString();

    userModel.reguser(req.body, (results)=>{
        if(results.insertId){
            res.json({code:1, Msg:'注册成功'});
        }else{
            res.json({code:-1, Msg:'注册失败，请重新操作'});
        }
    });
    
})
router.post('/login', (req, res) => {
    let account = req.body.account
    let password = req.body.password
    let userModel  = new UserModel();
    userModel.loginuser(account,(results)=>{
        ob={
            uid:results[0].uid,
            status:true,
            msg: "登录成功"
        }
        if(results.length[0]==0){
            ob={
                status:false,
                msg: "账号不在"
            }
        }else if (results[0].password != password) {
            ob={
                status:false,
                msg: "密码错误"
            }
        }
        res.json(ob);
        console.log(ob)


    })
})
router.post('/compile',(req,res)=>{
    let userModel  = new UserModel();
})



module.exports = router;