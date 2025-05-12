import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/database';

class Topping extends Model {
  public id!: number;
  public name!: string;
  public isActive!: boolean;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Topping.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Topping',
    tableName: 'toppings',
  }
);

export default Topping; 