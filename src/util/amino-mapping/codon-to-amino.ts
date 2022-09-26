import {window} from "../string-functions";
import {toAminoAcid} from "./dna-map";
import {NoteMapping, toNote} from "./animo-note-map";
import {Note} from "tone/build/esm/core/type/NoteUnits";

const textToNotes = (text: string, aminoToNote: NoteMapping): Note[] => {
    return window(text, 3)
        .map(el => el.toUpperCase())
        .map(el => el.toUpperCase())
        .map(el => toAminoAcid(el))
        .filter(el => !!el)
        .map(el => toNote(el, aminoToNote));
}

export default textToNotes;
