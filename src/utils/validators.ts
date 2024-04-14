export const emailValidator = (value: any) => {

}
export const passwordLengthValidator = (min: number, max: number) => (value: any) => {
    if (value.length > max) return `Should be less than ${max}`
    if (value.length < min) return `Should be greater than ${min}`
}

export const required = (value: any) => (value ? undefined : 'Required')