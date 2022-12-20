import { DirectionalLight, Light, PointLight, Scene, SpotLight } from "three";

import { RendererNodeResource, updateTransformFromNode } from "../node/node.render";
import { RenderThreadState } from "../renderer/renderer.render";
import { LightType } from "../resource/schema";

export function updateNodeLight(ctx: RenderThreadState, scene: Scene, node: RendererNodeResource) {
  const currentLightResourceId = node.currentLightResourceId;
  const nextLightResourceId = node.light?.resourceId || 0;

  // TODO: Handle node.visible

  if (currentLightResourceId !== nextLightResourceId && node.lightObject) {
    scene.remove(node.lightObject);
    node.lightObject = undefined;
  }

  node.currentLightResourceId = nextLightResourceId;

  if (!node.light) {
    return;
  }

  const lightType = node.light.type;

  let light: Light | undefined;

  const localLight = node.light;

  if (lightType === LightType.Directional) {
    let directionalLight = node.lightObject as DirectionalLight | undefined;

    if (!directionalLight) {
      directionalLight = new DirectionalLight();
      // Ensure light points down negative z axis
      directionalLight.target.position.set(0, 0, -1);
      directionalLight.add(directionalLight.target);

      // TODO: Move to CSM
      directionalLight.shadow.camera.top = 100;
      directionalLight.shadow.camera.bottom = -100;
      directionalLight.shadow.camera.left = -100;
      directionalLight.shadow.camera.right = 100;
      directionalLight.shadow.camera.near = 10;
      directionalLight.shadow.camera.far = 600;
      directionalLight.shadow.bias = 0.0001;
      directionalLight.shadow.normalBias = 0.2;
      directionalLight.shadow.mapSize.set(2048, 2048);

      scene.add(directionalLight);
    }

    directionalLight.color.fromArray(localLight.color);
    directionalLight.intensity = localLight.intensity;
    directionalLight.castShadow = localLight.castShadow;

    light = directionalLight;
  } else if (lightType === LightType.Point) {
    let pointLight = node.lightObject as PointLight | undefined;

    if (!pointLight) {
      pointLight = new PointLight();
      pointLight.decay = 2;

      scene.add(pointLight);
    }

    pointLight.color.fromArray(localLight.color);
    pointLight.intensity = localLight.intensity;
    pointLight.castShadow = localLight.castShadow;
    pointLight.distance = localLight.range;

    light = pointLight;
  } else if (lightType === LightType.Spot) {
    let spotLight = node.lightObject as SpotLight | undefined;

    if (!spotLight) {
      spotLight = new SpotLight();
      spotLight.target.position.set(0, 0, -1);
      spotLight.add(spotLight.target);
      spotLight.decay = 2;

      scene.add(spotLight);
    }

    spotLight.color.fromArray(localLight.color);
    spotLight.intensity = localLight.intensity;
    spotLight.castShadow = localLight.castShadow;
    spotLight.distance = localLight.range;
    spotLight.angle = localLight.outerConeAngle;
    spotLight.penumbra = 1.0 - localLight.innerConeAngle / localLight.outerConeAngle;

    light = spotLight;
  }

  if (light) {
    updateTransformFromNode(ctx, node, light);
  }

  node.lightObject = light;
}
