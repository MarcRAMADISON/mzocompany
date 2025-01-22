import style from './menuBar.module.css'
import Image from 'next/image';

function MenuBar() {
    return ( 
        <>
        
    <div className={style.container}>
        <Image className={style.logo} src="/assets/mzo_logo.png" alt="mzo logo" width={120} height={80}/>
        <div className={style.menuItems}>
            <h5 className={style.menuItem}>Acceuil</h5>
            <h5 className={style.activity} >Activité</h5>
            <h5 className={style.menuItem}>Contact</h5>
            <div className={style.doteContainer}>
                <div className={style.dote}></div>
                <div className={style.dote}></div>
                <div className={style.dote}></div>
            </div>
        </div>
    </div> 
     <div className={style.sous_menu}>

     </div>
     </>);
}

export default MenuBar;