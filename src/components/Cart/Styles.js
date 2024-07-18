import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  title: {
    marginTop: '5%',
    textAlign: "center"
  },
  emptyButton: {
    minWidth: '150px',
    [theme.breakpoints.down('xs')]: {
      marginBottom: '5px',
    },
    [theme.breakpoints.up('sm')]: {
      marginRight: '20px',
    },
  },
  checkoutButton: {
    minWidth: '150px',
  },
  link: {
    textDecoration: 'none',
    color: theme.palette.primary.main,
  },
  cardDetails: {
    display: 'flex',
    margin: '10% 0',
    width: '100%',
    justifyContent: 'space-between',
  },
}));
