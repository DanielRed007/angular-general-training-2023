
export function patternValidator(control:any) {
    const pattern = /^[A-Z]{3}-\d{4}[A-Z]{2}-[A-Z]{3}$/i;
  
    if (!pattern.test(control.value)) {
      return { patternInvalid: true };
    }
  
    return null;
}