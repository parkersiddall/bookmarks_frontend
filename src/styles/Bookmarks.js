import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  customCard: {
    borderLeft: '5px solid #cdcdcd',
    transition: '.2s',
    '&:hover': {
      borderLeft: '5px solid #0c5299'
    }
  },
  categoryIcon: {
      marginLeft: 'auto'
  },
  fab: {
    position: 'fixed',
    bottom: theme.spacing(4),
    right: theme.spacing(4),
  },
}))

export default useStyles