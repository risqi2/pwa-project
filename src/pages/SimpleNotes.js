import { Box, Button, IconButton, List, ListItem, ListItemAvatar, ListItemButton, ListItemText, Modal, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import TextField from '@mui/material/TextField';


import PostAddIcon from '@mui/icons-material/PostAdd';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import CloseIcon from '@mui/icons-material/Close';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};


function Bo() {
    return (
        <React.Fragment>
            <IconButton>
                <CloseIcon />
            </IconButton>
            <TextField
                required
                id="outlined-required"
                label="Required"
                defaultValue="Hello World"
            />
            <TextField
                id="outlined-multiline-static"
                label="Multiline"
                multiline
                rows={4}
                defaultValue="Default Value"
            />
            <Button>Save</Button>
        </React.Fragment>
    )
}

function Ba() {
    return (
        <React.Fragment>
            <IconButton>
                <CloseIcon />
            </IconButton>
            <Typography id="modal-modal-title" variant="h6" component="h2">
                Text in a modal
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography>
            <Button>Save</Button>
        </React.Fragment>
    )
}

export default function SimpleNotes() {

    const [notes, setNotes] = React.useState([])

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [open2, setOpen2] = React.useState(false);
    const handleOpen2 = () => setOpen2(true);
    const handleClose2 = () => setOpen2(false);


    const [title, setTitle] = React.useState("");
    const [text, setText] = React.useState("")
    const handleChangeTitle = (event) => {
        setTitle(event.target.value);
    };
    const handleChangeText = (event) => {
        setText(event.target.value);
    }

    const createNote = () => {
        let newValue = {
            id: notes.length + 1,
            title: title,
            text: text,
        };
        setNotes((prevArray) => [...prevArray, newValue]);
    }





    return (
        <React.Fragment>
            <Modal
                open={open}
                onClose={handleClose}
            >
                <Box sx={style}>
                    <Bo />
                </Box>
            </Modal>
            <Modal
                open={open2}
                onClose={handleClose2}
            >
                <Box sx={style}>
                    <Ba />
                </Box>
            </Modal>
            <Stack
                direction="column"
                justifyContent="center"
                alignItems="center"
                spacing={2}
            >
                <Button variant="outlined" startIcon={<PostAddIcon />} onClick={handleOpen}>
                    Create new note
                </Button>
                <List sx={{ width: '100%' }}>

                    <ListItem disablePadding >
                        <ListItemButton sx={{ bgcolor: 'white', borderRadius: '20px' }} onClick={handleOpen2}>
                            <ListItemText
                                primary={"kucing"}
                                secondary={"halo apa kabar"}
                            />
                            <IconButton>
                                <EditIcon />
                            </IconButton>
                            <IconButton>
                                <DeleteIcon />
                            </IconButton>
                        </ListItemButton>

                    </ListItem>

                </List>
            </Stack>
        </React.Fragment>
    )
}