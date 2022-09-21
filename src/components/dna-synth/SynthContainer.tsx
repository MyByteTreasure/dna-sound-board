import React, {ChangeEvent, useState} from "react";
import {now, Synth} from "tone";
import dnaMap from "./dna-map";
import {window} from "../../util/string-functions";
import soundMap, {COMMON_NOTES} from "./animo-note-map";
import {Button, Container, Stack, TextField} from "@mui/material";
import Selector from "../inputs/Selector";
import {AminoAcidEnum} from "./AminoAcidEnum";
import AminoNoteConfiguration from "./amino-note-cofiguration-panel/AminoNoteConfiguration";

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
        <Container  maxWidth="sm">
            <Stack>
                <TextField onChange={onInput} multiline={true}></TextField>
                <Button onClick={onClick}>Click to make noise</Button>
                <TextField onChange={onNoteInput} multiline={true}></TextField>
                <Button onClick={onClickTestNote}>Click to test note</Button>
                <AminoNoteConfiguration/>
            </Stack>
        </Container>

    );
};

export default SynthContainer;