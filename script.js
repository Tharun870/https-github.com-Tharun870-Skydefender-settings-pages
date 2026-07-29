for(let i=0;i<300;i++){

const star=new THREE.Mesh(

new THREE.SphereGeometry(0.03),

new THREE.MeshBasicMaterial({color:0xffffff})

);

star.position.set(

(Math.random()-0.5)*100,

Math.random()*50,

(Math.random()-0.5)*100

);

scene.add(star);

}
