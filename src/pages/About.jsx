import styles from './About.module.css';
function About(){
    return(
        <div className={styles.body}>
            <main className={styles.mainn}>
                <h1 className={styles.logo}>INFO-CENTRIC</h1>
                <h1>About us</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam mollitia illo, sit at, qui ex sapiente adipisci distinctio voluptate saepe, harum tempora impedit quas inventore. Tenetur ipsa nostrum harum ipsam!
                </p>
                <br />
                <h1>Vision</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod hic porro ab saepe voluptatem ipsam, expedita repellendus ipsum asperiores, eius alias vel aut labore qui, architecto cum incidunt quaerat nihil?
                </p>
                <br />
                <h1>Mission</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae vel aperiam adipisci mollitia iusto quibusdam totam saepe, perspiciatis illum sequi possimus, nulla quas, amet ut corrupti officiis perferendis laborum nobis!</p>
            </main>
        </div>
    );
}
export default About;
