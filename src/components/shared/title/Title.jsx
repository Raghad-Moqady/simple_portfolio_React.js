import style from './Title.module.css'

function Title({title}){

    return(
        <>
        <h2 className={`${style.title} my-5 text-center`}>{title}</h2>
        </>
    )
}
export default Title