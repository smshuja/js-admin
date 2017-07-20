import DataType from 'sequelize';
import Model from '../sequelize';

const Track = Model.define('Track', {
  id: {
    type: DataType.UUID,
    defaultValue: DataType.UUIDV1,
    primaryKey: true,
  },

  title: {
    type: DataType.STRING(255),
  },
});

export default Track;
