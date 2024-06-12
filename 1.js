function printPattern() {
    let pattern = '';
    
    for (let i = 2; i <= 6; i++) {
      pattern += '#'.repeat(i) + '\n';
    }
    
    console.log(pattern);
  }
  
  printPattern();
  