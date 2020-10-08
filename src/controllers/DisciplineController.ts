import { Request, Response } from 'express';

import Discipline, { DisciplineInterface } from '../schemas/Discipline';

class DisciplineController {
  public async store(req: Request, res: Response): Promise<Response> {
    try {
      const { _id, nome }: DisciplineInterface = req.body;
      const disciplineExist = await Discipline.findOne({ nome });
      if (disciplineExist && _id) {
        const discipline = await Discipline.updateOne({ _id }, req.body);
        return res.status(201).json(discipline);
      } else if (disciplineExist) {
        return res
          .status(400)
          .json({ error: 'Já existe disciplina cadastrada com esse nome!' });
      }
      const discipline = await Discipline.create(req.body);
      return res.status(201).json(discipline);
    } catch (err) {
      return res
        .status(400)
        .send({ error: 'Erro ao criar nova disciplina!', erro: err });
    }
  }

  public async index(req: Request, res: Response): Promise<Response> {
    try {
      const disciplines = await Discipline.find();
      return res.status(200).json(disciplines);
    } catch (err) {
      return res.status(400).send({ error: 'Error' });
    }
  }

  public async show(req: Request, res: Response): Promise<Response> {
    try {
      const _id = req.query.id;
      const discipline = await Discipline.findOne({ _id });
      if (discipline) {
        return res.status(200).json(discipline);
      }
      return res.status(404).json({ error: 'Não existe disciplina com este ID!' });
    } catch (err) {
      return res.status(404).json({ error: 'Error interno' });
    }
  }

  public async delete(req: Request, res: Response): Promise<Response> {
    try {
      const _id = req.query.id;
      const disciplineExist = await Discipline.findOne({ _id });
      if (disciplineExist) {
        const discipline = await Discipline.deleteOne({ _id });
        return res.status(200).json(discipline);
      }
      return res.status(404).json({ error: 'Não existe disciplina com este ID!' });
    } catch (err) {
      return res.status(404).json({ error: 'Error interno' });
    }
  }
}

export default new DisciplineController();
