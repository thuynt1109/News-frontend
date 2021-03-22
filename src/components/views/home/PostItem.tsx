import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 275,
  },
  title: {
    fontSize: 40,
    fontWeight: 900,
    lineHeight: 0,
    marginTop: theme.spacing(2.2),
    '&:hover': {
      cursor: 'pointer',
    },
  },
}));

export default function PostItem() {
  const classes = useStyles();

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Grid container spacing={3}>
          <Grid item sm={1}>
            <Typography className={classes.title} color="textSecondary" gutterBottom>
              1
            </Typography>
          </Grid>
          <Grid item sm={11}>
            <Typography color="textSecondary" align="left">
              Chưa phát hiện nguy cơ tăng đông máu khi tiêm vắc xin AstraZeneca
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
      <CardContent>
        <Grid container spacing={3}>
          <Grid item sm={1}>
            <Typography className={classes.title} color="textSecondary" gutterBottom>
              2
            </Typography>
          </Grid>
          <Grid item sm={11}>
            <Typography color="textSecondary" align="left">
              Phát hiện gần 6 kg thảo mộc khô nghi ma túy tại sân bay Tân Sơn Nhất
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
      <CardContent>
        <Grid container spacing={3}>
          <Grid item sm={1}>
            <Typography className={classes.title} color="textSecondary" gutterBottom>
              3
            </Typography>
          </Grid>
          <Grid item sm={11}>
            <Typography color="textSecondary" align="left">
              Miễn phí xét nghiệm Covid-19 cho lao động Việt làm việc tại Hàn Quốc
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
      <CardContent>
        <Grid container spacing={3}>
          <Grid item sm={1}>
            <Typography className={classes.title} color="textSecondary" gutterBottom>
              4
            </Typography>
          </Grid>
          <Grid item sm={11}>
            <Typography color="textSecondary" align="left">
              HLV Koeman chốt tương lai ở Barcelona, tập trung đua vô địch La Liga
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
      <CardContent>
        <Grid container spacing={3}>
          <Grid item sm={1}>
            <Typography className={classes.title} color="textSecondary" gutterBottom>
              5
            </Typography>
          </Grid>
          <Grid item sm={11}>
            <Typography color="textSecondary" align="left">
              HLV Koeman chốt tương lai ở Barcelona, tập trung đua vô địch La Liga
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
