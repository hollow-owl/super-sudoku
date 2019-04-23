export enum DIFFICULTY {
  EASY = "easy",
  MEDIUM = "medium",
  HARD = "hard",
  EVIL = "evil",
}
export interface CellCoordinates {
  x: number;
  y: number;
}
export interface SimpleCell extends CellCoordinates {
  number: number;
}
export type ComplexSudoku = SimpleCell[];
export type SimpleSudoku = number[][];
export type DomainSudoku = number[][][];
export interface Cell extends SimpleCell {
  initial: boolean;
  notes: Set<number>;
  solution: number;
}
