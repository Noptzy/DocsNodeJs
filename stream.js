const fs = require("fs");

const writer = fs.createWriteStream("resLog.log");

writer.write("Name")
writer.end()

const reader = fs.createReadStream("resLog.log");
reader.addListener("data", (data) => {
    console.log(data.toString())
})