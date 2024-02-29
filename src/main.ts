import dotenv from 'dotenv';
import { FacebookApi } from './metaApi.js';

dotenv.config();

async function main(): Promise<void> {
  const facebookApiClass = new FacebookApi();

  loopRunner(facebookApiClass);
}

const loopRunner = async (facebookApiClass: FacebookApi): Promise<void> => {
  let keepRunning = true;

  setTimeout(() => {
    keepRunning = false;
  }, 15 * 1000);

  while (keepRunning) {
    await facebookApiClass.getFacebookData();
  }
};

main();
