function solve(){
    let data = {};
    Array.from(arguments).forEach((line)=>{
        let type = typeof line;
        console.log(`${type}: ${line}`);

        if(!data[type]){
            data[type]=0;
        }
        data[type]++;
    })

    Object.keys(data)
    .sort((a,b)=> data[b]-data[a])
    .forEach((key)=>console.log(`${key} = ${data[key]}`));
}
solve('cat', 42, function () { console.log('Hello world!'); }
)