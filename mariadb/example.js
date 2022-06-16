const mariadb = require('mariadb');
const pool = mariadb.createPool({
    host: 'localhost',
    database: 'nashoya',
    user:'admin',
    password: 'qweasd',
    connectionLimit: 5
});
class Question {
    constructor(question_id,
                question_name,
                question_desc,
                version_id,
                update_date) {
            this.question_id=question_id;
            this.question_name=question_name;
            this.question_desc=question_desc;
            this.version_id=version_id;
            this.update_date=update_date;
    }
}

async function asyncFunction() {
    let conn;
    try {
        conn = await pool.getConnection();
        const q = await conn.query("SELECT * FROM question");
        // q[0].question_name
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
