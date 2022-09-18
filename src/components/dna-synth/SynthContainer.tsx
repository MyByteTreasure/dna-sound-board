import React, {ChangeEvent, useState} from "react";
import {now, Synth} from "tone";
import dnaMap from "./dna-map";
import {window} from "../../util/string-functions";
import soundMap from "./animo-note-map";
import animoNoteMap from "./animo-note-map";

const SynthContainer = (): JSX.Element => {
    const [dnaSequence, setDNASequence] = useState("");
    const [note, setNote] = useState("");
    const synth = new Synth().toDestination();

    const onClick = () => {
        console.log(dnaSequence);
        console.log(dnaMap);
        const start: number = now()

        const condons = window(dnaSequence, 3);
        condons
            .map(el => el.toUpperCase())
            .map(el => dnaMap.get(el))
            .filter(el => !!el)
            .map((el, index) => {
                return {el: soundMap.get(el ? el : "C4"), index: index}
            })
            .forEach(el => {
                console.log(el.el)
                synth.triggerAttackRelease(el.el ? el.el : "C4", "8n", start + (0.25 * el.index));
            })
    }

    const onClickTestNote = () => {
        synth.triggerAttackRelease(note, "8n");

    }

    const onInput = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setDNASequence(event.target.value);
    }

    const onNoteInput = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setNote(event.target.value)
    }

    return (
        <div>
            <div>
                <textarea onChange={onInput}/>
                <button onClick={onClick}>Click to make noise</button>
            </div>
            <div>
                <textarea onChange={onNoteInput}/>
                <button onClick={onClickTestNote}>Click to test note</button>
            </div>
        </div>
    );
};

export default SynthContainer;