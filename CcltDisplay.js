class Display {
    constructor(ccltDisplayPreviousValue, ccltDisplayCurrentValue) {
        this.ccltDisplayCurrentValue = ccltDisplayCurrentValue;
        this.ccltDisplayPreviousValue = ccltDisplayPreviousValue;
        this.cclt = new Cclt();
        this.opType = undefined;
        this.ccltCurrentValue = '';
        this.ccltPreviousValue = '';
        this.signs = { sumar: '+', dividir: '/', multiplicar: '*', restar: '-'}
    }

    delete() {
        this.ccltCurrentValue = this.ccltCurrentValue.toString().slice(0, -1);
        this.printValue();
    }

    deleteAll() {
        this.ccltCurrentValue = '';
        this.ccltPreviousValue = '';
        this.opType = undefined;
        this.printValue();
    }

    compute(type) {
        this.opType !== 'igual' && this.calculate();
        this.opType = type;
        this.ccltPreviousValue = this.ccltCurrentValue || this.ccltPreviousValue;
        this.ccltCurrentValue = '';
        this.printValue();
    }

    addNum(num) {
        if (num === '.' && this.ccltCurrentValue.includes('.')) return
        this.ccltCurrentValue = this.ccltCurrentValue.toString() + num.toString();
        this.printValue();
    }

    printValue() {
        this.ccltDisplayCurrentValue.textContent = this.ccltCurrentValue;
        this.ccltDisplayPreviousValue.textContent = `${this.ccltPreviousValue} ${this.signs[this.opType] || ''}`;
    }

    calculate() {
        const ccltPreviousValue = parseFloat(this.ccltPreviousValue);
        const ccltCurrentValue = parseFloat(this.ccltCurrentValue);

        if (isNaN(ccltCurrentValue) || isNaN(ccltPreviousValue)) return
        this.ccltCurrentValue = this.cclt[this.opType](ccltPreviousValue, ccltCurrentValue);

    }
}