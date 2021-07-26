import react, { useEffect, useState } from 'react'
import styles from './newhome.module.css'
import * as THREE from 'three';

const Home = () => {

    useEffect(() => {
        // Setup

        const scene = new THREE.Scene();

        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

        const renderer = new THREE.WebGLRenderer({
            canvas: document.querySelector('#bg'),
        });

        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(window.innerWidth, window.innerHeight);
        camera.position.setZ(30);
        camera.position.setX(-3);

        renderer.render(scene, camera);

        // Torus

        const geometry = new THREE.TorusGeometry(10, 3, 16, 100);
        const material = new THREE.MeshStandardMaterial({ color: 0xff6347 });
        const torus = new THREE.Mesh(geometry, material);

        //scene.add(torus);

        // Lights

        const pointLight = new THREE.PointLight(0xffffff);
        pointLight.position.set(1, 1, 1);

        const ambientLight = new THREE.AmbientLight(0xffffff);
        scene.add(pointLight, ambientLight);

        // Helpers

        // const lightHelper = new THREE.PointLightHelper(pointLight)
        // const gridHelper = new THREE.GridHelper(200, 50);
        // scene.add(lightHelper, gridHelper)

        // const controls = new OrbitControls(camera, renderer.domElement);

        function addStar() {
            const geometry = new THREE.SphereGeometry(0.1, 24, 24);
            const material = new THREE.MeshStandardMaterial({ color: 0xffffff });
            const star = new THREE.Mesh(geometry, material);

            const [x, y, z] = Array(3)
                .fill()
                .map(() => THREE.MathUtils.randFloatSpread(400));

            star.position.set(x, y, z);
            scene.add(star);
        }

        Array(400).fill().forEach(addStar);

        // Background

        const spaceTexture = new THREE.TextureLoader().load('space.jpg');
        scene.background = spaceTexture;

        // Avatar

        /*const jeffTexture = new THREE.TextureLoader().load('jeff.png');
        
        const jeff = new THREE.Mesh(new THREE.BoxGeometry(3, 3, 3), new THREE.MeshBasicMaterial({ map: jeffTexture }));
        
        scene.add(jeff);
        
        jeff.position.z = -5;
        jeff.position.x = 2;*/

        // Moon

        /*const moonTexture = new THREE.TextureLoader().load('moon.jpg');
        const marsTexture = new THREE.TextureLoader().load('mars.jpg');
        const rainbowTexture = new THREE.TextureLoader().load('rainbow.jpg');
        const earthTexture = new THREE.TextureLoader().load('earth.jpg');
        const moonNormalTexture = new THREE.TextureLoader().load('normal.jpg');
        const earthNormalTexture = new THREE.TextureLoader().load('earthnormal.jpg');
        
        const moon = new THREE.Mesh(
          new THREE.SphereGeometry(3, 32, 32),
          new THREE.MeshStandardMaterial({
            map: earthTexture,
            normalMap: earthTexture,
          })
        );
        
        scene.add(moon);
        
        moon.position.z = -30;
        moon.position.setX(10);*/

        // Planets

        const moonTexture = new THREE.TextureLoader().load('moon.jpg');
        const marsTexture = new THREE.TextureLoader().load('mars.jpg');
        const rainbowTexture = new THREE.TextureLoader().load('rainbow.jpg');
        const earthTexture = new THREE.TextureLoader().load('earth.jpg');
        const moonNormalTexture = new THREE.TextureLoader().load('normal.jpg');
        const earthNormalTexture = new THREE.TextureLoader().load('earthnormal.jpg');


        // Earth

        const earth = new THREE.Mesh(
            new THREE.SphereGeometry(10, 64, 64),
            new THREE.MeshStandardMaterial({
                map: earthTexture,
                normalMap: earthTexture,
            })
        );

        scene.add(earth);

        earth.position.z = -20;
        earth.position.setX(15);

        //Moon

        const moon = new THREE.Mesh(
            new THREE.SphereGeometry(3, 32, 32),
            new THREE.MeshStandardMaterial({
                map: moonTexture,
                normalMap: moonNormalTexture,
            })
        );

        scene.add(moon);

        moon.position.z = -30;
        moon.position.setX(10);

        //Mars

        const mars = new THREE.Mesh(
            new THREE.SphereGeometry(7, 32, 32),
            new THREE.MeshStandardMaterial({
                map: marsTexture,
                normalMap: moonNormalTexture,
            })
        );

        scene.add(mars);

        //mars.position.z = -50;
        //mars.position.y = -50
        mars.position.setZ(-60);

        // Scroll Animation

        function moveCamera() {
            const t = document.body.getBoundingClientRect().top;
            //earth.rotation.x -= 0.005;
            earth.rotation.y += 0.075;
            //earth.rotation.z += 0.05;
            earth.position.x = t * 0.01;

            //moon.rotation.x -= 0.005;
            moon.rotation.y -= 0.005;
            //moon.rotation.z += 0.05;

            //mars.position.setZ(-t * 0.1);
            mars.position.y = t * -0.02 - 90;

            //jeff.rotation.y += 0.01;
            //jeff.rotation.z += 0.01;

            camera.position.z = t * 0.01;
            camera.position.x = t * -0.0001;
            camera.rotation.y = t * 0.0002;
        }

        document.body.onscroll = moveCamera;
        moveCamera();

        // Animation Loop

        function animate() {
            requestAnimationFrame(animate);

            /*torus.rotation.x += 0.01;
            torus.rotation.y += 0.005;
            torus.rotation.z += 0.01;*/

            earth.rotation.y += 0.002;
            moon.rotation.y -= 0.0005;
            mars.rotation.y -= 0.0005;

            // controls.update();

            renderer.render(scene, camera);
        }

        animate();

    })

    return (
        <div id='container'>
            <canvas id="bg"></canvas>

            <main id='main'>

                <div id='header'>
                    <h1>Jeff Delaney</h1>
                    <p>🚀 Welcome to my website!</p>
                </div>


                <div class='blockquote'>
                    <p>I like making stuff and putting it on the internet</p>
                </div>

                <div class='section'>
                    <h2>📜 Manifesto</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>

                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>

                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>

                </div>

                <div class="light">
                    <h2>👩🏽‍🚀 Projects</h2>

                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>

                    <h2>🏆 Accomplishments</h2>

                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>

                </div>

                <div class='blockquote'>
                    <p>The best way out is always through <br />-Robert Frost</p>
                </div>

                <div class="left">
                    <h2>🌮 Work History</h2>

                    <h3>McDonalds</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    <h3>Burger King</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    <h3>Taco Bell</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>

                </div>

                <div class='blockquote'>
                    <p class='p'>Thanks for watching!</p>
                </div>


            </main>
        </div>
    )

    /*const [offsetY, setOffsetY] = useState(0);
    const handleScroll = () => setOffsetY(window.pageYOffset);

    useEffect(() => {
                window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

            return (
            <div className={styles.container}>
                <div className={styles.titleContainer}>
                    <h1 className={styles.title}>
                        <span>CodeWorks</span>
                        <span>Canada</span>
                    </h1>
                    <div className={styles.keywords}>
                        <span>Websites</span>
                        <span>Apps</span>
                        <span>Custom Software</span>
                        <span>Digital Marketing</span>
                        <span>Administrative Services</span>
                    </div>
                    <div className={styles.titleBackground}
                        style={{ transform: `translateY(${offsetY * 0.3}px)` }} />
                </div>
                <main className={styles.introContainer}>
                    <h2>Hi! I'm Cam...</h2>
                </main>
            </div>
            )*/
}

export default Home;