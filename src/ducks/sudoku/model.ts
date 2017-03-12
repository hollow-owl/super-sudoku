import {
    SimpleCell
} from 'src/engine/utility';


export interface Cell extends SimpleCell {
    initial: boolean;
    notes: Set<number>;
    showMenu: boolean; // show the menu for this cell
    allowed: Set<number>;
}

export function createCell (
    x: number,
    y: number,
    number: number | undefined,
    notes: Set<number>,
    allowed: Set<number>,
    initial: boolean
) : Cell {
    return {
        x,
        y,
        number,
        notes,
        allowed,
        showMenu: false,
        initial
    };
}

export const solvableSudoku1 = [
    '_1____674',
    '_897_____',
    '__2_638__',
    '_28___76_',
    '___1__43_',
    '__692__18',
    '_6_235___',
    '2__4_81_6',
    '57_______',
].join('\n');

export function parseSudoku (sudoku: String): Array<Cell> {
    const lines = sudoku.split('\n');
    return [].concat(...lines
        .map((line, y) => {
            const characters = line.split('');
            return characters.map((c, x) => {
                const number = c === '_' ? undefined : Number(c);
                return createCell(
                    x,
                    y,
                    number,
                    new Set([]),
                    new Set([]),
                    !(number === undefined)
                );
            });
        }));
};
