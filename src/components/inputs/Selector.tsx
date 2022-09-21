import React, {useState} from "react";
import {FormControl, InputLabel, MenuItem, Select, SelectChangeEvent} from "@mui/material";

interface MenuItemProps {
    value: string,
    label: string
}

export interface SelectorProps {
    selectLabel: string,
    options: MenuItemProps[]
}

const Selector =  (props: SelectorProps): JSX.Element => {

    const [selectedValue, setSelectedValue] = useState(props.options[0].value);

    const select = (event: SelectChangeEvent) => {
        setSelectedValue(event.target.value);
    }

    return (
        <FormControl sx={{margin: 2, minWidth: 150 }} size="small">
            <InputLabel id={props.selectLabel}>{props.selectLabel}</InputLabel>
            <Select
                value={selectedValue}
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