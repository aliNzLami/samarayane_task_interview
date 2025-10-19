
const validateEmail = (item) => {
    const validRule = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const isValid = item.match(validRule);
    return isValid ? true : false
}

export const validatePatientForm = (formState) => {
    if(!formState) return 'لطفا فرم را تکمیل نمایید';
    
    const validEmail = validateEmail(formState.email);
    const validName = formState.name.length > 3 ? true : false;
    const validDate = formState.dateOfBirth.length > 3 ? true : false;

    if(validEmail && validName && validDate) {
        return true
    }
    else {
        if(!validEmail) {
            return 'لطفا ایمیل صحیح وارد کنید.'
        }
        if(!validName) {
            return 'نام باید حداقل 3 کارکتر باشد'
        }
        if(!validDate) {
            return 'تولد صحیح وارد کنید'
        }
    }
}