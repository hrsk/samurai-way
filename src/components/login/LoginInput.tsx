
type PropsType = {
    input: any
    meta: any
}

export const LoginInput = (props: PropsType) => {

    const { input, meta } = props

    return (
        <>
            <input style={meta.error && meta.touched ? { border: ' solid 2px crimson' } : {}} {...input} {...props} />
            {meta.error && meta.touched && <span style={{ color: 'crimson' }}>{meta.error}</span>}
        </>
    )
}