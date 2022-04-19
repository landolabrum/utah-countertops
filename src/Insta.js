import * as React from 'react';
import withInstagramFeed from 'origen-react-instagram-feed';
// import Grid from '@material-ui/core/Grid';
import compose from 'recompose/compose';
import { Grid } from 'react-materialize';

const styles = () => ({
  wrapper: {},
  image: {
    width: '100%',
    height: '100%',
  },
});

export type Props = {
  media?: Array<{
    displayImage: string,
    id?: string,
    postLink?: string,
    accessibilityCaption?: string,
  }>,
  account: string,
  classes: { [$Keys<$Call<typeof styles>>]: string },
  status: 'completed' | 'loading' | 'failed',
};

const InstaGrid = ({ classes, media, account, status}: Props) => {
  return (
    <Grid container spacing={32} className={classes.wrapper}>
      {media &&
        status === 'completed' &&
        media.map(({ displayImage, id, postLink, accessibilityCaption }) => (
          <Grid item xs={12} sm={6} md={4} key={id || displayImage}>
            <button
              href={postLink || `https://www.instagram.com/${account}/`}
            >
              <img
                src={displayImage}
                alt={accessibilityCaption || 'Instagram picture'}
                className={classes.image}
              />
            </button>
          </Grid>
        ))}
      {status === 'loading' && <p>loading...</p>}
      {status === 'failed' && <p>Check instagram here</p>}
    </Grid>
  );
};

InstaGrid.defaultProps = {
  media: undefined,
};

