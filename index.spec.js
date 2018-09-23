import { transmit, Message, Note, ParameterCode } from './';
import { describe, it, delay, fdescribe, fit } from 'highground';
//
// describe(`Korg Volca-Beats`,()=>{
//     it("Play all notes in succession",async ()=>{
//         let time = window.performance.now();
//         for (let i = 0; i < Object.keys(Note).length; i++) {
//             let note = Object.values(Note)[i];
//             transmit(Message.NOTE_ON(note), time + i * 100);
//         }
//         await delay(1000);
//     });
//
//     it("Start then stop",async ()=>{
//         let time = window.performance.now();
//         transmit(Message.START(), time);
//         transmit(Message.STOP(), time + 1000);
//         await delay(1000);
//     });
//
//     fdescribe("Parameter Change",()=>{
//         for (let [parameterCode, note, defaultValue] of [
//             [`PART_LEVEL_KICK`, Note.KICK],
//             [`PART_LEVEL_SNARE`, Note.SNARE],
//             [`PART_LEVEL_LO_TOM`, Note.LO_TOM],
//             [`PART_LEVEL_HI_TOM`, Note.HI_TOM],
//             [`PART_LEVEL_CL_HAT`, Note.CL_HAT],
//             [`PART_LEVEL_OP_HAT`, Note.OP_HAT],
//             [`PART_LEVEL_CLAP`, Note.CLAP],
//             [`PART_LEVEL_CLAVES`, Note.CLAVES],
//             [`PART_LEVEL_AGOGO`, Note.AGOGO],
//             [`PART_LEVEL_CRASH`, Note.CRASH],
//             [`PCM_SPEED_CLAP`,Note.CLAP,0],
//             [`PCM_SPEED_CLAVES`,Note.CLAVES,0],
//             [`PCM_SPEED_AGOGO`,Note.AGOGO,0],
//             [`PCM_SPEED_CRASH`,Note.CRASH,0],
//             [`STUTTER_TIME`,Note.SNARE,0],
//             [`STUTTER_DEPTH`,Note.SNARE,0],
//             [`DECAY_TOM`,Note.HI_TOM,0],
//             [`DECAY_CL_HAT`,Note.CL_HAT,0],
//             [`DECAY_OP_HAT`,Note.OP_HAT,0],
//             [`HAT_GRAIN`,Note.OP_HAT,0],
//         ]) {
//             fit(parameterCode, async ()=>{
//                 let time = window.performance.now();
//                 for (let i = 0; i < 8; i++) {
//                     transmit(Message.PARAMETER_CHANGE(ParameterCode[parameterCode], i * 0x0f), time + i * 100);
//                     transmit(Message.NOTE_ON(note), time + i * 100 + 10);
//                 }
//
//                 await delay(1000);
//                 if (defaultValue !== undefined) transmit(Message.PARAMETER_CHANGE(ParameterCode[parameterCode], defaultValue));
//             })
//         }
//
//     })
// });

describe("A tune",()=>{
    let time = window.performance.now();
    for (let i = 0x00; i < 0x7F; i++) {
        let fn = n=>n>>(i%0x20)&1;
        if (fn(0x51111141)) transmit(Message.NOTE_ON(Note.KICK),time + i * 0x40);
        if (fn(0x60105010)) transmit(Message.NOTE_ON(Note.SNARE),time + i * 0x40);
        if (fn(0xf5555555)) transmit(Message.NOTE_ON(Note.CL_HAT),time + i * 0x40);
    }
});