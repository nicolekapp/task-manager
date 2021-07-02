import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

import { changeModalVisibility} from "../../../ducks/modalReducer";



const ImportButton = () => {
  return (
    <div>
      <Button variant="contained" color="primary" onClick={() => window.location.href = "./import"}>Importar</Button>
    </div>
  );
};

export default ImportButton;