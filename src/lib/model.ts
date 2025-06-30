import * as THREE from 'three'
import { GLTFLoader, GLTF } from 'three/examples/jsm/loaders/GLTFLoader.js'

export function loadGLTFModel(
  scene: THREE.Scene,
  glbPath: string,
  options = { receiveShadow: true, castShadow: true }
) {
  const { receiveShadow, castShadow } = options
  return new Promise<THREE.Group>((resolve, reject) => {
    const loader = new GLTFLoader()

    loader.load(
      glbPath,
      (gltf: GLTF) => {
        const obj = gltf.scene
        obj.name = 'dog'
        obj.position.y = 0
        obj.receiveShadow = receiveShadow
        obj.castShadow = castShadow

        // Traverse all children and set shadows
        obj.traverse((child: THREE.Object3D) => {
          if (child instanceof THREE.Mesh) {
            child.castShadow = castShadow
            child.receiveShadow = receiveShadow
          }
        })

        scene.add(obj)

        obj.updateMatrixWorld()
        resolve(obj)
      },
      undefined,
      (error: Error) => {
        console.error('An error happened loading the model:', error)
        reject(error)
      }
    )
  })
} 