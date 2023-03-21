import {Document} from 'mongoose';
// TODO: interface for Category
interface Category extends Document {
  category_name: string;
}

export {Category};
