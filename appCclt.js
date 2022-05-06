
const ccltDisplayPreviousValue = document.getElementById('previous-value');
const ccltDisplayCurrentValue = document.getElementById('current-value');
const ccltBtnNums = document.querySelectorAll('.cclt__btn--num');
const ccltBtnOp = document.querySelectorAll('.cclt__btn--op');

const display = new Display(ccltDisplayPreviousValue, ccltDisplayCurrentValue);

ccltBtnNums.forEach(btn => {
    btn.addEventListener('click', () => {
        display.addNum(btn.innerHTML);
    });
});

ccltBtnOp.forEach(btn => {
    btn.addEventListener('click', () => display.compute(btn.value));
})