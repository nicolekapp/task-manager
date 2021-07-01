import { makeStyles } from "@material-ui/core/styles";

const styles = makeStyles((theme) => ({
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
