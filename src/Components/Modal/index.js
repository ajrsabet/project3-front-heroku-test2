import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import TextField from "@material-ui/core/TextField";

// function rand() {
//     return Math.round(Math.random() * 20) - 10;
// }

function getModalStyle() {
    const top = 50
    const left = 50

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles(theme => ({
    paper: {
        position: 'absolute',
        width: 700,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3)
    },
}));

export default function SimpleModal(props) {
    console.log(props.itemToUpdate)
    const classes = useStyles();
    // getModalStyle is not a pure function, we roll the style only on the first render
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            {/* <button type="button" onClick={handleOpen}>
        Open Modal
      </button> */}
            <Modal
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                open={props.modalOpen}
                onClose={props.toggleModal}
            >
                {props.itemToUpdate ? (
                    <div style={modalStyle} className={classes.paper}>
                        <h2 id="simple-modal-title">Edit Item</h2>
                        <TextField onChange={props.handleInputChange} name={"title"} value={props.itemToUpdate.title} placeholder={props.itemToUpdate.title}/>
                        <TextField onChange={props.handleInputChange} name={"quantity"} value={props.itemToUpdate.quantity} placeholder={props.itemToUpdate.quantity}/>
                        <TextField onChange={props.handleInputChange} name={"unit"} value={props.itemToUpdate.unit} placeholder={props.itemToUpdate.unit}/>
                        <TextField onChange={props.handleInputChange} name={"value_unit"} value={props.itemToUpdate.value_unit} placeholder={props.itemToUpdate.value_unit}/>
                        <TextField onChange={props.handleInputChange} name={"exp_date"} value={props.itemToUpdate.exp_date} placeholder={props.itemToUpdate.exp_date}/>
                        <SimpleModal />
                        <button onClick={props.editRow}>Submit</button>
                    </div>
                ) : (<h1>LOADING</h1>)}
            </Modal>
        </div>
    );
}