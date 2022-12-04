function matrixProduct(mat1, mat2){
  let mat = [];
  for (let i = 0; i < mat1.length; i++){
    mat[i] = [];
    for(let n = 0; n < mat2[0].length; n++){
        let prod = 0;
        for(let m = 0; m < mat1[0].length; m++){
            prod += mat1[i][m] * mat2[m][n];
        }
        mat[i][n] = prod 
    }

  }
  return mat;

}

function sumOfMat(mat1, mat2){
  let mat = [];
  for (let i  = 0; i < mat1.lemgth; i++){
    mat[i] = [];
    for (let n = 0; n < mat1[i].length; n++){
      let sum = 0;
      sum += mat1[i][n] + mat2[i][n];
      mat[i][n] = sum
    }

  }
  return mat;  
}

function sumOfArray(array){
  let res = 0;
  let arr = 0;
  for(let i = 0; i < array.length; i++){
    res += array[i];
  }
 arr.push(res)
  return arr;
}

function sumOfEachRow(matrix){
  let mat = [];
  for (let i = 0; i < matrix.length; i++){
    mat.push(sumOfArray(matrix[i]));
  }
  return mat;
}

function trim(string){
  let trim = false;
  let finalWord = "";
  for (let i = 0; i < string.length; i ++){
    if (string[i] !== " "){
      trim = true
    }
    if (trim){
      finalWord = finalWord.concat(string[i])
    }
  }
  return finalWord;
}
 function countWords(str){
  return str.trim().split(/\s+/).length
 }

module.exports = {
  matrixProduct,
  sumOfMat,
  sumOfArray,
  sumOfEachRow,
  trim,
  countWords,
}


