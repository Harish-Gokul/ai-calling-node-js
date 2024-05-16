const express = require('express');
const cors = require('cors')
const app = express();
app.use(cors())

app.use(express.json());
// Define routes and middleware here
// ...
app.get("/",(req,res)=>{
    res.send({message: "sucess"})
})

app.post("/bookappointment",(req,res)=>{
    print(req.body)
    res.send({data: req.body})
})


const PORT = process.env.PORT || 3000;
app.listen(PORT,"0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
});