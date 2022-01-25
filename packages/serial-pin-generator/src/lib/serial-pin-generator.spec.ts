import { createCardPins } from "./create-serial-pin";


describe('serialPinGenerator',  () => {
  it('should generate  a serial and pin', async() => {
   const pins =  await createCardPins()
    console.log('pins', pins)
    // expect(serialPinGenerator()).toEqual('serial-pin-generator');
  });
});
