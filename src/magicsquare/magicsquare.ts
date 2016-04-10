import {SetType} from './magicsquare.settype';

export class MagicSquare {
    numbers: number[];

    constructor(numbers: number[]) {
        this.numbers = numbers;
    }

    get isValid(): boolean {        
        return (
            Number.isInteger(this.size) &&
            this._setIsValid(this.rows) &&
            this._setIsValid(this.columns) &&
            this._setIsValid(this.diagonals)
        );
    }

    get rows(): number[][] {
        if (!this._rows) {
            this._rows = this._getRows();
        }

        return this._rows;
    }

    get columns(): number[][] {
        if (!this._columns) {
            this._columns = this._getColumns();
        }
        
        return this._columns;;
    }
    
    get diagonals(): number[][] {
        if(!this._diagonals) {
            this._diagonals = this._getDiagonals();
        }
        
        return this._diagonals;
    }

    get size(): number {
        if (!this._sqrt) {
            this._sqrt = Math.sqrt(this.numbers.length);
        }

        return this._sqrt;
    }

    get seriesSum(): number {
        return (this._seriesSum && this.isValid) ? this._seriesSum : null;
    }

    // private

    private _rows: number[][];
    private _columns: number[][];
    private _diagonals: number[][];
    private _sqrt: number;
    private _seriesSum: number;

    private _getRows(): number[][] {
        return this._getSet(SetType.ROW);
    }

    private _getColumns(): number[][] {
        return this._getSet(SetType.COLUMN);
    }
    
    private _getDiagonals(): number[][] {
        const set = [];
        let series: number[] = [];
        for(let i=0; i<this.numbers.length; i = i + this.size + 1) {
            series.push(this.numbers[i]);
        }
        
        set.push(series);
        series = [];
        for(let i = this.size -1; i <= this.numbers.length - this.size; i = i + this.size -1) {
            series.push(this.numbers[i]);
        }
        
        set.push(series);
        return set;
    }

    private _getSet(setType: SetType): number[][] {
        const set = [];
        let series: number[];
        let index: number;
        for (let i = 0; i < this.size; i++) {
            series = [];

            for (let j = 0; j < this.size; j++) {
                index = (setType === SetType.ROW) ? (i * this.size + j) :  (j * this.size + i);
                series.push(this.numbers[index]);
            }

            set.push(series);
        }

        return set;
    }

    private _setIsValid(set: number[][]): boolean {
        let isValid = true;

        for (let i = 0; i < set.length; i++) {
            isValid = this._sumIsValid(set[i].reduce(this._sumReducer));
            if (!isValid) {
                break;
            }
        }

        return isValid;
    }

    private _sumReducer(previousValue: number, currentValue: number): number {
        return previousValue + currentValue;
    }

    private _sumIsValid(sum: number): boolean {
        console.log('validating total...', sum);
        if (this._seriesSum) {
            return sum === this._seriesSum;
        } else {
            this._seriesSum = sum;
            return true;
        }
    }
}