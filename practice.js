const cal_sum = (s)=>{
    for (let i=0; i<s.length; i++){
        if(/[0-99]/.test(s[i])) {
            res += parseInt(s[i])
        }
    }
    return res
}
console.log(cal_sum("iam37andsheis27"))