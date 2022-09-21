import React from "react";
import Selector from "../../inputs/Selector";
import {AminoAcidEnum} from "../AminoAcidEnum";
import {COMMON_NOTES} from "../animo-note-map";
import AminoNoteSelectors from "./AminoNoteSelectors";
import {FormControl, Stack} from "@mui/material";

const AminoNoteConfiguration = (): JSX.Element => {

    return (
        <Stack
            direction="row"
            flexWrap={"wrap"}
        >
                <AminoNoteSelectors/>
        </Stack>
    );
};

export default AminoNoteConfiguration;