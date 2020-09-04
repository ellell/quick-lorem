const { app, Menu, Tray, clipboard } = require('electron')
const path = require('path');

const iconPath = path.join(__dirname, 'icon.png');
const dummyText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pellentesque diam volutpat commodo sed. Amet est placerat in egestas erat imperdiet sed euismod nisi. Nam libero justo laoreet sit amet cursus. Nunc sed augue lacus viverra vitae. Cras pulvinar mattis nunc sed blandit. Mauris commodo quis imperdiet massa tincidunt nunc pulvinar. Faucibus vitae aliquet nec ullamcorper sit amet risus nullam eget. Pellentesque habitant morbi tristique senectus et netus et malesuada. Mi tempus imperdiet nulla malesuada pellentesque elit eget gravida cum. Fringilla est ullamcorper eget nulla facilisi. Congue nisi vitae suscipit tellus mauris a diam maecenas sed. In nulla posuere sollicitudin aliquam. Dictum varius duis at consectetur lorem donec. Risus feugiat in ante metus dictum at tempor commodo. Vitae congue mauris rhoncus aenean vel elit scelerisque mauris pellentesque. Vitae purus faucibus ornare suspendisse sed.';
const textLengthOptions = [2, 50, 100, 500];

app.whenReady().then(() => {
  const tray = new Tray(iconPath)
  const contextMenu = Menu.buildFromTemplate(
    textLengthOptions.map(option => ({
      label: `${option} words`,
      type: 'normal',
      click: () => {
        clipboard.writeText(dummyText.split(' ').slice(0, option).join(' '))
      }
    })));

  tray.setContextMenu(contextMenu)
});
