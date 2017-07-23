import {
  GraphQLSchema as Schema,
  GraphQLObjectType as ObjectType,
} from 'graphql';
import sequelize from './sequelize';
import { getSchema } from 'graphql-sequelize-crud-teselagen';

// import me from './queries/me';
// import news from './queries/news';
// import tracks from './queries/tracks';

/*
const schema = new Schema({
  query: new ObjectType({
    name: 'Query',
    fields: {
      me,
      news,
      tracks,
    },
  }),
});
*/

const schema = getSchema(sequelize);
export default schema;
