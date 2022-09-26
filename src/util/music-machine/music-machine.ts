import {now, Synth} from "tone";
import {Note} from "tone/build/esm/core/type/NoteUnits";

const synth = new Synth().toDestination();

const playMusic = (noteList: Note[]) => {

    const start: number = now()
    noteList.map((el, index) => {return {el: el, index: index}})
        .forEach(el => {
        synth.triggerAttackRelease(el.el, "8n", start + (0.25 * el.index));
    })
}

export default playMusic;