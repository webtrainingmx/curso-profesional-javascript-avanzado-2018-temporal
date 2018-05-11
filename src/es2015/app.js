import FelixElGato from './modules/utils';
import {CONFIG as Configuration} from './modules/utils';

class App {
  start() {
    console.log('>> start');
    let items = [32, 3, 43, 3];

    console.log(items.map((item) => 2 * item));

    const protocol = 'https';
    const hostname = 'webtraining.zone';
    const serviceURL = `${protocol}://${hostname}/api/v1/`;
    console.log(serviceURL);


    items.push(1000);

    items = [...items,1000]; //[32, 3, 43, 3, 1000]

    function concatLetters(charA, charB) {
      return charA + charB;
    }

    let chars = ['Z', 'W'];

    concatLetters(...chars);


    let param1, param2;

    [param1, param2] = chars;

    console.log(param1);

  }
}

const app = new App();
app.start();

const utils = new FelixElGato();
utils.getData();
