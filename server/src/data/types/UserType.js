import { GraphQLObjectType } from 'graphql';
import { attributeFields } from 'graphql-sequelize';
import _ from 'lodash';
import User from '../models/User';

/*
const UserType = new ObjectType({
  name: 'User',
  fields: {
    id: { type: new NonNull(ID) },
    email: { type: StringType },
  },
});
*/

const UserType = new GraphQLObjectType({
  name: 'User',
  description: 'A user',
  fields: _.assign(
    attributeFields(User, {
      only: ['id', 'email'],
    }),
    {
      // ... extra fields
    },
  ),
});

export default UserType;
