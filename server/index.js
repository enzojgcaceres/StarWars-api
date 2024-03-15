const server = require("./src/server")
const { conn } = require("./src/db")
const PORT = 3001;

conn.sync({ force: false }).then(() =>{
    server.listen(PORT, () =>{
        console.log(`May the Force be with You on port ${PORT}`)
    })
}).catch(error => console.error(error))