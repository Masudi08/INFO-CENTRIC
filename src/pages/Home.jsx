import styles from "./Home.module.css"
//homepage code
function Home(){
    return(
        <div className={styles.body}>
            <header className={styles.header}>
                INFO-CENTRIC....worth your time
            </header>
            <main className={styles.main}>
                <div className={styles.group}>
                    <div className={styles.card}>
                        <h1>Website<br/> Development</h1>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat, voluptatibus corrupti facilis pariatur reiciendis animi optio quaerat enim odit, repellendus voluptas eligendi veniam assumenda. Ea eligendi ab corrupti soluta asperiores.</p>
                    </div>
                    <div className={styles.card}>
                        <h1>App<br/> Development</h1>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat, voluptatibus corrupti facilis pariatur reiciendis animi optio quaerat enim odit, repellendus voluptas eligendi veniam assumenda. Ea eligendi ab corrupti soluta asperiores.</p>
                    </div>
                    <div className={styles.card}>
                        <h1>Video Editing</h1>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat, voluptatibus corrupti facilis pariatur reiciendis animi optio quaerat enim odit, repellendus voluptas eligendi veniam assumenda. Ea eligendi ab corrupti soluta asperiores.</p>
                    </div>
                    <div className={styles.card}>
                        <h1>Laptop Fixing</h1>
                        <p>Lorem, ipsum dolr sit amet consectetur adipisicing elit. Fugiat, voluptatibus corrupti facilis pariatur reiciendis animi optio quaerat enim odit, repellendus voluptas eligendi veniam assumenda. Ea eligendi ab corrupti soluta asperiores.</p>
                    </div>
                    <div className={styles.card}>
                        <h1>Phone Fixing</h1>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat, voluptatibus corrupti facilis pariatur reiciendis animi optio quaerat enim odit, repellendus voluptas eligendi veniam assumenda. Ea eligendi ab corrupti soluta asperiores.</p>
                    </div>
                </div>
                <div className={styles.group}>
                    <div className={styles.card}>
                        <h1>Website<br/> Development</h1>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat, voluptatibus corrupti facilis pariatur reiciendis animi optio quaerat enim odit, repellendus voluptas eligendi veniam assumenda. Ea eligendi ab corrupti soluta asperiores.</p>
                    </div>
                    <div className={styles.card}>
                        <h1>App<br/>Development</h1>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat, voluptatibus corrupti facilis pariatur reiciendis animi optio quaerat enim odit, repellendus voluptas eligendi veniam assumenda. Ea eligendi ab corrupti soluta asperiores.</p>
                    </div>
                    <div className={styles.card}>
                        <h1>Video Editing</h1>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat, voluptatibus corrupti facilis pariatur reiciendis animi optio quaerat enim odit, repellendus voluptas eligendi veniam assumenda. Ea eligendi ab corrupti soluta asperiores.</p>
                    </div>
                    <div className={styles.card}>
                        <h1>Laptop Fixing</h1>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat, voluptatibus corrupti facilis pariatur reiciendis animi optio quaerat enim odit, repellendus voluptas eligendi veniam assumenda. Ea eligendi ab corrupti soluta asperiores.</p>
                    </div>
                    <div className={styles.card}>
                        <h1>Phone Fixing</h1>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat, voluptatibus corrupti facilis pariatur reiciendis animi optio quaerat enim odit, repellendus voluptas eligendi veniam assumenda. Ea eligendi ab corrupti soluta asperiores.</p>
                    </div>
                </div>
            </main>
            <footer className={styles.footer}>
                <section>
                    <h2>Contact Info:</h2>
                    <p>
                        Phone📞: 0110000000<br/>
                        Email: info-centric@gmail.com
                    </p>
                </section>
                <section>
                    <p>
                        Copyright© 2026 Info-centric. All rights reservered.
                    </p>
                </section>
                <section>
                    <h2>Location</h2>
                    <p>
                        physical-location: Baseline off Naivasha road.
                    </p>
                </section>
            </footer>
        </div>
    );
}
export default Home;