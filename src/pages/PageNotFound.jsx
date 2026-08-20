import styles from "./PageNotFound.module.css";
function PageNotFound(){
    return(
        <div className={styles.body}>
            <h1>404 error</h1>
            <h2>Page not found.</h2>
            <h3>This page may have been removed or it doesn't exist.</h3>
        </div>
    );
}
export default PageNotFound;