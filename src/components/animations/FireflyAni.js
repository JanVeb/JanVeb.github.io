import "./Firefly.css"
import { gsap, Linear, Power2} from "gsap";

export default function Firefly() {

    setTimeout(() => { FireFlyAnim() }, 100);
   function FireFlyAnim() {

    var container = document.querySelector("#container");
    var count = 30;
    var w, h;
    
    function random(min, max) {
        return gsap.utils.random(min, max);
    }
    
    function createUnit() {
        var unit = document.createElement("div");
        w = window.innerWidth;
        h = window.innerHeight;
        unit.classList.add("unit");
        container.appendChild(unit);
        gsap.set(unit, {
            x: random(0, w),
            y: random(0, h), 
            scale: random(0.5, 1.0),
            opacity: 0
        });
        gsap.to(unit, {
            x: "+=" + random(-w/2, w/2),
            y: "+=" + random(-h/2, h/2),
            duration: random(20, 23),
            ease: Linear.easeNone
        });
        gsap.to(unit, {
            opacity: 1,
            repeat: 5,
            yoyo: true,
            duration: random(2, 3),
            delay: random(0, 2),
            ease: Power2.easeInOut,
            onComplete: function() {
                unit.parentNode.removeChild(unit);
                createUnit();
            }
        });
    }
    
    for (var index = 0; index < count; index++) {
    console.log("🚀 ~ file: FireflyAni.js ~ line 50 ~ FireFlyAnim ~ index", index)
        
        createUnit();
    }
   }

   return (
    <div id="container" class="container"
         style={{
         height: '100%',
         width: '100%',
         display: 'none',
         position: 'fixed',
         zIndex: '-1',
         color: 'white',
         backgroundSize: 'cover',
         }}>
	<h1Firefly></h1Firefly>

       </div>
 )
}