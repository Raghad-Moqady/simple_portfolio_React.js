import style from './Title.module.css'

function Title({title}){

    return(
        <>
        <h2 className={`${style.title}my-3`}>{title}</h2>
        </>
    )
}
export default Title