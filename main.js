import express from "express";

const app = express();
const PORT = 5000;

app.get("/",(req,res) =>{
    req.json({msg:"Three Baboons Technologies"});
});

app.listen(PORT, () =>{
    console.log(`server is running http://localhost:${PORT}`);
});