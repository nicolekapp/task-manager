import { makeStyles } from "@material-ui/core/styles";

const styles = makeStyles((theme) => ({
  card: {
    minWidth: 400,
  },
  paper: {
    height: 90,
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
    backgroundColor: theme.palette.grey.main,
  },
  container: {
    height: "100%",
  },
  infoContainer: {
    marginLeft: "2%",
    width: "83%",
  },
  buttonContainer: {
    width: "15%",
  },
  taskName: {
    marginRight: 15,
    maxWidth: "60%",
  },
  taskNameText: {
    fontWeight: "bold",
    color: theme.palette.primary.main,
    fontSize: 18,
    "&:hover": {
      color: theme.palette.primary.dark,
      cursor: "pointer",
    },
  },

  actionButton: {
    fontSize: 40,
  },
  playButton: {
    color: theme.palette.green.main,
  },
  pauseButton: {
    color: "red",
  },
}));

export default styles;
