import { Document, Schema, model } from 'mongoose';

export interface DisciplineInterface extends Document {
  nome: string;
  chteorica: number;
  chpratica: number;
  chtotal: number;
  ementa: string;
  objetivoGeral: string;
  objetivoEspecifico: string;
  habilidadeCompetencias: string;
  conteudoProgramatico: string;
  procedimentosDidaticos: string;
  atividadeIntegrativa: string;
  primeiraVA: string;
  segundaVA: string;
  terceiraVA: string;
  bibliografiaBasica: string;
  bibliografiaComplementar: string;
}

const DisciplineSchema: Schema<DisciplineInterface> = new Schema(
  {
    nome: {type: String, required: true, unique: true},
    chteorica: {type: Number, default: null},
    chpratica: {type: Number, default: null},
    chtotal: {type: Number, default: null},
    ementa: String,
    objetivoGeral: String,
    objetivoEspecifico: String,
    habilidadeCompetencias: String,
    conteudoProgramatico: String,
    procedimentosDidaticos: String,
    atividadeIntegrativa: String,
    primeiraVA: String,
    segundaVA: String,
    terceiraVA: String,
    bibliografiaBasica: String,
    bibliografiaComplementar: String
  },
  {
    versionKey: false,
  },
);

export default model<DisciplineInterface>('Disciplines', DisciplineSchema);
