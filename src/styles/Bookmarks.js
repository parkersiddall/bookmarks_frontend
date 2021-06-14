import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
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
  adjustedTopMargin: {
    marginTop: '30px'
  }
}))

export default useStyles