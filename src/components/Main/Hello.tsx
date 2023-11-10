import React, { useState } from "react";
import { TextField, Button, Container, Typography } from "@mui/material";

const Hello: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [greeting, setGreeting] = useState<string>("");
  const [isGreetingVisible, setIsGreetingVisible] = useState(true);
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  const sayHello = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setIsLoading(true);
    setIsButtonClicked(true);

    try {
      const response = await fetch("/user?name=" + greeting);
      const body = await response.json();
      console.log("******* body *******", body);
      setGreeting(body.name);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const updateName = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputName = event.target.value;
    const formattedName =
      inputName.charAt(0).toUpperCase() + inputName.slice(1).toLowerCase();
    setGreeting(formattedName);
    setIsGreetingVisible(true);
    setIsButtonClicked(false);
  };

  return (
    <Container sx={{ width: "auto", height: "auto", padding: 1 }}>
      <TextField
        label="Enter your nickname.."
        variant="filled"
        size="small"
        onChange={updateName}
      />
      <Button
        variant="contained"
        style={{ backgroundColor: "rgb(0,0,0)", color: "white" }}
        sx={{ marginLeft: 2, marginTop: 1 }}
        onClick={sayHello}
        disabled={isButtonClicked} // Disable the button if it's clicked
      >
        {isLoading ? "Loading..." : "Click me"}
      </Button>
      {isGreetingVisible && (
        <Typography
          style={{
            marginTop: "3rem",
            zIndex: "999",
            fontSize: "2rem",
            fontWeight: "bold",
            color: "black",
          }}
        >
          Hello {greeting}
        </Typography>
      )}
    </Container>
  );
};

export default Hello;
