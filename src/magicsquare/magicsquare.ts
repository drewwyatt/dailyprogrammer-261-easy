export class MagicSquare {
    numbers: number[];
    
    constructor(numbers: number[]) {
        this.numbers = numbers;
    }
    
    get isValid(): boolean {
        return (
            Number.isInteger(this.size) &&
            this._setIsValid(this.rows)
        );
    }
    
    get rows(): number[][] {
        if(!this._rows) {
            this._rows = this._getRows();
        }
        
        return this._rows;
    }
    
    get columns(): number[][] {
        if(!this._columns) {
            this._columns = this._getColumns();
        }
        
        return  this._columns;;
    }
    
    get size(): number {
        if(!this._sqrt) {
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
        const rows = [];
        let row: number[];
        let index: number;
        for(let i=0; i<this.size; i++) {
            row = [];
            
            for(let j=0; j<this.size; j++) {
                index = i * this.size + j; 
                row.push(this.numbers[index]);
            }
            
            rows.push(row);
        }
        
        return rows;
    }
    
    _getColumns(): number[][] {
        return [];
    }
    
    _setIsValid(set: number[][]): boolean {
        let isValid = true;
        
        for(let i=0; i<set.length; i++) {
            isValid = this._totalIsValid(set[i].reduce(this._sumReducer));
            if(!isValid) {
                break;
            }
        }
        
        return  isValid;
    }
    
    _sumReducer(previousValue: number, currentValue: number): number {
        return previousValue + currentValue;
    }
    
    _totalIsValid(sum: number): boolean {
        console.log('validating total...', sum);
        if(this._seriesSum) {
            return sum === this._seriesSum;
        } else {
            this._seriesSum = sum;
            return true;
        }
    }
}