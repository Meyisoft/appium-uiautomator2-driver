const commands = {};
const extensions = {};
const helpers = {};

commands.setClipboard = async (content) => {
  return await this.uiautomator2.jwproxy.command(
    `appium/device/set_clipboard`,
    "POST",
    { content: content, contentType: "plaintext" }
  );
};

Object.assign(extensions, commands, helpers);
export { commands, helpers };
export default extensions;
