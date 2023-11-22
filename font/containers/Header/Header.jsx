import Navbar from '../../components/Header/Navbar/Navbar';
import Text from '../../components/Header/Text/Text';
import Button from '../../components/Header/Button/Button';
import Screen from '../../components/Header/Screen/Screen';

import styles from './Header.module.css'

const Header = () => {

    return(
        <div className={styles.wrapper}>

            <Navbar/>
            <Text/>

            <div className={styles.btnWrapper}>

                <Button text = "Try For Free"/>
                <Button text = "Learn More"/>
                
            </div>

            <Screen/>
           
           
        </div>
    )

    
}


export default Header;