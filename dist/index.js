import { YoumeIM } from './@youme-ionic/plugins/youme-im';
window.YoumeNative = {
YoumeIM
};
require('./@youme-ionic/core/bootstrap').checkReady();
require('./@youme-ionic/core/ng1').initAngular1(window.YoumeNative);