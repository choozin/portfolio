import { useState, useEffect } from 'react'
import '@fontsource/roboto'
import { makeStyles } from '@material-ui/core/styles'
import { Container, Button, Grid, Paper } from '@material-ui/core'
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';

import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import Select from '@material-ui/core/Select';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import InputAdornment from '@material-ui/core/InputAdornment';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import SendIcon from '@material-ui/icons/Send'

import { v4 } from 'uuid';



const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    heading: {
        fontSize: theme.typography.pxToRem(20),
        fontWeight: theme.typography.fontWeightRegular,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: '#BBB',
        backgroundColor: '#FFF',
        opacity: '1',
    },
    formControl: {
        margin: theme.spacing(2),
        minWidth: 120,
    },
    textField: {
        margin: '1em',
        maxWidth: '14em'
    },
    textFieldFullWidth: {
        margin: '1em',
        width: '92%'
    },
    checkbox: {
        marginLeft: '1em',
        marginRight: '-1em',
    },
    fullwidth: {
        width: '100%',
    }
}))

const Calculator = () => {

    const classes = useStyles();

    // to prevent code from further running 
    // until client has loaded
    // for local storage
    const [hasMounted, setHasMounted] = useState(false)

    const [roomId, setRoomId] = useState('1')

    const [sqft, setSqft] = useState(0);
    const [height, setHeight] = useState(9);
    const [numRooms, setNumRooms] = useState(1);
    const [numDoors, setNumDoors] = useState(1);
    const [numWindows, setNumWindows] = useState(1);

    const [crownMoulding, setCrownMoulding] = useState(false)
    const [trim, setTrim] = useState(false)
    const [twoTone, setTwoTone] = useState(false)

    const [paintType, setPaintType] = useState('Provided');
    const [startingColor, setStartingColor] = useState('Gray');
    const [finalColor, setFinalColor] = useState('Gray');

    const [furniture, setFurniture] = useState(false)
    const [wallpaper, setWallpaper] = useState(false)
    const [repair, setRepair] = useState(0)

    const [notes, setNotes] = useState(null)

    const [firstName, setFirstName] = useState(null)
    const [lastName, setLastName] = useState(null)
    const [unit, setUnit] = useState(null)
    const [address, setAddress] = useState(null)
    const [city, setCity] = useState(null)
    const [state, setState] = useState(null)
    const [zip, setZip] = useState(null)
    const [phone, setPhone] = useState(null)
    const [email, setEmail] = useState(null)

    const [baseRate, setBaseRate] = useState(35)
    const [roomSetupRate, setRoomSetupRate] = useState(15)

    const [tapePricePerFootOfWall, setTapePricePerFootOfWall] = useState(0.30)
    const [paintPricePerPaintedSqFt, setPaintPricePerPaintedSqFt] = useState(0.20)
    const [crownMouldingPricePerFoot, setCrownMouldingPricePerFoot] = useState(1.50)
    const [trimPricePerFoot, setTrimPricePerFoot] = useState(1.50)
    const [furnitureRemovalPrice, setFurnitureRemovalCost] = useState(0.5) // per SqFt
    const [wallpaperRemovalPrice, setWallpaperRemovalCost] = useState(3) // per foot
    const [repairsPrice, setRepairsCost] = useState(40) // per hour
    const [totalPaintArea, setTotalPaintArea] = useState(0)

    const [total, setTotal] = useState(0)
    const [low, setLow] = useState(0)
    const [high, setHigh] = useState(0)
    const [marginOfError, setMarginOfError] = useState(10)

    const saveState = () => {
        let stateObj = {
            'sqft': sqft,
            'height': height,
            'numRooms': numRooms,
            'numDoors': numDoors,
            'numWindows': numWindows,
            'crownMoulding': crownMoulding,
            'trim': trim,
            'twoTone': twoTone,
            'paintType': paintType,
            'startingColor': startingColor,
            'finalColor': finalColor,
            'furniture': furniture,
            'wallpaper': wallpaper,
            'repair': repair,
            'notes': notes,
            'baseRate': baseRate,
            'roomSetupRate': roomSetupRate,
            'tapePricePerFootOfWall': tapePricePerFootOfWall,
            'paintPricePerPaintedSqFt': paintPricePerPaintedSqFt,
            'crownMouldingPricePerFoot': crownMouldingPricePerFoot,
            'trimPricePerFoot': trimPricePerFoot,
            'furnitureRemovalPrice': furnitureRemovalPrice,
            'wallpaperRemovalPrice': wallpaperRemovalPrice,
            'repairsPrice': repairsPrice,
            'totalPaintArea': totalPaintArea,
            'total': total,
            'low': low,
            'high': high,
            'marginOfError': marginOfError,
        }
        window.localStorage.setItem('paint-calc' + roomId, JSON.stringify(stateObj))
    }

    const loadState = (obj) => {
        setSqft(obj.sqft);
        setHeight(obj.height);
        setNumRooms(obj.numRooms);
        setNumDoors(obj.numDoors);
        setNumWindows(obj.numWindows);

        setCrownMoulding(obj.crownMoulding)
        setTrim(obj.trim)
        setTwoTone(obj.twoTone)

        setPaintType(obj.paintType)
        setStartingColor(obj.startingColor)
        setFinalColor(obj.finalColor)

        setFurniture(obj.furniture)
        setWallpaper(obj.wallpaper)
        setRepair(obj.repair)

        setNotes(obj.notes)

        setBaseRate(obj.baseRate)
        setRoomSetupRate(obj.roomSetupRate)

        setTapePricePerFootOfWall(obj.tapePricePerFootOfWall)
        setPaintPricePerPaintedSqFt(obj.paintPricePerPaintedSqFt)
        setCrownMouldingPricePerFoot(obj.crownMouldingPricePerFoot)
        setTrimPricePerFoot(obj.trimPricePerFoot)
        setFurnitureRemovalCost(obj.furnitureRemovalPrice) // per SqFt
        setWallpaperRemovalCost(obj.wallpaperRemovalPrice) // per foot
        setRepairsCost(obj.repairsPrice) // per hour
        setTotalPaintArea(obj.totalPaintArea)

        setTotal(obj.total)
        setLow(obj.low)
        setHigh(obj.high)
        setMarginOfError(obj.marginOfError)
    }

    const saveContact = () => {
        let stateObj = {
            'firstName': firstName,
            'lastName': lastName,
            'unit': unit,
            'address': address,
            'city': city,
            'state': state,
            'zip': zip,
            'phone': phone,
            'email': email,
        }
        window.localStorage.setItem('paint-calc' + roomId, JSON.stringify(stateObj))
    }

    const loadContact = (obj) => {
        setFirstName(obj.firstName)
        setLastName(obj.lastName)
        setUnit(obj.unit)
        setAddress(obj.address)
        setCity(obj.city)
        setState(obj.state)
        setZip(obj.zip)
        setPhone(obj.phone)
        setEmail(obj.email)
    }

    /*if(typeof window !== 'undefined') {
        loadState(JSON.parse(window.localStorage.getItem('paint-calc' + roomId)))
    }*/

    const startingDifficulty = [
        { 'color': 'White or Near White', 'coats': 0.5 },
        { 'color': 'Yellow', 'coats': 1.5 },
        { 'color': 'Light Green or Light Blue', 'coats': 1 },
        { 'color': 'Dark Green or Dark Blue', 'coats': 2 },
        { 'color': 'Light Red or Light Orange', 'coats': 1.5 },
        { 'color': 'Dark Red or Dark Orange', 'coats': 2.5 },
        { 'color': 'Purple or Brown', 'coats': 2.5 },
        { 'color': 'Gray', 'coats': 1.5 },
        { 'color': 'Black or Near Black', 'coats': 2.5 },
    ]

    const finishingDifficulty = [
        { 'color': 'White or Near White', 'coats': 1 },
        { 'color': 'Yellow', 'coats': 2 },
        { 'color': 'Light Green or Light Blue', 'coats': 1 },
        { 'color': 'Dark Green or Dark Blue', 'coats': 2 },
        { 'color': 'Light Red or Light Orange', 'coats': 1 },
        { 'color': 'Dark Red or Dark Orange', 'coats': 2 },
        { 'color': 'Purple or Brown', 'coats': 2 },
        { 'color': 'Gray', 'coats': 1 },
        { 'color': 'Black or Near Black', 'coats': 2 },
    ]

    // per 100sqft of paint
    const paintCostsArray = [
        { 'quality': 'Provided', 'price': 0 },
        { 'quality': 'Low End', 'price': 8 },
        { 'quality': 'Standard', 'price': 12 },
        { 'quality': 'High End', 'price': 16 },
        { 'quality': 'Luxury', 'price': 20 },
    ]

    useEffect(() => {
        let wallLength = Math.sqrt(sqft / numRooms) * 4 * numRooms;
        setTotalPaintArea(wallLength * height)

        let startDifObj = startingDifficulty.find(e => e.color === startingColor)
        let finishDifObj = finishingDifficulty.find(e => e.color === finalColor)
        let coats = Math.sqrt(startDifObj ? startDifObj.coats : 1) * Math.sqrt(finishDifObj ? finishDifObj.coats : 2)
        coats = startDifObj && finishDifObj && startDifObj.color === finishDifObj.color ? 1 : coats
        coats = startDifObj && finishDifObj && finishDifObj.color === 'Black or Near Black' && startDifObj.color === ('Dark Green or Dark Blue' || 'Dark Red or Dark Orange' || 'Purple or Brown' || 'Gray') ? 1.5 : coats
        let margin = coats * 4

        let paintCostObj = paintCostsArray.find(e => e.quality === paintType)
        let paintCost = paintCostObj ? paintCostObj.price : 0
        margin += paintCost * 0.34
        margin += ((numWindows + numDoors) / (numRooms * 2)) * 0.34
        crownMoulding && (margin += 7)
        trim && (margin += 3)
        furniture && (margin += 7)
        wallpaper && (margin += 5)

        setTotal(
            baseRate + // base rate
            (numRooms * roomSetupRate) + // room setup price
            (wallLength * tapePricePerFootOfWall) + // tape price
            (wallLength * height * paintPricePerPaintedSqFt * coats) + // labour
            (paintCost * wallLength * height / 100) + // paint cost
            (twoTone ? wallLength * tapePricePerFootOfWall : 0) + // two tone
            (numDoors * tapePricePerFootOfWall * 10) + // doors
            (numWindows * tapePricePerFootOfWall * 15) + // windows
            (crownMoulding ? wallLength * crownMouldingPricePerFoot : 0) + // crown moulding
            (trim ? wallLength * trimPricePerFoot : 0) + // crown moulding
            (furniture ? sqft * furnitureRemovalPrice : 0) + // furniture removal
            (wallpaper ? wallLength * wallpaperRemovalPrice : 0) + // furniture removal
            (repair * repairsPrice) // furniture removal
        )
        setMarginOfError(margin)
        //saveState()
    });


    useEffect(() => {
        setHasMounted(true)
    }, [])
    if (!hasMounted) { return null }


    return (
        <Container maxWidth='sm'>
            <div className={classes.root}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Paper className={classes.paper} elevation={3}>
                            <h3 style={{color: '#555'}}>Professional Paint Co.<br />Instant Quote Generator</h3>
                            <p>Expected Total: ${total ? total.toFixed(2) : '0.00'} (+/- ${total ? (total / 100 * marginOfError).toFixed(2) : '0.00'})</p>
                            <FormControl className={classes.formControl}>
                                <InputLabel id="loadState-label">Switch Style</InputLabel>
                                <Select
                                    labelId="loadState-label"
                                    id="loadState"
                                    className={classes.select}
                                    onChange={(event) => {
                                        setRoomId(event.target.value)
                                        window.localStorage.getItem('paint-calc' + event.target.value) !== null && loadState(JSON.parse(window.localStorage.getItem('paint-calc' + event.target.value)))
                                    }}
                                >
                                    <MenuItem value="">
                                        <em>Please Select One</em>
                                    </MenuItem>
                                    <MenuItem value={1}>Style 1</MenuItem>
                                    <MenuItem value={2}>Style 2</MenuItem>
                                    <MenuItem value={3}>Style 3</MenuItem>
                                    <MenuItem value={4}>Style 4</MenuItem>
                                </Select>
                            </FormControl>
                            <FormControl className={classes.formControl}>
                                <InputLabel id="saveAs-label">Save Style As</InputLabel>
                                <Select
                                    labelId="saveAs-label"
                                    id="saveAs"
                                    className={classes.select}
                                    value={roomId}
                                    onChange={(event) => {
                                        setRoomId(event.target.value)
                                    }}
                                >
                                    <MenuItem value="">
                                        <em>Please Select One</em>
                                    </MenuItem>
                                    <MenuItem value={1}>Style 1</MenuItem>
                                    <MenuItem value={2}>Style 2</MenuItem>
                                    <MenuItem value={3}>Style 3</MenuItem>
                                    <MenuItem value={4}>Style 4</MenuItem>
                                </Select>
                            </FormControl>
                            <Button
                                variant='contained'
                                color='primary'
                                startIcon={<SendIcon />}
                                onClick={() => saveState()}
                            >
                                Save
                            </Button>
                        </Paper>
                    </Grid>
                </Grid>

                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography className={classes.heading}>Style Specifications</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Grid container spacing={2}>
                            <Grid item sm={12} xs={12}>
                                <TextField
                                    id="numRooms"
                                    className={classes.textField}
                                    label="Number of Rooms"
                                    helperText="Including large closets."
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    InputProps={{
                                        endAdornment: <InputAdornment position="start">Rooms</InputAdornment>,
                                    }}
                                    value={numRooms}
                                    onChange={(e) => setNumRooms(e.target.value)}
                                />
                            </Grid>
                            <Grid item sm={6} xs={12}>
                                <TextField
                                    id="floorArea"
                                    className={classes.textField}
                                    label="Total Floor Area"
                                    helperText="For all rooms with this color."
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    InputProps={{
                                        endAdornment: <InputAdornment position="start">sqft.</InputAdornment>,
                                    }}
                                    value={sqft}
                                    onChange={(e) => setSqft(e.target.value)}
                                />
                            </Grid>
                            <Grid item sm={6} xs={12}>
                                <TextField
                                    id="height"
                                    className={classes.textField}
                                    label="Ceiling Height"
                                    helperText="Measured from floor to ceiling."
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    InputProps={{
                                        endAdornment: <InputAdornment position="start">ft.</InputAdornment>,
                                    }}
                                    value={height}
                                    onChange={(e) => setHeight(e.target.value)}
                                />
                            </Grid>
                            <Grid item sm={6} xs={12}>
                                <TextField
                                    id="numDoors"
                                    className={classes.textField}
                                    label="Number of Doors"
                                    helperText="If taping both sides then count twice."
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    InputProps={{
                                        endAdornment: <InputAdornment position="start">Doorways</InputAdornment>,
                                    }}
                                    value={numDoors}
                                    onChange={(e) => setNumDoors(e.target.value)}
                                />
                            </Grid>
                            <Grid item sm={6} xs={12}>
                                <TextField
                                    id="numWindows"
                                    className={classes.textField}
                                    label="Number of Windows"
                                    helperText="Only count those to be taped."
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    InputProps={{
                                        endAdornment: <InputAdornment position="start">Windows</InputAdornment>,
                                    }}
                                    value={numWindows}
                                    onChange={(e) => setNumWindows(e.target.value)}
                                />
                            </Grid>
                            <Grid item sm={6} xs={12} className={classes.checkbox}>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            checked={crownMoulding}
                                            onChange={() => setCrownMoulding(!crownMoulding)}
                                            name="crownMoulding"
                                            color="primary"
                                        />
                                    }
                                    label="Crown Moulding"
                                />
                            </Grid>
                            <Grid item sm={6} xs={12} className={classes.checkbox}>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            checked={trim}
                                            onChange={() => setTrim(!trim)}
                                            name="trim"
                                            color="primary"
                                        />
                                    }
                                    label="Trim & Baseboards"
                                />
                            </Grid>
                            <Grid item sm={12} xs={12} className={classes.checkbox}>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            checked={twoTone}
                                            onChange={() => setTwoTone(!twoTone)}
                                            name="twoTone"
                                            color="primary"
                                        />
                                    }
                                    label="Two-Tone Wall Color"
                                />
                            </Grid>
                        </Grid>
                    </AccordionDetails>
                </Accordion>

                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography className={classes.heading}>Paint Details</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Grid container spacing={2}>
                            <Grid item sm={12} xs={12}>
                                <FormControl className={classes.formControl}>
                                    <InputLabel id="paintType-label">Paint Quality</InputLabel>
                                    <Select
                                        labelId="paintType-label"
                                        id="paintType"
                                        className={classes.select}
                                        value={paintType}
                                        onChange={(event) => setPaintType(event.target.value)}
                                    >
                                        <MenuItem value="">
                                            <em>Please Select One</em>
                                        </MenuItem>
                                        <MenuItem value={'Provided'}>Provided</MenuItem>
                                        <MenuItem value={'Low End'}>Low End</MenuItem>
                                        <MenuItem value={'Standard'}>Standard</MenuItem>
                                        <MenuItem value={'High End'}>High End</MenuItem>
                                        <MenuItem value={'Luxury'}>Luxury</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item sm={6} xs={12}>
                                <FormControl className={classes.formControl}>
                                    <InputLabel id="startingColor-label">Starting Color</InputLabel>
                                    <Select
                                        labelId="startingColor-label"
                                        id="startingColor"
                                        value={startingColor}
                                        onChange={(event) => setStartingColor(event.target.value)}
                                    >
                                        <MenuItem value="">
                                            <em>Please Select a Color</em>
                                        </MenuItem>
                                        <MenuItem value={'White or Near White'}>White or Near White</MenuItem>
                                        <MenuItem value={'Yellow'}>Yellow</MenuItem>
                                        <MenuItem value={'Light Green or Light Blue'}>Light Green or Light Blue</MenuItem>
                                        <MenuItem value={'Dark Green or Dark Blue'}>Dark Green or Dark Blue</MenuItem>
                                        <MenuItem value={'Light Red or Light Orange'}>Light Red or Light Orange</MenuItem>
                                        <MenuItem value={'Dark Red or Dark Orange'}>Dark Red or Dark Orange</MenuItem>
                                        <MenuItem value={'Purple or Brown'}>Purple or Brown</MenuItem>
                                        <MenuItem value={'Gray'}>Gray</MenuItem>
                                        <MenuItem value={'Black or Near Black'}>Black or Near Black</MenuItem>
                                    </Select>
                                    <FormHelperText>If between two, select the DARKER color.</FormHelperText>
                                </FormControl>
                            </Grid>
                            <Grid item sm={6} xs={12}>
                                <FormControl className={classes.formControl}>
                                    <InputLabel id="finalColor-label">Final Color</InputLabel>
                                    <Select
                                        labelId="finalColor-label"
                                        id="finalColor"
                                        value={finalColor}
                                        onChange={(event) => setFinalColor(event.target.value)}
                                    >
                                        <MenuItem value="">
                                            <em>Please Select a Color</em>
                                        </MenuItem>
                                        <MenuItem value={'White or Near White'}>White or Near White</MenuItem>
                                        <MenuItem value={'Yellow'}>Yellow</MenuItem>
                                        <MenuItem value={'Light Green or Light Blue'}>Light Green or Light Blue</MenuItem>
                                        <MenuItem value={'Dark Green or Dark Blue'}>Dark Green or Dark Blue</MenuItem>
                                        <MenuItem value={'Light Red or Light Orange'}>Light Red or Light Orange</MenuItem>
                                        <MenuItem value={'Dark Red or Dark Orange'}>Dark Red or Dark Orange</MenuItem>
                                        <MenuItem value={'Purple or Brown'}>Purple or Brown</MenuItem>
                                        <MenuItem value={'Gray'}>Gray</MenuItem>
                                        <MenuItem value={'Black or Near Black'}>Black or Near Black</MenuItem>
                                    </Select>
                                    <FormHelperText>If between two, select the LIGHTER color.</FormHelperText>
                                </FormControl>
                            </Grid>
                        </Grid>
                    </AccordionDetails>
                </Accordion>

                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography className={classes.heading}>Additional Requirements</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Grid container spacing={2}>
                            <Grid item sm={6} xs={12} className={classes.checkbox}>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            checked={furniture}
                                            onChange={() => setFurniture(!furniture)}
                                            name="furniture"
                                            color="primary"
                                        />
                                    }
                                    label="Move Furniture"
                                />
                            </Grid>
                            <Grid item sm={6} xs={12} className={classes.checkbox}>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            checked={wallpaper}
                                            onChange={() => setWallpaper(!wallpaper)}
                                            name="wallpaper"
                                            color="primary"
                                        />
                                    }
                                    label="Wallpaper Removal"
                                />
                            </Grid>
                            <Grid item sm={12} xs={12}>
                                <TextField
                                    id="repair"
                                    className={classes.textField}
                                    label="Repairs and/or Sanding"
                                    helperText="Best estimate of time anticipated."
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    InputProps={{
                                        endAdornment: <InputAdornment position="start">Hours</InputAdornment>,
                                    }}
                                    value={repair}
                                    onChange={(e) => setRepair(e.target.value)}
                                />
                            </Grid>
                        </Grid>
                    </AccordionDetails>
                </Accordion>

                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <Typography className={classes.heading}>Special Notes</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <TextField
                            id="specialNotes"
                            className={classes.fullwidth}
                            label="Notes"
                            multiline
                            rows={4}
                            placeholder="Add any extra information here..."
                            value={notes}
                            onChange={(event) => setNotes(event.target.value)}
                        />
                    </AccordionDetails>
                </Accordion>

                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <Typography className={classes.heading}>Contact Information</Typography>
                    </AccordionSummary>

                    <AccordionDetails>
                        <Grid container spacing={2}>
                            <Grid item sm={6} xs={12}>
                                <TextField
                                    id="lastName"
                                    className={classes.textField}
                                    label="Last Name"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    value={lastName}
                                    onChange={(event) => setLastName(event.target.value)}
                                />
                            </Grid>
                            <Grid item sm={6} xs={12}>
                                <TextField
                                    id="firstName"
                                    className={classes.textField}
                                    label="First Name"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    value={firstName}
                                    onChange={(event) => setFirstName(event.target.value)}
                                />
                            </Grid>
                            <Grid item sm={3} xs={4}>
                                <TextField
                                    id="unit"
                                    className={classes.textField}
                                    label="Unit"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    value={unit}
                                    onChange={(event) => setUnit(event.target.value)}
                                />
                            </Grid>
                            <Grid item sm={9} xs={12}>
                                <TextField fullWidth
                                    id="address"
                                    label="Address"
                                    className={classes.textFieldFullWidth}
                                    value={address}
                                    onChange={(e) => setAddress(e.target.value)}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                            </Grid>
                            <Grid item sm={6} xs={6}>
                                <TextField
                                    id="city"
                                    className={classes.textField}
                                    label="City"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    value={city}
                                    onChange={(event) => setCity(event.target.value)}
                                />
                            </Grid>
                            <Grid item sm={6} xs={6}>
                                <FormControl className={classes.formControl}>
                                    <InputLabel id="state-label">State</InputLabel>
                                    <Select
                                        labelId="state-label"
                                        id="state"
                                        value={state}
                                        onChange={(event) => setState(event.target.value)}
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                    >
                                        <MenuItem value="">
                                            <em>Please Select a Color</em>
                                        </MenuItem>
                                        <MenuItem value={'CT'}>CT</MenuItem>
                                        <MenuItem value={'MA'}>MA</MenuItem>
                                        <MenuItem value={'ME'}>ME</MenuItem>
                                        <MenuItem value={'NH'}>NH</MenuItem>
                                        <MenuItem value={'RI'}>RI</MenuItem>
                                        <MenuItem value={'VA'}>VA</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item sm={12} xs={12}>
                                <TextField
                                    id="zip"
                                    className={classes.textField}
                                    label="Zip Code"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    value={zip}
                                    onChange={(event) => setZip(event.target.value)}
                                />
                            </Grid>
                            <Grid item sm={6} xs={12}>
                                <TextField
                                    id="phone"
                                    className={classes.textField}
                                    label="Phone Number"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    value={phone}
                                    onChange={(event) => setPhone(event.target.value)}
                                />
                            </Grid>
                            <Grid item sm={6} xs={12}>
                                <TextField
                                    id="email"
                                    className={classes.textField}
                                    label="Email Address"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    value={email}
                                    onChange={(event) => setEmail(event.target.value)}
                                />
                            </Grid>
                        </Grid>
                    </AccordionDetails>
                </Accordion>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Paper className={classes.paper} elevation={3}>
                            <p>Expected Total: ${total ? total.toFixed(2) : '0.00'}</p>
                            <p>Low Range: ${total ? (total - (total / 100 * marginOfError)).toFixed(2) : '0.00'}</p>
                            <p>High Range: ${total ? (total + (total / 100 * marginOfError)).toFixed(2) : '0.00'}</p>
                            <p>Labor: ${paintType ? (total - (paintCostsArray.find(e => e.quality === paintType).price * (Math.sqrt(sqft / numRooms) * 4 * numRooms) * height / 100)).toFixed(2) : '0.00'}</p>
                            <p>Paint: ${paintType ? (paintCostsArray.find(e => e.quality === paintType).price * (Math.sqrt(sqft / numRooms) * 4 * numRooms) * height / 100).toFixed(2) : '0.00'}</p>
                            <br />
                            <Button
                                variant='contained'
                                color='primary'
                                startIcon={<SendIcon />}
                                onClick={() => alert('Submitted')}
                                disabled 
                            >
                                Submit
                            </Button>
                        </Paper>
                    </Grid>
                    <Grid item sm={6} xs={12}>

                    </Grid>
                </Grid>
            </div>
        </Container>
    )
}

export default Calculator