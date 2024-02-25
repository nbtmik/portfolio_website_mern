import React, { useEffect } from "react";
import "./Home.css";
import * as THREE from 'three';
//import {OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import moonImage from "../../Images/moon.jpg";
import venusImage from "../../Images/venus.jpg";
import spaceImage from "../../Images/space.jpg";
import { Typography} from "@mui/material";
import TimeLine from "../TimeLine/TimeLine";
import {
    SiCplusplus,
    SiReact,
    SiJavascript,
    SiMongodb,
    SiNodedotjs,
    SiExpress,
    SiCss3,
    SiHtml5,
    SiThreedotjs,
    SiPostgresql,
  } from "react-icons/si";
import YoutubeCard from "../YoutubeCard/YoutubeCard";
import { Link } from "react-router-dom";
import { MouseOutlined } from "@mui/icons-material";


const Home=({timelines,youtubes,skills})=>{
    useEffect(()=>{
        const textureLoader = new THREE.TextureLoader(); // to add all texture
        const moonTexture = textureLoader.load(moonImage);
        const venusTexture = textureLoader.load(venusImage);
        const spaceTexture = textureLoader.load(spaceImage);

        //using threejs(for3d effect)
        const scene = new THREE.Scene(); //first step create scene
        const camera = new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.1,1000);// 2nd step create camera -perpective camera used for direct eye view(our prespective)
        camera.position.set(4,4,8); //zoom out camera

        const canvas = document.querySelector(".homeCanvas");
        const renderer = new THREE.WebGL1Renderer({canvas}); //to render the scene and camera

        //for moon
        const moonGeometry = new THREE.SphereGeometry(2,64,64); // for making shape
        const moonMaterial = new THREE.MeshStandardMaterial({map:moonTexture}); // fill the color(skin)
        const moon = new THREE.Mesh(moonGeometry,moonMaterial);//to create mesh

        //for venus
        const venusGeometry = new THREE.SphereGeometry(3,64,64); // for making shape
        const venusMaterial = new THREE.MeshBasicMaterial({map:venusTexture}); // fill the color(skin)
        const venus = new THREE.Mesh(venusGeometry,venusMaterial);//to create mesh
        venus.position.set(8,5,5);


        const pointLight = new THREE.PointLight(0xffffff,60);   //add light means it'll work as tourch
        const pointLight2 = new THREE.PointLight(0xffffff,2);

        pointLight.position.set(8,5,5); // adjuest position for pointlight
        pointLight2.position.set(-8,-5,-5);

        //const lightHelper = new THREE.PointLightHelper(pointLight);


        //const controls = new OrbitControls(camera,renderer.domElement); /this will gove zoom in zoom out effect like google earth

        //scene
        scene.add(moon);
        scene.add(pointLight);
        //scene.add(lightHelper);
        scene.add(venus);
        scene.add(pointLight2);
        scene.background= spaceTexture;

        const constSpeed = 0.01;

        window.addEventListener("mousemove",(e)=>{
            if(e.clientX <= window.innerWidth/2){
                moon.rotation.x -= constSpeed;
                moon.rotation.y += constSpeed;
                venus.rotation.x -= constSpeed;
                venus.rotation.y += constSpeed;
            }

            if(e.clientX > window.innerWidth/2){
                moon.rotation.x -= constSpeed;
                moon.rotation.y -= constSpeed;
                venus.rotation.x -= constSpeed;
                venus.rotation.y -= constSpeed;
            }
            if(e.clientY > window.innerHeight/2){
                moon.rotation.x -= constSpeed;
                moon.rotation.y += constSpeed;
                venus.rotation.x -= constSpeed;
                venus.rotation.y += constSpeed;
            }

            if(e.clientY <= window.innerHeight/2){
                moon.rotation.x -= constSpeed;
                moon.rotation.y -= constSpeed;
                venus.rotation.x -= constSpeed;
                venus.rotation.y -= constSpeed;
            }
        })


        const animate =()=>{
            requestAnimationFrame(animate);
            moon.rotation.y +=0.01;
            venus.rotation.y +=0.001;
            renderer.setSize(window.innerWidth,window.innerHeight);
            renderer.render(scene,camera);
        }; //using recursion to rotate
        animate();
        return window.addEventListener("scroll",(e)=>{
          camera.rotation.y=window.scrollY * 0.003;

          const skillsBox = document.getElementById("homeskillsBox");

          if(window.scrollY>1500){
            skillsBox.style.animationName="homeskillsBoxAnimationOn";
          }else{
            skillsBox.style.animationName="homeskillsBoxAnimationoff";
          }
        });
    },[]);



    return(
        <div className="home">
          <canvas className="homeCanvas"></canvas>
          <div className="homeCanvasContainer">
          <Typography variant="h1">
          <p>S</p>
          <p>O</p>
          <p>U</p>
          <p>M</p>
          <p>I</p>
          <p>K</p>
        </Typography>
        <div className="homeCanvasBox">
          <Typography variant="h2">DESIGNER</Typography>
          <Typography variant="h2">DEVELOPER</Typography>
          <Typography variant="h2">TEACHER</Typography>
          <Typography variant="h2">CONTENT CREATOR</Typography>
        </div>

        <Link to="/projects">VIEW WORK</Link>
        </div>
          
        <div className="homeScrollBtn">
        <MouseOutlined />
      </div>
      
          <div className="homeContainer">
            <Typography variant="h3">TIMELINE</Typography>
            <TimeLine timelines={timelines} />
          </div>
          <div className="homeSkills">
            <Typography variant="h3">SKILLS</Typography>
            <div className="homeCubeSkills">
            <div className="homeCubeSkillsFaces homeCubeSkillsFace1">
            <img src={skills.image1.url} alt="Face1" />
          </div>

          <div className="homeCubeSkillsFaces homeCubeSkillsFace2">
            <img src={skills.image2.url} alt="Face2" />
          </div>

          <div className="homeCubeSkillsFaces homeCubeSkillsFace3">
            <img src={skills.image3.url} alt="Face3" />
          </div>

          <div className="homeCubeSkillsFaces homeCubeSkillsFace4">
            <img src={skills.image4.url} alt="Face4" />
          </div>

          <div className="homeCubeSkillsFaces homeCubeSkillsFace5">
            <img src={skills.image5.url} alt="Face5" />
          </div>

          <div className="homeCubeSkillsFaces homeCubeSkillsFace6">
            <img src={skills.image6.url} alt="Face6" />
          </div>
            </div>
            <div className="cubeShadow"></div>
            <div className="homeskillsBox" id="homeskillsBox">
            <SiCplusplus />
            <SiHtml5 />
            <SiCss3 />
            <SiJavascript />
            <SiMongodb />
            <SiExpress />
            <SiReact />
            <SiNodedotjs />
            <SiThreedotjs />
            {/* <SiPostgresql /> */}
            </div>
          </div>

          <div className="homeYoutube">
          <Typography variant="h3">Project Videos</Typography>
          <div className="homeYoutubeWrapper">
            {
                youtubes.map(item=>(
                    <YoutubeCard image={item.image.url} title={item.title} url={item.url} id={item._id} key={item._id} />
                ))
            }
          </div>
          </div>
        </div>
    );
};

export default Home;