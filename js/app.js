import {responsiveNav} from './plugins/initResponsiveNav.js';
import {prodColorPick} from './plugins/initProdColorPick.js';
import {showFeatures} from './plugins/initShowFeatures.js';

const app = () => {
   responsiveNav();
   prodColorPick();
   showFeatures();
};

app();
