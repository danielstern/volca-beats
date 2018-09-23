#volca-beats

##node.js driver for korg VOLCA BEATS vintage analogue synthesizer

###Introduction


###Installation

```
npm install volca-beats
```

###Usage
Examples must be compiled using `babel` or another compiler and run in the browser, as `volca-beats uses the `web midi` api. You can still use the note codes and parameter codes available if you want to create a node-based library.
####Quick Start Example
```javascript
import { transmit, Message, Note } from 'volca-beats';
transmit(Message.NOTE_ON(Note.KICK), window.performance.now() + 1000);
/* kick drum will sound in one second */
```

####Sequence With JavaScript, then Playback with VOLCA BEATS

```javascript
let time = window.performance.now();
for (let i = 0x00; i < 0x7F; i++) {
    let fn = n=>n>>(i%0x20)&1;
    if (fn(0x51111141)) transmit(Message.NOTE_ON(Note.KICK),time + i * 0x40);
    if (fn(0x60105010)) transmit(Message.NOTE_ON(Note.SNARE),time + i * 0x40);
    if (fn(0xf5555555)) transmit(Message.NOTE_ON(Note.CL_HAT),time + i * 0x40);
}
/* plays back a catchy drum beat */
```

###Reference
####Note
A dictionary containing references to the hexadecimal codes to sound each note.

```javascript
import { transmit, Message, Note } from 'volca-beats';
console.log(Note.SNARE) //0x26
transmit(Message.NOTE_ON(Note.SNARE));
```

####ParameterCode
A dictionary containing references to each parameter code recognized by VOLCA BEATS.

```javascript
import { ParameterCode } from 'volca-beats';
transmit(Message.PARAMETER_CHANGE(ParameterCode.HAT_GRAIN, 0xD0));
transmit(Message.NOTE_ON(Note.OP_HAT));
```