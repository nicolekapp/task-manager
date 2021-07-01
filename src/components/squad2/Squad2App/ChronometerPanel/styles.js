import { makeStyles } from "@material-ui/core/styles";

const styles = makeStyles((theme) => ({
    buttonContainer: {
        width: "15%",
    },
    playButton: {
        color: theme.palette.green.main,
    },
    pauseButton: {
        color: "red",
    },
    stopButton: {
        color: "yellow",
    },
    stopButton: {
        color: "red",
    },
    container: {
        alignItems: 'center'
    }
}));

export default styles;
