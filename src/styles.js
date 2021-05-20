import { makeStyles } from '@material-ui/styles';
const useStyles = makeStyles((theme) => ({
    container: {
        backgroundColor: "#e1eefa",
        padding: "40px"
    },
    icon: {
        marginRight: '20px'
    },
    button: {
        marginTop: '40px'
    },
    cardGrid: {
        padding: "20px 0"
    },
    card: {
        height: "100%",
        width: '100%',
        display: "flex",
        flexDirection: "column"
    },
    cardMedia: {
        padding: "56.25%" //16:9
    },
    cardContaint: {
        flexGrow: 1
    },
}));

export default useStyles;