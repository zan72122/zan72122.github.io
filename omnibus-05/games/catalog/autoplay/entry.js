import {installSlowMotion} from './slow-motion.js';
import {installGuide} from './runtime.js';
import {pointerInput} from './input.js';
const routes={
 'bold-bardeen-uqx972':'elevator','bold-curie-173dp2':'fruit',
 'dazzling-davinci-ovdbdm':'magic','dazzling-rubin-u5glr7':'mart',
 'determined-albattani-oj973a':'paint','elegant-wozniak-xrg7zu':'invisible',
 'gallant-darwin-hkzemh':'ballroom','gracious-ride-6m20tc':'garden',
 'hopeful-mccarthy-xl7wqz':'donut','nice-brown-mcjsrp':'car',
 'nice-clarke-0oj0sq':'register','nice-shannon-7co51m':'morning',
 'nifty-hopper-mblja3':'prism','optimistic-ride-p4c6cz':'water',
 'peaceful-shannon-wa0c07':'pillow','pensive-wozniak-x4kg6h':'stairs',
 'zealous-clarke-yovkba':'piano','zen-ride-vgggok':'driver'
};
const id=location.pathname.split('/').filter(Boolean).find(p=>routes[p]);
if(id){
 const {create}=await import(`./adapters/${routes[id]}.js`);
 let tries=0;
 const start=()=>{
  const adapter=create();
  if(!adapter){if(++tries<240)setTimeout(start,500);return;}
  const canvas=adapter.canvas||document.querySelector('canvas');
  adapter.input ||= pointerInput(canvas);
  installSlowMotion(id);
  installGuide(adapter);
 };
 start();
}
