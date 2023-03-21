import {Document, Types} from 'mongoose';
// TODO: interface for Animal
interface Animal extends Document {
  animal_name: string;
  species: Types.ObjectId;
  birthdate: Date;
}
export {Animal};
