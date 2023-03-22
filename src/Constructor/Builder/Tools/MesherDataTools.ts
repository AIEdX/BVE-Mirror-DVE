import type {
 DBOPrimitive,
 TypedArrays,
} from "divine-binary-object/Types/DBO.types";

import { UtilMap } from "../../../Global/Util/UtilMap.js";
import { TypedArrayMap } from "divine-binary-object/Constants/ByteData.js";

export class MesherDataTool {
 indicieIndex = 0;
 vars = new UtilMap<string, number>();
 segments = new UtilMap<string, number[]>();
 attributes = new UtilMap<
  string,
  [
   value: number[],
   stride: number,
   dataType: Exclude<DBOPrimitive, "bigui" | "bigi">
  ]
 >([
  ["position", [[], 3, "32f"]],
  ["normal", [[], 3, "32f"]],
  ["indices", [[], 1, "16ui"]],
 ]);
 addPositions(...positions: number[]) {
  this.attributes.get("position")![0].push(...positions);
  return this;
 }
 addNormals(...normals: number[]) {
  this.attributes.get("normal")![0].push(...normals);
  return this;
 }
 addIndices(...indicies: number[]) {
  this.attributes.get("indices")![0].push(...indicies);
  return this;
 }
 addToAttribute(id: string, ...data: number[]) {
  const attribute = this.attributes.get(id);
  if (!attribute) return this;
  attribute[0].push(...data);
  return this;
 }
 getAttribute(id: string) {
  return this.attributes.get(id)![0];
 }
 addToSegment(id: string, ...normals: number[]) {
  const segment = this.segments.get(id);
  if (!segment) return this;
  segment.push(...normals);
  return this;
 }
 setVar(id: string, value: number) {
  if (this.vars.has(id)) {
   this.vars.set(id, value);
  }
 }
 resetAll() {
  this.resetSegments();
  this.resetAttributes();
  this.resetVars();
  return this;
 }
 resetSegments() {
  for (const [key, v] of this.segments._map) {
   this.segments._map.set(key, []);
  }
  return this;
 }
 resetAttributes() {
  for (const [key, v] of this.attributes._map) {
   this.attributes._map.set(key, [[], v[1], v[2]]);
  }

  this.indicieIndex = 0;
  return this;
 }
 resetVars() {
  for (const key of this.vars._map.keys()) {
   this.vars.set(key, 0);
  }
  return this;
 }

 getMeshData() {
  const arrays: any[] = [];
  const trasnfers: any[] = [];
  for (const [key, [value, stride, type]] of this.attributes._map) {
   //@ts-ignore
   const newArray: Uint8Array = TypedArrayMap[type].from(value);
   arrays.push(newArray);
   trasnfers.push(newArray.buffer);
  }

  return <[TypedArrays[], ArrayBuffer[]]>[arrays, trasnfers];
 }
}


