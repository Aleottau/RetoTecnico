var express = require('express');
var router = express.Router();
let dataQuestions = require('./../data/data1.json')

const fs = require("fs") 

router.get("/all", (req, res) => {
    const result = {
        res: dataQuestions
    }
    console.log(result)
    res.json(result)    
})

router.post('/create', (req, res) => {
    let newQuestions = []

    const question =  req.body
    questionsReader = fs.readFileSync(process.cwd()+ "/data/data1.json", "utf8")
    questionsReader =  JSON.parse(questionsReader)
    
    for(let i = 0; i < questionsReader.items.length; i++){
        const temp = questionsReader.items[i]
        newQuestions.push(temp)
    }

    newQuestions.push(question)
    tempHeader = {items: newQuestions}
    console.log("type:" , typeof questionsReader)
    console.log("data: ", process.cwd(), " text: ")
    fs.writeFileSync(process.cwd()+ "/data/data1.json", JSON.stringify(tempHeader))
    res.json({
        ok:"ok"
    })
   
})

module.exports = router

