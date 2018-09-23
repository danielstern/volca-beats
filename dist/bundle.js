(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (factory((global['volca-beats'] = {})));
}(this, (function (exports) { 'use strict';

    const ControlCode = {
      NOTE_ON: 0x90,
      PARAMETER_CHANGE: 0xB0,
      START: 0xFA,
      SONG_POSITION_POINTER: 0xF2,
      CONTINUE: 0xFB,
      STOP: 0xFC
    };

    const Note = {
      KICK: 0x24,
      SNARE: 0x26,
      LO_TOM: 0x2B,
      HI_TOM: 0x32,
      CL_HAT: 0x2A,
      OP_HAT: 0x2E,
      CLAP: 0x27,
      CLAVES: 0x4B,
      AGOGO: 0x43,
      CRASH: 0x31
    };

    const config = {
      channel: 0x09,
      port: `output-1`
    };

    const Message = {
      NOTE_ON: (note = Note.KICK) => [ControlCode.NOTE_ON + config.channel, note, 0x7f],
      STOP: () => [ControlCode.STOP],
      START: () => [ControlCode.START],
      PARAMETER_CHANGE: (parameterCode, value) => [ControlCode.PARAMETER_CHANGE + config.channel, parameterCode, value]
    };

    const ParameterCode = {
      PART_LEVEL_KICK: 0X28,
      PART_LEVEL_SNARE: 0X29,
      PART_LEVEL_LO_TOM: 0X2A,
      PART_LEVEL_HI_TOM: 0X2B,
      PART_LEVEL_CL_HAT: 0X2C,
      PART_LEVEL_OP_HAT: 0X2D,
      PART_LEVEL_CLAP: 0X2E,
      PART_LEVEL_CLAVES: 0X2F,
      PART_LEVEL_AGOGO: 0X30,
      PART_LEVEL_CRASH: 0X31,
      PCM_SPEED_CLAP: 0X32,
      PCM_SPEED_CLAVES: 0X33,
      PCM_SPEED_AGOGO: 0X34,
      PCM_SPEED_CRASH: 0X35,
      STUTTER_TIME: 0X36,
      STUTTER_DEPTH: 0X37,
      DECAY_TOM: 0X38,
      DECAY_CL_HAT: 0X39,
      DECAY_OP_HAT: 0X3A,
      HAT_GRAIN: 0X3B
    };

    let midiAccess;
    async function transmit(message = [0xFA], time = window.performance.now()) {
      if (!midiAccess) midiAccess = await navigator.requestMIDIAccess({
        sysex: true
      });
      midiAccess.outputs.get(config.port).send(message, time);
    }

    exports.ControlCode = ControlCode;
    exports.Note = Note;
    exports.Message = Message;
    exports.ParameterCode = ParameterCode;
    exports.config = config;
    exports.transmit = transmit;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
