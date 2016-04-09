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
            this._setIsValid(this.columns)
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

    _rows: number[][];
    _columns: number[][];
    _sqrt: number;
    _seriesSum: number;

    _getRows(): number[][] {
        return this._getSet(SetType.ROW);
    }

    _getColumns(): number[][] {
        return this._getSet(SetType.COLUMN);
    }

    _getSet(setType: SetType): number[][] {
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

    _setIsValid(set: number[][]): boolean {
        let isValid = true;

        for (let i = 0; i < set.length; i++) {
            isValid = this._totalIsValid(set[i].reduce(this._sumReducer));
            if (!isValid) {
                break;
            }
        }

        return isValid;
    }

    _sumReducer(previousValue: number, currentValue: number): number {
        return previousValue + currentValue;
    }

    _totalIsValid(sum: number): boolean {
        console.log('validating total...', sum);
        if (this._seriesSum) {
            return sum === this._seriesSum;
        } else {
            this._seriesSum = sum;
            return true;
        }
    }
}