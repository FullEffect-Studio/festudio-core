import {createCardPins} from "@festudio/core";

describe('serialPinGenerator',  () => {
  it('should generate  a serial and pin', async() => {
   const pins =  await createCardPins()
    console.log('pins', pins)
    // expect(serialPinGenerator()).toEqual('serial-pin-generator');
  });
});
