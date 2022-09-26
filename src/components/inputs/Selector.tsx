import React, {useState} from "react";
import {FormControl, InputLabel, MenuItem, Select, SelectChangeEvent} from "@mui/material";
import {Note} from "tone/build/esm/core/type/NoteUnits";
import {AminoAcidEnum} from "../../util/amino-mapping/AminoAcidEnum";

interface MenuItemProps {
    value: string,
    label: string
}

export interface SelectorProps {
    selectLabel: AminoAcidEnum,
    value: string,
    options: MenuItemProps[],
    onConfigureAminoAcid: (amino: AminoAcidEnum, note: string) => void
}

const Selector =  (props: SelectorProps): JSX.Element => {

    console.log(props)

    const select = (event: SelectChangeEvent) => {
        props.onConfigureAminoAcid(props.selectLabel, event.target.value);
    }

    return (
        <FormControl sx={{margin: 2, minWidth: 150 }} size="small">
            <InputLabel id={props.selectLabel}>{props.selectLabel}</InputLabel>
            <Select
                value={props.value}
                label={props.selectLabel}
                labelId={props.selectLabel}
                onChange={select}
            >
                {props.options.map(el => <MenuItem value={el.value} key={el.value}>{el.label}</MenuItem>)}
            </Select>
        </FormControl>
    );
};

export default Selector;