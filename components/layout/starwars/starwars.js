import react from 'react';
import styles from './starwars.module.css'

const StarWars = () => {

    return (
        <>
            <div className={styles.stars}></div>
            <div className={styles.container}>
                <div className={styles.bigTitle}>
                    <h2><span style={{ fontSize: 'expanded' }}>CODE</span><br />WARS</h2>
                </div>
                <div className={styles.fadeOut}></div>
                <div className={styles.scrollingText}>
                    <h3 className={styles.episode}>Episode LXIX</h3>
                    <h1 className={styles.title}>REVENGE OF THE SCRIPT</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi feugiat magna sit amet metus porta bibendum in ac eros. Mauris id orci ante. Morbi ornare mauris purus, nec eleifend magna placerat id. Nam vulputate diam orci, non vehicula purus semper at. Cras viverra at dui vulputate pharetra.</p>
                    <p>Donec nec ante lacinia, condimentum lectus eu, fermentum orci. Proin sit amet risus ac ligula blandit vehicula. Aliquam scelerisque, velit sed gravida maximus, elit turpis cursus dui, nec ultrices libero libero ac lacus. Nullam tempor euismod libero sit amet feugiat. Suspendisse condimentum ipsum vel orci pharetra pretium. Suspendisse a accumsan arcu. Fusce rhoncus ipsum non est vestibulum laoreet. Fusce quam ante, sagittis non ornare id, luctus a ex. Curabitur imperdiet ornare lorem, id dignissim orci consequat sit amet. Duis lobortis eros ut nunc fringilla, id malesuada ante dictum.</p>
                    <p>Nullam lobortis purus ligula, et elementum mauris congue a. Suspendisse nec viverra neque. In venenatis rhoncus sollicitudin. Morbi quis risus eget lorem tincidunt efficitur.</p>
                    <p>Duis non varius massa, elementum euismod elit. Nulla non purus turpis. Sed aliquam dolor in magna porta laoreet. Praesent odio dolor, ornare eu tincidunt vel, ultricies quis orci. Sed pretium volutpat lectus, sed maximus diam semper sed. Etiam bibendum arcu nulla, sit amet fermentum nulla placerat non.</p>
                </div>
            </div>
        </>
    )
}

export default StarWars;