function hello(n: number) {
  console.log('hello' + n);
  hello(n + 1);
}

hello(0);