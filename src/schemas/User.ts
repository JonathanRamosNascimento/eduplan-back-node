import { Document, Schema, model } from 'mongoose';

export interface UserInterface extends Document {
  matricula: number;
  name: string;
  email: string;
  password: string;
  profile: string;
}

const UserSchema: Schema<UserInterface> = new Schema(
  {
    matricula: { type: Number, required: true, unique: true },
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    profile: { type: String, required: true },
  },
  {
    versionKey: false,
  },
);

export default model<UserInterface>('Users', UserSchema);
