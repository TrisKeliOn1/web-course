const { ipcMain } = require("electron")

ipcMain.on("blabla", (event, dados ) => {
    console.log(dados)
    console.log("blabla", "respondido")
});