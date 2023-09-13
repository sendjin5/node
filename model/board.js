//npm install mariadb
const mariadb = require("mariadb");
const cfg = require("../conf.js");

const pool = mariadb.createPool({
    host:cfg.host,    
    port:cfg.port,    
    user:cfg.user,
    password:cfg.pass,    
    connectionLimit:cfg.connectionLimit
});

async function boardList(){
    let conn, rows;
    try {
        conn = await pool.getConnection();
        conn.query('USE teaspoon');
        rows = await conn.query('select * from board');
    } catch(err){
        throw err;
    } finally {
        if(conn) conn.end();
        return rows;
    }
}

async function Getboard(no){
    let conn, sql;
    try {
        conn = await pool.getConnection();
        conn.query('USE teaspoon');
        sql = await conn.query(`select * from board where bno=${bno}`);
    } catch(err){
        throw err;
    } finally {
        if(conn) conn.end();
        return sql;
    }
}

async function Addboard(board){
    let conn, msg, sql;
    try {
        conn = await pool.getConnection();
        conn.query('USE teaspoon');
        sql = `insert into board(bno, title, content) values (default, ?, ?)`;
        await conn.query(sql, board);
        msg = "등록 성공";
    } catch(err){
        msg = "등록 실패";
        throw err;
    } finally {
        if(conn) conn.end();
        return msg;
    }
}

async function Editboard(board){
    let conn, msg, sql;
    try {
        conn = await pool.getConnection();
        conn.query('USE teaspoon');
        sql = `update board set title=?, content=? where bno=?`;
        await conn.query(sql, board);
        msg = "수정 성공";
    } catch(err){
        msg = "수정 실패";
        throw err;
    } finally {
        if(conn) conn.end();
        return msg;
    }
}

async function Delboard(bno){
    let conn, msg, sql;
    try {
        conn = await pool.getConnection();
        conn.query('USE teaspoon');
        sql = `delete from board where bno=?`;
        await conn.query(sql, bno);
        msg = "삭제 성공";
    } catch(err){
        msg = "삭제 실패";
        throw err;
    } finally {
        if(conn) conn.end();
        return msg;
    }
}

module.exports = { 
    boardList: boardList, getboard: Getboard, addboard:Addboard,
    editboard:Editboard, delboard:Delboard 
}