import { Request, Response } from 'express';

import User, { UserInterface } from '../schemas/User';

class UserController {
  public async store(req: Request, res: Response): Promise<Response> {
    try {
      const { _id, email }: UserInterface = req.body;
      const userExist = await User.findOne({ email });
      if (userExist && _id) {
        const user = await User.updateOne({ _id }, req.body);
        return res.status(201).json(user);
      } else if (userExist) {
        return res
          .status(400)
          .json({ error: 'Já existe usuário cadastrado com esse email!' });
      }
      const user = await User.create(req.body);
      return res.status(201).json(user);
    } catch (err) {
      return res
        .status(400)
        .send({ error: 'Erro ao criar novo usuário!', erro: err });
    }
  }

  public async index(req: Request, res: Response): Promise<Response> {
    try {
      const users = await User.find();
      return res.status(200).json(users);
    } catch (err) {
      return res.status(400).send({ error: 'Error' });
    }
  }

  public async show(req: Request, res: Response): Promise<Response> {
    try {
      const id = req.query.id;
      const user = await User.findById(id);
      return res.status(200).json(user);
    } catch (err) {
      return res.status(404).json({ error: 'Não existe usuário com este ID!' });
    }
  }
}

export default new UserController();
