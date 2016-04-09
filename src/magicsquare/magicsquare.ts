export class MagicSquare {
    numbers: number[];
    
    constructor(numbers: number[]) {
        this.numbers = numbers;
    }
    
    get isValid(): boolean {
        return Number.isInteger(this.size);
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
    
    // private
    
    _rows: number[][];
    _columns: number[][];
    _sqrt: number;
    
    _getRows(): number[][] {
        return [];
    }
    
    _getColumns(): number[][] {
        return [];
    }
    
}