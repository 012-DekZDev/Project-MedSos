import style from '../css/Footer.module.css'

export function Footer(){
    const NotifError = () => {
        alert('Maaf, ada kendala bagian ini')
    }
    return(
        <>
        <div className={style.footer}>
            <ul>
                <li><a href="" onClick={NotifError}>Meta</a></li>
                <li><a href="" onClick={NotifError}>About</a></li>
                <li><a href="" onClick={NotifError}>Blog</a></li>
                <li><a href="" onClick={NotifError}>Jobs</a></li>
                <li><a href="" onClick={NotifError}>Help</a></li>
                <li><a href="" onClick={NotifError}>API</a></li>
                <li><a href="" onClick={NotifError}>Privacy</a></li>
                <li><a href="" onClick={NotifError}>Terms</a></li>
                <li><a href="" onClick={NotifError}>Locations</a></li>
                <li><a href="" onClick={NotifError}>MedSos Lite</a></li>
                <li><a href="" onClick={NotifError}>Meta AI</a></li>
                <li><a href="" onClick={NotifError}>Threads</a></li>
                <li><a href="" onClick={NotifError}>Meta Veried</a></li>
                <li><a href="" onClick={NotifError}>Meta in Indonesia</a></li>
            </ul>
            <p>
                @ 2026 Instagram from meta
            </p>
        </div>
        </>
    )
}