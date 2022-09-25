function solve(arr) {
    let objList = {}
    for (let i = 0; i < arr.length; i+=2) {
        objList[arr[i]]=Number(arr[i+1])
        
    }
    console.log(objList);
}
solve(['Yoghurt', '48', 'Rise', '138',

'Apple', '52'])