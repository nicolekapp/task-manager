import { makeStyles } from "@material-ui/core/styles";

const styles = makeStyles((theme) => ({
  card: {
    minWidth: 400,
  },
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
  },
  infoContainer: {
    width: "85%",
  },
  buttonContainer: {
    width: "15%",
  },
  actionButton: {
    fontSize: 50,
  },
  taskName: {
    marginRight: 15,
    maxWidth: "60%",
  },
  taskNameText: {
    fontWeight: "bold",
    fontSize: 18,
  },
}));

export default styles;
