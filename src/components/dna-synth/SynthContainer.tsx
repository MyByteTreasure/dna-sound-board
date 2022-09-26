import React, {ChangeEvent, useState} from "react";
import {Button, Container, Stack, TextField} from "@mui/material";
import AminoNoteConfiguration from "./amino-note-cofiguration-panel/AminoNoteConfiguration";
import playMusic from "../../util/music-machine/music-machine";
import textToNotes from "../../util/amino-mapping/codon-to-amino";
import animoNoteMap, {soundMapping} from "../../util/amino-mapping/animo-note-map";
import {AminoAcidEnum} from "../../util/amino-mapping/AminoAcidEnum";
import {Note} from "tone/build/esm/core/type/NoteUnits";

const SynthContainer = (): JSX.Element => {
    const [dnaSequence, setDNASequence] = useState("");
    const [note, setNote] = useState("");
    const [aminoToNote, setAminoToNotes] = useState(soundMapping)

    const onClick = () => {

        const notes = textToNotes(dnaSequence, aminoToNote);
        playMusic(notes);
    }

    const onClickTestNote = () => {
        //playMusic([note])
    }

    const onInput = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setDNASequence(event.target.value);
    }

    const onNoteInput = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setNote(event.target.value)
    }

    const onConfigureAminoAcid = (amino: AminoAcidEnum, note: string) => {
        console.log(amino)
        console.log(note)
        const newMapping = {...aminoToNote, [amino]: note as Note};
        console.log(newMapping)
        setAminoToNotes(newMapping);
    }

    return (
        <Container  maxWidth="sm">
            <Stack>
                <TextField onChange={onInput} multiline={true}></TextField>
                <Button onClick={onClick}>Click to make noise</Button>
                <TextField onChange={onNoteInput} multiline={true}></TextField>
                <Button onClick={onClickTestNote}>Click to test note</Button>
                <AminoNoteConfiguration onConfigureAminoAcid={onConfigureAminoAcid} mapping={aminoToNote}/>
            </Stack>
        </Container>

    );
};

export default SynthContainer;