import React from "react";
import PropTypes from "prop-types";

import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";

const TaskButtonsBar = ({ setModificationMode }) => {
  return (
    <ButtonGroup color="primary" aria-label="outlined primary button group">
      <Button onClick={() => setModificationMode()}>Modificar</Button>
      <Button>[Eliminar]</Button>
    </ButtonGroup>
  );
};

TaskButtonsBar.propTypes = {
  setModificationMode: PropTypes.func,
};

export default TaskButtonsBar;
