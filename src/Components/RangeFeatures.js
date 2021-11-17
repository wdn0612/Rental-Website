/* Range Features contains
1. Property Websites
2. Locations
 */

import React, {Component} from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import OutlinedInput from "@mui/material/OutlinedInput";
import Chip from "@mui/material/Chip";
import MenuItem from "@mui/material/MenuItem";
import {useTheme} from "@mui/material/styles";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;

const bedroomsNumber = ['0 (Studio)','1', '2','3','4','5'];
const bathroomsNumber = ['1','2','3','4','5'];
const max_rent = 10000;
const marks = [
    {
        value: 0,
        label: '$0',
    },
    {
        value: 25,
        label: '$2.5k',
    },
    {
        value: 50,
        label: '$5.0k',
    },
    {
        value: 75,
        label: '$7.5k'
    },
    {
        value: 100,
        label: '$10k',
    },
];

const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};
export default class RangeFeatures extends Component{
    render() {
        return(
            <div className='User-input-column'>
                <RentRange />
                <BedsBaths />
            </div>
        )
    }
}

function valueLabelFormat(value){
    let rentValue = 0;
    rentValue = value/100*10;
    return `$ ${rentValue.toFixed(1)}`
}

function RentRange(props){
    const [value, setValue] = React.useState([25, 50]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className= "User-input-element">
            <h4> Enter your expected rent </h4>
            <Box sx={{ width: 500, marginInline: 10, alignItems:'center'}}>
                <Slider
                    getAriaLabel={() => 'Rent range'}
                    value={value}
                    onChange={handleChange}
                    valueLabelDisplay="auto"
                    marks={marks}
                    valueLabelFormat={valueLabelFormat}
                />
            </Box>

        </div>
    );
}

function getStyles(cur, stored, theme) {
    console.log(stored);
    return {
        fontWeight:
            stored.indexOf(cur) === -1
                ? theme.typography.fontWeightRegular
                : theme.typography.fontWeightMedium,
    };
}

function BedsBaths(props){
    return (
        <div className= "User-input-element">
            <h4> Enter your desired rooms </h4>
            <Box sx={{flexDirection:'row', alignItems: 'center'}}>
                <Beds/> <Baths/>
            </Box>
        </div>

    )
}

function Beds (){
    const theme = useTheme();
    const [bedrooms, setBedroomNumber] = React.useState([]);

    const handleBedroomChange = (event) => {
        const {
            target: { value },
        } = event;
        setBedroomNumber(
            // On autofill we get a the stringified value.
            value,
        );
    }

    return (
        <div>
            <FormControl sx={{ m: 1, width: 350 }}>
                <InputLabel id="bedrooms">Bedrooms</InputLabel>
                <Select
                    labelId="bedrooms"
                    id="bedrooms"
                    multiple
                    value={bedrooms}
                    onChange={handleBedroomChange}
                    input={<OutlinedInput id="select-multiple-bedrooms" label="bedrooms" />}
                    renderValue={(selected) => (
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                            {selected.map((value) => (
                                <Chip key={value} label={value} />
                            ))}
                        </Box>
                    )}
                    MenuProps={MenuProps}
                >
                    { bedroomsNumber.map( bed =>(
                        <MenuItem
                            key= {bed}
                            value={bed}
                            style={getStyles(bed, bedrooms, theme)}
                        >
                            {bed}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    )

}

function Baths(){
    const theme = useTheme();
    const [bathrooms, setBathroomNumber] = React.useState([]);

    const handleBathroomChange = (event) => {
        const {
            target: { value },
        } = event;
        setBathroomNumber(
            // On autofill we get a the stringified value.
            value,
        );
    }

    return (
        <div>
            <FormControl sx={{ m: 1, width: 350 }}>
                <InputLabel id="bathrooms">Bathrooms</InputLabel>
                <Select
                    labelId="bathrooms"
                    id="bathrooms"
                    multiple
                    value={bathrooms}
                    onChange={handleBathroomChange}
                    input={<OutlinedInput id="select-multiple-bedrooms" label="bathrooms" />}
                    renderValue={(selected) => (
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                            {selected.map((value) => (
                                <Chip key={value} label={value} />
                            ))}
                        </Box>
                    )}
                    MenuProps={MenuProps}
                >
                    { bathroomsNumber.map( bath =>(
                        <MenuItem
                            key= {bath}
                            value={bath}
                            style={getStyles(bath, bathrooms, theme)}
                        >
                            {bath}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    )

}