import { makeStyles } from '@material-ui/core/styles'

//bocconi-blue: #0c5299;
//sda-blue: #003869;
//background-color: #f8f8f8;
//border-color: #cdcdcd;
//navbar-color: #262626;

const useStyles = makeStyles(() => ({
    topMarginForNavbar: {
      marginTop: '100px'
    },
    customCard: {
      borderRadius: '1px',
      borderLeft: '5px solid #cdcdcd',
      transition: '.2s',
      '&:hover': {
        borderLeft: '5px solid #0c5299'
      }
    }
  }))

export default useStyles