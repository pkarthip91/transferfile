import React, { useState, useEffect } from "react";
import {
  TextField,
  Button,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Typography,
  Container,
  Box,
  Hidden,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const ToDoList: React.FC = () => {
  const [tasks, setTasks] = useState<string[]>([]);
  const [taskText, setTaskText] = useState<string>("");
  const [lastAddedIndex, setLastAddedIndex] = useState<number | null>(null);
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [editedTaskText, setEditedTaskText] = useState<string>("");

  const handleTaskTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTaskText(event.target.value);
  };

  const handleAddTask = () => {
    if (taskText.trim() !== "") {
      setTasks([...tasks, taskText]);
      setTaskText("");
      setLastAddedIndex(tasks.length);
    }
  };

  useEffect(() => {
    if (lastAddedIndex !== null) {
      setTimeout(() => {
        setLastAddedIndex(null);
      }, 300);
    }
  }, [lastAddedIndex]);

  const handleDeleteTask = (index: number) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  const startEditingTask = (index: number, taskText: string) => {
    setEditingIndex(index);
    setEditedTaskText(taskText);
  };

  // Function to save the edited task
  const handleEditTask = (index: number) => {
    if (editedTaskText.trim() !== "") {
      const updatedTasks = [...tasks];
      updatedTasks[index] = editedTaskText;
      setTasks(updatedTasks);
    }
    setEditingIndex(null);
    setEditedTaskText("");
  };

  return (
    <Container sx={{ width: 500, height: 450, padding: 10 }}>
      <Typography
        variant="h5"
        color="rgb(0,0,0)"
        paragraph
        sx={{ fontFamily: "Lexend, sans-serif" }} // Change the font family here
      >
        List down your plan!
      </Typography>
      <TextField
        label="Task to do.."
        variant="filled"
        size="small"
        value={taskText}
        onChange={handleTaskTextChange}
      />
      <Button
        variant="contained"
        style={{ backgroundColor: "rgb(0,0,0)", color: "white" }}
        sx={{ marginLeft: 2, marginTop: 1 }}
        onClick={handleAddTask}
      >
        Add Task
      </Button>
      <Box
        sx={{
          width: "80%",
          height: 260,
          marginLeft: 6,
          overflow: "hidden",
          overflowY: "scroll",
        }}
      >
        <List sx={{ width: "100%", zIndex: 200 }}>
          {tasks.map((task, index) => (
            <ListItem
              key={index}
              className={lastAddedIndex === index ? "dropdown-enter" : ""}
            >
              {editingIndex === index ? (
                // Render an input field in edit mode
                <input
                  type="text"
                  value={editedTaskText}
                  onChange={(e) => setEditedTaskText(e.target.value)}
                  onBlur={() => handleEditTask(index)}
                  autoFocus // Autofocus on the input field when in edit mode
                  className="edit-input"
                />
              ) : (
                // Render the task text in view mode
                <ListItemText
                  primary={task}
                  style={{ color: "black", cursor: "pointer" }}
                  onClick={() => startEditingTask(index, task)}
                />
              )}
              <ListItemSecondaryAction color="black">
                <IconButton
                  edge="end"
                  aria-label="delete"
                  onClick={() => handleDeleteTask(index)}
                  className={lastAddedIndex === index ? "dropdown-enter" : ""}
                  sx={{ height: 30 }}
                >
                  &#215;
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
      </Box>
    </Container>
  );
};

export default ToDoList;
