# Serial-PIN-Generator 🔐🔓#️⃣#️⃣#️⃣#️⃣#️⃣🔑🔒
This library helps you generate unique pairs of serial and pin numbers everytime.


# Installation
```
npm install @festudio/serial-pin-generator
```


# Usage

Import the library

```
import { createCardPins } from "@festudio/serial-pin-generator";
```

## How to use it

```
const pins =  await createCardPins()

//Or

createCardPins()
  .then(results => console.log(results))
  .catch(err => console.error(err))

// Results

pins [
      { pin: 434369572612, serial_num: '759617762160000' },
      { pin: 310161338250, serial_num: '759617762160001' },
      { pin: 497100874356, serial_num: '759617762160002' },
      { pin: 753413670221, serial_num: '759617762160003' },
      { pin: 291810149868, serial_num: '759617762160004' },
      { pin: 449974533800, serial_num: '759617762160005' },
      { pin: 197713261049, serial_num: '759617762160006' },
      { pin: 453078054968, serial_num: '759617762160007' },
      { pin: 972933855118, serial_num: '759617762160008' },
      { pin: 378448476111, serial_num: '759617762160009' },
      { pin: 959478428739, serial_num: '759617762160010' },
      { pin: 989596892191, serial_num: '759617762160011' },
      { pin: 826691133589, serial_num: '759617762160012' },
      { pin: 761082459062, serial_num: '759617762160013' },
      { pin: 221816791487, serial_num: '759617762160014' },
      { pin: 526395861604, serial_num: '759617762160015' },
      { pin: 239003957784, serial_num: '759617762160016' },
      { pin: 899049343577, serial_num: '759617762160017' },
      { pin: 150185652819, serial_num: '759617762160018' },
      { pin: 994340709105, serial_num: '759617762160019' }
    ]
```


