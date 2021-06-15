import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  customCard: {
    transition: '.2s',
    '&:hover': {
      boxShadow: '0 2px 2px 0 rgb(0 0 0 / 5%), 0 4px 4px 0 rgb(0 0 0 / 5%), 0 8px 8px 0 rgb(0 0 0 / 5%), 0 16px 16px 0 rgb(0 0 0 / 5%), 0 32px 32px 0 rgb(0 0 0 / 5%), 0 64px 64px 0 rgb(0 0 0 / 5%)',
    }
  },
  categoryIcon: {
      marginLeft: 'auto'
  }
}))

export default useStyles