/* Property Features contains
1. Rental range
2. Number of Bathrooms and Bedrooms
*/

import React, {Component} from 'react';
import {
    DropdownWrapper,
    StyledSelect,
    StyledOption,
    StyledLabel,
    StyledButton,
}  from '../Styles/Styles';
import '../App.css';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;

const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

const mrts = [
    "EW18:Redhill",
    "EW19:Queenstown",
    "EW20:Commonwealth",
    "EW21:Buona Vista"
]

const websites = ["All", "Property Guru", "99Co"]

class PropertyFeatures extends Component{

    render(){

        return (
            <div className='User-input-column'>
                <SelectWebsites websites = {websites}/>
                <SelectLocations/>
            </div>
        )
    }

}

function SelectWebsites (props){
    const websitesCheckboxes = props.websites.map((website) =>
        <FormControlLabel control={<Checkbox defaultChecked />} label={website} />
    );
    return (
        <div className= "User-input-element">
            <h4> Select your websites </h4>
            <Box sx={{alignItems: 'center', justifyItems: 'center'}}>
                {websitesCheckboxes}
            </Box>
        </div>

    )
}


function getStyles(mrt, mrtName, theme) {
    return {
        fontWeight:
            mrtName.indexOf(mrt) === -1
                ? theme.typography.fontWeightRegular
                : theme.typography.fontWeightMedium,
    };
}
function SelectLocations (props) {
    const theme = useTheme();
    const [mrtName, setMrtName] = React.useState([]);

    const handleChange = (event) => {
        const {
            target: { value },
        } = event;
        setMrtName(
            // On autofill we get a the stringified value.
            typeof value === 'string' ? value.slice(0,5) : value,
        );
    };
    return (
        <div>
            <h4> Select your locations </h4>
            <FormControl sx={{ m: 1, width: 300 }}>
                <InputLabel id="mrts">MRT</InputLabel>
                <Select
                    labelId="mrts"
                    id="mrts"
                    multiple
                    value={mrtName}
                    onChange={handleChange}
                    input={<OutlinedInput id="select-multiple-mrts" label="Mrts" />}
                    renderValue={(selected) => (
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                            {selected.map((value) => (
                                <Chip key={value} label={value} />
                            ))}
                        </Box>
                    )}
                    MenuProps={MenuProps}
                >
                    { mrts.map( mrt =>(
                        <MenuItem
                            key= {mrt.split(":")[0]}
                            value={mrt}
                            style={getStyles(mrt, mrtName, theme)}
                        >
                            {mrt}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    );
}

function Dropdown(props){
    return (
        <DropdownWrapper action={props.action}>
            <StyledLabel htmlFor="services">
                {props.formLabel}
            </StyledLabel>
            <StyledSelect id="services" name="services">
                {props.children}
            </StyledSelect>
            <StyledButton type="submit" value={props.buttonText} />
        </DropdownWrapper>
    );
}

function Option(props) {
    return (
        <StyledOption selected={props.selected}>
            {props.value}
        </StyledOption>
    );
}

export default PropertyFeatures;