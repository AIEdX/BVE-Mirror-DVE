import { WorldBounds } from "../../Data/World/WorldBounds.js";
import { ConstructorQueues as CQ } from "../../Common/Queues/ConstructorQueues.js";
import { ThreadComm } from "../../Libs/ThreadComm/ThreadComm.js";
import { WorldRegister } from "../../Data/World/WorldRegister.js";
class TasksBase {
 _data = {
  dimension: "main",
  queue: "main",
 };

 _thread = "";

 constructor() {
  this.build.chunk._s = this;
  this.light.rgb.update._s = this;
  this.light.rgb.remove._s = this;
  this.light.sun.update._s = this;
  this.light.sun.remove._s = this;
  this.flow.update._s = this;
  this.flow.remove._s = this;
  this.light.worldSun._s = this;
  this.explosion.run._s = this;
  this.voxelUpdate.erease._s = this;
  this.voxelUpdate.paint._s = this;
 }

 setFocalPoint(
  x: number,
  y: number,
  z: number,
  dimension = this._data.dimension
 ) {
  const queueKey = `${dimension}-${WorldBounds.getRegionKeyFromPosition(
   x,
   y,
   z
  )}`;
  CQ.addQueue(queueKey);
  this._data.queue = queueKey;
  this._thread = ThreadComm.threadName;
 }

 voxelUpdate = {
  erease: {
   _s: <TasksBase>{},
   add(x: number, y: number, z: number) {
    CQ.voxelUpdate.erease.add(
     [this._s._data.dimension, x, y, z, this._s._data.queue, this._s._thread],
     this._s._data.queue
    );
   },
   run(onDone: Function) {
    CQ.voxelUpdate.erease.run(this._s._data.queue);
    CQ.voxelUpdate.erease.onDone(this._s._data.queue, onDone);
   },
   async runAndAwait() {
    await CQ.voxelUpdate.erease.runAndAwait(this._s._data.queue);
   },
  },
  paint: {
   _s: <TasksBase>{},
   add(x: number, y: number, z: number, raw: number[]) {
    CQ.voxelUpdate.paint.add(
     [
      this._s._data.dimension,
      x,
      y,
      z,
      raw,
      this._s._data.queue,
      this._s._thread,
     ],
     this._s._data.queue
    );
   },
   run(onDone: Function) {
    CQ.voxelUpdate.paint.run(this._s._data.queue);
    CQ.voxelUpdate.paint.onDone(this._s._data.queue, onDone);
   },
   async runAndAwait() {
    await CQ.voxelUpdate.paint.runAndAwait(this._s._data.queue);
   },
  },
 };
 build = {
  chunk: {
   _s: <TasksBase>{},
   add(x: number, y: number, z: number) {
    CQ.build.chunk.add(
     [this._s._data.dimension, x, y, z, 1],
     this._s._data.queue
    );
   },
   run(onDone: Function) {
    CQ.build.chunk.run(this._s._data.queue);
    CQ.build.chunk.onDone(this._s._data.queue, onDone);
   },
   async runAndAwait() {
    await CQ.build.chunk.runAndAwait(this._s._data.queue);
   },
  },
 };
 explosion = {
  run: {
   _s: <TasksBase>{},
   add(x: number, y: number, z: number, radius: number) {
    CQ.explosion.run.add(
     [
      this._s._data.dimension,
      x,
      y,
      z,
      radius,
      this._s._data.queue,
      this._s._thread,
     ],
     this._s._data.queue
    );
   },
   run(onDone: Function) {
    CQ.explosion.run.run(this._s._data.queue);
    CQ.explosion.run.onDone(this._s._data.queue, onDone);
   },
   async runAndAwait() {
    await CQ.explosion.run.runAndAwait(this._s._data.queue);
   },
  },
 };
 flow = {
  update: {
   _s: <TasksBase>{},
   add(x: number, y: number, z: number) {
    CQ.flow.update.add(
     [this._s._data.dimension, x, y, z, this._s._data.queue, this._s._thread],
     this._s._data.queue
    );
   },
   run(onDone: Function) {
    CQ.flow.update.run(this._s._data.queue);
    CQ.flow.update.onDone(this._s._data.queue, onDone);
   },
   async runAndAwait() {
    await CQ.flow.update.runAndAwait(this._s._data.queue);
   },
  },
  remove: {
   _s: <TasksBase>{},
   add(x: number, y: number, z: number) {
    CQ.flow.remove.add(
     [this._s._data.dimension, x, y, z, this._s._data.queue, this._s._thread],
     this._s._data.queue
    );
   },
   run(onDone: Function) {
    CQ.flow.remove.run(this._s._data.queue);
    CQ.flow.remove.onDone(this._s._data.queue, onDone);
   },
   async runAndAwait() {
    await CQ.flow.remove.runAndAwait(this._s._data.queue);
   },
  },
 };
 light = {
  rgb: {
   update: {
    _s: <TasksBase>{},
    add(x: number, y: number, z: number, queue: string | null = null) {
     queue = queue ? queue : this._s._data.queue;
     CQ.rgb.update.add(
      [this._s._data.dimension, x, y, z, queue, this._s._thread],
      queue
     );
    },
    run(onDone: Function) {
     CQ.rgb.update.run(this._s._data.queue);
     CQ.rgb.update.onDone(this._s._data.queue, onDone);
    },
    async runAndAwait() {
     await CQ.rgb.update.runAndAwait(this._s._data.queue);
    },
   },
   remove: {
    _s: <TasksBase>{},
    add(x: number, y: number, z: number, queue: string | null = null) {
     queue = queue ? queue : this._s._data.queue;
     CQ.rgb.remove.add(
      [this._s._data.dimension, x, y, z, queue, this._s._thread],
      queue
     );
    },
    run(onDone: Function) {
     CQ.rgb.remove.run(this._s._data.queue);
     CQ.rgb.remove.onDone(this._s._data.queue, onDone);
    },
    async runAndAwait() {
     await CQ.rgb.remove.runAndAwait(this._s._data.queue);
    },
   },
  },
  sun: {
   update: {
    _s: <TasksBase>{},
    add(x: number, y: number, z: number) {
     CQ.sun.update.add(
      [this._s._data.dimension, x, y, z, this._s._data.queue, this._s._thread],
      this._s._data.queue
     );
    },
    run(onDone: Function) {
     CQ.sun.update.run(this._s._data.queue);
     CQ.sun.update.onDone(this._s._data.queue, onDone);
    },
    async runAndAwait() {
     await CQ.sun.update.runAndAwait(this._s._data.queue);
    },
   },
   remove: {
    _s: <TasksBase>{},
    add(x: number, y: number, z: number) {
     CQ.sun.remove.add(
      [this._s._data.dimension, x, y, z, this._s._data.queue, this._s._thread],
      this._s._data.queue
     );
    },
    run(onDone: Function) {
     CQ.sun.remove.run(this._s._data.queue);
     CQ.sun.remove.onDone(this._s._data.queue, onDone);
    },
    async runAndAwait() {
     await CQ.sun.remove.runAndAwait(this._s._data.queue);
    },
   },
  },
  worldSun: {
   _s: <TasksBase>{},
   add(x: number, z: number, y: number = 0) {
    CQ.worldSun.add([
     this._s._data.dimension,
     x,
     z,
     y,
     this._s._data.queue,
     this._s._thread,
    ]);
    WorldRegister.column.fill(this._s._data.dimension, x, z, y);
   },
   run(onDone: Function) {
    CQ.worldSun.run(this._s._data.queue);
    CQ.worldSun.onDone(this._s._data.queue, onDone);
   },
   async runAndAwait() {
    await CQ.worldSun.runAndAwait();
   },
  },
 };
}

export const TasksTool = function () {
 return new TasksBase();
};
