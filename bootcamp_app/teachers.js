//db connection code
const { Pool } = require('pg');

const pool = new Pool({
  user: 'labber',
  password: 'labber',
  host: 'localhost',
  database: 'bootcampx'
});

//query to select all teachers that assisted
pool.query(`
SELECT DISTINCT teachers.name AS teacher, cohorts.name AS cohort
FROM teachers
JOIN assistance_requests ON teachers.id = teacher_id
JOIN students ON students.id = student_id
JOIN cohorts ON cohorts.id = cohort_id
WHERE cohorts.name = '${process.argv[2] || 'JUL02'}'
ORDER BY teacher;
`)
.then(res => {
  //loop through the array of objects
  res.rows.forEach(element => {
    console.log(`${element.cohort}: ${element.teacher}`);
  })
}).catch(err => console.error('query error', err.stack));