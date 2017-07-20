import { GraphQLObjectType } from 'graphql';
import { attributeFields } from 'graphql-sequelize';
import _ from 'lodash';
import Track from '../models/Track';

const TrackType = new GraphQLObjectType({
  name: 'Track',
  description: 'An album track',
  fields: _.assign(
    attributeFields(Track, {
      only: ['id', 'title'],
    }),
    {
      // ... extra fields
    },
  ),
});

export default TrackType;
