import React from "react";
import AminoNoteSelectors from "./AminoNoteSelectors";
import {Stack} from "@mui/material";
import {AminoAcidEnum} from "../../../util/amino-mapping/AminoAcidEnum";
import {Note} from "tone/build/esm/core/type/NoteUnits";
import {NoteMapping} from "../../../util/amino-mapping/animo-note-map";

export type AminoNoteConfigurationProps = {
    mapping: NoteMapping,
    onConfigureAminoAcid: (amino: AminoAcidEnum, note: string) => void
}
const AminoNoteConfiguration = (props: AminoNoteConfigurationProps): JSX.Element => {

    return (
        <Stack
            direction="row"
            flexWrap={"wrap"}
        >
                <AminoNoteSelectors onConfigureAminoAcid={props.onConfigureAminoAcid} mapping={props.mapping}/>
        </Stack>
    );
};

export default AminoNoteConfiguration;