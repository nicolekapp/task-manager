import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

import { changeModalVisibility} from "../../../ducks/modalReducer";



const CreatTaskButton = ({actions, visibility}) => {
  return (
    <div>
      <Button variant="contained" color="primary" onClick={() => actions.changeModalVisibility()}>Crear Tarea</Button>
    </div>
  );
};

const mapStateToProps = (state) => ({
    visibility: state.modalReducer.change_visibility_modal,
  });
  
  const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators({ changeModalVisibility }, dispatch),
  });
  
  export default connect(mapStateToProps, mapDispatchToProps)(CreatTaskButton);