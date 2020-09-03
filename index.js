const { app, Menu, Tray } = require('electron')
const path = require('path');
const iconPath = path.join(__dirname, 'icon.png');

app.whenReady().then(() => {
  const tray = new Tray(iconPath)
  const contextMenu = Menu.buildFromTemplate(
    [{
      label: 'beep',
      type: 'normal'
    }, {
      label: 'boop',
      type: 'normal'
    }]
  )

  tray.setContextMenu(contextMenu)
});
