function fibonacci(num) {
// your code here
	if(num==1){
		return 1;
	}
	let x=fibonacci(num-1)+fibonacci(num-2);
	return x;
}

module.exports = fibonacci;
