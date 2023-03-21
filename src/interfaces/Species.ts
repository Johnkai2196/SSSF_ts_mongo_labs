import {Point} from 'geojson';
import {Document, Types} from 'mongoose';

// TODO: interface for Species
interface Species extends Document {
  species_name: string;
  category: Types.ObjectId;
  image: string;
  location: Point;
}
export {Species};
