import {SerialNumber} from './serial-number'
import {generatePin}  from './pin-generator'

/**
 * A generator function for generating scratch card pin and serial number
 * @param {number} cardNumberOfDigits
 * @param {string} prefixCharacters
 * @param {number} serialNumberOfDigits
 * @param {number} numberRequired
 */
export function *generateValues(pinLength, serialNumLength, prefixCharacters, numberRequired) {
  const SerialNum = new SerialNumber(serialNumLength, prefixCharacters)
  let counter = 0;
  while (counter++ < numberRequired) {
    yield {pin: generatePin(pinLength), serial_num: SerialNum.serialNumber()};
  }
}



const defaultOptions = {
  pinLength: 12,
  serialNumLength: 15,
  prefixCharacters: '',
  numberRequired: 20
}

export interface SerialPinPair{
  pin: number, serial_num: number
}

/**
 * create and save scratch card pins and serial numbers;
 *
 * prefixCharacters is used for specifying the string part opf the serial number
 * @param {number} cardNumberOfDigits Number of digits for card
 * @param {string} prefixCharacters sspecify the string prefix of the serial number if required
 * @param {number} serialNumLength string length for serial number
 * @param {number} numberRequired Number of cards to be created
 */
export function createCardPins(options = defaultOptions): Promise<SerialPinPair[]> {
  const opts = {
    pinLength: options.pinLength || defaultOptions.pinLength,
    serialNumLength: options.serialNumLength || defaultOptions.serialNumLength,
    prefixCharacters: options.prefixCharacters || defaultOptions.prefixCharacters,
    numberRequired: options.numberRequired || defaultOptions.numberRequired
  }
  const {pinLength, serialNumLength, prefixCharacters, numberRequired} = opts;
  return new Promise((resolve, reject) => {
    if(
      typeof(pinLength) !== 'number' ||
      typeof(serialNumLength) !== 'number' ||
      typeof(numberRequired) !== 'number' ||
      typeof(prefixCharacters) !== 'string'
    ) {
      reject(new TypeError('pinLength should be of type number, serialNumLength should be of type number, prefixCharacters should be of type string and numberRequired should be of type number'));
    }
    const cards = generateValues(pinLength, serialNumLength, prefixCharacters, numberRequired);
    let card;
    let cardArray: SerialPinPair[] = [];
    do{
      card = cards.next();
      if(card.value !== undefined)
        cardArray.push(card.value);
    }
    while (card.done === false);
    if(cardArray === null || cardArray.length === undefined || cardArray.length < 1){
      reject('No card created');
    }
    resolve(cardArray);
  })
}

