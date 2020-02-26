function check(n){
    if (n<2) {
            return  false;
        }else {
            for (let i=2; i<n-1; i++) {
                 if (n % i == 0) {
                return  false;
            }
        }
            return true;
    }
}
function list() {
    let number = parseInt(document.getElementById("input").value);
    let count = 0;
    let i = 2;
    let result = "";
    while (count < number){
        if (check(i)==true)
        {
            result = result + "&nbsp;" +i;
            count++;
        } i++;
    }
    document.getElementById("result").innerHTML = number + " Số Nguyên Tố : " + result;
}