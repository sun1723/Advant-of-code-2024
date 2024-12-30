import { secureHeapUsed } from "crypto";
import { readFile } from "../utils/readFile.js";

const splitter = '   ';
const checkedList=[];

const ascendingOrder = (a,b) => a-b;

const getInputs = ()=>{
    const firstColumn = [];
    const secondColumn = [];

    const lines = readFile('day1');
    lines.forEach(line => {
        const [col1,col2] = line.split(splitter);
        firstColumn.push(col1);
        secondColumn.push(col2);
    })

    return {
        firstColumn: firstColumn.sort(ascendingOrder),
        secondColumn: secondColumn.sort(ascendingOrder)
    }
}

const blackBox = ({firstColumn,secondColumn}) => {
    // part 1
    // return firstColumn.reduce((acc,cur,index)=>acc + Math.abs(cur - secondColumn[index])
    // ,0) 
    //part 2

    return firstColumn.reduce((acc,cur)=>{
        // check if it is in the check list
        if(isCheked(cur)){
            return acc;
        }
        const frequency = getFrequency(secondColumn,cur);
        checkedList.push(cur);
        return acc += cur * frequency;
    },0)
}

const getFrequency = (arr, num) => {
    return arr.filter(item =>item === num).length;
};

const isCheked = (num) => {
    return checkedList.indexOf(num) >=0;
}

const getResult = () => {
    const {firstColumn,secondColumn} = getInputs();
    const res = blackBox({firstColumn,secondColumn})
    console.log(res)
}

getResult()
