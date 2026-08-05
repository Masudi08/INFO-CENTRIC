import { useState,useEffect } from "react";
import {FaArrowUp,FaArrowDown} from 'react-icons/fa';
import styles from './ScrollButton.module.css';
function ScrollButton(){
    const [atBottom,setAtBottom]=useState(false);
    useEffect(()=>{
        const handleScroll=()=>{
            const scolledToBottom=window.innerHeight+window.scrollY>=document.body.scrollHeight-50;
            setAtBottom(scolledToBottom);
        };

        window.addEventListener('scroll',handleScroll);
        handleScroll();
        return ()=>{window.removeEventListener('scroll',handleScroll);};
    },[]);
    const handleClick=()=>{
        if (atBottom){
            window.scrollTo({top:0,behavior:'smooth'});
        }else{
            window.scrollTo({top:document.body.scrollHeight,behavior:'smooth'});
        }
    };
    return(
        <button className={styles.scrollButton} onClick={handleClick} aria-label={atBottom? 'Top':'Bottom'}>
            {atBottom? <FaArrowUp/>:<FaArrowDown/>}
        </button>
    );
}
export default ScrollButton;