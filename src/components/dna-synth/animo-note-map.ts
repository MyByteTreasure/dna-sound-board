import {Note} from "tone/build/esm/core/type/NoteUnits";

export interface NoteMapping {
    [id: string]: Note
}

const soundMapping: NoteMapping = {
    PHENYLALANINE: "Gb-1",
    LEUCINE: "C1",
    ISOLEUCINE: "C2",
    METHIONINE: "C3",
    VALINE: "C4",
    SERINE: "C5",
    PROLINE: "C6",
    THREONINE: "A2",
    ALANINE: "A5",
    TYROSINE: "B1",
    HISTIDINE: "B2",
    GLUTAMINE: "B3",
    ASPARAGINE: "B4",
    LYSINE: "B5",
    ASPARTIC_ACID: "B6",
    GLUTAMIC_ACID: "A3",
    CYSTEINE: "A4",
    TRYPTOPHAN: "E0",
    ARGININE: "E1",
    GLYCINE: "E2",
    START: "E3",
    STOP: "E4"
}

const soundMap = new Map(Object.entries(soundMapping));

export default soundMap;