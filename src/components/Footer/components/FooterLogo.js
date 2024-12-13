import '../footer.css'
import Logo from '../icons/logo.svg'

export const FooterLogo = ()=>{
    return(
        <div className='footer-quick'><img src={Logo} alt="" className="footer-logo"/>
        <p className='footer-title'>Quick Links</p></div>
    )
}