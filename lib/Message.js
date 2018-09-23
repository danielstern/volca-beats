import { Note } from './Note';
import { ControlCode } from './ControlCode';
import { config } from '../config'
export const Message = {
    NOTE_ON:(note = Note.KICK)=>[ControlCode.NOTE_ON + config.channel, note, 0x7f],
    STOP:()=>[ControlCode.STOP],
    START:()=>[ControlCode.START],
    PARAMETER_CHANGE:(parameterCode, value)=>[ControlCode.PARAMETER_CHANGE + config.channel, parameterCode, value]
};