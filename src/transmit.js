import { config } from '../config'

let midiAccess;
export async function transmit(message = [0xFA], time = window.performance.now()) {
    if (!midiAccess) midiAccess = await navigator.requestMIDIAccess({ sysex: true });
    midiAccess.outputs.get(config.port)
        .send(message,time)
}