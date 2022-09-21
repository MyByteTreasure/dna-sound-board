import React from "react";
import Selector from "../../inputs/Selector";
import {AminoAcidEnum} from "../AminoAcidEnum";
import {COMMON_NOTES} from "../animo-note-map";

const AminoNoteSelectors = (): JSX.Element => {

  const commonNotesOptionsArray = COMMON_NOTES.map(el => {return {label: el, value: el}});
  const aminoAcidArray = Object.values(AminoAcidEnum);
  console.log(aminoAcidArray)
    return (
        <>
          {aminoAcidArray.map(el => {return <Selector selectLabel={el} key={"selector_" + el} options={commonNotesOptionsArray}/>})}
        </>
    );
};

export default AminoNoteSelectors;