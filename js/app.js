import {responsiveNav} from './plugins/initResponsiveNav.js';
import {prodColorPick} from './plugins/initProdColorPick.js';
import {showFeatures} from './plugins/initShowFeatures.js';
import {modalVideo} from './plugins/initModalVideo.js';

const app = () => {
   responsiveNav();
   prodColorPick();
   showFeatures();
   modalVideo();
};

app();
