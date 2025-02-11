require('dotenv').config();

const path = require('path');
const fs = require('fs');
const yaml = require('js-yaml');
const { notarize: electronNotarize } = require('electron-notarize');

const { ELECTRON_NOTARIZE } = process.env;

exports.default = async (context) => {
  const { electronPlatformName, appOutDir } = context;

  if (ELECTRON_NOTARIZE === 'NO') {
    return;
  }

  if (electronPlatformName !== 'darwin') {
    return;
  }

  const electronBuilderYmlContents = fs.readFileSync(
    './electron-builder.yml',
    'utf8'
  );
  const electronBuilderYml = yaml.load(electronBuilderYmlContents);

  const appBundleId = electronBuilderYml.appId;
  const appName = context.packager.appInfo.productFilename;
  const appPath = path.join(appOutDir, `${appName}.app`);
  const appleId = process.env.APPLEID;
  const appleIdPassword = process.env.APPLE_APP_SPECIFIC_PASSWORD;

  if (!fs.existsSync(appPath)) {
    throw new Error(`Cannot find application at: ${appPath}`);
  }

  console.info(`Notarizing ${appBundleId} found at ${appPath}`);

  // eslint-disable-next-line no-return-await
  return await electronNotarize({
    appBundleId,
    appPath,
    appleId,
    appleIdPassword,
  });
};
