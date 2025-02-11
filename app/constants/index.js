/**
 * Constants
 * Note: Don't import log helper file from utils here
 */

import { PATHS } from './paths';
import { DEVICE_TYPE } from '../enums';

export const OS_ARCH_TYPE = {
  amd64: 'amd64',
  arm64: 'arm64',
};

// this table holds the minimum macOS version which will get the latest kalam binaries.
// if the user's os version is lower than the one listed here then historic binaies will be used for backward compatibility
export const KALAM_MINIMUM_SUPPORTED_MACOS_VERSION = {
  [OS_ARCH_TYPE.arm64]: '11.0.0',
  [OS_ARCH_TYPE.amd64]: '10.14.0',
};

export const DEVICES_DEFAULT_PATH = {
  [DEVICE_TYPE.mtp]: '/',
  [DEVICE_TYPE.local]: PATHS.homeDir,
};

export const DEVICES_LABEL = {
  [DEVICE_TYPE.mtp]: `Phone`,
  [DEVICE_TYPE.local]: `Computer`,
};

export const FILE_EXPLORER_DEFAULT_FOCUSSED_DEVICE_TYPE = DEVICE_TYPE.local;

export const LOG_FILE_ROTATION_CLEANUP_THRESHOLD = 60; // in days

export const AUTO_UPDATE_CHECK_FIREUP_DELAY = 10000; // in ms

export const FILE_EXPLORER_TABLE_TRUNCATE_MAX_CHARS = 37;

export const FILE_EXPLORER_GRID_TRUNCATE_MAX_CHARS = 20;

export const DONATE_PAYPAL_URL = `https://paypal.me/ganeshrvel`;

export const BUY_ME_A_COFFEE_URL = `https://www.buymeacoffee.com/ganeshrvel`;

export const DELETE_KEIS_SMARTSWITCH_URL = `https://farazfazli.medium.com/how-i-reverse-engineered-keis-and-sidesync-and-fixed-mtp-8949acbb1c29`;

export const USB_HOTPLUG_MAX_ATTEMPTS = 6;

export const USB_HOTPLUG_MAX_ATTEMPTS_TIMEOUT = 15000; // in ms
