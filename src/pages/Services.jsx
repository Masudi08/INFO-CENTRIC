import styles from './Services.module.css'
function Services(){
    return(
        <div className={styles.body}>
            <section className={styles.webDev}>
                <h2>Modern websites. Built to convert.</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae minima at quo, natus rem laudantium ut illo cumque culpa quas quaerat corrupti, saepe suscipit itaque atque laborum tempore facere reiciendis!</p>
            </section>
            <section className={styles.phoneFix}>
                <h2>Phone trouble? Fixed fast, guaranteed.</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci qui illum sint delectus amet pariatur mollitia? Vel magni minima amet, officia nam, molestias aut in laboriosam nobis harum, eum obcaecati?</p>
            </section>
            <section className={styles.videoEdit}>
                <h2>Raw footage. Polished, powerful final cuts.</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi veniam voluptate quidem, officiis eaque explicabo. Corporis quasi rerum, voluptas, itaque porro accusantium consequatur rem officiis aperiam molestiae nisi cumque asperiores.</p>
            </section>
            <section className={styles.laptopFix}>
                <h2>Laptop trouble? Fixed right and fast!</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores obcaecati unde, ducimus exercitationem ex quia ipsum iure fugit natus officiis, sed assumenda, omnis explicabo in quidem nisi veritatis tenetur. Ullam!</p>
            </section>
            <section className={styles.appDev}>
                <h2>Custom Apps Built for Growth</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, illum culpa. Eum, vitae quia delectus quos dignissimos eos hic dolorem eligendi nostrum ipsa cupiditate sunt, illo vero reiciendis. Dicta, dolor.</p>
            </section>
        </div>
    );
}
export default Services;
