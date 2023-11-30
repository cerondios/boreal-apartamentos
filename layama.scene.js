// Created with Motiva Layama v1.6 https://www.motivacg.com/layama

function getLayamaCameras()
{
   var layamaCameras = new BABYLON.SmartArray(0);
   layamaCameras.push({n: "Boreal completo0000", a: "1", p: new BABYLON.Vector3(511.158, 160, 48.6478), l: new BABYLON.Vector3(511.158, 160, 49.6478)});
   layamaCameras.push({n: "Boreal completo0001", a: "4", p: new BABYLON.Vector3(313.392, 160, 201.619), l: new BABYLON.Vector3(313.392, 160, 202.619)});
   layamaCameras.push({n: "Boreal completo0002", a: "7", p: new BABYLON.Vector3(541.54, 160, 296.243), l: new BABYLON.Vector3(541.54, 160, 297.243)});
   layamaCameras.push({n: "Boreal completo0003", a: "2", p: new BABYLON.Vector3(521.833, 160, 194.631), l: new BABYLON.Vector3(521.833, 160, 195.631)});
   layamaCameras.push({n: "Boreal completo0004", a: "3", p: new BABYLON.Vector3(421.183, 160, 201.149), l: new BABYLON.Vector3(421.183, 160, 202.149)});
   layamaCameras.push({n: "Boreal completo0005", a: "5", p: new BABYLON.Vector3(392.204, 160, 304.597), l: new BABYLON.Vector3(392.204, 160, 305.597)});
   layamaCameras.push({n: "Boreal completo0006", a: "6", p: new BABYLON.Vector3(161.323, 160, 319.375), l: new BABYLON.Vector3(161.323, 160, 320.375)});
   layamaCameras.push({n: "Boreal completo0007", a: "8", p: new BABYLON.Vector3(562.077, 160, 446.081), l: new BABYLON.Vector3(562.077, 160, 447.081)});
   layamaCameras.push({n: "Boreal completo0008", a: "9", p: new BABYLON.Vector3(563.552, 160, 628.955), l: new BABYLON.Vector3(563.552, 160, 629.955)});
   return layamaCameras;
}

function getLayamaResolutions()
{
   var layamaResolutions = new BABYLON.SmartArray(0);
   layamaResolutions.push("2048");
   layamaResolutions.push("1024");
   return layamaResolutions;
}

function getOnScreenLogoUsage()
{
   return 6;
}

function getLayamaControls()
{
   return {defMove: false, defRot: 1, altMove: true, altRot: 2};
}

function getLayamaAlternatives()
{
   var layamaAlternatives = new BABYLON.SmartArray(0);
   layamaAlternatives.push({n: "base", u: "./jpg/base/", i:"./jpg/alternative.png"});
   layamaAlternatives.push({n: "Alternative_1", u: "./jpg/Alternative_1/", i:"./jpg/alternative.png"});
   return layamaAlternatives;
}

