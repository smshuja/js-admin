import DataType from 'sequelize';
import Model from '../sequelize';

const Artist = Model.define('Artist', {
  id: {
    type: DataType.UUID,
    defaultValue: DataType.UUIDV1,
    primaryKey: true,
  },

  firstName: {
    type: DataType.STRING(255),
  },

  lastName: {
    type: DataType.STRING(255),
  },
});

export default Artist;
