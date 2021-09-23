import {responsiveNav} from './plugins/initResponsiveNav.js';
import {prodColorPick} from './plugins/initProdColorPick.js';
import {showFeatures} from './plugins/initShowFeatures.js';
import {modalVideo} from './plugins/initModalVideo.js';
import {openFaq} from './plugins/initOpenFaq.js';
import {newsletterPopup} from './plugins/initNewsletterPopup.js';
import {toTop} from './plugins/initToTop.js';
import {toggleBuyDets} from './plugins/initToggleBuyDets.js';
import {watchVideo} from './plugins/initWatchVideo.js';

const app = () => {
   responsiveNav();
   prodColorPick();
   showFeatures();
   modalVideo();
   openFaq();
   newsletterPopup();
   toTop();
   toggleBuyDets();
   watchVideo();
};

app();
