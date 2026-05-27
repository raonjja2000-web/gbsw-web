//Express 서버
const express=require("express");
const app =express();
const Mysql = require("mysql2");
const conn =Mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"1234",
    database:"gbsw_web",
})

conn.connect();

app.listen(3000,()=>{
    console.log("3000번 포트 서버 대기중");
});

app.get("/",(req,res)=>{
    res.send("나의 서버입니다.");
});

app.get("/user",(req,res)=>{
    // res.json(`{text:"hi"}`);
    //senf는 text/html 포맷
    //요청도 json, 응답도 json
    conn.query("select * from tb_user",(err,rows,fields)=>{
        if(err){
            throw err;
        }
        res.json(rows);
    });
});

app.get("/user/:id",(req,res,next)=>{
    // res.json(`{text:"hi"}`);
    //senf는 text/html 포맷
    //요청도 json, 응답도 json
    conn.query("select * from tb_user",(err,rows,fields)=>{
        if(req.params.id==="0") {
            next();
        };

        //prepared Statement 사용하여 보안 강화
        conn.query("select * from tb_user where id = ?",
        [req.params.id],
        (err,rows,fields)=> {
            if(err){
                throw err;
            }
            res.json(rows);
        });
    });
});