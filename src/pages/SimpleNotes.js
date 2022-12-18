import { Box, Button, IconButton, List, ListItem, ListItemAvatar, ListItemButton, ListItemText, Modal, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import TextField from '@mui/material/TextField';
import PropTypes from 'prop-types';

import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';

import PostAddIcon from '@mui/icons-material/PostAdd';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import CloseIcon from '@mui/icons-material/Close';




const data = [
    {
        id: 1,
        title: "testing",
        text: "halo guys",
    },
    {
        id: 2,
        title: "what's up",
        text: "hi",
    },
    {
        id: 3,
        title: "my account",
        text: "id:something \n pw:asw",
    },
    {
        id: 4,
        title: "cok",
        text: "zz",
    },
    {
        id: 5,
        title: "we",
        text: "id:232313",
    },
]

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 2,
    borderRadius: '10px',
};

export default function SimpleNotes() {

    const [notes, setNotes] = React.useState([])

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true)
        handleEditClose()
    };
    const handleClose = () => setOpen(false);

    const [open2, setOpen2] = React.useState(false);
    const handleOpen2 = () => setOpen2(true);
    const handleClose2 = () => {
        setOpen2(false)
        handleEditClose()
    };

    const [editing, setEditing] = React.useState(false)
    const handleEditOpen = () => {
        setEditing(true)
        //set title and text to existing data
        setTitle(choosenData.title)
        setText(choosenData.text)
    }

    const handleEditClose = () => {
        setEditing(false)
        resetNote()
    }
    

    const [choosenData, setChoosenData] = React.useState({})

    const submitEditNote = (id) => {
        setNotes(notes => notes.map(note => {
            if(note.id===id){
                return {
                        ...note,
                        title:title,
                        text:text,
                }
            }
            return note;
        }))
    }

    const deleteNote = (id) => {
        console.log("delete is running")
        setNotes(notes.filter(note => note.id !== id))
    }


    const [title, setTitle] = React.useState("");
    const [text, setText] = React.useState("")
    const handleChangeTitle = (event) => {
        setTitle(event.target.value);
    };
    const handleChangeText = (event) => {
        setText(event.target.value);
    }

    const createNote = () => {
        let id = null;
        if (notes.length > 0) {
            id = notes[1].id + 1;
        }
        else {
            id = 0;
        }
        let newValue = {
            id: id,
            title: title,
            text: text,
        };
        setNotes((prevArray) => [...prevArray, newValue]);

        handleClose()
        resetNote()
    }

    const resetNote = () => {
        setTitle("")
        setText("")
    }

    React.useEffect(() => {
        setNotes(data)
    }, [])











    return (
        <React.Fragment>
            {console.log(editing)}
            <Modal
                open={open}
                onClose={handleClose}
            >
                <Box sx={style}>
                    <Stack
                        direction="column"
                        justifyContent="center"
                        alignItems="flex-end"
                        spacing={1}
                    >
                        <IconButton onClick={handleClose}>
                            <CloseIcon />
                        </IconButton>
                        <TextField
                            sx={{ width: '100%' }}
                            required
                            label="Title"
                            value={title}
                            onChange={handleChangeTitle}
                        />
                        <TextField
                            sx={{ width: '100%' }}
                            label="Text"
                            multiline
                            rows={4}
                            value={text}
                            onChange={handleChangeText}
                        />
                        <Button onClick={createNote}>Save</Button>
                    </Stack>
                </Box>
            </Modal>

            <Modal
                open={open2}
                onClose={handleClose2}
            >
                <Box sx={style}>
                    <>
                        <Stack
                            direction="column"
                            justifyContent="center"
                            alignItems="flex-end"
                            spacing={1}
                        >

                            <Stack
                                direction="row"
                                justifyContent="center"
                                alignItems="center"
                                spacing={2}
                            >
                                {
                                    editing == true ? (<Button onClick={handleEditClose}>Cancel edit</Button>) : (<IconButton onClick={handleEditOpen}><EditIcon /></IconButton>)
                                }
                                <IconButton onClick={handleClose2}><CloseIcon /></IconButton>
                            </Stack>
                            {
                                editing == true ? (
                                    <>
                                        <TextField
                                            sx={{ width: '100%' }}
                                            required
                                            label="Title"
                                            value={title}
                                            onChange={handleChangeTitle}
                                        />
                                        <TextField
                                            sx={{ width: '100%' }}
                                            label="Text"
                                            multiline
                                            rows={4}
                                            value={text}
                                            onChange={handleChangeText}
                                        />
                                        <Button onClick={() => {handleClose2();submitEditNote(choosenData.id)}}>Save</Button>
                                    </>
                                ) : (
                                    <>
                                        <Typography
                                            sx={{ width: '100%' }}
                                            variant="h6" component="h2">
                                            {choosenData.title}
                                        </Typography>
                                        <Typography sx={{ mt: 2, width: '100%' }}>
                                            {choosenData.text}
                                        </Typography>
                                    </>
                                )
                            }

                        </Stack>
                    </>
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
                    {
                        notes.map((note) => (
                            <React.Fragment>
                                <ListItem disablePadding key={note.id} sx={{ my: '10px', bgcolor: 'white', borderRadius: '20px' }} >
                                    <ListItemButton sx={{ borderRadius: '20px 0 0 20px' }} onClick={() => { handleOpen2(); setChoosenData(note) }}>
                                        <ListItemText
                                            primary={note.title}
                                            secondary={note.text}
                                        />

                                    </ListItemButton>
                                    <IconButton onClick={() => { deleteNote(note.id) }}>
                                        <DeleteIcon />
                                    </IconButton>

                                </ListItem>

                            </React.Fragment>

                        ))
                    }
                </List>
            </Stack>
        </React.Fragment>
    )
}