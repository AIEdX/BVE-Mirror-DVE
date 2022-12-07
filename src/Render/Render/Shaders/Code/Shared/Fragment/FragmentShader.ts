export const SharedFragmentShader = {
 top: `
    precision highp float;
    precision highp sampler2DArray;
    uniform vec4 fogOptions;
    `,
 optionVariables(ao: boolean = true) {
  let options = `
    uniform float sunLightLevel;
    uniform float baseLevel;
    uniform float time;
    varying float vDoSun;
    varying float vDoRGB;
    `;
  if (ao) {
   options += `
    varying float vDoAO; 
      `;
  }
  return options;
 },
 varying(ao: boolean = true) {
  let varying = `
   //textures
    uniform sampler2DArray arrayTex[4];
    uniform sampler2DArray overlayTex;

    varying float mipMapLevel;

    //uvs
    varying vec3 vUV;
    varying vec4 vOVUV;
    varying float vFaceData;
    //colors
    varying vec4 rgbLColor;
    varying vec4 sunLColor;
    varying vec4 vColors;
    varying vec3 vNormal;
    //for normal based lighting
    varying float vNColor;
    //texture animations
    varying float animIndex;
    varying float overlayAnimIndex;
    //animation States
    varying float vAnimation;
   ${SharedFragmentShader.defaultVarying}
    `;
  if (ao) {
   varying += `
    varying vec4 aoColor;
      `;
  }
  return varying;
 },

 defaultVarying: `
 //for fog
 varying vec3 cameraPOS;
 varying vec3 worldPOS;
 varying float vDistance;
 `,
 getBase: `
 vec4 getBase() {
   vec4 rgb = vec4(0.,0.,0.,0.);
   switch (int(mipMapLevel)) {
      case 0:
          rgb =  texture(arrayTex[0], vec3(vUV.x,vUV.y,animIndex)) ;
          break;
      case 1:
         rgb =  texture(arrayTex[1], vec3(vUV.x,vUV.y,animIndex)) ;
         break;
      case 2:
         rgb =  texture(arrayTex[2], vec3(vUV.x,vUV.y,animIndex)) ;
         break;
      case 3:
         rgb =  texture(arrayTex[3], vec3(vUV.x,vUV.y,animIndex)) ;
         break;
      }
   return rgb;
}
 `,
 useTime: `
    varying float vTime;
    `,
 getColor: `
    vec4 getColor(vec4 base) {
        return base * vColors;
     }
    `,
 getAO: `
    vec4 getAO(vec4 base) {
        return  base * mix(base, aoColor , 1.0);
    }
    `,
 getLight: `
    vec4 getLight(vec4 base) {
    
      vec4 final = ( ((rgbLColor * vDoRGB)  +  ((sunLColor * vDoSun  * sunLightLevel * vNColor))  ) + baseLevel) ;
     // final = clamp(final,0.,1.1);
      return base * final; 
   }
    `,
 doFog: `
    vec3 doFog(vec4 base) {
        if(fogOptions.x == 0.) {
            float fog = CalcFogFactor();
            return fog * base.rgb + (1.0 - fog) * vFogColor;
         }
         if(fogOptions.x == 1.) {
            float fogFactor = CalcVFogFactor();
            return mix( base.rgb, vFogColor, fogFactor );
         }
         if(fogOptions.x == 2.) {
            float fogFactor = CalcVFogFactorAnimated();
            return mix( base.rgb, vFogColor, fogFactor );
         }
         return base.rgb;
    }
    `,

 doVFog: `
    vec3 doVFog(vec4 base) {
      float fogFactor = CalcVFogFactor();
      return mix( base.rgb, vFogColor, fogFactor );

  }
    `,

 hsv2rgbSmooth: `
vec3 hsv2rgbSmooth( in vec3 c )
   {
      vec3 rgb = clamp( abs(mod(c.x*6.0+vec3(0.0,4.0,2.0),6.0)-3.0)-1.0, 0.0, 1.0 );
      rgb = rgb*rgb*(3.0-2.0*rgb); 
      return c.z * mix( vec3(1.0), rgb, c.y);
   }
    `,
};
