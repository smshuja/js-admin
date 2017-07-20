import { resolver } from 'graphql-sequelize';

import TrackType from '../types/TrackType';
import Track from '../models/Track';

const tracks = {
  type: TrackType,
  resolve: resolver(Track),
};

export default tracks;
