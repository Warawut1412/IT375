const express = require('express');
const app = express();
const port = process.env.PORT || 8000;
app.use(express.json());
const itStudents = [
    { id: 21, 'fname': 'พัชรพล', 'lname': 'นวลจันทร์', 'tel': '0812345678' },
    { id: 33, 'fname': 'แทนรัก', 'lname': 'มังคละคุปต์', 'tel': '0698745630' },
    { id: 42, 'fname': 'ชาลิสา', 'lname': 'เทพดนตรี', 'tel': '0987412365' },
    { id: 45, 'fname': 'เสฏฐนันท์', 'lname': 'อรรถสิษฐ์', 'tel': '0875321594' },
    { id: 47, 'fname': 'วิรัลยุพา', 'lname': 'ถมรุ่ง', 'tel': '0785214569' }
];
//api, routing
app.get('/api/getstudent', (req, res) => {
    res.send(itStudents);
});
app.listen(port, '127.0.0.1', () => {
    console.log(`Listening to request on port ${port}`);
});

app.get('/api/querystu', (req, res) => {
    const myQueryString = req.query;
    if (Object.keys(myQueryString).length != 0) {
        console.log(myQueryString.id);
        const stuId = itStudents.find(element => element.id == parseInt(myQueryString.id));
        if (stuId) {
            res.send(stuId);
        } else {
            res.status(404).send('ไม่พบรหัสนักศึกษานี้');
        }
    } else {
        res.status(404).send('ไม่พบหน้า API ที่เรียก');
    }
});

app.get('/api/getstuid/:id',(req,res)=>{
    const stuId = itStudents.find(element => element.id === parseInt(req.params.id));
    console.log(req.params.id);
    if(stuId){
        res.send(stuId);
    }else{
        res.status(404).send('ไม่พบรหัสนักศึกษานี้');
    }
});

app.post('/api/addstu',(req,res)=>{
    // get data from request body
    const stuId = req.body.id;
    const stuFname = req.body.fname;
    const stuLname= req.body.lname;
    const stuTel= req.body.tel;

    const newStudent={
        id: stuId,
        'fname': stuFname,
        'lname': stuLname,
        'tel': stuTel
    };
    itStudents.push(newStudent);
res.send(itStudents);
});