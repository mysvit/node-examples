const mariadb = require('mariadb');
const pool = mariadb.createPool({
    host: '127.0.0.1',
    database: 'nashoya',
    user:'admin',
    password: 'qweasd',
    connectionLimit: 5
});
class Question {
    constructor(public question_id: string,
                public question_name: number,
                public question_desc: Date,
                public version_id: boolean,
                public update_date: number) {
    }
}

export async function asyncFunction() {
    let conn;
    try {
        conn = await pool.getConnection();
        const q = <Array<Question>>await conn.query("SELECT * FROM question");
        q.forEach(item => console.log(item))
// console.log(q.meta);
//         const a = await conn.query(`
// SELECT a.answer_id, qa.question_id, a.answer_name
// FROM
//   answer a,
//   question_answer qa
// WHERE
//   qa.question_id = ${q[0].question_id}
//   AND a.answer_id = qa.answer_id
//         `);
        //console.log(a);
        //const res = await conn.query("INSERT INTO myTable value (?, ?)", [1, "mariadb"]);
        //console.log(res); // { affectedRows: 1, insertId: 1, warningStatus: 0 }

    } catch (err) {
        throw err;
    } finally {
        if (conn) return conn.end();
    }
}

asyncFunction();
