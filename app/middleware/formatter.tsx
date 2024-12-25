const regex = /^CT\d{4}$/;

function validateCode(input:string): boolean {
  return regex.test(input);
}


export {
    validateCode
}