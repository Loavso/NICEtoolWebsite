import { AppBar, Toolbar } from "@material-ui/core";
import React from "react";

export default function Header() {
  const headerContents = () => {
    return <Toolbar>TEST</Toolbar>;
  };
  
  return (
    <div>
      <AppBar>{headerContents()}</AppBar>
    </div>
  );
}