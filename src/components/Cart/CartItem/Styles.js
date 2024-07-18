import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
    media: {
        height: 200,  // Decreased height
    },
    cardContent: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    cardActions: {
        justifyContent: 'space-between',
    },
    buttons: {
        display: 'flex',
        alignItems: 'center',
    },
    card: {
        padding: '10px',  // Added padding to give a smaller appearance
    },
    itemName: {
        fontSize: '20px',  // Decreased font size for item name
    },
    itemPrice: {
        fontSize: '1rem',  // Decreased font size for item price
    },
    button: {
        fontSize: '0.8rem',  // Decreased font size for buttons
        padding: '5px 10px',  // Decreased padding for buttons
    },
}));
