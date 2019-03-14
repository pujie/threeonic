import * as THREE from '../node_modules/three/build/three.js'
export class three{
    windowinnerwidth = 400
    windowinnerheight = 500
    constructor(){}
    createObj(){
        var scene = new THREE.Scene()
        var camera = new THREE.PerspectiveCamera(75,this.windowinnerwidth/this.windowinnerheight,0.1,1000)
        var renderer = new THREE.WebGLRenderer()
        renderer.setSize(this.windowinnerwidth,this.windowinnerheight)
    }
}