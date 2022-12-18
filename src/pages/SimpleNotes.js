import {
  Box,
  Button,
  Paper,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  Modal,
  Typography,
  Divider,
} from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import TextField from "@mui/material/TextField";
import PropTypes from "prop-types";

import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";

import PostAddIcon from "@mui/icons-material/PostAdd";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import CloseIcon from "@mui/icons-material/Close";

import TransitionGroup from "react-transition-group/TransitionGroup";
import Zoom from "react-reveal/Zoom";
import { Fade } from "react-reveal";

const data = [
  {
    id: 1,
    title: "testing",
    text: "halo guyshalo guyshalo guyshalo guyshalo guyshalo guyshalo guyshalo guysyshalo guyshalo guyshalo guyshalo guyshalo guysyshalo guyshalo guyshalo guyshalo guyshalo guysyshalo guyshalo guyshalo guyshalo guyshalo guysyshalo guyshalo guyshalo guyshalo guyshalo guysyshalo guyshalo guyshalo guyshalo guyshalo guyshalo guyshalo guyshalo guyshalo guyshalo guyshalo guyshalo guyshalo guyshalo guyshalo guyshalo guyshalo guyshalo guyshalo guyshalo guyshalo guyshalo guys",
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
];

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 2,
  borderRadius: "10px",
};

export default function SimpleNotes() {
  const [notes, setNotes] = React.useState([]);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    resetNote();
  };

  const [open2, setOpen2] = React.useState(false);
  const handleOpen2 = () => {
    setOpen2(true);
  };
  const handleClose2 = () => {
    setOpen2(false);
    handleEditClose();
  };

  const [editing, setEditing] = React.useState(false);
  const handleEditOpen = () => {
    setEditing(true);
    setTitle(choosenData.title);
    setText(choosenData.text);
  };

  const handleEditClose = () => {
    setEditing(false);
    resetNote();
  };

  const [choosenData, setChoosenData] = React.useState({});

  const submitEditNote = () => {
    setNotes((notes) =>
      notes.map((note) => {
        if (note.id == choosenData.id) {
          return {
            id: choosenData.id,
            title: title,
            text: text,
          };
        }
        return note;
      })
    );
    resetNote();
  };

  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  const [title, setTitle] = React.useState("");
  const [text, setText] = React.useState("");

  const handleChangeTitle = (event) => {
    setTitle(event.target.value);
  };
  const handleChangeText = (event) => {
    setText(event.target.value);
  };

  const createNote = () => {
    let id = null;
    if (notes.length > 0) {
      id = notes[notes.length - 1].id + 1;
    } else {
      id = 0;
    }
    let newValue = {
      id: id,
      title: title,
      text: text,
    };
    setNotes((prevArray) => [...prevArray, newValue]);
  };

  const resetNote = () => {
    setTitle("");
    setText("");
  };

  React.useEffect(() => {
    setNotes(data);
  }, []);

  return (
    <React.Fragment>
      {console.log(notes)}
      <Modal open={open} onClose={handleClose}>
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
              sx={{ width: "100%" }}
              required
              label="Title"
              value={title}
              onChange={handleChangeTitle}
            />
            <TextField
              sx={{ width: "100%" }}
              label="Text"
              multiline
              rows={4}
              value={text}
              onChange={handleChangeText}
            />
            <Button
              onClick={() => {
                createNote();
                handleClose();
              }}
            >
              Save
            </Button>
          </Stack>
        </Box>
      </Modal>

      <Modal open={open2} onClose={handleClose2}>
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
                {editing == true ? (
                  <Button onClick={handleEditClose}>Cancel edit</Button>
                ) : (
                  <IconButton onClick={handleEditOpen}>
                    <EditIcon />
                  </IconButton>
                )}

                <IconButton onClick={handleClose2}>
                  <CloseIcon />
                </IconButton>
              </Stack>

              {editing == true ? (
                <>
                  <TextField
                    sx={{ width: "100%" }}
                    required
                    label="Title"
                    value={title}
                    onChange={handleChangeTitle}
                  />
                  <TextField
                    sx={{ width: "100%" }}
                    label="Text"
                    multiline
                    rows={4}
                    value={text}
                    onChange={handleChangeText}
                  />
                  <Button
                    onClick={() => {
                      submitEditNote();
                      handleClose2();
                    }}
                  >
                    Save
                  </Button>
                </>
              ) : (
                <>
                  <Typography
                    sx={{ width: "100%" }}
                    variant="h6"
                    component="h2"
                  >
                    {choosenData.title}
                  </Typography>
                  <Typography sx={{ mt: 2, width: "100%" }}>
                    {choosenData.text}
                  </Typography>
                </>
              )}
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
        <Fade right>
          <Button
            variant="contained"
            sx={{ bgcolor: "#758bfd" }}
            startIcon={<PostAddIcon />}
            onClick={handleOpen}
          >
            Create new note
          </Button>
        </Fade>

        <TransitionGroup appear={true} enter={true} exit={true}>
          <List >
            {notes.map((note) => (
              <Fade key={note.id} collapse bottom>
                <ListItem
                  disablePadding
                  sx={{ bgcolor: "white", borderRadius: "20px" ,my:'10px' }}
                >
                  <ListItemButton
                    sx={{ borderRadius: "20px 0 0 20px" }}
                    onClick={() => {
                      handleOpen2();
                      setChoosenData(note);
                    }}
                  >
                    {/* <Typography noWrap>{note.text}</Typography> */}
                    <ListItemText primary={note.title} secondary={note.text} sx={{textOverflow:"ellipsis",overflow:"hidden",whiteSpace:"nowrap",width:'300px'}}/>
                  </ListItemButton>
                  <IconButton onClick={() => deleteNote(note.id)}>
                    <DeleteIcon />
                  </IconButton>
                </ListItem>
              </Fade>
              
            ))}
          </List>
        </TransitionGroup>
      </Stack>
    </React.Fragment>
  );
}
