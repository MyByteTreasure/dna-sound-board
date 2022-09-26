import React from "react";
import Selector from "../../inputs/Selector";
import {AminoAcidEnum} from "../../../util/amino-mapping/AminoAcidEnum";
import {COMMON_NOTES, NoteMapping} from "../../../util/amino-mapping/animo-note-map";
import {Note} from "tone/build/esm/core/type/NoteUnits";

export type AminoNoteSelectorsProps = {
  mapping: NoteMapping,
  onConfigureAminoAcid: (amino: AminoAcidEnum, note: string) => void
}

const AminoNoteSelectors = (props: AminoNoteSelectorsProps): JSX.Element => {

  const commonNotesOptionsArray = COMMON_NOTES.map(el => {return {label: el, value: el}});
  const aminoAcidArray = Object.values(AminoAcidEnum);

  return (
        <>
          {aminoAcidArray.map(el => {
            return <Selector selectLabel={el} value={props.mapping[el]} options={commonNotesOptionsArray} key={"selector_" + el} onConfigureAminoAcid={props.onConfigureAminoAcid}/>
          })}
        </>
    );
};

export default AminoNoteSelectors;