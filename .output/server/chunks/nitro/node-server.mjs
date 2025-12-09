globalThis._importMeta_=globalThis._importMeta_||{url:"file:///_entry.js",env:process.env};import Bt, { Server as Server$1 } from 'node:http';
import zs, { Server } from 'node:https';
import st from 'node:zlib';
import me, { PassThrough, pipeline } from 'node:stream';
import { Buffer as Buffer$1 } from 'node:buffer';
import { promisify, deprecate, types } from 'node:util';
import { format, fileURLToPath } from 'node:url';
import { isIP } from 'node:net';
import { statSync, promises, createReadStream } from 'node:fs';
import { basename } from 'node:path';
import { promises as promises$1, existsSync } from 'fs';
import { dirname as dirname$1, resolve as resolve$1, join } from 'path';

var t=Object.defineProperty;var o$2=(e,l)=>t(e,"name",{value:l,configurable:!0});var n$2=typeof globalThis<"u"?globalThis:typeof global<"u"?global:typeof self<"u"?self:{};function f(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}o$2(f,"getDefaultExportFromCjs");

var Os=Object.defineProperty;var fi=i=>{throw TypeError(i)};var n$1=(i,o)=>Os(i,"name",{value:o,configurable:!0});var ci=(i,o,a)=>o.has(i)||fi("Cannot "+a);var O=(i,o,a)=>(ci(i,o,"read from private field"),a?a.call(i):o.get(i)),be=(i,o,a)=>o.has(i)?fi("Cannot add the same private member more than once"):o instanceof WeakSet?o.add(i):o.set(i,a),X=(i,o,a,f)=>(ci(i,o,"write to private field"),f?f.call(i,a):o.set(i,a),a);var ve,zt,bt,Cr,ze,It,Ft,mt,ee,yt,He,Ve,gt;function Us(i){if(!/^data:/i.test(i))throw new TypeError('`uri` does not appear to be a Data URI (must begin with "data:")');i=i.replace(/\r?\n/g,"");const o=i.indexOf(",");if(o===-1||o<=4)throw new TypeError("malformed data: URI");const a=i.substring(5,o).split(";");let f="",l=!1;const p=a[0]||"text/plain";let h=p;for(let A=1;A<a.length;A++)a[A]==="base64"?l=!0:a[A]&&(h+=`;${a[A]}`,a[A].indexOf("charset=")===0&&(f=a[A].substring(8)));!a[0]&&!f.length&&(h+=";charset=US-ASCII",f="US-ASCII");const S=l?"base64":"ascii",v=unescape(i.substring(o+1)),w=Buffer.from(v,S);return w.type=p,w.typeFull=h,w.charset=f,w}n$1(Us,"dataUriToBuffer");var pi={},kt={exports:{}};/**
 * @license
 * web-streams-polyfill v3.3.3
 * Copyright 2024 Mattias Buelens, Diwank Singh Tomer and other contributors.
 * This code is released under the MIT license.
 * SPDX-License-Identifier: MIT
 */var xs=kt.exports,bi;function Ns(){return bi||(bi=1,function(i,o){(function(a,f){f(o);})(xs,function(a){function f(){}n$1(f,"noop");function l(e){return typeof e=="object"&&e!==null||typeof e=="function"}n$1(l,"typeIsObject");const p=f;function h(e,t){try{Object.defineProperty(e,"name",{value:t,configurable:!0});}catch{}}n$1(h,"setFunctionName");const S=Promise,v=Promise.prototype.then,w=Promise.reject.bind(S);function A(e){return new S(e)}n$1(A,"newPromise");function T(e){return A(t=>t(e))}n$1(T,"promiseResolvedWith");function b(e){return w(e)}n$1(b,"promiseRejectedWith");function q(e,t,r){return v.call(e,t,r)}n$1(q,"PerformPromiseThen");function g(e,t,r){q(q(e,t,r),void 0,p);}n$1(g,"uponPromise");function V(e,t){g(e,t);}n$1(V,"uponFulfillment");function I(e,t){g(e,void 0,t);}n$1(I,"uponRejection");function F(e,t,r){return q(e,t,r)}n$1(F,"transformPromiseWith");function Q(e){q(e,void 0,p);}n$1(Q,"setPromiseIsHandledToTrue");let ge=n$1(e=>{if(typeof queueMicrotask=="function")ge=queueMicrotask;else {const t=T(void 0);ge=n$1(r=>q(t,r),"_queueMicrotask");}return ge(e)},"_queueMicrotask");function z(e,t,r){if(typeof e!="function")throw new TypeError("Argument is not a function");return Function.prototype.apply.call(e,t,r)}n$1(z,"reflectCall");function j(e,t,r){try{return T(z(e,t,r))}catch(s){return b(s)}}n$1(j,"promiseCall");const U=16384,bn=class bn{constructor(){this._cursor=0,this._size=0,this._front={_elements:[],_next:void 0},this._back=this._front,this._cursor=0,this._size=0;}get length(){return this._size}push(t){const r=this._back;let s=r;r._elements.length===U-1&&(s={_elements:[],_next:void 0}),r._elements.push(t),s!==r&&(this._back=s,r._next=s),++this._size;}shift(){const t=this._front;let r=t;const s=this._cursor;let u=s+1;const c=t._elements,d=c[s];return u===U&&(r=t._next,u=0),--this._size,this._cursor=u,t!==r&&(this._front=r),c[s]=void 0,d}forEach(t){let r=this._cursor,s=this._front,u=s._elements;for(;(r!==u.length||s._next!==void 0)&&!(r===u.length&&(s=s._next,u=s._elements,r=0,u.length===0));)t(u[r]),++r;}peek(){const t=this._front,r=this._cursor;return t._elements[r]}};n$1(bn,"SimpleQueue");let D=bn;const jt=Symbol("[[AbortSteps]]"),Qn=Symbol("[[ErrorSteps]]"),Ar=Symbol("[[CancelSteps]]"),Br=Symbol("[[PullSteps]]"),kr=Symbol("[[ReleaseSteps]]");function Yn(e,t){e._ownerReadableStream=t,t._reader=e,t._state==="readable"?qr(e):t._state==="closed"?xi(e):Gn(e,t._storedError);}n$1(Yn,"ReadableStreamReaderGenericInitialize");function Wr(e,t){const r=e._ownerReadableStream;return ie(r,t)}n$1(Wr,"ReadableStreamReaderGenericCancel");function _e(e){const t=e._ownerReadableStream;t._state==="readable"?Or(e,new TypeError("Reader was released and can no longer be used to monitor the stream's closedness")):Ni(e,new TypeError("Reader was released and can no longer be used to monitor the stream's closedness")),t._readableStreamController[kr](),t._reader=void 0,e._ownerReadableStream=void 0;}n$1(_e,"ReadableStreamReaderGenericRelease");function Lt(e){return new TypeError("Cannot "+e+" a stream using a released reader")}n$1(Lt,"readerLockException");function qr(e){e._closedPromise=A((t,r)=>{e._closedPromise_resolve=t,e._closedPromise_reject=r;});}n$1(qr,"defaultReaderClosedPromiseInitialize");function Gn(e,t){qr(e),Or(e,t);}n$1(Gn,"defaultReaderClosedPromiseInitializeAsRejected");function xi(e){qr(e),Zn(e);}n$1(xi,"defaultReaderClosedPromiseInitializeAsResolved");function Or(e,t){e._closedPromise_reject!==void 0&&(Q(e._closedPromise),e._closedPromise_reject(t),e._closedPromise_resolve=void 0,e._closedPromise_reject=void 0);}n$1(Or,"defaultReaderClosedPromiseReject");function Ni(e,t){Gn(e,t);}n$1(Ni,"defaultReaderClosedPromiseResetToRejected");function Zn(e){e._closedPromise_resolve!==void 0&&(e._closedPromise_resolve(void 0),e._closedPromise_resolve=void 0,e._closedPromise_reject=void 0);}n$1(Zn,"defaultReaderClosedPromiseResolve");const Kn=Number.isFinite||function(e){return typeof e=="number"&&isFinite(e)},Hi=Math.trunc||function(e){return e<0?Math.ceil(e):Math.floor(e)};function Vi(e){return typeof e=="object"||typeof e=="function"}n$1(Vi,"isDictionary");function ue(e,t){if(e!==void 0&&!Vi(e))throw new TypeError(`${t} is not an object.`)}n$1(ue,"assertDictionary");function Z(e,t){if(typeof e!="function")throw new TypeError(`${t} is not a function.`)}n$1(Z,"assertFunction");function Qi(e){return typeof e=="object"&&e!==null||typeof e=="function"}n$1(Qi,"isObject");function Jn(e,t){if(!Qi(e))throw new TypeError(`${t} is not an object.`)}n$1(Jn,"assertObject");function Se(e,t,r){if(e===void 0)throw new TypeError(`Parameter ${t} is required in '${r}'.`)}n$1(Se,"assertRequiredArgument");function zr(e,t,r){if(e===void 0)throw new TypeError(`${t} is required in '${r}'.`)}n$1(zr,"assertRequiredField");function Ir(e){return Number(e)}n$1(Ir,"convertUnrestrictedDouble");function Xn(e){return e===0?0:e}n$1(Xn,"censorNegativeZero");function Yi(e){return Xn(Hi(e))}n$1(Yi,"integerPart");function Fr(e,t){const s=Number.MAX_SAFE_INTEGER;let u=Number(e);if(u=Xn(u),!Kn(u))throw new TypeError(`${t} is not a finite number`);if(u=Yi(u),u<0||u>s)throw new TypeError(`${t} is outside the accepted range of 0 to ${s}, inclusive`);return !Kn(u)||u===0?0:u}n$1(Fr,"convertUnsignedLongLongWithEnforceRange");function jr(e,t){if(!We(e))throw new TypeError(`${t} is not a ReadableStream.`)}n$1(jr,"assertReadableStream");function Qe(e){return new fe(e)}n$1(Qe,"AcquireReadableStreamDefaultReader");function eo(e,t){e._reader._readRequests.push(t);}n$1(eo,"ReadableStreamAddReadRequest");function Lr(e,t,r){const u=e._reader._readRequests.shift();r?u._closeSteps():u._chunkSteps(t);}n$1(Lr,"ReadableStreamFulfillReadRequest");function $t(e){return e._reader._readRequests.length}n$1($t,"ReadableStreamGetNumReadRequests");function to(e){const t=e._reader;return !(t===void 0||!Ee(t))}n$1(to,"ReadableStreamHasDefaultReader");const mn=class mn{constructor(t){if(Se(t,1,"ReadableStreamDefaultReader"),jr(t,"First parameter"),qe(t))throw new TypeError("This stream has already been locked for exclusive reading by another reader");Yn(this,t),this._readRequests=new D;}get closed(){return Ee(this)?this._closedPromise:b(Dt("closed"))}cancel(t=void 0){return Ee(this)?this._ownerReadableStream===void 0?b(Lt("cancel")):Wr(this,t):b(Dt("cancel"))}read(){if(!Ee(this))return b(Dt("read"));if(this._ownerReadableStream===void 0)return b(Lt("read from"));let t,r;const s=A((c,d)=>{t=c,r=d;});return _t(this,{_chunkSteps:n$1(c=>t({value:c,done:!1}),"_chunkSteps"),_closeSteps:n$1(()=>t({value:void 0,done:!0}),"_closeSteps"),_errorSteps:n$1(c=>r(c),"_errorSteps")}),s}releaseLock(){if(!Ee(this))throw Dt("releaseLock");this._ownerReadableStream!==void 0&&Gi(this);}};n$1(mn,"ReadableStreamDefaultReader");let fe=mn;Object.defineProperties(fe.prototype,{cancel:{enumerable:!0},read:{enumerable:!0},releaseLock:{enumerable:!0},closed:{enumerable:!0}}),h(fe.prototype.cancel,"cancel"),h(fe.prototype.read,"read"),h(fe.prototype.releaseLock,"releaseLock"),typeof Symbol.toStringTag=="symbol"&&Object.defineProperty(fe.prototype,Symbol.toStringTag,{value:"ReadableStreamDefaultReader",configurable:!0});function Ee(e){return !l(e)||!Object.prototype.hasOwnProperty.call(e,"_readRequests")?!1:e instanceof fe}n$1(Ee,"IsReadableStreamDefaultReader");function _t(e,t){const r=e._ownerReadableStream;r._disturbed=!0,r._state==="closed"?t._closeSteps():r._state==="errored"?t._errorSteps(r._storedError):r._readableStreamController[Br](t);}n$1(_t,"ReadableStreamDefaultReaderRead");function Gi(e){_e(e);const t=new TypeError("Reader was released");ro(e,t);}n$1(Gi,"ReadableStreamDefaultReaderRelease");function ro(e,t){const r=e._readRequests;e._readRequests=new D,r.forEach(s=>{s._errorSteps(t);});}n$1(ro,"ReadableStreamDefaultReaderErrorReadRequests");function Dt(e){return new TypeError(`ReadableStreamDefaultReader.prototype.${e} can only be used on a ReadableStreamDefaultReader`)}n$1(Dt,"defaultReaderBrandCheckException");const Zi=Object.getPrototypeOf(Object.getPrototypeOf(async function*(){}).prototype),yn=class yn{constructor(t,r){this._ongoingPromise=void 0,this._isFinished=!1,this._reader=t,this._preventCancel=r;}next(){const t=n$1(()=>this._nextSteps(),"nextSteps");return this._ongoingPromise=this._ongoingPromise?F(this._ongoingPromise,t,t):t(),this._ongoingPromise}return(t){const r=n$1(()=>this._returnSteps(t),"returnSteps");return this._ongoingPromise?F(this._ongoingPromise,r,r):r()}_nextSteps(){if(this._isFinished)return Promise.resolve({value:void 0,done:!0});const t=this._reader;let r,s;const u=A((d,m)=>{r=d,s=m;});return _t(t,{_chunkSteps:n$1(d=>{this._ongoingPromise=void 0,ge(()=>r({value:d,done:!1}));},"_chunkSteps"),_closeSteps:n$1(()=>{this._ongoingPromise=void 0,this._isFinished=!0,_e(t),r({value:void 0,done:!0});},"_closeSteps"),_errorSteps:n$1(d=>{this._ongoingPromise=void 0,this._isFinished=!0,_e(t),s(d);},"_errorSteps")}),u}_returnSteps(t){if(this._isFinished)return Promise.resolve({value:t,done:!0});this._isFinished=!0;const r=this._reader;if(!this._preventCancel){const s=Wr(r,t);return _e(r),F(s,()=>({value:t,done:!0}))}return _e(r),T({value:t,done:!0})}};n$1(yn,"ReadableStreamAsyncIteratorImpl");let Mt=yn;const no={next(){return oo(this)?this._asyncIteratorImpl.next():b(io("next"))},return(e){return oo(this)?this._asyncIteratorImpl.return(e):b(io("return"))}};Object.setPrototypeOf(no,Zi);function Ki(e,t){const r=Qe(e),s=new Mt(r,t),u=Object.create(no);return u._asyncIteratorImpl=s,u}n$1(Ki,"AcquireReadableStreamAsyncIterator");function oo(e){if(!l(e)||!Object.prototype.hasOwnProperty.call(e,"_asyncIteratorImpl"))return !1;try{return e._asyncIteratorImpl instanceof Mt}catch{return !1}}n$1(oo,"IsReadableStreamAsyncIterator");function io(e){return new TypeError(`ReadableStreamAsyncIterator.${e} can only be used on a ReadableSteamAsyncIterator`)}n$1(io,"streamAsyncIteratorBrandCheckException");const ao=Number.isNaN||function(e){return e!==e};var $r,Dr,Mr;function St(e){return e.slice()}n$1(St,"CreateArrayFromList");function so(e,t,r,s,u){new Uint8Array(e).set(new Uint8Array(r,s,u),t);}n$1(so,"CopyDataBlockBytes");let we=n$1(e=>(typeof e.transfer=="function"?we=n$1(t=>t.transfer(),"TransferArrayBuffer"):typeof structuredClone=="function"?we=n$1(t=>structuredClone(t,{transfer:[t]}),"TransferArrayBuffer"):we=n$1(t=>t,"TransferArrayBuffer"),we(e)),"TransferArrayBuffer"),Ae=n$1(e=>(typeof e.detached=="boolean"?Ae=n$1(t=>t.detached,"IsDetachedBuffer"):Ae=n$1(t=>t.byteLength===0,"IsDetachedBuffer"),Ae(e)),"IsDetachedBuffer");function lo(e,t,r){if(e.slice)return e.slice(t,r);const s=r-t,u=new ArrayBuffer(s);return so(u,0,e,t,s),u}n$1(lo,"ArrayBufferSlice");function Ut(e,t){const r=e[t];if(r!=null){if(typeof r!="function")throw new TypeError(`${String(t)} is not a function`);return r}}n$1(Ut,"GetMethod");function Ji(e){const t={[Symbol.iterator]:()=>e.iterator},r=async function*(){return yield*t}(),s=r.next;return {iterator:r,nextMethod:s,done:!1}}n$1(Ji,"CreateAsyncFromSyncIterator");const Ur=(Mr=($r=Symbol.asyncIterator)!==null&&$r!==void 0?$r:(Dr=Symbol.for)===null||Dr===void 0?void 0:Dr.call(Symbol,"Symbol.asyncIterator"))!==null&&Mr!==void 0?Mr:"@@asyncIterator";function uo(e,t="sync",r){if(r===void 0)if(t==="async"){if(r=Ut(e,Ur),r===void 0){const c=Ut(e,Symbol.iterator),d=uo(e,"sync",c);return Ji(d)}}else r=Ut(e,Symbol.iterator);if(r===void 0)throw new TypeError("The object is not iterable");const s=z(r,e,[]);if(!l(s))throw new TypeError("The iterator method must return an object");const u=s.next;return {iterator:s,nextMethod:u,done:!1}}n$1(uo,"GetIterator");function Xi(e){const t=z(e.nextMethod,e.iterator,[]);if(!l(t))throw new TypeError("The iterator.next() method must return an object");return t}n$1(Xi,"IteratorNext");function ea(e){return !!e.done}n$1(ea,"IteratorComplete");function ta(e){return e.value}n$1(ta,"IteratorValue");function ra(e){return !(typeof e!="number"||ao(e)||e<0)}n$1(ra,"IsNonNegativeNumber");function fo(e){const t=lo(e.buffer,e.byteOffset,e.byteOffset+e.byteLength);return new Uint8Array(t)}n$1(fo,"CloneAsUint8Array");function xr(e){const t=e._queue.shift();return e._queueTotalSize-=t.size,e._queueTotalSize<0&&(e._queueTotalSize=0),t.value}n$1(xr,"DequeueValue");function Nr(e,t,r){if(!ra(r)||r===1/0)throw new RangeError("Size must be a finite, non-NaN, non-negative number.");e._queue.push({value:t,size:r}),e._queueTotalSize+=r;}n$1(Nr,"EnqueueValueWithSize");function na(e){return e._queue.peek().value}n$1(na,"PeekQueueValue");function Be(e){e._queue=new D,e._queueTotalSize=0;}n$1(Be,"ResetQueue");function co(e){return e===DataView}n$1(co,"isDataViewConstructor");function oa(e){return co(e.constructor)}n$1(oa,"isDataView");function ia(e){return co(e)?1:e.BYTES_PER_ELEMENT}n$1(ia,"arrayBufferViewElementSize");const gn=class gn{constructor(){throw new TypeError("Illegal constructor")}get view(){if(!Hr(this))throw Zr("view");return this._view}respond(t){if(!Hr(this))throw Zr("respond");if(Se(t,1,"respond"),t=Fr(t,"First parameter"),this._associatedReadableByteStreamController===void 0)throw new TypeError("This BYOB request has been invalidated");if(Ae(this._view.buffer))throw new TypeError("The BYOB request's buffer has been detached and so cannot be used as a response");Vt(this._associatedReadableByteStreamController,t);}respondWithNewView(t){if(!Hr(this))throw Zr("respondWithNewView");if(Se(t,1,"respondWithNewView"),!ArrayBuffer.isView(t))throw new TypeError("You can only respond with array buffer views");if(this._associatedReadableByteStreamController===void 0)throw new TypeError("This BYOB request has been invalidated");if(Ae(t.buffer))throw new TypeError("The given view's buffer has been detached and so cannot be used as a response");Qt(this._associatedReadableByteStreamController,t);}};n$1(gn,"ReadableStreamBYOBRequest");let Re=gn;Object.defineProperties(Re.prototype,{respond:{enumerable:!0},respondWithNewView:{enumerable:!0},view:{enumerable:!0}}),h(Re.prototype.respond,"respond"),h(Re.prototype.respondWithNewView,"respondWithNewView"),typeof Symbol.toStringTag=="symbol"&&Object.defineProperty(Re.prototype,Symbol.toStringTag,{value:"ReadableStreamBYOBRequest",configurable:!0});const _n=class _n{constructor(){throw new TypeError("Illegal constructor")}get byobRequest(){if(!Ie(this))throw Rt("byobRequest");return Gr(this)}get desiredSize(){if(!Ie(this))throw Rt("desiredSize");return Ro(this)}close(){if(!Ie(this))throw Rt("close");if(this._closeRequested)throw new TypeError("The stream has already been closed; do not close it again!");const t=this._controlledReadableByteStream._state;if(t!=="readable")throw new TypeError(`The stream (in ${t} state) is not in the readable state and cannot be closed`);wt(this);}enqueue(t){if(!Ie(this))throw Rt("enqueue");if(Se(t,1,"enqueue"),!ArrayBuffer.isView(t))throw new TypeError("chunk must be an array buffer view");if(t.byteLength===0)throw new TypeError("chunk must have non-zero byteLength");if(t.buffer.byteLength===0)throw new TypeError("chunk's buffer must have non-zero byteLength");if(this._closeRequested)throw new TypeError("stream is closed or draining");const r=this._controlledReadableByteStream._state;if(r!=="readable")throw new TypeError(`The stream (in ${r} state) is not in the readable state and cannot be enqueued to`);Ht(this,t);}error(t=void 0){if(!Ie(this))throw Rt("error");K(this,t);}[Ar](t){ho(this),Be(this);const r=this._cancelAlgorithm(t);return Nt(this),r}[Br](t){const r=this._controlledReadableByteStream;if(this._queueTotalSize>0){wo(this,t);return}const s=this._autoAllocateChunkSize;if(s!==void 0){let u;try{u=new ArrayBuffer(s);}catch(d){t._errorSteps(d);return}const c={buffer:u,bufferByteLength:s,byteOffset:0,byteLength:s,bytesFilled:0,minimumFill:1,elementSize:1,viewConstructor:Uint8Array,readerType:"default"};this._pendingPullIntos.push(c);}eo(r,t),Fe(this);}[kr](){if(this._pendingPullIntos.length>0){const t=this._pendingPullIntos.peek();t.readerType="none",this._pendingPullIntos=new D,this._pendingPullIntos.push(t);}}};n$1(_n,"ReadableByteStreamController");let te=_n;Object.defineProperties(te.prototype,{close:{enumerable:!0},enqueue:{enumerable:!0},error:{enumerable:!0},byobRequest:{enumerable:!0},desiredSize:{enumerable:!0}}),h(te.prototype.close,"close"),h(te.prototype.enqueue,"enqueue"),h(te.prototype.error,"error"),typeof Symbol.toStringTag=="symbol"&&Object.defineProperty(te.prototype,Symbol.toStringTag,{value:"ReadableByteStreamController",configurable:!0});function Ie(e){return !l(e)||!Object.prototype.hasOwnProperty.call(e,"_controlledReadableByteStream")?!1:e instanceof te}n$1(Ie,"IsReadableByteStreamController");function Hr(e){return !l(e)||!Object.prototype.hasOwnProperty.call(e,"_associatedReadableByteStreamController")?!1:e instanceof Re}n$1(Hr,"IsReadableStreamBYOBRequest");function Fe(e){if(!fa(e))return;if(e._pulling){e._pullAgain=!0;return}e._pulling=!0;const r=e._pullAlgorithm();g(r,()=>(e._pulling=!1,e._pullAgain&&(e._pullAgain=!1,Fe(e)),null),s=>(K(e,s),null));}n$1(Fe,"ReadableByteStreamControllerCallPullIfNeeded");function ho(e){Qr(e),e._pendingPullIntos=new D;}n$1(ho,"ReadableByteStreamControllerClearPendingPullIntos");function Vr(e,t){let r=!1;e._state==="closed"&&(r=!0);const s=po(t);t.readerType==="default"?Lr(e,s,r):ma(e,s,r);}n$1(Vr,"ReadableByteStreamControllerCommitPullIntoDescriptor");function po(e){const t=e.bytesFilled,r=e.elementSize;return new e.viewConstructor(e.buffer,e.byteOffset,t/r)}n$1(po,"ReadableByteStreamControllerConvertPullIntoDescriptor");function xt(e,t,r,s){e._queue.push({buffer:t,byteOffset:r,byteLength:s}),e._queueTotalSize+=s;}n$1(xt,"ReadableByteStreamControllerEnqueueChunkToQueue");function bo(e,t,r,s){let u;try{u=lo(t,r,r+s);}catch(c){throw K(e,c),c}xt(e,u,0,s);}n$1(bo,"ReadableByteStreamControllerEnqueueClonedChunkToQueue");function mo(e,t){t.bytesFilled>0&&bo(e,t.buffer,t.byteOffset,t.bytesFilled),Ye(e);}n$1(mo,"ReadableByteStreamControllerEnqueueDetachedPullIntoToQueue");function yo(e,t){const r=Math.min(e._queueTotalSize,t.byteLength-t.bytesFilled),s=t.bytesFilled+r;let u=r,c=!1;const d=s%t.elementSize,m=s-d;m>=t.minimumFill&&(u=m-t.bytesFilled,c=!0);const R=e._queue;for(;u>0;){const y=R.peek(),C=Math.min(u,y.byteLength),P=t.byteOffset+t.bytesFilled;so(t.buffer,P,y.buffer,y.byteOffset,C),y.byteLength===C?R.shift():(y.byteOffset+=C,y.byteLength-=C),e._queueTotalSize-=C,go(e,C,t),u-=C;}return c}n$1(yo,"ReadableByteStreamControllerFillPullIntoDescriptorFromQueue");function go(e,t,r){r.bytesFilled+=t;}n$1(go,"ReadableByteStreamControllerFillHeadPullIntoDescriptor");function _o(e){e._queueTotalSize===0&&e._closeRequested?(Nt(e),At(e._controlledReadableByteStream)):Fe(e);}n$1(_o,"ReadableByteStreamControllerHandleQueueDrain");function Qr(e){e._byobRequest!==null&&(e._byobRequest._associatedReadableByteStreamController=void 0,e._byobRequest._view=null,e._byobRequest=null);}n$1(Qr,"ReadableByteStreamControllerInvalidateBYOBRequest");function Yr(e){for(;e._pendingPullIntos.length>0;){if(e._queueTotalSize===0)return;const t=e._pendingPullIntos.peek();yo(e,t)&&(Ye(e),Vr(e._controlledReadableByteStream,t));}}n$1(Yr,"ReadableByteStreamControllerProcessPullIntoDescriptorsUsingQueue");function aa(e){const t=e._controlledReadableByteStream._reader;for(;t._readRequests.length>0;){if(e._queueTotalSize===0)return;const r=t._readRequests.shift();wo(e,r);}}n$1(aa,"ReadableByteStreamControllerProcessReadRequestsUsingQueue");function sa(e,t,r,s){const u=e._controlledReadableByteStream,c=t.constructor,d=ia(c),{byteOffset:m,byteLength:R}=t,y=r*d;let C;try{C=we(t.buffer);}catch(B){s._errorSteps(B);return}const P={buffer:C,bufferByteLength:C.byteLength,byteOffset:m,byteLength:R,bytesFilled:0,minimumFill:y,elementSize:d,viewConstructor:c,readerType:"byob"};if(e._pendingPullIntos.length>0){e._pendingPullIntos.push(P),Po(u,s);return}if(u._state==="closed"){const B=new c(P.buffer,P.byteOffset,0);s._closeSteps(B);return}if(e._queueTotalSize>0){if(yo(e,P)){const B=po(P);_o(e),s._chunkSteps(B);return}if(e._closeRequested){const B=new TypeError("Insufficient bytes to fill elements in the given buffer");K(e,B),s._errorSteps(B);return}}e._pendingPullIntos.push(P),Po(u,s),Fe(e);}n$1(sa,"ReadableByteStreamControllerPullInto");function la(e,t){t.readerType==="none"&&Ye(e);const r=e._controlledReadableByteStream;if(Kr(r))for(;vo(r)>0;){const s=Ye(e);Vr(r,s);}}n$1(la,"ReadableByteStreamControllerRespondInClosedState");function ua(e,t,r){if(go(e,t,r),r.readerType==="none"){mo(e,r),Yr(e);return}if(r.bytesFilled<r.minimumFill)return;Ye(e);const s=r.bytesFilled%r.elementSize;if(s>0){const u=r.byteOffset+r.bytesFilled;bo(e,r.buffer,u-s,s);}r.bytesFilled-=s,Vr(e._controlledReadableByteStream,r),Yr(e);}n$1(ua,"ReadableByteStreamControllerRespondInReadableState");function So(e,t){const r=e._pendingPullIntos.peek();Qr(e),e._controlledReadableByteStream._state==="closed"?la(e,r):ua(e,t,r),Fe(e);}n$1(So,"ReadableByteStreamControllerRespondInternal");function Ye(e){return e._pendingPullIntos.shift()}n$1(Ye,"ReadableByteStreamControllerShiftPendingPullInto");function fa(e){const t=e._controlledReadableByteStream;return t._state!=="readable"||e._closeRequested||!e._started?!1:!!(to(t)&&$t(t)>0||Kr(t)&&vo(t)>0||Ro(e)>0)}n$1(fa,"ReadableByteStreamControllerShouldCallPull");function Nt(e){e._pullAlgorithm=void 0,e._cancelAlgorithm=void 0;}n$1(Nt,"ReadableByteStreamControllerClearAlgorithms");function wt(e){const t=e._controlledReadableByteStream;if(!(e._closeRequested||t._state!=="readable")){if(e._queueTotalSize>0){e._closeRequested=!0;return}if(e._pendingPullIntos.length>0){const r=e._pendingPullIntos.peek();if(r.bytesFilled%r.elementSize!==0){const s=new TypeError("Insufficient bytes to fill elements in the given buffer");throw K(e,s),s}}Nt(e),At(t);}}n$1(wt,"ReadableByteStreamControllerClose");function Ht(e,t){const r=e._controlledReadableByteStream;if(e._closeRequested||r._state!=="readable")return;const{buffer:s,byteOffset:u,byteLength:c}=t;if(Ae(s))throw new TypeError("chunk's buffer is detached and so cannot be enqueued");const d=we(s);if(e._pendingPullIntos.length>0){const m=e._pendingPullIntos.peek();if(Ae(m.buffer))throw new TypeError("The BYOB request's buffer has been detached and so cannot be filled with an enqueued chunk");Qr(e),m.buffer=we(m.buffer),m.readerType==="none"&&mo(e,m);}if(to(r))if(aa(e),$t(r)===0)xt(e,d,u,c);else {e._pendingPullIntos.length>0&&Ye(e);const m=new Uint8Array(d,u,c);Lr(r,m,!1);}else Kr(r)?(xt(e,d,u,c),Yr(e)):xt(e,d,u,c);Fe(e);}n$1(Ht,"ReadableByteStreamControllerEnqueue");function K(e,t){const r=e._controlledReadableByteStream;r._state==="readable"&&(ho(e),Be(e),Nt(e),Zo(r,t));}n$1(K,"ReadableByteStreamControllerError");function wo(e,t){const r=e._queue.shift();e._queueTotalSize-=r.byteLength,_o(e);const s=new Uint8Array(r.buffer,r.byteOffset,r.byteLength);t._chunkSteps(s);}n$1(wo,"ReadableByteStreamControllerFillReadRequestFromQueue");function Gr(e){if(e._byobRequest===null&&e._pendingPullIntos.length>0){const t=e._pendingPullIntos.peek(),r=new Uint8Array(t.buffer,t.byteOffset+t.bytesFilled,t.byteLength-t.bytesFilled),s=Object.create(Re.prototype);da(s,e,r),e._byobRequest=s;}return e._byobRequest}n$1(Gr,"ReadableByteStreamControllerGetBYOBRequest");function Ro(e){const t=e._controlledReadableByteStream._state;return t==="errored"?null:t==="closed"?0:e._strategyHWM-e._queueTotalSize}n$1(Ro,"ReadableByteStreamControllerGetDesiredSize");function Vt(e,t){const r=e._pendingPullIntos.peek();if(e._controlledReadableByteStream._state==="closed"){if(t!==0)throw new TypeError("bytesWritten must be 0 when calling respond() on a closed stream")}else {if(t===0)throw new TypeError("bytesWritten must be greater than 0 when calling respond() on a readable stream");if(r.bytesFilled+t>r.byteLength)throw new RangeError("bytesWritten out of range")}r.buffer=we(r.buffer),So(e,t);}n$1(Vt,"ReadableByteStreamControllerRespond");function Qt(e,t){const r=e._pendingPullIntos.peek();if(e._controlledReadableByteStream._state==="closed"){if(t.byteLength!==0)throw new TypeError("The view's length must be 0 when calling respondWithNewView() on a closed stream")}else if(t.byteLength===0)throw new TypeError("The view's length must be greater than 0 when calling respondWithNewView() on a readable stream");if(r.byteOffset+r.bytesFilled!==t.byteOffset)throw new RangeError("The region specified by view does not match byobRequest");if(r.bufferByteLength!==t.buffer.byteLength)throw new RangeError("The buffer of view has different capacity than byobRequest");if(r.bytesFilled+t.byteLength>r.byteLength)throw new RangeError("The region specified by view is larger than byobRequest");const u=t.byteLength;r.buffer=we(t.buffer),So(e,u);}n$1(Qt,"ReadableByteStreamControllerRespondWithNewView");function To(e,t,r,s,u,c,d){t._controlledReadableByteStream=e,t._pullAgain=!1,t._pulling=!1,t._byobRequest=null,t._queue=t._queueTotalSize=void 0,Be(t),t._closeRequested=!1,t._started=!1,t._strategyHWM=c,t._pullAlgorithm=s,t._cancelAlgorithm=u,t._autoAllocateChunkSize=d,t._pendingPullIntos=new D,e._readableStreamController=t;const m=r();g(T(m),()=>(t._started=!0,Fe(t),null),R=>(K(t,R),null));}n$1(To,"SetUpReadableByteStreamController");function ca(e,t,r){const s=Object.create(te.prototype);let u,c,d;t.start!==void 0?u=n$1(()=>t.start(s),"startAlgorithm"):u=n$1(()=>{},"startAlgorithm"),t.pull!==void 0?c=n$1(()=>t.pull(s),"pullAlgorithm"):c=n$1(()=>T(void 0),"pullAlgorithm"),t.cancel!==void 0?d=n$1(R=>t.cancel(R),"cancelAlgorithm"):d=n$1(()=>T(void 0),"cancelAlgorithm");const m=t.autoAllocateChunkSize;if(m===0)throw new TypeError("autoAllocateChunkSize must be greater than 0");To(e,s,u,c,d,r,m);}n$1(ca,"SetUpReadableByteStreamControllerFromUnderlyingSource");function da(e,t,r){e._associatedReadableByteStreamController=t,e._view=r;}n$1(da,"SetUpReadableStreamBYOBRequest");function Zr(e){return new TypeError(`ReadableStreamBYOBRequest.prototype.${e} can only be used on a ReadableStreamBYOBRequest`)}n$1(Zr,"byobRequestBrandCheckException");function Rt(e){return new TypeError(`ReadableByteStreamController.prototype.${e} can only be used on a ReadableByteStreamController`)}n$1(Rt,"byteStreamControllerBrandCheckException");function ha(e,t){ue(e,t);const r=e?.mode;return {mode:r===void 0?void 0:pa(r,`${t} has member 'mode' that`)}}n$1(ha,"convertReaderOptions");function pa(e,t){if(e=`${e}`,e!=="byob")throw new TypeError(`${t} '${e}' is not a valid enumeration value for ReadableStreamReaderMode`);return e}n$1(pa,"convertReadableStreamReaderMode");function ba(e,t){var r;ue(e,t);const s=(r=e?.min)!==null&&r!==void 0?r:1;return {min:Fr(s,`${t} has member 'min' that`)}}n$1(ba,"convertByobReadOptions");function Co(e){return new ce(e)}n$1(Co,"AcquireReadableStreamBYOBReader");function Po(e,t){e._reader._readIntoRequests.push(t);}n$1(Po,"ReadableStreamAddReadIntoRequest");function ma(e,t,r){const u=e._reader._readIntoRequests.shift();r?u._closeSteps(t):u._chunkSteps(t);}n$1(ma,"ReadableStreamFulfillReadIntoRequest");function vo(e){return e._reader._readIntoRequests.length}n$1(vo,"ReadableStreamGetNumReadIntoRequests");function Kr(e){const t=e._reader;return !(t===void 0||!je(t))}n$1(Kr,"ReadableStreamHasBYOBReader");const Sn=class Sn{constructor(t){if(Se(t,1,"ReadableStreamBYOBReader"),jr(t,"First parameter"),qe(t))throw new TypeError("This stream has already been locked for exclusive reading by another reader");if(!Ie(t._readableStreamController))throw new TypeError("Cannot construct a ReadableStreamBYOBReader for a stream not constructed with a byte source");Yn(this,t),this._readIntoRequests=new D;}get closed(){return je(this)?this._closedPromise:b(Yt("closed"))}cancel(t=void 0){return je(this)?this._ownerReadableStream===void 0?b(Lt("cancel")):Wr(this,t):b(Yt("cancel"))}read(t,r={}){if(!je(this))return b(Yt("read"));if(!ArrayBuffer.isView(t))return b(new TypeError("view must be an array buffer view"));if(t.byteLength===0)return b(new TypeError("view must have non-zero byteLength"));if(t.buffer.byteLength===0)return b(new TypeError("view's buffer must have non-zero byteLength"));if(Ae(t.buffer))return b(new TypeError("view's buffer has been detached"));let s;try{s=ba(r,"options");}catch(y){return b(y)}const u=s.min;if(u===0)return b(new TypeError("options.min must be greater than 0"));if(oa(t)){if(u>t.byteLength)return b(new RangeError("options.min must be less than or equal to view's byteLength"))}else if(u>t.length)return b(new RangeError("options.min must be less than or equal to view's length"));if(this._ownerReadableStream===void 0)return b(Lt("read from"));let c,d;const m=A((y,C)=>{c=y,d=C;});return Eo(this,t,u,{_chunkSteps:n$1(y=>c({value:y,done:!1}),"_chunkSteps"),_closeSteps:n$1(y=>c({value:y,done:!0}),"_closeSteps"),_errorSteps:n$1(y=>d(y),"_errorSteps")}),m}releaseLock(){if(!je(this))throw Yt("releaseLock");this._ownerReadableStream!==void 0&&ya(this);}};n$1(Sn,"ReadableStreamBYOBReader");let ce=Sn;Object.defineProperties(ce.prototype,{cancel:{enumerable:!0},read:{enumerable:!0},releaseLock:{enumerable:!0},closed:{enumerable:!0}}),h(ce.prototype.cancel,"cancel"),h(ce.prototype.read,"read"),h(ce.prototype.releaseLock,"releaseLock"),typeof Symbol.toStringTag=="symbol"&&Object.defineProperty(ce.prototype,Symbol.toStringTag,{value:"ReadableStreamBYOBReader",configurable:!0});function je(e){return !l(e)||!Object.prototype.hasOwnProperty.call(e,"_readIntoRequests")?!1:e instanceof ce}n$1(je,"IsReadableStreamBYOBReader");function Eo(e,t,r,s){const u=e._ownerReadableStream;u._disturbed=!0,u._state==="errored"?s._errorSteps(u._storedError):sa(u._readableStreamController,t,r,s);}n$1(Eo,"ReadableStreamBYOBReaderRead");function ya(e){_e(e);const t=new TypeError("Reader was released");Ao(e,t);}n$1(ya,"ReadableStreamBYOBReaderRelease");function Ao(e,t){const r=e._readIntoRequests;e._readIntoRequests=new D,r.forEach(s=>{s._errorSteps(t);});}n$1(Ao,"ReadableStreamBYOBReaderErrorReadIntoRequests");function Yt(e){return new TypeError(`ReadableStreamBYOBReader.prototype.${e} can only be used on a ReadableStreamBYOBReader`)}n$1(Yt,"byobReaderBrandCheckException");function Tt(e,t){const{highWaterMark:r}=e;if(r===void 0)return t;if(ao(r)||r<0)throw new RangeError("Invalid highWaterMark");return r}n$1(Tt,"ExtractHighWaterMark");function Gt(e){const{size:t}=e;return t||(()=>1)}n$1(Gt,"ExtractSizeAlgorithm");function Zt(e,t){ue(e,t);const r=e?.highWaterMark,s=e?.size;return {highWaterMark:r===void 0?void 0:Ir(r),size:s===void 0?void 0:ga(s,`${t} has member 'size' that`)}}n$1(Zt,"convertQueuingStrategy");function ga(e,t){return Z(e,t),r=>Ir(e(r))}n$1(ga,"convertQueuingStrategySize");function _a(e,t){ue(e,t);const r=e?.abort,s=e?.close,u=e?.start,c=e?.type,d=e?.write;return {abort:r===void 0?void 0:Sa(r,e,`${t} has member 'abort' that`),close:s===void 0?void 0:wa(s,e,`${t} has member 'close' that`),start:u===void 0?void 0:Ra(u,e,`${t} has member 'start' that`),write:d===void 0?void 0:Ta(d,e,`${t} has member 'write' that`),type:c}}n$1(_a,"convertUnderlyingSink");function Sa(e,t,r){return Z(e,r),s=>j(e,t,[s])}n$1(Sa,"convertUnderlyingSinkAbortCallback");function wa(e,t,r){return Z(e,r),()=>j(e,t,[])}n$1(wa,"convertUnderlyingSinkCloseCallback");function Ra(e,t,r){return Z(e,r),s=>z(e,t,[s])}n$1(Ra,"convertUnderlyingSinkStartCallback");function Ta(e,t,r){return Z(e,r),(s,u)=>j(e,t,[s,u])}n$1(Ta,"convertUnderlyingSinkWriteCallback");function Bo(e,t){if(!Ge(e))throw new TypeError(`${t} is not a WritableStream.`)}n$1(Bo,"assertWritableStream");function Ca(e){if(typeof e!="object"||e===null)return !1;try{return typeof e.aborted=="boolean"}catch{return !1}}n$1(Ca,"isAbortSignal");const Pa=typeof AbortController=="function";function va(){if(Pa)return new AbortController}n$1(va,"createAbortController");const wn=class wn{constructor(t={},r={}){t===void 0?t=null:Jn(t,"First parameter");const s=Zt(r,"Second parameter"),u=_a(t,"First parameter");if(Wo(this),u.type!==void 0)throw new RangeError("Invalid type is specified");const d=Gt(s),m=Tt(s,1);Da(this,u,m,d);}get locked(){if(!Ge(this))throw tr("locked");return Ze(this)}abort(t=void 0){return Ge(this)?Ze(this)?b(new TypeError("Cannot abort a stream that already has a writer")):Kt(this,t):b(tr("abort"))}close(){return Ge(this)?Ze(this)?b(new TypeError("Cannot close a stream that already has a writer")):he(this)?b(new TypeError("Cannot close an already-closing stream")):qo(this):b(tr("close"))}getWriter(){if(!Ge(this))throw tr("getWriter");return ko(this)}};n$1(wn,"WritableStream");let de=wn;Object.defineProperties(de.prototype,{abort:{enumerable:!0},close:{enumerable:!0},getWriter:{enumerable:!0},locked:{enumerable:!0}}),h(de.prototype.abort,"abort"),h(de.prototype.close,"close"),h(de.prototype.getWriter,"getWriter"),typeof Symbol.toStringTag=="symbol"&&Object.defineProperty(de.prototype,Symbol.toStringTag,{value:"WritableStream",configurable:!0});function ko(e){return new re(e)}n$1(ko,"AcquireWritableStreamDefaultWriter");function Ea(e,t,r,s,u=1,c=()=>1){const d=Object.create(de.prototype);Wo(d);const m=Object.create(ke.prototype);return Lo(d,m,e,t,r,s,u,c),d}n$1(Ea,"CreateWritableStream");function Wo(e){e._state="writable",e._storedError=void 0,e._writer=void 0,e._writableStreamController=void 0,e._writeRequests=new D,e._inFlightWriteRequest=void 0,e._closeRequest=void 0,e._inFlightCloseRequest=void 0,e._pendingAbortRequest=void 0,e._backpressure=!1;}n$1(Wo,"InitializeWritableStream");function Ge(e){return !l(e)||!Object.prototype.hasOwnProperty.call(e,"_writableStreamController")?!1:e instanceof de}n$1(Ge,"IsWritableStream");function Ze(e){return e._writer!==void 0}n$1(Ze,"IsWritableStreamLocked");function Kt(e,t){var r;if(e._state==="closed"||e._state==="errored")return T(void 0);e._writableStreamController._abortReason=t,(r=e._writableStreamController._abortController)===null||r===void 0||r.abort(t);const s=e._state;if(s==="closed"||s==="errored")return T(void 0);if(e._pendingAbortRequest!==void 0)return e._pendingAbortRequest._promise;let u=!1;s==="erroring"&&(u=!0,t=void 0);const c=A((d,m)=>{e._pendingAbortRequest={_promise:void 0,_resolve:d,_reject:m,_reason:t,_wasAlreadyErroring:u};});return e._pendingAbortRequest._promise=c,u||Xr(e,t),c}n$1(Kt,"WritableStreamAbort");function qo(e){const t=e._state;if(t==="closed"||t==="errored")return b(new TypeError(`The stream (in ${t} state) is not in the writable state and cannot be closed`));const r=A((u,c)=>{const d={_resolve:u,_reject:c};e._closeRequest=d;}),s=e._writer;return s!==void 0&&e._backpressure&&t==="writable"&&ln(s),Ma(e._writableStreamController),r}n$1(qo,"WritableStreamClose");function Aa(e){return A((r,s)=>{const u={_resolve:r,_reject:s};e._writeRequests.push(u);})}n$1(Aa,"WritableStreamAddWriteRequest");function Jr(e,t){if(e._state==="writable"){Xr(e,t);return}en(e);}n$1(Jr,"WritableStreamDealWithRejection");function Xr(e,t){const r=e._writableStreamController;e._state="erroring",e._storedError=t;const s=e._writer;s!==void 0&&zo(s,t),!Oa(e)&&r._started&&en(e);}n$1(Xr,"WritableStreamStartErroring");function en(e){e._state="errored",e._writableStreamController[Qn]();const t=e._storedError;if(e._writeRequests.forEach(u=>{u._reject(t);}),e._writeRequests=new D,e._pendingAbortRequest===void 0){Jt(e);return}const r=e._pendingAbortRequest;if(e._pendingAbortRequest=void 0,r._wasAlreadyErroring){r._reject(t),Jt(e);return}const s=e._writableStreamController[jt](r._reason);g(s,()=>(r._resolve(),Jt(e),null),u=>(r._reject(u),Jt(e),null));}n$1(en,"WritableStreamFinishErroring");function Ba(e){e._inFlightWriteRequest._resolve(void 0),e._inFlightWriteRequest=void 0;}n$1(Ba,"WritableStreamFinishInFlightWrite");function ka(e,t){e._inFlightWriteRequest._reject(t),e._inFlightWriteRequest=void 0,Jr(e,t);}n$1(ka,"WritableStreamFinishInFlightWriteWithError");function Wa(e){e._inFlightCloseRequest._resolve(void 0),e._inFlightCloseRequest=void 0,e._state==="erroring"&&(e._storedError=void 0,e._pendingAbortRequest!==void 0&&(e._pendingAbortRequest._resolve(),e._pendingAbortRequest=void 0)),e._state="closed";const r=e._writer;r!==void 0&&Uo(r);}n$1(Wa,"WritableStreamFinishInFlightClose");function qa(e,t){e._inFlightCloseRequest._reject(t),e._inFlightCloseRequest=void 0,e._pendingAbortRequest!==void 0&&(e._pendingAbortRequest._reject(t),e._pendingAbortRequest=void 0),Jr(e,t);}n$1(qa,"WritableStreamFinishInFlightCloseWithError");function he(e){return !(e._closeRequest===void 0&&e._inFlightCloseRequest===void 0)}n$1(he,"WritableStreamCloseQueuedOrInFlight");function Oa(e){return !(e._inFlightWriteRequest===void 0&&e._inFlightCloseRequest===void 0)}n$1(Oa,"WritableStreamHasOperationMarkedInFlight");function za(e){e._inFlightCloseRequest=e._closeRequest,e._closeRequest=void 0;}n$1(za,"WritableStreamMarkCloseRequestInFlight");function Ia(e){e._inFlightWriteRequest=e._writeRequests.shift();}n$1(Ia,"WritableStreamMarkFirstWriteRequestInFlight");function Jt(e){e._closeRequest!==void 0&&(e._closeRequest._reject(e._storedError),e._closeRequest=void 0);const t=e._writer;t!==void 0&&an(t,e._storedError);}n$1(Jt,"WritableStreamRejectCloseAndClosedPromiseIfNeeded");function tn(e,t){const r=e._writer;r!==void 0&&t!==e._backpressure&&(t?Ya(r):ln(r)),e._backpressure=t;}n$1(tn,"WritableStreamUpdateBackpressure");const Rn=class Rn{constructor(t){if(Se(t,1,"WritableStreamDefaultWriter"),Bo(t,"First parameter"),Ze(t))throw new TypeError("This stream has already been locked for exclusive writing by another writer");this._ownerWritableStream=t,t._writer=this;const r=t._state;if(r==="writable")!he(t)&&t._backpressure?nr(this):xo(this),rr(this);else if(r==="erroring")sn(this,t._storedError),rr(this);else if(r==="closed")xo(this),Va(this);else {const s=t._storedError;sn(this,s),Mo(this,s);}}get closed(){return Le(this)?this._closedPromise:b($e("closed"))}get desiredSize(){if(!Le(this))throw $e("desiredSize");if(this._ownerWritableStream===void 0)throw Pt("desiredSize");return $a(this)}get ready(){return Le(this)?this._readyPromise:b($e("ready"))}abort(t=void 0){return Le(this)?this._ownerWritableStream===void 0?b(Pt("abort")):Fa(this,t):b($e("abort"))}close(){if(!Le(this))return b($e("close"));const t=this._ownerWritableStream;return t===void 0?b(Pt("close")):he(t)?b(new TypeError("Cannot close an already-closing stream")):Oo(this)}releaseLock(){if(!Le(this))throw $e("releaseLock");this._ownerWritableStream!==void 0&&Io(this);}write(t=void 0){return Le(this)?this._ownerWritableStream===void 0?b(Pt("write to")):Fo(this,t):b($e("write"))}};n$1(Rn,"WritableStreamDefaultWriter");let re=Rn;Object.defineProperties(re.prototype,{abort:{enumerable:!0},close:{enumerable:!0},releaseLock:{enumerable:!0},write:{enumerable:!0},closed:{enumerable:!0},desiredSize:{enumerable:!0},ready:{enumerable:!0}}),h(re.prototype.abort,"abort"),h(re.prototype.close,"close"),h(re.prototype.releaseLock,"releaseLock"),h(re.prototype.write,"write"),typeof Symbol.toStringTag=="symbol"&&Object.defineProperty(re.prototype,Symbol.toStringTag,{value:"WritableStreamDefaultWriter",configurable:!0});function Le(e){return !l(e)||!Object.prototype.hasOwnProperty.call(e,"_ownerWritableStream")?!1:e instanceof re}n$1(Le,"IsWritableStreamDefaultWriter");function Fa(e,t){const r=e._ownerWritableStream;return Kt(r,t)}n$1(Fa,"WritableStreamDefaultWriterAbort");function Oo(e){const t=e._ownerWritableStream;return qo(t)}n$1(Oo,"WritableStreamDefaultWriterClose");function ja(e){const t=e._ownerWritableStream,r=t._state;return he(t)||r==="closed"?T(void 0):r==="errored"?b(t._storedError):Oo(e)}n$1(ja,"WritableStreamDefaultWriterCloseWithErrorPropagation");function La(e,t){e._closedPromiseState==="pending"?an(e,t):Qa(e,t);}n$1(La,"WritableStreamDefaultWriterEnsureClosedPromiseRejected");function zo(e,t){e._readyPromiseState==="pending"?No(e,t):Ga(e,t);}n$1(zo,"WritableStreamDefaultWriterEnsureReadyPromiseRejected");function $a(e){const t=e._ownerWritableStream,r=t._state;return r==="errored"||r==="erroring"?null:r==="closed"?0:$o(t._writableStreamController)}n$1($a,"WritableStreamDefaultWriterGetDesiredSize");function Io(e){const t=e._ownerWritableStream,r=new TypeError("Writer was released and can no longer be used to monitor the stream's closedness");zo(e,r),La(e,r),t._writer=void 0,e._ownerWritableStream=void 0;}n$1(Io,"WritableStreamDefaultWriterRelease");function Fo(e,t){const r=e._ownerWritableStream,s=r._writableStreamController,u=Ua(s,t);if(r!==e._ownerWritableStream)return b(Pt("write to"));const c=r._state;if(c==="errored")return b(r._storedError);if(he(r)||c==="closed")return b(new TypeError("The stream is closing or closed and cannot be written to"));if(c==="erroring")return b(r._storedError);const d=Aa(r);return xa(s,t,u),d}n$1(Fo,"WritableStreamDefaultWriterWrite");const jo={},Tn=class Tn{constructor(){throw new TypeError("Illegal constructor")}get abortReason(){if(!rn(this))throw on("abortReason");return this._abortReason}get signal(){if(!rn(this))throw on("signal");if(this._abortController===void 0)throw new TypeError("WritableStreamDefaultController.prototype.signal is not supported");return this._abortController.signal}error(t=void 0){if(!rn(this))throw on("error");this._controlledWritableStream._state==="writable"&&Do(this,t);}[jt](t){const r=this._abortAlgorithm(t);return Xt(this),r}[Qn](){Be(this);}};n$1(Tn,"WritableStreamDefaultController");let ke=Tn;Object.defineProperties(ke.prototype,{abortReason:{enumerable:!0},signal:{enumerable:!0},error:{enumerable:!0}}),typeof Symbol.toStringTag=="symbol"&&Object.defineProperty(ke.prototype,Symbol.toStringTag,{value:"WritableStreamDefaultController",configurable:!0});function rn(e){return !l(e)||!Object.prototype.hasOwnProperty.call(e,"_controlledWritableStream")?!1:e instanceof ke}n$1(rn,"IsWritableStreamDefaultController");function Lo(e,t,r,s,u,c,d,m){t._controlledWritableStream=e,e._writableStreamController=t,t._queue=void 0,t._queueTotalSize=void 0,Be(t),t._abortReason=void 0,t._abortController=va(),t._started=!1,t._strategySizeAlgorithm=m,t._strategyHWM=d,t._writeAlgorithm=s,t._closeAlgorithm=u,t._abortAlgorithm=c;const R=nn(t);tn(e,R);const y=r(),C=T(y);g(C,()=>(t._started=!0,er(t),null),P=>(t._started=!0,Jr(e,P),null));}n$1(Lo,"SetUpWritableStreamDefaultController");function Da(e,t,r,s){const u=Object.create(ke.prototype);let c,d,m,R;t.start!==void 0?c=n$1(()=>t.start(u),"startAlgorithm"):c=n$1(()=>{},"startAlgorithm"),t.write!==void 0?d=n$1(y=>t.write(y,u),"writeAlgorithm"):d=n$1(()=>T(void 0),"writeAlgorithm"),t.close!==void 0?m=n$1(()=>t.close(),"closeAlgorithm"):m=n$1(()=>T(void 0),"closeAlgorithm"),t.abort!==void 0?R=n$1(y=>t.abort(y),"abortAlgorithm"):R=n$1(()=>T(void 0),"abortAlgorithm"),Lo(e,u,c,d,m,R,r,s);}n$1(Da,"SetUpWritableStreamDefaultControllerFromUnderlyingSink");function Xt(e){e._writeAlgorithm=void 0,e._closeAlgorithm=void 0,e._abortAlgorithm=void 0,e._strategySizeAlgorithm=void 0;}n$1(Xt,"WritableStreamDefaultControllerClearAlgorithms");function Ma(e){Nr(e,jo,0),er(e);}n$1(Ma,"WritableStreamDefaultControllerClose");function Ua(e,t){try{return e._strategySizeAlgorithm(t)}catch(r){return Ct(e,r),1}}n$1(Ua,"WritableStreamDefaultControllerGetChunkSize");function $o(e){return e._strategyHWM-e._queueTotalSize}n$1($o,"WritableStreamDefaultControllerGetDesiredSize");function xa(e,t,r){try{Nr(e,t,r);}catch(u){Ct(e,u);return}const s=e._controlledWritableStream;if(!he(s)&&s._state==="writable"){const u=nn(e);tn(s,u);}er(e);}n$1(xa,"WritableStreamDefaultControllerWrite");function er(e){const t=e._controlledWritableStream;if(!e._started||t._inFlightWriteRequest!==void 0)return;if(t._state==="erroring"){en(t);return}if(e._queue.length===0)return;const s=na(e);s===jo?Na(e):Ha(e,s);}n$1(er,"WritableStreamDefaultControllerAdvanceQueueIfNeeded");function Ct(e,t){e._controlledWritableStream._state==="writable"&&Do(e,t);}n$1(Ct,"WritableStreamDefaultControllerErrorIfNeeded");function Na(e){const t=e._controlledWritableStream;za(t),xr(e);const r=e._closeAlgorithm();Xt(e),g(r,()=>(Wa(t),null),s=>(qa(t,s),null));}n$1(Na,"WritableStreamDefaultControllerProcessClose");function Ha(e,t){const r=e._controlledWritableStream;Ia(r);const s=e._writeAlgorithm(t);g(s,()=>{Ba(r);const u=r._state;if(xr(e),!he(r)&&u==="writable"){const c=nn(e);tn(r,c);}return er(e),null},u=>(r._state==="writable"&&Xt(e),ka(r,u),null));}n$1(Ha,"WritableStreamDefaultControllerProcessWrite");function nn(e){return $o(e)<=0}n$1(nn,"WritableStreamDefaultControllerGetBackpressure");function Do(e,t){const r=e._controlledWritableStream;Xt(e),Xr(r,t);}n$1(Do,"WritableStreamDefaultControllerError");function tr(e){return new TypeError(`WritableStream.prototype.${e} can only be used on a WritableStream`)}n$1(tr,"streamBrandCheckException$2");function on(e){return new TypeError(`WritableStreamDefaultController.prototype.${e} can only be used on a WritableStreamDefaultController`)}n$1(on,"defaultControllerBrandCheckException$2");function $e(e){return new TypeError(`WritableStreamDefaultWriter.prototype.${e} can only be used on a WritableStreamDefaultWriter`)}n$1($e,"defaultWriterBrandCheckException");function Pt(e){return new TypeError("Cannot "+e+" a stream using a released writer")}n$1(Pt,"defaultWriterLockException");function rr(e){e._closedPromise=A((t,r)=>{e._closedPromise_resolve=t,e._closedPromise_reject=r,e._closedPromiseState="pending";});}n$1(rr,"defaultWriterClosedPromiseInitialize");function Mo(e,t){rr(e),an(e,t);}n$1(Mo,"defaultWriterClosedPromiseInitializeAsRejected");function Va(e){rr(e),Uo(e);}n$1(Va,"defaultWriterClosedPromiseInitializeAsResolved");function an(e,t){e._closedPromise_reject!==void 0&&(Q(e._closedPromise),e._closedPromise_reject(t),e._closedPromise_resolve=void 0,e._closedPromise_reject=void 0,e._closedPromiseState="rejected");}n$1(an,"defaultWriterClosedPromiseReject");function Qa(e,t){Mo(e,t);}n$1(Qa,"defaultWriterClosedPromiseResetToRejected");function Uo(e){e._closedPromise_resolve!==void 0&&(e._closedPromise_resolve(void 0),e._closedPromise_resolve=void 0,e._closedPromise_reject=void 0,e._closedPromiseState="resolved");}n$1(Uo,"defaultWriterClosedPromiseResolve");function nr(e){e._readyPromise=A((t,r)=>{e._readyPromise_resolve=t,e._readyPromise_reject=r;}),e._readyPromiseState="pending";}n$1(nr,"defaultWriterReadyPromiseInitialize");function sn(e,t){nr(e),No(e,t);}n$1(sn,"defaultWriterReadyPromiseInitializeAsRejected");function xo(e){nr(e),ln(e);}n$1(xo,"defaultWriterReadyPromiseInitializeAsResolved");function No(e,t){e._readyPromise_reject!==void 0&&(Q(e._readyPromise),e._readyPromise_reject(t),e._readyPromise_resolve=void 0,e._readyPromise_reject=void 0,e._readyPromiseState="rejected");}n$1(No,"defaultWriterReadyPromiseReject");function Ya(e){nr(e);}n$1(Ya,"defaultWriterReadyPromiseReset");function Ga(e,t){sn(e,t);}n$1(Ga,"defaultWriterReadyPromiseResetToRejected");function ln(e){e._readyPromise_resolve!==void 0&&(e._readyPromise_resolve(void 0),e._readyPromise_resolve=void 0,e._readyPromise_reject=void 0,e._readyPromiseState="fulfilled");}n$1(ln,"defaultWriterReadyPromiseResolve");function Za(){if(typeof globalThis<"u")return globalThis;if(typeof self<"u")return self;if(typeof n$2<"u")return n$2}n$1(Za,"getGlobals");const un=Za();function Ka(e){if(!(typeof e=="function"||typeof e=="object")||e.name!=="DOMException")return !1;try{return new e,!0}catch{return !1}}n$1(Ka,"isDOMExceptionConstructor");function Ja(){const e=un?.DOMException;return Ka(e)?e:void 0}n$1(Ja,"getFromGlobal");function Xa(){const e=n$1(function(r,s){this.message=r||"",this.name=s||"Error",Error.captureStackTrace&&Error.captureStackTrace(this,this.constructor);},"DOMException");return h(e,"DOMException"),e.prototype=Object.create(Error.prototype),Object.defineProperty(e.prototype,"constructor",{value:e,writable:!0,configurable:!0}),e}n$1(Xa,"createPolyfill");const es=Ja()||Xa();function Ho(e,t,r,s,u,c){const d=Qe(e),m=ko(t);e._disturbed=!0;let R=!1,y=T(void 0);return A((C,P)=>{let B;if(c!==void 0){if(B=n$1(()=>{const _=c.reason!==void 0?c.reason:new es("Aborted","AbortError"),E=[];s||E.push(()=>t._state==="writable"?Kt(t,_):T(void 0)),u||E.push(()=>e._state==="readable"?ie(e,_):T(void 0)),N(()=>Promise.all(E.map(k=>k())),!0,_);},"abortAlgorithm"),c.aborted){B();return}c.addEventListener("abort",B);}function ae(){return A((_,E)=>{function k(Y){Y?_():q(nt(),k,E);}n$1(k,"next"),k(!1);})}n$1(ae,"pipeLoop");function nt(){return R?T(!0):q(m._readyPromise,()=>A((_,E)=>{_t(d,{_chunkSteps:n$1(k=>{y=q(Fo(m,k),void 0,f),_(!1);},"_chunkSteps"),_closeSteps:n$1(()=>_(!0),"_closeSteps"),_errorSteps:E});}))}if(n$1(nt,"pipeStep"),Te(e,d._closedPromise,_=>(s?J(!0,_):N(()=>Kt(t,_),!0,_),null)),Te(t,m._closedPromise,_=>(u?J(!0,_):N(()=>ie(e,_),!0,_),null)),x(e,d._closedPromise,()=>(r?J():N(()=>ja(m)),null)),he(t)||t._state==="closed"){const _=new TypeError("the destination writable stream closed before all data could be piped to it");u?J(!0,_):N(()=>ie(e,_),!0,_);}Q(ae());function Oe(){const _=y;return q(y,()=>_!==y?Oe():void 0)}n$1(Oe,"waitForWritesToFinish");function Te(_,E,k){_._state==="errored"?k(_._storedError):I(E,k);}n$1(Te,"isOrBecomesErrored");function x(_,E,k){_._state==="closed"?k():V(E,k);}n$1(x,"isOrBecomesClosed");function N(_,E,k){if(R)return;R=!0,t._state==="writable"&&!he(t)?V(Oe(),Y):Y();function Y(){return g(_(),()=>Ce(E,k),ot=>Ce(!0,ot)),null}n$1(Y,"doTheRest");}n$1(N,"shutdownWithAction");function J(_,E){R||(R=!0,t._state==="writable"&&!he(t)?V(Oe(),()=>Ce(_,E)):Ce(_,E));}n$1(J,"shutdown");function Ce(_,E){return Io(m),_e(d),c!==void 0&&c.removeEventListener("abort",B),_?P(E):C(void 0),null}n$1(Ce,"finalize");})}n$1(Ho,"ReadableStreamPipeTo");const Cn=class Cn{constructor(){throw new TypeError("Illegal constructor")}get desiredSize(){if(!or(this))throw ar("desiredSize");return fn(this)}close(){if(!or(this))throw ar("close");if(!Je(this))throw new TypeError("The stream is not in a state that permits close");De(this);}enqueue(t=void 0){if(!or(this))throw ar("enqueue");if(!Je(this))throw new TypeError("The stream is not in a state that permits enqueue");return Ke(this,t)}error(t=void 0){if(!or(this))throw ar("error");oe(this,t);}[Ar](t){Be(this);const r=this._cancelAlgorithm(t);return ir(this),r}[Br](t){const r=this._controlledReadableStream;if(this._queue.length>0){const s=xr(this);this._closeRequested&&this._queue.length===0?(ir(this),At(r)):vt(this),t._chunkSteps(s);}else eo(r,t),vt(this);}[kr](){}};n$1(Cn,"ReadableStreamDefaultController");let ne=Cn;Object.defineProperties(ne.prototype,{close:{enumerable:!0},enqueue:{enumerable:!0},error:{enumerable:!0},desiredSize:{enumerable:!0}}),h(ne.prototype.close,"close"),h(ne.prototype.enqueue,"enqueue"),h(ne.prototype.error,"error"),typeof Symbol.toStringTag=="symbol"&&Object.defineProperty(ne.prototype,Symbol.toStringTag,{value:"ReadableStreamDefaultController",configurable:!0});function or(e){return !l(e)||!Object.prototype.hasOwnProperty.call(e,"_controlledReadableStream")?!1:e instanceof ne}n$1(or,"IsReadableStreamDefaultController");function vt(e){if(!Vo(e))return;if(e._pulling){e._pullAgain=!0;return}e._pulling=!0;const r=e._pullAlgorithm();g(r,()=>(e._pulling=!1,e._pullAgain&&(e._pullAgain=!1,vt(e)),null),s=>(oe(e,s),null));}n$1(vt,"ReadableStreamDefaultControllerCallPullIfNeeded");function Vo(e){const t=e._controlledReadableStream;return !Je(e)||!e._started?!1:!!(qe(t)&&$t(t)>0||fn(e)>0)}n$1(Vo,"ReadableStreamDefaultControllerShouldCallPull");function ir(e){e._pullAlgorithm=void 0,e._cancelAlgorithm=void 0,e._strategySizeAlgorithm=void 0;}n$1(ir,"ReadableStreamDefaultControllerClearAlgorithms");function De(e){if(!Je(e))return;const t=e._controlledReadableStream;e._closeRequested=!0,e._queue.length===0&&(ir(e),At(t));}n$1(De,"ReadableStreamDefaultControllerClose");function Ke(e,t){if(!Je(e))return;const r=e._controlledReadableStream;if(qe(r)&&$t(r)>0)Lr(r,t,!1);else {let s;try{s=e._strategySizeAlgorithm(t);}catch(u){throw oe(e,u),u}try{Nr(e,t,s);}catch(u){throw oe(e,u),u}}vt(e);}n$1(Ke,"ReadableStreamDefaultControllerEnqueue");function oe(e,t){const r=e._controlledReadableStream;r._state==="readable"&&(Be(e),ir(e),Zo(r,t));}n$1(oe,"ReadableStreamDefaultControllerError");function fn(e){const t=e._controlledReadableStream._state;return t==="errored"?null:t==="closed"?0:e._strategyHWM-e._queueTotalSize}n$1(fn,"ReadableStreamDefaultControllerGetDesiredSize");function ts(e){return !Vo(e)}n$1(ts,"ReadableStreamDefaultControllerHasBackpressure");function Je(e){const t=e._controlledReadableStream._state;return !e._closeRequested&&t==="readable"}n$1(Je,"ReadableStreamDefaultControllerCanCloseOrEnqueue");function Qo(e,t,r,s,u,c,d){t._controlledReadableStream=e,t._queue=void 0,t._queueTotalSize=void 0,Be(t),t._started=!1,t._closeRequested=!1,t._pullAgain=!1,t._pulling=!1,t._strategySizeAlgorithm=d,t._strategyHWM=c,t._pullAlgorithm=s,t._cancelAlgorithm=u,e._readableStreamController=t;const m=r();g(T(m),()=>(t._started=!0,vt(t),null),R=>(oe(t,R),null));}n$1(Qo,"SetUpReadableStreamDefaultController");function rs(e,t,r,s){const u=Object.create(ne.prototype);let c,d,m;t.start!==void 0?c=n$1(()=>t.start(u),"startAlgorithm"):c=n$1(()=>{},"startAlgorithm"),t.pull!==void 0?d=n$1(()=>t.pull(u),"pullAlgorithm"):d=n$1(()=>T(void 0),"pullAlgorithm"),t.cancel!==void 0?m=n$1(R=>t.cancel(R),"cancelAlgorithm"):m=n$1(()=>T(void 0),"cancelAlgorithm"),Qo(e,u,c,d,m,r,s);}n$1(rs,"SetUpReadableStreamDefaultControllerFromUnderlyingSource");function ar(e){return new TypeError(`ReadableStreamDefaultController.prototype.${e} can only be used on a ReadableStreamDefaultController`)}n$1(ar,"defaultControllerBrandCheckException$1");function ns(e,t){return Ie(e._readableStreamController)?is(e):os(e)}n$1(ns,"ReadableStreamTee");function os(e,t){const r=Qe(e);let s=!1,u=!1,c=!1,d=!1,m,R,y,C,P;const B=A(x=>{P=x;});function ae(){return s?(u=!0,T(void 0)):(s=!0,_t(r,{_chunkSteps:n$1(N=>{ge(()=>{u=!1;const J=N,Ce=N;c||Ke(y._readableStreamController,J),d||Ke(C._readableStreamController,Ce),s=!1,u&&ae();});},"_chunkSteps"),_closeSteps:n$1(()=>{s=!1,c||De(y._readableStreamController),d||De(C._readableStreamController),(!c||!d)&&P(void 0);},"_closeSteps"),_errorSteps:n$1(()=>{s=!1;},"_errorSteps")}),T(void 0))}n$1(ae,"pullAlgorithm");function nt(x){if(c=!0,m=x,d){const N=St([m,R]),J=ie(e,N);P(J);}return B}n$1(nt,"cancel1Algorithm");function Oe(x){if(d=!0,R=x,c){const N=St([m,R]),J=ie(e,N);P(J);}return B}n$1(Oe,"cancel2Algorithm");function Te(){}return n$1(Te,"startAlgorithm"),y=Et(Te,ae,nt),C=Et(Te,ae,Oe),I(r._closedPromise,x=>(oe(y._readableStreamController,x),oe(C._readableStreamController,x),(!c||!d)&&P(void 0),null)),[y,C]}n$1(os,"ReadableStreamDefaultTee");function is(e){let t=Qe(e),r=!1,s=!1,u=!1,c=!1,d=!1,m,R,y,C,P;const B=A(_=>{P=_;});function ae(_){I(_._closedPromise,E=>(_!==t||(K(y._readableStreamController,E),K(C._readableStreamController,E),(!c||!d)&&P(void 0)),null));}n$1(ae,"forwardReaderError");function nt(){je(t)&&(_e(t),t=Qe(e),ae(t)),_t(t,{_chunkSteps:n$1(E=>{ge(()=>{s=!1,u=!1;const k=E;let Y=E;if(!c&&!d)try{Y=fo(E);}catch(ot){K(y._readableStreamController,ot),K(C._readableStreamController,ot),P(ie(e,ot));return}c||Ht(y._readableStreamController,k),d||Ht(C._readableStreamController,Y),r=!1,s?Te():u&&x();});},"_chunkSteps"),_closeSteps:n$1(()=>{r=!1,c||wt(y._readableStreamController),d||wt(C._readableStreamController),y._readableStreamController._pendingPullIntos.length>0&&Vt(y._readableStreamController,0),C._readableStreamController._pendingPullIntos.length>0&&Vt(C._readableStreamController,0),(!c||!d)&&P(void 0);},"_closeSteps"),_errorSteps:n$1(()=>{r=!1;},"_errorSteps")});}n$1(nt,"pullWithDefaultReader");function Oe(_,E){Ee(t)&&(_e(t),t=Co(e),ae(t));const k=E?C:y,Y=E?y:C;Eo(t,_,1,{_chunkSteps:n$1(it=>{ge(()=>{s=!1,u=!1;const at=E?d:c;if(E?c:d)at||Qt(k._readableStreamController,it);else {let ui;try{ui=fo(it);}catch(kn){K(k._readableStreamController,kn),K(Y._readableStreamController,kn),P(ie(e,kn));return}at||Qt(k._readableStreamController,it),Ht(Y._readableStreamController,ui);}r=!1,s?Te():u&&x();});},"_chunkSteps"),_closeSteps:n$1(it=>{r=!1;const at=E?d:c,cr=E?c:d;at||wt(k._readableStreamController),cr||wt(Y._readableStreamController),it!==void 0&&(at||Qt(k._readableStreamController,it),!cr&&Y._readableStreamController._pendingPullIntos.length>0&&Vt(Y._readableStreamController,0)),(!at||!cr)&&P(void 0);},"_closeSteps"),_errorSteps:n$1(()=>{r=!1;},"_errorSteps")});}n$1(Oe,"pullWithBYOBReader");function Te(){if(r)return s=!0,T(void 0);r=!0;const _=Gr(y._readableStreamController);return _===null?nt():Oe(_._view,!1),T(void 0)}n$1(Te,"pull1Algorithm");function x(){if(r)return u=!0,T(void 0);r=!0;const _=Gr(C._readableStreamController);return _===null?nt():Oe(_._view,!0),T(void 0)}n$1(x,"pull2Algorithm");function N(_){if(c=!0,m=_,d){const E=St([m,R]),k=ie(e,E);P(k);}return B}n$1(N,"cancel1Algorithm");function J(_){if(d=!0,R=_,c){const E=St([m,R]),k=ie(e,E);P(k);}return B}n$1(J,"cancel2Algorithm");function Ce(){}return n$1(Ce,"startAlgorithm"),y=Go(Ce,Te,N),C=Go(Ce,x,J),ae(t),[y,C]}n$1(is,"ReadableByteStreamTee");function as(e){return l(e)&&typeof e.getReader<"u"}n$1(as,"isReadableStreamLike");function ss(e){return as(e)?us(e.getReader()):ls(e)}n$1(ss,"ReadableStreamFrom");function ls(e){let t;const r=uo(e,"async"),s=f;function u(){let d;try{d=Xi(r);}catch(R){return b(R)}const m=T(d);return F(m,R=>{if(!l(R))throw new TypeError("The promise returned by the iterator.next() method must fulfill with an object");if(ea(R))De(t._readableStreamController);else {const C=ta(R);Ke(t._readableStreamController,C);}})}n$1(u,"pullAlgorithm");function c(d){const m=r.iterator;let R;try{R=Ut(m,"return");}catch(P){return b(P)}if(R===void 0)return T(void 0);let y;try{y=z(R,m,[d]);}catch(P){return b(P)}const C=T(y);return F(C,P=>{if(!l(P))throw new TypeError("The promise returned by the iterator.return() method must fulfill with an object")})}return n$1(c,"cancelAlgorithm"),t=Et(s,u,c,0),t}n$1(ls,"ReadableStreamFromIterable");function us(e){let t;const r=f;function s(){let c;try{c=e.read();}catch(d){return b(d)}return F(c,d=>{if(!l(d))throw new TypeError("The promise returned by the reader.read() method must fulfill with an object");if(d.done)De(t._readableStreamController);else {const m=d.value;Ke(t._readableStreamController,m);}})}n$1(s,"pullAlgorithm");function u(c){try{return T(e.cancel(c))}catch(d){return b(d)}}return n$1(u,"cancelAlgorithm"),t=Et(r,s,u,0),t}n$1(us,"ReadableStreamFromDefaultReader");function fs(e,t){ue(e,t);const r=e,s=r?.autoAllocateChunkSize,u=r?.cancel,c=r?.pull,d=r?.start,m=r?.type;return {autoAllocateChunkSize:s===void 0?void 0:Fr(s,`${t} has member 'autoAllocateChunkSize' that`),cancel:u===void 0?void 0:cs(u,r,`${t} has member 'cancel' that`),pull:c===void 0?void 0:ds(c,r,`${t} has member 'pull' that`),start:d===void 0?void 0:hs(d,r,`${t} has member 'start' that`),type:m===void 0?void 0:ps(m,`${t} has member 'type' that`)}}n$1(fs,"convertUnderlyingDefaultOrByteSource");function cs(e,t,r){return Z(e,r),s=>j(e,t,[s])}n$1(cs,"convertUnderlyingSourceCancelCallback");function ds(e,t,r){return Z(e,r),s=>j(e,t,[s])}n$1(ds,"convertUnderlyingSourcePullCallback");function hs(e,t,r){return Z(e,r),s=>z(e,t,[s])}n$1(hs,"convertUnderlyingSourceStartCallback");function ps(e,t){if(e=`${e}`,e!=="bytes")throw new TypeError(`${t} '${e}' is not a valid enumeration value for ReadableStreamType`);return e}n$1(ps,"convertReadableStreamType");function bs(e,t){return ue(e,t),{preventCancel:!!e?.preventCancel}}n$1(bs,"convertIteratorOptions");function Yo(e,t){ue(e,t);const r=e?.preventAbort,s=e?.preventCancel,u=e?.preventClose,c=e?.signal;return c!==void 0&&ms(c,`${t} has member 'signal' that`),{preventAbort:!!r,preventCancel:!!s,preventClose:!!u,signal:c}}n$1(Yo,"convertPipeOptions");function ms(e,t){if(!Ca(e))throw new TypeError(`${t} is not an AbortSignal.`)}n$1(ms,"assertAbortSignal");function ys(e,t){ue(e,t);const r=e?.readable;zr(r,"readable","ReadableWritablePair"),jr(r,`${t} has member 'readable' that`);const s=e?.writable;return zr(s,"writable","ReadableWritablePair"),Bo(s,`${t} has member 'writable' that`),{readable:r,writable:s}}n$1(ys,"convertReadableWritablePair");const Pn=class Pn{constructor(t={},r={}){t===void 0?t=null:Jn(t,"First parameter");const s=Zt(r,"Second parameter"),u=fs(t,"First parameter");if(cn(this),u.type==="bytes"){if(s.size!==void 0)throw new RangeError("The strategy for a byte stream cannot have a size function");const c=Tt(s,0);ca(this,u,c);}else {const c=Gt(s),d=Tt(s,1);rs(this,u,d,c);}}get locked(){if(!We(this))throw Me("locked");return qe(this)}cancel(t=void 0){return We(this)?qe(this)?b(new TypeError("Cannot cancel a stream that already has a reader")):ie(this,t):b(Me("cancel"))}getReader(t=void 0){if(!We(this))throw Me("getReader");return ha(t,"First parameter").mode===void 0?Qe(this):Co(this)}pipeThrough(t,r={}){if(!We(this))throw Me("pipeThrough");Se(t,1,"pipeThrough");const s=ys(t,"First parameter"),u=Yo(r,"Second parameter");if(qe(this))throw new TypeError("ReadableStream.prototype.pipeThrough cannot be used on a locked ReadableStream");if(Ze(s.writable))throw new TypeError("ReadableStream.prototype.pipeThrough cannot be used on a locked WritableStream");const c=Ho(this,s.writable,u.preventClose,u.preventAbort,u.preventCancel,u.signal);return Q(c),s.readable}pipeTo(t,r={}){if(!We(this))return b(Me("pipeTo"));if(t===void 0)return b("Parameter 1 is required in 'pipeTo'.");if(!Ge(t))return b(new TypeError("ReadableStream.prototype.pipeTo's first argument must be a WritableStream"));let s;try{s=Yo(r,"Second parameter");}catch(u){return b(u)}return qe(this)?b(new TypeError("ReadableStream.prototype.pipeTo cannot be used on a locked ReadableStream")):Ze(t)?b(new TypeError("ReadableStream.prototype.pipeTo cannot be used on a locked WritableStream")):Ho(this,t,s.preventClose,s.preventAbort,s.preventCancel,s.signal)}tee(){if(!We(this))throw Me("tee");const t=ns(this);return St(t)}values(t=void 0){if(!We(this))throw Me("values");const r=bs(t,"First parameter");return Ki(this,r.preventCancel)}[Ur](t){return this.values(t)}static from(t){return ss(t)}};n$1(Pn,"ReadableStream");let L=Pn;Object.defineProperties(L,{from:{enumerable:!0}}),Object.defineProperties(L.prototype,{cancel:{enumerable:!0},getReader:{enumerable:!0},pipeThrough:{enumerable:!0},pipeTo:{enumerable:!0},tee:{enumerable:!0},values:{enumerable:!0},locked:{enumerable:!0}}),h(L.from,"from"),h(L.prototype.cancel,"cancel"),h(L.prototype.getReader,"getReader"),h(L.prototype.pipeThrough,"pipeThrough"),h(L.prototype.pipeTo,"pipeTo"),h(L.prototype.tee,"tee"),h(L.prototype.values,"values"),typeof Symbol.toStringTag=="symbol"&&Object.defineProperty(L.prototype,Symbol.toStringTag,{value:"ReadableStream",configurable:!0}),Object.defineProperty(L.prototype,Ur,{value:L.prototype.values,writable:!0,configurable:!0});function Et(e,t,r,s=1,u=()=>1){const c=Object.create(L.prototype);cn(c);const d=Object.create(ne.prototype);return Qo(c,d,e,t,r,s,u),c}n$1(Et,"CreateReadableStream");function Go(e,t,r){const s=Object.create(L.prototype);cn(s);const u=Object.create(te.prototype);return To(s,u,e,t,r,0,void 0),s}n$1(Go,"CreateReadableByteStream");function cn(e){e._state="readable",e._reader=void 0,e._storedError=void 0,e._disturbed=!1;}n$1(cn,"InitializeReadableStream");function We(e){return !l(e)||!Object.prototype.hasOwnProperty.call(e,"_readableStreamController")?!1:e instanceof L}n$1(We,"IsReadableStream");function qe(e){return e._reader!==void 0}n$1(qe,"IsReadableStreamLocked");function ie(e,t){if(e._disturbed=!0,e._state==="closed")return T(void 0);if(e._state==="errored")return b(e._storedError);At(e);const r=e._reader;if(r!==void 0&&je(r)){const u=r._readIntoRequests;r._readIntoRequests=new D,u.forEach(c=>{c._closeSteps(void 0);});}const s=e._readableStreamController[Ar](t);return F(s,f)}n$1(ie,"ReadableStreamCancel");function At(e){e._state="closed";const t=e._reader;if(t!==void 0&&(Zn(t),Ee(t))){const r=t._readRequests;t._readRequests=new D,r.forEach(s=>{s._closeSteps();});}}n$1(At,"ReadableStreamClose");function Zo(e,t){e._state="errored",e._storedError=t;const r=e._reader;r!==void 0&&(Or(r,t),Ee(r)?ro(r,t):Ao(r,t));}n$1(Zo,"ReadableStreamError");function Me(e){return new TypeError(`ReadableStream.prototype.${e} can only be used on a ReadableStream`)}n$1(Me,"streamBrandCheckException$1");function Ko(e,t){ue(e,t);const r=e?.highWaterMark;return zr(r,"highWaterMark","QueuingStrategyInit"),{highWaterMark:Ir(r)}}n$1(Ko,"convertQueuingStrategyInit");const Jo=n$1(e=>e.byteLength,"byteLengthSizeFunction");h(Jo,"size");const vn=class vn{constructor(t){Se(t,1,"ByteLengthQueuingStrategy"),t=Ko(t,"First parameter"),this._byteLengthQueuingStrategyHighWaterMark=t.highWaterMark;}get highWaterMark(){if(!ei(this))throw Xo("highWaterMark");return this._byteLengthQueuingStrategyHighWaterMark}get size(){if(!ei(this))throw Xo("size");return Jo}};n$1(vn,"ByteLengthQueuingStrategy");let Xe=vn;Object.defineProperties(Xe.prototype,{highWaterMark:{enumerable:!0},size:{enumerable:!0}}),typeof Symbol.toStringTag=="symbol"&&Object.defineProperty(Xe.prototype,Symbol.toStringTag,{value:"ByteLengthQueuingStrategy",configurable:!0});function Xo(e){return new TypeError(`ByteLengthQueuingStrategy.prototype.${e} can only be used on a ByteLengthQueuingStrategy`)}n$1(Xo,"byteLengthBrandCheckException");function ei(e){return !l(e)||!Object.prototype.hasOwnProperty.call(e,"_byteLengthQueuingStrategyHighWaterMark")?!1:e instanceof Xe}n$1(ei,"IsByteLengthQueuingStrategy");const ti=n$1(()=>1,"countSizeFunction");h(ti,"size");const En=class En{constructor(t){Se(t,1,"CountQueuingStrategy"),t=Ko(t,"First parameter"),this._countQueuingStrategyHighWaterMark=t.highWaterMark;}get highWaterMark(){if(!ni(this))throw ri("highWaterMark");return this._countQueuingStrategyHighWaterMark}get size(){if(!ni(this))throw ri("size");return ti}};n$1(En,"CountQueuingStrategy");let et=En;Object.defineProperties(et.prototype,{highWaterMark:{enumerable:!0},size:{enumerable:!0}}),typeof Symbol.toStringTag=="symbol"&&Object.defineProperty(et.prototype,Symbol.toStringTag,{value:"CountQueuingStrategy",configurable:!0});function ri(e){return new TypeError(`CountQueuingStrategy.prototype.${e} can only be used on a CountQueuingStrategy`)}n$1(ri,"countBrandCheckException");function ni(e){return !l(e)||!Object.prototype.hasOwnProperty.call(e,"_countQueuingStrategyHighWaterMark")?!1:e instanceof et}n$1(ni,"IsCountQueuingStrategy");function gs(e,t){ue(e,t);const r=e?.cancel,s=e?.flush,u=e?.readableType,c=e?.start,d=e?.transform,m=e?.writableType;return {cancel:r===void 0?void 0:Rs(r,e,`${t} has member 'cancel' that`),flush:s===void 0?void 0:_s(s,e,`${t} has member 'flush' that`),readableType:u,start:c===void 0?void 0:Ss(c,e,`${t} has member 'start' that`),transform:d===void 0?void 0:ws(d,e,`${t} has member 'transform' that`),writableType:m}}n$1(gs,"convertTransformer");function _s(e,t,r){return Z(e,r),s=>j(e,t,[s])}n$1(_s,"convertTransformerFlushCallback");function Ss(e,t,r){return Z(e,r),s=>z(e,t,[s])}n$1(Ss,"convertTransformerStartCallback");function ws(e,t,r){return Z(e,r),(s,u)=>j(e,t,[s,u])}n$1(ws,"convertTransformerTransformCallback");function Rs(e,t,r){return Z(e,r),s=>j(e,t,[s])}n$1(Rs,"convertTransformerCancelCallback");const An=class An{constructor(t={},r={},s={}){t===void 0&&(t=null);const u=Zt(r,"Second parameter"),c=Zt(s,"Third parameter"),d=gs(t,"First parameter");if(d.readableType!==void 0)throw new RangeError("Invalid readableType specified");if(d.writableType!==void 0)throw new RangeError("Invalid writableType specified");const m=Tt(c,0),R=Gt(c),y=Tt(u,1),C=Gt(u);let P;const B=A(ae=>{P=ae;});Ts(this,B,y,C,m,R),Ps(this,d),d.start!==void 0?P(d.start(this._transformStreamController)):P(void 0);}get readable(){if(!oi(this))throw li("readable");return this._readable}get writable(){if(!oi(this))throw li("writable");return this._writable}};n$1(An,"TransformStream");let tt=An;Object.defineProperties(tt.prototype,{readable:{enumerable:!0},writable:{enumerable:!0}}),typeof Symbol.toStringTag=="symbol"&&Object.defineProperty(tt.prototype,Symbol.toStringTag,{value:"TransformStream",configurable:!0});function Ts(e,t,r,s,u,c){function d(){return t}n$1(d,"startAlgorithm");function m(B){return As(e,B)}n$1(m,"writeAlgorithm");function R(B){return Bs(e,B)}n$1(R,"abortAlgorithm");function y(){return ks(e)}n$1(y,"closeAlgorithm"),e._writable=Ea(d,m,y,R,r,s);function C(){return Ws(e)}n$1(C,"pullAlgorithm");function P(B){return qs(e,B)}n$1(P,"cancelAlgorithm"),e._readable=Et(d,C,P,u,c),e._backpressure=void 0,e._backpressureChangePromise=void 0,e._backpressureChangePromise_resolve=void 0,sr(e,!0),e._transformStreamController=void 0;}n$1(Ts,"InitializeTransformStream");function oi(e){return !l(e)||!Object.prototype.hasOwnProperty.call(e,"_transformStreamController")?!1:e instanceof tt}n$1(oi,"IsTransformStream");function ii(e,t){oe(e._readable._readableStreamController,t),dn(e,t);}n$1(ii,"TransformStreamError");function dn(e,t){ur(e._transformStreamController),Ct(e._writable._writableStreamController,t),hn(e);}n$1(dn,"TransformStreamErrorWritableAndUnblockWrite");function hn(e){e._backpressure&&sr(e,!1);}n$1(hn,"TransformStreamUnblockWrite");function sr(e,t){e._backpressureChangePromise!==void 0&&e._backpressureChangePromise_resolve(),e._backpressureChangePromise=A(r=>{e._backpressureChangePromise_resolve=r;}),e._backpressure=t;}n$1(sr,"TransformStreamSetBackpressure");const Bn=class Bn{constructor(){throw new TypeError("Illegal constructor")}get desiredSize(){if(!lr(this))throw fr("desiredSize");const t=this._controlledTransformStream._readable._readableStreamController;return fn(t)}enqueue(t=void 0){if(!lr(this))throw fr("enqueue");ai(this,t);}error(t=void 0){if(!lr(this))throw fr("error");vs(this,t);}terminate(){if(!lr(this))throw fr("terminate");Es(this);}};n$1(Bn,"TransformStreamDefaultController");let pe=Bn;Object.defineProperties(pe.prototype,{enqueue:{enumerable:!0},error:{enumerable:!0},terminate:{enumerable:!0},desiredSize:{enumerable:!0}}),h(pe.prototype.enqueue,"enqueue"),h(pe.prototype.error,"error"),h(pe.prototype.terminate,"terminate"),typeof Symbol.toStringTag=="symbol"&&Object.defineProperty(pe.prototype,Symbol.toStringTag,{value:"TransformStreamDefaultController",configurable:!0});function lr(e){return !l(e)||!Object.prototype.hasOwnProperty.call(e,"_controlledTransformStream")?!1:e instanceof pe}n$1(lr,"IsTransformStreamDefaultController");function Cs(e,t,r,s,u){t._controlledTransformStream=e,e._transformStreamController=t,t._transformAlgorithm=r,t._flushAlgorithm=s,t._cancelAlgorithm=u,t._finishPromise=void 0,t._finishPromise_resolve=void 0,t._finishPromise_reject=void 0;}n$1(Cs,"SetUpTransformStreamDefaultController");function Ps(e,t){const r=Object.create(pe.prototype);let s,u,c;t.transform!==void 0?s=n$1(d=>t.transform(d,r),"transformAlgorithm"):s=n$1(d=>{try{return ai(r,d),T(void 0)}catch(m){return b(m)}},"transformAlgorithm"),t.flush!==void 0?u=n$1(()=>t.flush(r),"flushAlgorithm"):u=n$1(()=>T(void 0),"flushAlgorithm"),t.cancel!==void 0?c=n$1(d=>t.cancel(d),"cancelAlgorithm"):c=n$1(()=>T(void 0),"cancelAlgorithm"),Cs(e,r,s,u,c);}n$1(Ps,"SetUpTransformStreamDefaultControllerFromTransformer");function ur(e){e._transformAlgorithm=void 0,e._flushAlgorithm=void 0,e._cancelAlgorithm=void 0;}n$1(ur,"TransformStreamDefaultControllerClearAlgorithms");function ai(e,t){const r=e._controlledTransformStream,s=r._readable._readableStreamController;if(!Je(s))throw new TypeError("Readable side is not in a state that permits enqueue");try{Ke(s,t);}catch(c){throw dn(r,c),r._readable._storedError}ts(s)!==r._backpressure&&sr(r,!0);}n$1(ai,"TransformStreamDefaultControllerEnqueue");function vs(e,t){ii(e._controlledTransformStream,t);}n$1(vs,"TransformStreamDefaultControllerError");function si(e,t){const r=e._transformAlgorithm(t);return F(r,void 0,s=>{throw ii(e._controlledTransformStream,s),s})}n$1(si,"TransformStreamDefaultControllerPerformTransform");function Es(e){const t=e._controlledTransformStream,r=t._readable._readableStreamController;De(r);const s=new TypeError("TransformStream terminated");dn(t,s);}n$1(Es,"TransformStreamDefaultControllerTerminate");function As(e,t){const r=e._transformStreamController;if(e._backpressure){const s=e._backpressureChangePromise;return F(s,()=>{const u=e._writable;if(u._state==="erroring")throw u._storedError;return si(r,t)})}return si(r,t)}n$1(As,"TransformStreamDefaultSinkWriteAlgorithm");function Bs(e,t){const r=e._transformStreamController;if(r._finishPromise!==void 0)return r._finishPromise;const s=e._readable;r._finishPromise=A((c,d)=>{r._finishPromise_resolve=c,r._finishPromise_reject=d;});const u=r._cancelAlgorithm(t);return ur(r),g(u,()=>(s._state==="errored"?rt(r,s._storedError):(oe(s._readableStreamController,t),pn(r)),null),c=>(oe(s._readableStreamController,c),rt(r,c),null)),r._finishPromise}n$1(Bs,"TransformStreamDefaultSinkAbortAlgorithm");function ks(e){const t=e._transformStreamController;if(t._finishPromise!==void 0)return t._finishPromise;const r=e._readable;t._finishPromise=A((u,c)=>{t._finishPromise_resolve=u,t._finishPromise_reject=c;});const s=t._flushAlgorithm();return ur(t),g(s,()=>(r._state==="errored"?rt(t,r._storedError):(De(r._readableStreamController),pn(t)),null),u=>(oe(r._readableStreamController,u),rt(t,u),null)),t._finishPromise}n$1(ks,"TransformStreamDefaultSinkCloseAlgorithm");function Ws(e){return sr(e,!1),e._backpressureChangePromise}n$1(Ws,"TransformStreamDefaultSourcePullAlgorithm");function qs(e,t){const r=e._transformStreamController;if(r._finishPromise!==void 0)return r._finishPromise;const s=e._writable;r._finishPromise=A((c,d)=>{r._finishPromise_resolve=c,r._finishPromise_reject=d;});const u=r._cancelAlgorithm(t);return ur(r),g(u,()=>(s._state==="errored"?rt(r,s._storedError):(Ct(s._writableStreamController,t),hn(e),pn(r)),null),c=>(Ct(s._writableStreamController,c),hn(e),rt(r,c),null)),r._finishPromise}n$1(qs,"TransformStreamDefaultSourceCancelAlgorithm");function fr(e){return new TypeError(`TransformStreamDefaultController.prototype.${e} can only be used on a TransformStreamDefaultController`)}n$1(fr,"defaultControllerBrandCheckException");function pn(e){e._finishPromise_resolve!==void 0&&(e._finishPromise_resolve(),e._finishPromise_resolve=void 0,e._finishPromise_reject=void 0);}n$1(pn,"defaultControllerFinishPromiseResolve");function rt(e,t){e._finishPromise_reject!==void 0&&(Q(e._finishPromise),e._finishPromise_reject(t),e._finishPromise_resolve=void 0,e._finishPromise_reject=void 0);}n$1(rt,"defaultControllerFinishPromiseReject");function li(e){return new TypeError(`TransformStream.prototype.${e} can only be used on a TransformStream`)}n$1(li,"streamBrandCheckException"),a.ByteLengthQueuingStrategy=Xe,a.CountQueuingStrategy=et,a.ReadableByteStreamController=te,a.ReadableStream=L,a.ReadableStreamBYOBReader=ce,a.ReadableStreamBYOBRequest=Re,a.ReadableStreamDefaultController=ne,a.ReadableStreamDefaultReader=fe,a.TransformStream=tt,a.TransformStreamDefaultController=pe,a.WritableStream=de,a.WritableStreamDefaultController=ke,a.WritableStreamDefaultWriter=re;});}(kt,kt.exports)),kt.exports}n$1(Ns,"requirePonyfill_es2018");var mi;function Hs(){if(mi)return pi;mi=1;const i=65536;if(!globalThis.ReadableStream)try{const o=require("node:process"),{emitWarning:a}=o;try{o.emitWarning=()=>{},Object.assign(globalThis,require("node:stream/web")),o.emitWarning=a;}catch(f){throw o.emitWarning=a,f}}catch{Object.assign(globalThis,Ns());}try{const{Blob:o}=require("buffer");o&&!o.prototype.stream&&(o.prototype.stream=n$1(function(f){let l=0;const p=this;return new ReadableStream({type:"bytes",async pull(h){const v=await p.slice(l,Math.min(p.size,l+i)).arrayBuffer();l+=v.byteLength,h.enqueue(new Uint8Array(v)),l===p.size&&h.close();}})},"name"));}catch{}return pi}n$1(Hs,"requireStreams"),Hs();/*! fetch-blob. MIT License. Jimmy Wärting <https://jimmy.warting.se/opensource> */const yi=65536;async function*Wn(i,o=!0){for(const a of i)if("stream"in a)yield*a.stream();else if(ArrayBuffer.isView(a))if(o){let f=a.byteOffset;const l=a.byteOffset+a.byteLength;for(;f!==l;){const p=Math.min(l-f,yi),h=a.buffer.slice(f,f+p);f+=h.byteLength,yield new Uint8Array(h);}}else yield a;else {let f=0,l=a;for(;f!==l.size;){const h=await l.slice(f,Math.min(l.size,f+yi)).arrayBuffer();f+=h.byteLength,yield new Uint8Array(h);}}}n$1(Wn,"toIterator");const gi=(ze=class{constructor(o=[],a={}){be(this,ve,[]);be(this,zt,"");be(this,bt,0);be(this,Cr,"transparent");if(typeof o!="object"||o===null)throw new TypeError("Failed to construct 'Blob': The provided value cannot be converted to a sequence.");if(typeof o[Symbol.iterator]!="function")throw new TypeError("Failed to construct 'Blob': The object must have a callable @@iterator property.");if(typeof a!="object"&&typeof a!="function")throw new TypeError("Failed to construct 'Blob': parameter 2 cannot convert to dictionary.");a===null&&(a={});const f=new TextEncoder;for(const p of o){let h;ArrayBuffer.isView(p)?h=new Uint8Array(p.buffer.slice(p.byteOffset,p.byteOffset+p.byteLength)):p instanceof ArrayBuffer?h=new Uint8Array(p.slice(0)):p instanceof ze?h=p:h=f.encode(`${p}`),X(this,bt,O(this,bt)+(ArrayBuffer.isView(h)?h.byteLength:h.size)),O(this,ve).push(h);}X(this,Cr,`${a.endings===void 0?"transparent":a.endings}`);const l=a.type===void 0?"":String(a.type);X(this,zt,/^[\x20-\x7E]*$/.test(l)?l:"");}get size(){return O(this,bt)}get type(){return O(this,zt)}async text(){const o=new TextDecoder;let a="";for await(const f of Wn(O(this,ve),!1))a+=o.decode(f,{stream:!0});return a+=o.decode(),a}async arrayBuffer(){const o=new Uint8Array(this.size);let a=0;for await(const f of Wn(O(this,ve),!1))o.set(f,a),a+=f.length;return o.buffer}stream(){const o=Wn(O(this,ve),!0);return new globalThis.ReadableStream({type:"bytes",async pull(a){const f=await o.next();f.done?a.close():a.enqueue(f.value);},async cancel(){await o.return();}})}slice(o=0,a=this.size,f=""){const{size:l}=this;let p=o<0?Math.max(l+o,0):Math.min(o,l),h=a<0?Math.max(l+a,0):Math.min(a,l);const S=Math.max(h-p,0),v=O(this,ve),w=[];let A=0;for(const b of v){if(A>=S)break;const q=ArrayBuffer.isView(b)?b.byteLength:b.size;if(p&&q<=p)p-=q,h-=q;else {let g;ArrayBuffer.isView(b)?(g=b.subarray(p,Math.min(q,h)),A+=g.byteLength):(g=b.slice(p,Math.min(q,h)),A+=g.size),h-=q,w.push(g),p=0;}}const T=new ze([],{type:String(f).toLowerCase()});return X(T,bt,S),X(T,ve,w),T}get[Symbol.toStringTag](){return "Blob"}static[Symbol.hasInstance](o){return o&&typeof o=="object"&&typeof o.constructor=="function"&&(typeof o.stream=="function"||typeof o.arrayBuffer=="function")&&/^(Blob|File)$/.test(o[Symbol.toStringTag])}},ve=new WeakMap,zt=new WeakMap,bt=new WeakMap,Cr=new WeakMap,n$1(ze,"Blob"),ze);Object.defineProperties(gi.prototype,{size:{enumerable:!0},type:{enumerable:!0},slice:{enumerable:!0}});const ut=gi,Vs=(mt=class extends ut{constructor(a,f,l={}){if(arguments.length<2)throw new TypeError(`Failed to construct 'File': 2 arguments required, but only ${arguments.length} present.`);super(a,l);be(this,It,0);be(this,Ft,"");l===null&&(l={});const p=l.lastModified===void 0?Date.now():Number(l.lastModified);Number.isNaN(p)||X(this,It,p),X(this,Ft,String(f));}get name(){return O(this,Ft)}get lastModified(){return O(this,It)}get[Symbol.toStringTag](){return "File"}static[Symbol.hasInstance](a){return !!a&&a instanceof ut&&/^(File)$/.test(a[Symbol.toStringTag])}},It=new WeakMap,Ft=new WeakMap,n$1(mt,"File"),mt),qn=Vs;/*! formdata-polyfill. MIT License. Jimmy Wärting <https://jimmy.warting.se/opensource> */var{toStringTag:Wt,iterator:Qs,hasInstance:Ys}=Symbol,_i=Math.random,Gs="append,set,get,getAll,delete,keys,values,entries,forEach,constructor".split(","),Si=n$1((i,o,a)=>(i+="",/^(Blob|File)$/.test(o&&o[Wt])?[(a=a!==void 0?a+"":o[Wt]=="File"?o.name:"blob",i),o.name!==a||o[Wt]=="blob"?new qn([o],a,o):o]:[i,o+""]),"f"),On=n$1((i,o)=>(o?i:i.replace(/\r?\n|\r/g,`\r
`)).replace(/\n/g,"%0A").replace(/\r/g,"%0D").replace(/"/g,"%22"),"e$1"),Ue=n$1((i,o,a)=>{if(o.length<a)throw new TypeError(`Failed to execute '${i}' on 'FormData': ${a} arguments required, but only ${o.length} present.`)},"x");const br=(yt=class{constructor(...o){be(this,ee,[]);if(o.length)throw new TypeError("Failed to construct 'FormData': parameter 1 is not of type 'HTMLFormElement'.")}get[Wt](){return "FormData"}[Qs](){return this.entries()}static[Ys](o){return o&&typeof o=="object"&&o[Wt]==="FormData"&&!Gs.some(a=>typeof o[a]!="function")}append(...o){Ue("append",arguments,2),O(this,ee).push(Si(...o));}delete(o){Ue("delete",arguments,1),o+="",X(this,ee,O(this,ee).filter(([a])=>a!==o));}get(o){Ue("get",arguments,1),o+="";for(var a=O(this,ee),f=a.length,l=0;l<f;l++)if(a[l][0]===o)return a[l][1];return null}getAll(o,a){return Ue("getAll",arguments,1),a=[],o+="",O(this,ee).forEach(f=>f[0]===o&&a.push(f[1])),a}has(o){return Ue("has",arguments,1),o+="",O(this,ee).some(a=>a[0]===o)}forEach(o,a){Ue("forEach",arguments,1);for(var[f,l]of this)o.call(a,l,f,this);}set(...o){Ue("set",arguments,2);var a=[],f=!0;o=Si(...o),O(this,ee).forEach(l=>{l[0]===o[0]?f&&(f=!a.push(o)):a.push(l);}),f&&a.push(o),X(this,ee,a);}*entries(){yield*O(this,ee);}*keys(){for(var[o]of this)yield o;}*values(){for(var[,o]of this)yield o;}},ee=new WeakMap,n$1(yt,"FormData"),yt);function Zs(i,o=ut){var a=`${_i()}${_i()}`.replace(/\./g,"").slice(-28).padStart(32,"-"),f=[],l=`--${a}\r
Content-Disposition: form-data; name="`;return i.forEach((p,h)=>typeof p=="string"?f.push(l+On(h)+`"\r
\r
${p.replace(/\r(?!\n)|(?<!\r)\n/g,`\r
`)}\r
`):f.push(l+On(h)+`"; filename="${On(p.name,1)}"\r
Content-Type: ${p.type||"application/octet-stream"}\r
\r
`,p,`\r
`)),f.push(`--${a}--`),new o(f,{type:"multipart/form-data; boundary="+a})}n$1(Zs,"formDataToBlob");const Un=class Un extends Error{constructor(o,a){super(o),Error.captureStackTrace(this,this.constructor),this.type=a;}get name(){return this.constructor.name}get[Symbol.toStringTag](){return this.constructor.name}};n$1(Un,"FetchBaseError");let ft=Un;const xn=class xn extends ft{constructor(o,a,f){super(o,a),f&&(this.code=this.errno=f.code,this.erroredSysCall=f.syscall);}};n$1(xn,"FetchError");let G=xn;const mr=Symbol.toStringTag,wi=n$1(i=>typeof i=="object"&&typeof i.append=="function"&&typeof i.delete=="function"&&typeof i.get=="function"&&typeof i.getAll=="function"&&typeof i.has=="function"&&typeof i.set=="function"&&typeof i.sort=="function"&&i[mr]==="URLSearchParams","isURLSearchParameters"),yr=n$1(i=>i&&typeof i=="object"&&typeof i.arrayBuffer=="function"&&typeof i.type=="string"&&typeof i.stream=="function"&&typeof i.constructor=="function"&&/^(Blob|File)$/.test(i[mr]),"isBlob"),Ks=n$1(i=>typeof i=="object"&&(i[mr]==="AbortSignal"||i[mr]==="EventTarget"),"isAbortSignal"),Js=n$1((i,o)=>{const a=new URL(o).hostname,f=new URL(i).hostname;return a===f||a.endsWith(`.${f}`)},"isDomainOrSubdomain"),Xs=n$1((i,o)=>{const a=new URL(o).protocol,f=new URL(i).protocol;return a===f},"isSameProtocol"),el=promisify(me.pipeline),H$1=Symbol("Body internals"),Nn=class Nn{constructor(o,{size:a=0}={}){let f=null;o===null?o=null:wi(o)?o=Buffer$1.from(o.toString()):yr(o)||Buffer$1.isBuffer(o)||(types.isAnyArrayBuffer(o)?o=Buffer$1.from(o):ArrayBuffer.isView(o)?o=Buffer$1.from(o.buffer,o.byteOffset,o.byteLength):o instanceof me||(o instanceof br?(o=Zs(o),f=o.type.split("=")[1]):o=Buffer$1.from(String(o))));let l=o;Buffer$1.isBuffer(o)?l=me.Readable.from(o):yr(o)&&(l=me.Readable.from(o.stream())),this[H$1]={body:o,stream:l,boundary:f,disturbed:!1,error:null},this.size=a,o instanceof me&&o.on("error",p=>{const h=p instanceof ft?p:new G(`Invalid response body while trying to fetch ${this.url}: ${p.message}`,"system",p);this[H$1].error=h;});}get body(){return this[H$1].stream}get bodyUsed(){return this[H$1].disturbed}async arrayBuffer(){const{buffer:o,byteOffset:a,byteLength:f}=await zn(this);return o.slice(a,a+f)}async formData(){const o=this.headers.get("content-type");if(o.startsWith("application/x-www-form-urlencoded")){const f=new br,l=new URLSearchParams(await this.text());for(const[p,h]of l)f.append(p,h);return f}const{toFormData:a}=await import('../multipart-parser.mjs');return a(this.body,o)}async blob(){const o=this.headers&&this.headers.get("content-type")||this[H$1].body&&this[H$1].body.type||"",a=await this.arrayBuffer();return new ut([a],{type:o})}async json(){const o=await this.text();return JSON.parse(o)}async text(){const o=await zn(this);return new TextDecoder().decode(o)}buffer(){return zn(this)}};n$1(Nn,"Body");let xe=Nn;xe.prototype.buffer=deprecate(xe.prototype.buffer,"Please use 'response.arrayBuffer()' instead of 'response.buffer()'","node-fetch#buffer"),Object.defineProperties(xe.prototype,{body:{enumerable:!0},bodyUsed:{enumerable:!0},arrayBuffer:{enumerable:!0},blob:{enumerable:!0},json:{enumerable:!0},text:{enumerable:!0},data:{get:deprecate(()=>{},"data doesn't exist, use json(), text(), arrayBuffer(), or body instead","https://github.com/node-fetch/node-fetch/issues/1000 (response)")}});async function zn(i){if(i[H$1].disturbed)throw new TypeError(`body used already for: ${i.url}`);if(i[H$1].disturbed=!0,i[H$1].error)throw i[H$1].error;const{body:o}=i;if(o===null)return Buffer$1.alloc(0);if(!(o instanceof me))return Buffer$1.alloc(0);const a=[];let f=0;try{for await(const l of o){if(i.size>0&&f+l.length>i.size){const p=new G(`content size at ${i.url} over limit: ${i.size}`,"max-size");throw o.destroy(p),p}f+=l.length,a.push(l);}}catch(l){throw l instanceof ft?l:new G(`Invalid response body while trying to fetch ${i.url}: ${l.message}`,"system",l)}if(o.readableEnded===!0||o._readableState.ended===!0)try{return a.every(l=>typeof l=="string")?Buffer$1.from(a.join("")):Buffer$1.concat(a,f)}catch(l){throw new G(`Could not create Buffer from response body for ${i.url}: ${l.message}`,"system",l)}else throw new G(`Premature close of server response while trying to fetch ${i.url}`)}n$1(zn,"consumeBody");const In=n$1((i,o)=>{let a,f,{body:l}=i[H$1];if(i.bodyUsed)throw new Error("cannot clone body after it is used");return l instanceof me&&typeof l.getBoundary!="function"&&(a=new PassThrough({highWaterMark:o}),f=new PassThrough({highWaterMark:o}),l.pipe(a),l.pipe(f),i[H$1].stream=a,l=f),l},"clone"),tl=deprecate(i=>i.getBoundary(),"form-data doesn't follow the spec and requires special treatment. Use alternative package","https://github.com/node-fetch/node-fetch/issues/1167"),Ri=n$1((i,o)=>i===null?null:typeof i=="string"?"text/plain;charset=UTF-8":wi(i)?"application/x-www-form-urlencoded;charset=UTF-8":yr(i)?i.type||null:Buffer$1.isBuffer(i)||types.isAnyArrayBuffer(i)||ArrayBuffer.isView(i)?null:i instanceof br?`multipart/form-data; boundary=${o[H$1].boundary}`:i&&typeof i.getBoundary=="function"?`multipart/form-data;boundary=${tl(i)}`:i instanceof me?null:"text/plain;charset=UTF-8","extractContentType"),rl=n$1(i=>{const{body:o}=i[H$1];return o===null?0:yr(o)?o.size:Buffer$1.isBuffer(o)?o.length:o&&typeof o.getLengthSync=="function"&&o.hasKnownLength&&o.hasKnownLength()?o.getLengthSync():null},"getTotalBytes"),nl=n$1(async(i,{body:o})=>{o===null?i.end():await el(o,i);},"writeToStream"),gr=typeof Bt.validateHeaderName=="function"?Bt.validateHeaderName:i=>{if(!/^[\^`\-\w!#$%&'*+.|~]+$/.test(i)){const o=new TypeError(`Header name must be a valid HTTP token [${i}]`);throw Object.defineProperty(o,"code",{value:"ERR_INVALID_HTTP_TOKEN"}),o}},Fn=typeof Bt.validateHeaderValue=="function"?Bt.validateHeaderValue:(i,o)=>{if(/[^\t\u0020-\u007E\u0080-\u00FF]/.test(o)){const a=new TypeError(`Invalid character in header content ["${i}"]`);throw Object.defineProperty(a,"code",{value:"ERR_INVALID_CHAR"}),a}},Pr=class Pr extends URLSearchParams{constructor(o){let a=[];if(o instanceof Pr){const f=o.raw();for(const[l,p]of Object.entries(f))a.push(...p.map(h=>[l,h]));}else if(o!=null)if(typeof o=="object"&&!types.isBoxedPrimitive(o)){const f=o[Symbol.iterator];if(f==null)a.push(...Object.entries(o));else {if(typeof f!="function")throw new TypeError("Header pairs must be iterable");a=[...o].map(l=>{if(typeof l!="object"||types.isBoxedPrimitive(l))throw new TypeError("Each header pair must be an iterable object");return [...l]}).map(l=>{if(l.length!==2)throw new TypeError("Each header pair must be a name/value tuple");return [...l]});}}else throw new TypeError("Failed to construct 'Headers': The provided value is not of type '(sequence<sequence<ByteString>> or record<ByteString, ByteString>)");return a=a.length>0?a.map(([f,l])=>(gr(f),Fn(f,String(l)),[String(f).toLowerCase(),String(l)])):void 0,super(a),new Proxy(this,{get(f,l,p){switch(l){case"append":case"set":return (h,S)=>(gr(h),Fn(h,String(S)),URLSearchParams.prototype[l].call(f,String(h).toLowerCase(),String(S)));case"delete":case"has":case"getAll":return h=>(gr(h),URLSearchParams.prototype[l].call(f,String(h).toLowerCase()));case"keys":return ()=>(f.sort(),new Set(URLSearchParams.prototype.keys.call(f)).keys());default:return Reflect.get(f,l,p)}}})}get[Symbol.toStringTag](){return this.constructor.name}toString(){return Object.prototype.toString.call(this)}get(o){const a=this.getAll(o);if(a.length===0)return null;let f=a.join(", ");return /^content-encoding$/i.test(o)&&(f=f.toLowerCase()),f}forEach(o,a=void 0){for(const f of this.keys())Reflect.apply(o,a,[this.get(f),f,this]);}*values(){for(const o of this.keys())yield this.get(o);}*entries(){for(const o of this.keys())yield [o,this.get(o)];}[Symbol.iterator](){return this.entries()}raw(){return [...this.keys()].reduce((o,a)=>(o[a]=this.getAll(a),o),{})}[Symbol.for("nodejs.util.inspect.custom")](){return [...this.keys()].reduce((o,a)=>{const f=this.getAll(a);return a==="host"?o[a]=f[0]:o[a]=f.length>1?f:f[0],o},{})}};n$1(Pr,"Headers");let ye=Pr;Object.defineProperties(ye.prototype,["get","entries","forEach","values"].reduce((i,o)=>(i[o]={enumerable:!0},i),{}));function ol(i=[]){return new ye(i.reduce((o,a,f,l)=>(f%2===0&&o.push(l.slice(f,f+2)),o),[]).filter(([o,a])=>{try{return gr(o),Fn(o,String(a)),!0}catch{return !1}}))}n$1(ol,"fromRawHeaders");const il=new Set([301,302,303,307,308]),jn=n$1(i=>il.has(i),"isRedirect"),se=Symbol("Response internals"),Ne=class Ne extends xe{constructor(o=null,a={}){super(o,a);const f=a.status!=null?a.status:200,l=new ye(a.headers);if(o!==null&&!l.has("Content-Type")){const p=Ri(o,this);p&&l.append("Content-Type",p);}this[se]={type:"default",url:a.url,status:f,statusText:a.statusText||"",headers:l,counter:a.counter,highWaterMark:a.highWaterMark};}get type(){return this[se].type}get url(){return this[se].url||""}get status(){return this[se].status}get ok(){return this[se].status>=200&&this[se].status<300}get redirected(){return this[se].counter>0}get statusText(){return this[se].statusText}get headers(){return this[se].headers}get highWaterMark(){return this[se].highWaterMark}clone(){return new Ne(In(this,this.highWaterMark),{type:this.type,url:this.url,status:this.status,statusText:this.statusText,headers:this.headers,ok:this.ok,redirected:this.redirected,size:this.size,highWaterMark:this.highWaterMark})}static redirect(o,a=302){if(!jn(a))throw new RangeError('Failed to execute "redirect" on "response": Invalid status code');return new Ne(null,{headers:{location:new URL(o).toString()},status:a})}static error(){const o=new Ne(null,{status:0,statusText:""});return o[se].type="error",o}static json(o=void 0,a={}){const f=JSON.stringify(o);if(f===void 0)throw new TypeError("data is not JSON serializable");const l=new ye(a&&a.headers);return l.has("content-type")||l.set("content-type","application/json"),new Ne(f,{...a,headers:l})}get[Symbol.toStringTag](){return "Response"}};n$1(Ne,"Response");let le=Ne;Object.defineProperties(le.prototype,{type:{enumerable:!0},url:{enumerable:!0},status:{enumerable:!0},ok:{enumerable:!0},redirected:{enumerable:!0},statusText:{enumerable:!0},headers:{enumerable:!0},clone:{enumerable:!0}});const al=n$1(i=>{if(i.search)return i.search;const o=i.href.length-1,a=i.hash||(i.href[o]==="#"?"#":"");return i.href[o-a.length]==="?"?"?":""},"getSearch");function Ti(i,o=!1){return i==null||(i=new URL(i),/^(about|blob|data):$/.test(i.protocol))?"no-referrer":(i.username="",i.password="",i.hash="",o&&(i.pathname="",i.search=""),i)}n$1(Ti,"stripURLForUseAsAReferrer");const Ci=new Set(["","no-referrer","no-referrer-when-downgrade","same-origin","origin","strict-origin","origin-when-cross-origin","strict-origin-when-cross-origin","unsafe-url"]),sl="strict-origin-when-cross-origin";function ll(i){if(!Ci.has(i))throw new TypeError(`Invalid referrerPolicy: ${i}`);return i}n$1(ll,"validateReferrerPolicy");function ul(i){if(/^(http|ws)s:$/.test(i.protocol))return !0;const o=i.host.replace(/(^\[)|(]$)/g,""),a=isIP(o);return a===4&&/^127\./.test(o)||a===6&&/^(((0+:){7})|(::(0+:){0,6}))0*1$/.test(o)?!0:i.host==="localhost"||i.host.endsWith(".localhost")?!1:i.protocol==="file:"}n$1(ul,"isOriginPotentiallyTrustworthy");function ct(i){return /^about:(blank|srcdoc)$/.test(i)||i.protocol==="data:"||/^(blob|filesystem):$/.test(i.protocol)?!0:ul(i)}n$1(ct,"isUrlPotentiallyTrustworthy");function fl(i,{referrerURLCallback:o,referrerOriginCallback:a}={}){if(i.referrer==="no-referrer"||i.referrerPolicy==="")return null;const f=i.referrerPolicy;if(i.referrer==="about:client")return "no-referrer";const l=i.referrer;let p=Ti(l),h=Ti(l,!0);p.toString().length>4096&&(p=h),o&&(p=o(p)),a&&(h=a(h));const S=new URL(i.url);switch(f){case"no-referrer":return "no-referrer";case"origin":return h;case"unsafe-url":return p;case"strict-origin":return ct(p)&&!ct(S)?"no-referrer":h.toString();case"strict-origin-when-cross-origin":return p.origin===S.origin?p:ct(p)&&!ct(S)?"no-referrer":h;case"same-origin":return p.origin===S.origin?p:"no-referrer";case"origin-when-cross-origin":return p.origin===S.origin?p:h;case"no-referrer-when-downgrade":return ct(p)&&!ct(S)?"no-referrer":p;default:throw new TypeError(`Invalid referrerPolicy: ${f}`)}}n$1(fl,"determineRequestsReferrer");function cl(i){const o=(i.get("referrer-policy")||"").split(/[,\s]+/);let a="";for(const f of o)f&&Ci.has(f)&&(a=f);return a}n$1(cl,"parseReferrerPolicyFromHeader");const $=Symbol("Request internals"),qt=n$1(i=>typeof i=="object"&&typeof i[$]=="object","isRequest"),dl=deprecate(()=>{},".data is not a valid RequestInit property, use .body instead","https://github.com/node-fetch/node-fetch/issues/1000 (request)"),vr=class vr extends xe{constructor(o,a={}){let f;if(qt(o)?f=new URL(o.url):(f=new URL(o),o={}),f.username!==""||f.password!=="")throw new TypeError(`${f} is an url with embedded credentials.`);let l=a.method||o.method||"GET";if(/^(delete|get|head|options|post|put)$/i.test(l)&&(l=l.toUpperCase()),!qt(a)&&"data"in a&&dl(),(a.body!=null||qt(o)&&o.body!==null)&&(l==="GET"||l==="HEAD"))throw new TypeError("Request with GET/HEAD method cannot have body");const p=a.body?a.body:qt(o)&&o.body!==null?In(o):null;super(p,{size:a.size||o.size||0});const h=new ye(a.headers||o.headers||{});if(p!==null&&!h.has("Content-Type")){const w=Ri(p,this);w&&h.set("Content-Type",w);}let S=qt(o)?o.signal:null;if("signal"in a&&(S=a.signal),S!=null&&!Ks(S))throw new TypeError("Expected signal to be an instanceof AbortSignal or EventTarget");let v=a.referrer==null?o.referrer:a.referrer;if(v==="")v="no-referrer";else if(v){const w=new URL(v);v=/^about:(\/\/)?client$/.test(w)?"client":w;}else v=void 0;this[$]={method:l,redirect:a.redirect||o.redirect||"follow",headers:h,parsedURL:f,signal:S,referrer:v},this.follow=a.follow===void 0?o.follow===void 0?20:o.follow:a.follow,this.compress=a.compress===void 0?o.compress===void 0?!0:o.compress:a.compress,this.counter=a.counter||o.counter||0,this.agent=a.agent||o.agent,this.highWaterMark=a.highWaterMark||o.highWaterMark||16384,this.insecureHTTPParser=a.insecureHTTPParser||o.insecureHTTPParser||!1,this.referrerPolicy=a.referrerPolicy||o.referrerPolicy||"";}get method(){return this[$].method}get url(){return format(this[$].parsedURL)}get headers(){return this[$].headers}get redirect(){return this[$].redirect}get signal(){return this[$].signal}get referrer(){if(this[$].referrer==="no-referrer")return "";if(this[$].referrer==="client")return "about:client";if(this[$].referrer)return this[$].referrer.toString()}get referrerPolicy(){return this[$].referrerPolicy}set referrerPolicy(o){this[$].referrerPolicy=ll(o);}clone(){return new vr(this)}get[Symbol.toStringTag](){return "Request"}};n$1(vr,"Request");let dt=vr;Object.defineProperties(dt.prototype,{method:{enumerable:!0},url:{enumerable:!0},headers:{enumerable:!0},redirect:{enumerable:!0},clone:{enumerable:!0},signal:{enumerable:!0},referrer:{enumerable:!0},referrerPolicy:{enumerable:!0}});const hl=n$1(i=>{const{parsedURL:o}=i[$],a=new ye(i[$].headers);a.has("Accept")||a.set("Accept","*/*");let f=null;if(i.body===null&&/^(post|put)$/i.test(i.method)&&(f="0"),i.body!==null){const S=rl(i);typeof S=="number"&&!Number.isNaN(S)&&(f=String(S));}f&&a.set("Content-Length",f),i.referrerPolicy===""&&(i.referrerPolicy=sl),i.referrer&&i.referrer!=="no-referrer"?i[$].referrer=fl(i):i[$].referrer="no-referrer",i[$].referrer instanceof URL&&a.set("Referer",i.referrer),a.has("User-Agent")||a.set("User-Agent","node-fetch"),i.compress&&!a.has("Accept-Encoding")&&a.set("Accept-Encoding","gzip, deflate, br");let{agent:l}=i;typeof l=="function"&&(l=l(o));const p=al(o),h={path:o.pathname+p,method:i.method,headers:a[Symbol.for("nodejs.util.inspect.custom")](),insecureHTTPParser:i.insecureHTTPParser,agent:l};return {parsedURL:o,options:h}},"getNodeRequestOptions"),Hn=class Hn extends ft{constructor(o,a="aborted"){super(o,a);}};n$1(Hn,"AbortError");let _r=Hn;/*! node-domexception. MIT License. Jimmy Wärting <https://jimmy.warting.se/opensource> */var Ln,Pi;function pl(){if(Pi)return Ln;if(Pi=1,!globalThis.DOMException)try{const{MessageChannel:i}=require("worker_threads"),o=new i().port1,a=new ArrayBuffer;o.postMessage(a,[a,a]);}catch(i){i.constructor.name==="DOMException"&&(globalThis.DOMException=i.constructor);}return Ln=globalThis.DOMException,Ln}n$1(pl,"requireNodeDomexception");var bl=pl();const ml=f(bl),{stat:$n}=promises;n$1((i,o)=>vi(statSync(i),i,o),"blobFromSync");n$1((i,o)=>$n(i).then(a=>vi(a,i,o)),"blobFrom");n$1((i,o)=>$n(i).then(a=>Ei(a,i,o)),"fileFrom");n$1((i,o)=>Ei(statSync(i),i,o),"fileFromSync");const vi=n$1((i,o,a="")=>new ut([new Sr({path:o,size:i.size,lastModified:i.mtimeMs,start:0})],{type:a}),"fromBlob"),Ei=n$1((i,o,a="")=>new qn([new Sr({path:o,size:i.size,lastModified:i.mtimeMs,start:0})],basename(o),{type:a,lastModified:i.mtimeMs}),"fromFile"),Er=class Er{constructor(o){be(this,He);be(this,Ve);X(this,He,o.path),X(this,Ve,o.start),this.size=o.size,this.lastModified=o.lastModified;}slice(o,a){return new Er({path:O(this,He),lastModified:this.lastModified,size:a-o,start:O(this,Ve)+o})}async*stream(){const{mtimeMs:o}=await $n(O(this,He));if(o>this.lastModified)throw new ml("The requested file could not be read, typically due to permission problems that have occurred after a reference to a file was acquired.","NotReadableError");yield*createReadStream(O(this,He),{start:O(this,Ve),end:O(this,Ve)+this.size-1});}get[Symbol.toStringTag](){return "Blob"}};He=new WeakMap,Ve=new WeakMap,n$1(Er,"BlobDataItem");let Sr=Er;const wl=new Set(["data:","http:","https:"]);async function Ai(i,o){return new Promise((a,f)=>{const l=new dt(i,o),{parsedURL:p,options:h}=hl(l);if(!wl.has(p.protocol))throw new TypeError(`node-fetch cannot load ${i}. URL scheme "${p.protocol.replace(/:$/,"")}" is not supported.`);if(p.protocol==="data:"){const g=Us(l.url),V=new le(g,{headers:{"Content-Type":g.typeFull}});a(V);return}const S=(p.protocol==="https:"?zs:Bt).request,{signal:v}=l;let w=null;const A=n$1(()=>{const g=new _r("The operation was aborted.");f(g),l.body&&l.body instanceof me.Readable&&l.body.destroy(g),!(!w||!w.body)&&w.body.emit("error",g);},"abort");if(v&&v.aborted){A();return}const T=n$1(()=>{A(),q();},"abortAndFinalize"),b=S(p.toString(),h);v&&v.addEventListener("abort",T);const q=n$1(()=>{b.abort(),v&&v.removeEventListener("abort",T);},"finalize");b.on("error",g=>{f(new G(`request to ${l.url} failed, reason: ${g.message}`,"system",g)),q();}),Rl(b,g=>{w&&w.body&&w.body.destroy(g);}),process.version<"v14"&&b.on("socket",g=>{let V;g.prependListener("end",()=>{V=g._eventsCount;}),g.prependListener("close",I=>{if(w&&V<g._eventsCount&&!I){const F=new Error("Premature close");F.code="ERR_STREAM_PREMATURE_CLOSE",w.body.emit("error",F);}});}),b.on("response",g=>{b.setTimeout(0);const V=ol(g.rawHeaders);if(jn(g.statusCode)){const z=V.get("Location");let j=null;try{j=z===null?null:new URL(z,l.url);}catch{if(l.redirect!=="manual"){f(new G(`uri requested responds with an invalid redirect URL: ${z}`,"invalid-redirect")),q();return}}switch(l.redirect){case"error":f(new G(`uri requested responds with a redirect, redirect mode is set to error: ${l.url}`,"no-redirect")),q();return;case"manual":break;case"follow":{if(j===null)break;if(l.counter>=l.follow){f(new G(`maximum redirect reached at: ${l.url}`,"max-redirect")),q();return}const U={headers:new ye(l.headers),follow:l.follow,counter:l.counter+1,agent:l.agent,compress:l.compress,method:l.method,body:In(l),signal:l.signal,size:l.size,referrer:l.referrer,referrerPolicy:l.referrerPolicy};if(!Js(l.url,j)||!Xs(l.url,j))for(const jt of ["authorization","www-authenticate","cookie","cookie2"])U.headers.delete(jt);if(g.statusCode!==303&&l.body&&o.body instanceof me.Readable){f(new G("Cannot follow redirect with body being a readable stream","unsupported-redirect")),q();return}(g.statusCode===303||(g.statusCode===301||g.statusCode===302)&&l.method==="POST")&&(U.method="GET",U.body=void 0,U.headers.delete("content-length"));const D=cl(V);D&&(U.referrerPolicy=D),a(Ai(new dt(j,U))),q();return}default:return f(new TypeError(`Redirect option '${l.redirect}' is not a valid value of RequestRedirect`))}}v&&g.once("end",()=>{v.removeEventListener("abort",T);});let I=pipeline(g,new PassThrough,z=>{z&&f(z);});process.version<"v12.10"&&g.on("aborted",T);const F={url:l.url,status:g.statusCode,statusText:g.statusMessage,headers:V,size:l.size,counter:l.counter,highWaterMark:l.highWaterMark},Q=V.get("Content-Encoding");if(!l.compress||l.method==="HEAD"||Q===null||g.statusCode===204||g.statusCode===304){w=new le(I,F),a(w);return}const ge={flush:st.Z_SYNC_FLUSH,finishFlush:st.Z_SYNC_FLUSH};if(Q==="gzip"||Q==="x-gzip"){I=pipeline(I,st.createGunzip(ge),z=>{z&&f(z);}),w=new le(I,F),a(w);return}if(Q==="deflate"||Q==="x-deflate"){const z=pipeline(g,new PassThrough,j=>{j&&f(j);});z.once("data",j=>{(j[0]&15)===8?I=pipeline(I,st.createInflate(),U=>{U&&f(U);}):I=pipeline(I,st.createInflateRaw(),U=>{U&&f(U);}),w=new le(I,F),a(w);}),z.once("end",()=>{w||(w=new le(I,F),a(w));});return}if(Q==="br"){I=pipeline(I,st.createBrotliDecompress(),z=>{z&&f(z);}),w=new le(I,F),a(w);return}w=new le(I,F),a(w);}),nl(b,l).catch(f);})}n$1(Ai,"fetch$1");function Rl(i,o){const a=Buffer$1.from(`0\r
\r
`);let f=!1,l=!1,p;i.on("response",h=>{const{headers:S}=h;f=S["transfer-encoding"]==="chunked"&&!S["content-length"];}),i.on("socket",h=>{const S=n$1(()=>{if(f&&!l){const w=new Error("Premature close");w.code="ERR_STREAM_PREMATURE_CLOSE",o(w);}},"onSocketClose"),v=n$1(w=>{l=Buffer$1.compare(w.slice(-5),a)===0,!l&&p&&(l=Buffer$1.compare(p.slice(-3),a.slice(0,3))===0&&Buffer$1.compare(w.slice(-2),a.slice(3))===0),p=w;},"onData");h.prependListener("close",S),h.on("data",v),i.on("close",()=>{h.removeListener("close",S),h.removeListener("data",v);});});}n$1(Rl,"fixResponseChunkedTransferBadEnding");const Bi=new WeakMap,Dn=new WeakMap;function W$1(i){const o=Bi.get(i);return console.assert(o!=null,"'this' is expected an Event object, but got",i),o}n$1(W$1,"pd");function ki(i){if(i.passiveListener!=null){typeof console<"u"&&typeof console.error=="function"&&console.error("Unable to preventDefault inside passive event listener invocation.",i.passiveListener);return}i.event.cancelable&&(i.canceled=!0,typeof i.event.preventDefault=="function"&&i.event.preventDefault());}n$1(ki,"setCancelFlag");function ht(i,o){Bi.set(this,{eventTarget:i,event:o,eventPhase:2,currentTarget:i,canceled:!1,stopped:!1,immediateStopped:!1,passiveListener:null,timeStamp:o.timeStamp||Date.now()}),Object.defineProperty(this,"isTrusted",{value:!1,enumerable:!0});const a=Object.keys(o);for(let f=0;f<a.length;++f){const l=a[f];l in this||Object.defineProperty(this,l,Wi(l));}}n$1(ht,"Event"),ht.prototype={get type(){return W$1(this).event.type},get target(){return W$1(this).eventTarget},get currentTarget(){return W$1(this).currentTarget},composedPath(){const i=W$1(this).currentTarget;return i==null?[]:[i]},get NONE(){return 0},get CAPTURING_PHASE(){return 1},get AT_TARGET(){return 2},get BUBBLING_PHASE(){return 3},get eventPhase(){return W$1(this).eventPhase},stopPropagation(){const i=W$1(this);i.stopped=!0,typeof i.event.stopPropagation=="function"&&i.event.stopPropagation();},stopImmediatePropagation(){const i=W$1(this);i.stopped=!0,i.immediateStopped=!0,typeof i.event.stopImmediatePropagation=="function"&&i.event.stopImmediatePropagation();},get bubbles(){return !!W$1(this).event.bubbles},get cancelable(){return !!W$1(this).event.cancelable},preventDefault(){ki(W$1(this));},get defaultPrevented(){return W$1(this).canceled},get composed(){return !!W$1(this).event.composed},get timeStamp(){return W$1(this).timeStamp},get srcElement(){return W$1(this).eventTarget},get cancelBubble(){return W$1(this).stopped},set cancelBubble(i){if(!i)return;const o=W$1(this);o.stopped=!0,typeof o.event.cancelBubble=="boolean"&&(o.event.cancelBubble=!0);},get returnValue(){return !W$1(this).canceled},set returnValue(i){i||ki(W$1(this));},initEvent(){}},Object.defineProperty(ht.prototype,"constructor",{value:ht,configurable:!0,writable:!0});function Wi(i){return {get(){return W$1(this).event[i]},set(o){W$1(this).event[i]=o;},configurable:!0,enumerable:!0}}n$1(Wi,"defineRedirectDescriptor");function Tl(i){return {value(){const o=W$1(this).event;return o[i].apply(o,arguments)},configurable:!0,enumerable:!0}}n$1(Tl,"defineCallDescriptor");function Cl(i,o){const a=Object.keys(o);if(a.length===0)return i;function f(l,p){i.call(this,l,p);}n$1(f,"CustomEvent"),f.prototype=Object.create(i.prototype,{constructor:{value:f,configurable:!0,writable:!0}});for(let l=0;l<a.length;++l){const p=a[l];if(!(p in i.prototype)){const S=typeof Object.getOwnPropertyDescriptor(o,p).value=="function";Object.defineProperty(f.prototype,p,S?Tl(p):Wi(p));}}return f}n$1(Cl,"defineWrapper");function qi(i){if(i==null||i===Object.prototype)return ht;let o=Dn.get(i);return o==null&&(o=Cl(qi(Object.getPrototypeOf(i)),i),Dn.set(i,o)),o}n$1(qi,"getWrapper");function Pl(i,o){const a=qi(Object.getPrototypeOf(o));return new a(i,o)}n$1(Pl,"wrapEvent");function vl(i){return W$1(i).immediateStopped}n$1(vl,"isStopped");function El(i,o){W$1(i).eventPhase=o;}n$1(El,"setEventPhase");function Al(i,o){W$1(i).currentTarget=o;}n$1(Al,"setCurrentTarget");function Oi(i,o){W$1(i).passiveListener=o;}n$1(Oi,"setPassiveListener");const zi=new WeakMap,Ii=1,Fi=2,wr=3;function Rr(i){return i!==null&&typeof i=="object"}n$1(Rr,"isObject");function Ot(i){const o=zi.get(i);if(o==null)throw new TypeError("'this' is expected an EventTarget object, but got another value.");return o}n$1(Ot,"getListeners");function Bl(i){return {get(){let a=Ot(this).get(i);for(;a!=null;){if(a.listenerType===wr)return a.listener;a=a.next;}return null},set(o){typeof o!="function"&&!Rr(o)&&(o=null);const a=Ot(this);let f=null,l=a.get(i);for(;l!=null;)l.listenerType===wr?f!==null?f.next=l.next:l.next!==null?a.set(i,l.next):a.delete(i):f=l,l=l.next;if(o!==null){const p={listener:o,listenerType:wr,passive:!1,once:!1,next:null};f===null?a.set(i,p):f.next=p;}},configurable:!0,enumerable:!0}}n$1(Bl,"defineEventAttributeDescriptor");function ji(i,o){Object.defineProperty(i,`on${o}`,Bl(o));}n$1(ji,"defineEventAttribute");function Li(i){function o(){Pe.call(this);}n$1(o,"CustomEventTarget"),o.prototype=Object.create(Pe.prototype,{constructor:{value:o,configurable:!0,writable:!0}});for(let a=0;a<i.length;++a)ji(o.prototype,i[a]);return o}n$1(Li,"defineCustomEventTarget");function Pe(){if(this instanceof Pe){zi.set(this,new Map);return}if(arguments.length===1&&Array.isArray(arguments[0]))return Li(arguments[0]);if(arguments.length>0){const i=new Array(arguments.length);for(let o=0;o<arguments.length;++o)i[o]=arguments[o];return Li(i)}throw new TypeError("Cannot call a class as a function")}n$1(Pe,"EventTarget"),Pe.prototype={addEventListener(i,o,a){if(o==null)return;if(typeof o!="function"&&!Rr(o))throw new TypeError("'listener' should be a function or an object.");const f=Ot(this),l=Rr(a),h=(l?!!a.capture:!!a)?Ii:Fi,S={listener:o,listenerType:h,passive:l&&!!a.passive,once:l&&!!a.once,next:null};let v=f.get(i);if(v===void 0){f.set(i,S);return}let w=null;for(;v!=null;){if(v.listener===o&&v.listenerType===h)return;w=v,v=v.next;}w.next=S;},removeEventListener(i,o,a){if(o==null)return;const f=Ot(this),p=(Rr(a)?!!a.capture:!!a)?Ii:Fi;let h=null,S=f.get(i);for(;S!=null;){if(S.listener===o&&S.listenerType===p){h!==null?h.next=S.next:S.next!==null?f.set(i,S.next):f.delete(i);return}h=S,S=S.next;}},dispatchEvent(i){if(i==null||typeof i.type!="string")throw new TypeError('"event.type" should be a string.');const o=Ot(this),a=i.type;let f=o.get(a);if(f==null)return !0;const l=Pl(this,i);let p=null;for(;f!=null;){if(f.once?p!==null?p.next=f.next:f.next!==null?o.set(a,f.next):o.delete(a):p=f,Oi(l,f.passive?f.listener:null),typeof f.listener=="function")try{f.listener.call(this,l);}catch(h){typeof console<"u"&&typeof console.error=="function"&&console.error(h);}else f.listenerType!==wr&&typeof f.listener.handleEvent=="function"&&f.listener.handleEvent(l);if(vl(l))break;f=f.next;}return Oi(l,null),El(l,0),Al(l,null),!l.defaultPrevented}},Object.defineProperty(Pe.prototype,"constructor",{value:Pe,configurable:!0,writable:!0});const Vn=class Vn extends Pe{constructor(){throw super(),new TypeError("AbortSignal cannot be constructed directly")}get aborted(){const o=Tr.get(this);if(typeof o!="boolean")throw new TypeError(`Expected 'this' to be an 'AbortSignal' object, but got ${this===null?"null":typeof this}`);return o}};n$1(Vn,"AbortSignal");let pt=Vn;ji(pt.prototype,"abort");function kl(){const i=Object.create(pt.prototype);return Pe.call(i),Tr.set(i,!1),i}n$1(kl,"createAbortSignal");function Wl(i){Tr.get(i)===!1&&(Tr.set(i,!0),i.dispatchEvent({type:"abort"}));}n$1(Wl,"abortSignal");const Tr=new WeakMap;Object.defineProperties(pt.prototype,{aborted:{enumerable:!0}}),typeof Symbol=="function"&&typeof Symbol.toStringTag=="symbol"&&Object.defineProperty(pt.prototype,Symbol.toStringTag,{configurable:!0,value:"AbortSignal"});let Mn=(gt=class{constructor(){$i.set(this,kl());}get signal(){return Di(this)}abort(){Wl(Di(this));}},n$1(gt,"AbortController"),gt);const $i=new WeakMap;function Di(i){const o=$i.get(i);if(o==null)throw new TypeError(`Expected 'this' to be an 'AbortController' object, but got ${i===null?"null":typeof i}`);return o}n$1(Di,"getSignal"),Object.defineProperties(Mn.prototype,{signal:{enumerable:!0},abort:{enumerable:!0}}),typeof Symbol=="function"&&typeof Symbol.toStringTag=="symbol"&&Object.defineProperty(Mn.prototype,Symbol.toStringTag,{configurable:!0,value:"AbortController"});var ql=Object.defineProperty,Ol=n$1((i,o)=>ql(i,"name",{value:o,configurable:!0}),"e");const Mi=Ai;Ui();function Ui(){!globalThis.process?.versions?.node&&!globalThis.process?.env?.DISABLE_NODE_FETCH_NATIVE_WARN&&console.warn("[node-fetch-native] Node.js compatible build of `node-fetch-native` is being used in a non-Node.js environment. Please make sure you are using proper export conditions or report this issue to https://github.com/unjs/node-fetch-native. You can set `process.env.DISABLE_NODE_FETCH_NATIVE_WARN` to disable this warning.");}n$1(Ui,"s"),Ol(Ui,"checkNodeEnvironment");

var i=Object.defineProperty;var e=(r,t)=>i(r,"name",{value:t,configurable:!0});var c=Object.defineProperty,u=e((r,t)=>c(r,"name",{value:t,configurable:!0}),"a");function o$1(r,t){if(!(r in globalThis))try{globalThis[r]=t;}catch{}}e(o$1,"e"),u(o$1,"polyfill"),o$1("fetch",Mi),o$1("Blob",ut),o$1("File",qn),o$1("FormData",br),o$1("Headers",ye),o$1("Request",dt),o$1("Response",le),o$1("AbortController",Mn);

const suspectProtoRx = /"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/;
const suspectConstructorRx = /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/;
const JsonSigRx = /^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;
function jsonParseTransform(key, value) {
  if (key === "__proto__" || key === "constructor" && value && typeof value === "object" && "prototype" in value) {
    warnKeyDropped(key);
    return;
  }
  return value;
}
function warnKeyDropped(key) {
  console.warn(`[destr] Dropping "${key}" key to prevent prototype pollution.`);
}
function destr(value, options = {}) {
  if (typeof value !== "string") {
    return value;
  }
  if (value[0] === '"' && value[value.length - 1] === '"' && value.indexOf("\\") === -1) {
    return value.slice(1, -1);
  }
  const _value = value.trim();
  if (_value.length <= 9) {
    switch (_value.toLowerCase()) {
      case "true": {
        return true;
      }
      case "false": {
        return false;
      }
      case "undefined": {
        return void 0;
      }
      case "null": {
        return null;
      }
      case "nan": {
        return Number.NaN;
      }
      case "infinity": {
        return Number.POSITIVE_INFINITY;
      }
      case "-infinity": {
        return Number.NEGATIVE_INFINITY;
      }
    }
  }
  if (!JsonSigRx.test(value)) {
    if (options.strict) {
      throw new SyntaxError("[destr] Invalid JSON");
    }
    return value;
  }
  try {
    if (suspectProtoRx.test(value) || suspectConstructorRx.test(value)) {
      if (options.strict) {
        throw new Error("[destr] Possible prototype pollution");
      }
      return JSON.parse(value, jsonParseTransform);
    }
    return JSON.parse(value);
  } catch (error) {
    if (options.strict) {
      throw error;
    }
    return value;
  }
}

const HASH_RE = /#/g;
const AMPERSAND_RE = /&/g;
const SLASH_RE = /\//g;
const EQUAL_RE = /=/g;
const PLUS_RE = /\+/g;
const ENC_CARET_RE = /%5e/gi;
const ENC_BACKTICK_RE = /%60/gi;
const ENC_PIPE_RE = /%7c/gi;
const ENC_SPACE_RE = /%20/gi;
const ENC_SLASH_RE = /%2f/gi;
function encode$1(text) {
  return encodeURI("" + text).replace(ENC_PIPE_RE, "|");
}
function encodeQueryValue(input) {
  return encode$1(typeof input === "string" ? input : JSON.stringify(input)).replace(PLUS_RE, "%2B").replace(ENC_SPACE_RE, "+").replace(HASH_RE, "%23").replace(AMPERSAND_RE, "%26").replace(ENC_BACKTICK_RE, "`").replace(ENC_CARET_RE, "^").replace(SLASH_RE, "%2F");
}
function encodeQueryKey(text) {
  return encodeQueryValue(text).replace(EQUAL_RE, "%3D");
}
function decode$1(text = "") {
  try {
    return decodeURIComponent("" + text);
  } catch {
    return "" + text;
  }
}
function decodePath(text) {
  return decode$1(text.replace(ENC_SLASH_RE, "%252F"));
}
function decodeQueryKey(text) {
  return decode$1(text.replace(PLUS_RE, " "));
}
function decodeQueryValue(text) {
  return decode$1(text.replace(PLUS_RE, " "));
}

function parseQuery(parametersString = "") {
  const object = /* @__PURE__ */ Object.create(null);
  if (parametersString[0] === "?") {
    parametersString = parametersString.slice(1);
  }
  for (const parameter of parametersString.split("&")) {
    const s = parameter.match(/([^=]+)=?(.*)/) || [];
    if (s.length < 2) {
      continue;
    }
    const key = decodeQueryKey(s[1]);
    if (key === "__proto__" || key === "constructor") {
      continue;
    }
    const value = decodeQueryValue(s[2] || "");
    if (object[key] === void 0) {
      object[key] = value;
    } else if (Array.isArray(object[key])) {
      object[key].push(value);
    } else {
      object[key] = [object[key], value];
    }
  }
  return object;
}
function encodeQueryItem(key, value) {
  if (typeof value === "number" || typeof value === "boolean") {
    value = String(value);
  }
  if (!value) {
    return encodeQueryKey(key);
  }
  if (Array.isArray(value)) {
    return value.map(
      (_value) => `${encodeQueryKey(key)}=${encodeQueryValue(_value)}`
    ).join("&");
  }
  return `${encodeQueryKey(key)}=${encodeQueryValue(value)}`;
}
function stringifyQuery(query) {
  return Object.keys(query).filter((k) => query[k] !== void 0).map((k) => encodeQueryItem(k, query[k])).filter(Boolean).join("&");
}

const PROTOCOL_STRICT_REGEX = /^[\s\w\0+.-]{2,}:([/\\]{1,2})/;
const PROTOCOL_REGEX = /^[\s\w\0+.-]{2,}:([/\\]{2})?/;
const PROTOCOL_RELATIVE_REGEX = /^([/\\]\s*){2,}[^/\\]/;
const TRAILING_SLASH_RE = /\/$|\/\?|\/#/;
const JOIN_LEADING_SLASH_RE = /^\.?\//;
function hasProtocol(inputString, opts = {}) {
  if (typeof opts === "boolean") {
    opts = { acceptRelative: opts };
  }
  if (opts.strict) {
    return PROTOCOL_STRICT_REGEX.test(inputString);
  }
  return PROTOCOL_REGEX.test(inputString) || (opts.acceptRelative ? PROTOCOL_RELATIVE_REGEX.test(inputString) : false);
}
function hasTrailingSlash(input = "", respectQueryAndFragment) {
  if (!respectQueryAndFragment) {
    return input.endsWith("/");
  }
  return TRAILING_SLASH_RE.test(input);
}
function withoutTrailingSlash(input = "", respectQueryAndFragment) {
  if (!respectQueryAndFragment) {
    return (hasTrailingSlash(input) ? input.slice(0, -1) : input) || "/";
  }
  if (!hasTrailingSlash(input, true)) {
    return input || "/";
  }
  let path = input;
  let fragment = "";
  const fragmentIndex = input.indexOf("#");
  if (fragmentIndex !== -1) {
    path = input.slice(0, fragmentIndex);
    fragment = input.slice(fragmentIndex);
  }
  const [s0, ...s] = path.split("?");
  const cleanPath = s0.endsWith("/") ? s0.slice(0, -1) : s0;
  return (cleanPath || "/") + (s.length > 0 ? `?${s.join("?")}` : "") + fragment;
}
function withTrailingSlash(input = "", respectQueryAndFragment) {
  if (!respectQueryAndFragment) {
    return input.endsWith("/") ? input : input + "/";
  }
  if (hasTrailingSlash(input, true)) {
    return input || "/";
  }
  let path = input;
  let fragment = "";
  const fragmentIndex = input.indexOf("#");
  if (fragmentIndex !== -1) {
    path = input.slice(0, fragmentIndex);
    fragment = input.slice(fragmentIndex);
    if (!path) {
      return fragment;
    }
  }
  const [s0, ...s] = path.split("?");
  return s0 + "/" + (s.length > 0 ? `?${s.join("?")}` : "") + fragment;
}
function hasLeadingSlash(input = "") {
  return input.startsWith("/");
}
function withLeadingSlash(input = "") {
  return hasLeadingSlash(input) ? input : "/" + input;
}
function withBase(input, base) {
  if (isEmptyURL(base) || hasProtocol(input)) {
    return input;
  }
  const _base = withoutTrailingSlash(base);
  if (input.startsWith(_base)) {
    return input;
  }
  return joinURL(_base, input);
}
function withoutBase(input, base) {
  if (isEmptyURL(base)) {
    return input;
  }
  const _base = withoutTrailingSlash(base);
  if (!input.startsWith(_base)) {
    return input;
  }
  const trimmed = input.slice(_base.length);
  return trimmed[0] === "/" ? trimmed : "/" + trimmed;
}
function withQuery(input, query) {
  const parsed = parseURL(input);
  const mergedQuery = { ...parseQuery(parsed.search), ...query };
  parsed.search = stringifyQuery(mergedQuery);
  return stringifyParsedURL(parsed);
}
function getQuery$1(input) {
  return parseQuery(parseURL(input).search);
}
function isEmptyURL(url) {
  return !url || url === "/";
}
function isNonEmptyURL(url) {
  return url && url !== "/";
}
function joinURL(base, ...input) {
  let url = base || "";
  for (const segment of input.filter((url2) => isNonEmptyURL(url2))) {
    if (url) {
      const _segment = segment.replace(JOIN_LEADING_SLASH_RE, "");
      url = withTrailingSlash(url) + _segment;
    } else {
      url = segment;
    }
  }
  return url;
}

const protocolRelative = Symbol.for("ufo:protocolRelative");
function parseURL(input = "", defaultProto) {
  const _specialProtoMatch = input.match(
    /^[\s\0]*(blob:|data:|javascript:|vbscript:)(.*)/i
  );
  if (_specialProtoMatch) {
    const [, _proto, _pathname = ""] = _specialProtoMatch;
    return {
      protocol: _proto.toLowerCase(),
      pathname: _pathname,
      href: _proto + _pathname,
      auth: "",
      host: "",
      search: "",
      hash: ""
    };
  }
  if (!hasProtocol(input, { acceptRelative: true })) {
    return defaultProto ? parseURL(defaultProto + input) : parsePath(input);
  }
  const [, protocol = "", auth, hostAndPath = ""] = input.replace(/\\/g, "/").match(/^[\s\0]*([\w+.-]{2,}:)?\/\/([^/@]+@)?(.*)/) || [];
  let [, host = "", path = ""] = hostAndPath.match(/([^#/?]*)(.*)?/) || [];
  if (protocol === "file:") {
    path = path.replace(/\/(?=[A-Za-z]:)/, "");
  }
  const { pathname, search, hash } = parsePath(path);
  return {
    protocol: protocol.toLowerCase(),
    auth: auth ? auth.slice(0, Math.max(0, auth.length - 1)) : "",
    host,
    pathname,
    search,
    hash,
    [protocolRelative]: !protocol
  };
}
function parsePath(input = "") {
  const [pathname = "", search = "", hash = ""] = (input.match(/([^#?]*)(\?[^#]*)?(#.*)?/) || []).splice(1);
  return {
    pathname,
    search,
    hash
  };
}
function stringifyParsedURL(parsed) {
  const pathname = parsed.pathname || "";
  const search = parsed.search ? (parsed.search.startsWith("?") ? "" : "?") + parsed.search : "";
  const hash = parsed.hash || "";
  const auth = parsed.auth ? parsed.auth + "@" : "";
  const host = parsed.host || "";
  const proto = parsed.protocol || parsed[protocolRelative] ? (parsed.protocol || "") + "//" : "";
  return proto + auth + host + pathname + search + hash;
}

const fieldContentRegExp = /^[\u0009\u0020-\u007E\u0080-\u00FF]+$/;
function parse(str, options) {
  if (typeof str !== "string") {
    throw new TypeError("argument str must be a string");
  }
  const obj = {};
  const opt = options || {};
  const dec = opt.decode || decode;
  let index = 0;
  while (index < str.length) {
    const eqIdx = str.indexOf("=", index);
    if (eqIdx === -1) {
      break;
    }
    let endIdx = str.indexOf(";", index);
    if (endIdx === -1) {
      endIdx = str.length;
    } else if (endIdx < eqIdx) {
      index = str.lastIndexOf(";", eqIdx - 1) + 1;
      continue;
    }
    const key = str.slice(index, eqIdx).trim();
    if (void 0 === obj[key]) {
      let val = str.slice(eqIdx + 1, endIdx).trim();
      if (val.codePointAt(0) === 34) {
        val = val.slice(1, -1);
      }
      obj[key] = tryDecode(val, dec);
    }
    index = endIdx + 1;
  }
  return obj;
}
function serialize(name, value, options) {
  const opt = options || {};
  const enc = opt.encode || encode;
  if (typeof enc !== "function") {
    throw new TypeError("option encode is invalid");
  }
  if (!fieldContentRegExp.test(name)) {
    throw new TypeError("argument name is invalid");
  }
  const encodedValue = enc(value);
  if (encodedValue && !fieldContentRegExp.test(encodedValue)) {
    throw new TypeError("argument val is invalid");
  }
  let str = name + "=" + encodedValue;
  if (void 0 !== opt.maxAge && opt.maxAge !== null) {
    const maxAge = opt.maxAge - 0;
    if (Number.isNaN(maxAge) || !Number.isFinite(maxAge)) {
      throw new TypeError("option maxAge is invalid");
    }
    str += "; Max-Age=" + Math.floor(maxAge);
  }
  if (opt.domain) {
    if (!fieldContentRegExp.test(opt.domain)) {
      throw new TypeError("option domain is invalid");
    }
    str += "; Domain=" + opt.domain;
  }
  if (opt.path) {
    if (!fieldContentRegExp.test(opt.path)) {
      throw new TypeError("option path is invalid");
    }
    str += "; Path=" + opt.path;
  }
  if (opt.expires) {
    if (!isDate(opt.expires) || Number.isNaN(opt.expires.valueOf())) {
      throw new TypeError("option expires is invalid");
    }
    str += "; Expires=" + opt.expires.toUTCString();
  }
  if (opt.httpOnly) {
    str += "; HttpOnly";
  }
  if (opt.secure) {
    str += "; Secure";
  }
  if (opt.priority) {
    const priority = typeof opt.priority === "string" ? opt.priority.toLowerCase() : opt.priority;
    switch (priority) {
      case "low":
        str += "; Priority=Low";
        break;
      case "medium":
        str += "; Priority=Medium";
        break;
      case "high":
        str += "; Priority=High";
        break;
      default:
        throw new TypeError("option priority is invalid");
    }
  }
  if (opt.sameSite) {
    const sameSite = typeof opt.sameSite === "string" ? opt.sameSite.toLowerCase() : opt.sameSite;
    switch (sameSite) {
      case true:
        str += "; SameSite=Strict";
        break;
      case "lax":
        str += "; SameSite=Lax";
        break;
      case "strict":
        str += "; SameSite=Strict";
        break;
      case "none":
        str += "; SameSite=None";
        break;
      default:
        throw new TypeError("option sameSite is invalid");
    }
  }
  return str;
}
function isDate(val) {
  return Object.prototype.toString.call(val) === "[object Date]" || val instanceof Date;
}
function tryDecode(str, decode2) {
  try {
    return decode2(str);
  } catch {
    return str;
  }
}
function decode(str) {
  return str.includes("%") ? decodeURIComponent(str) : str;
}
function encode(val) {
  return encodeURIComponent(val);
}

const NODE_TYPES = {
  NORMAL: 0,
  WILDCARD: 1,
  PLACEHOLDER: 2
};

function createRouter$1(options = {}) {
  const ctx = {
    options,
    rootNode: createRadixNode(),
    staticRoutesMap: {}
  };
  const normalizeTrailingSlash = (p) => options.strictTrailingSlash ? p : p.replace(/\/$/, "") || "/";
  if (options.routes) {
    for (const path in options.routes) {
      insert(ctx, normalizeTrailingSlash(path), options.routes[path]);
    }
  }
  return {
    ctx,
    // @ts-ignore
    lookup: (path) => lookup(ctx, normalizeTrailingSlash(path)),
    insert: (path, data) => insert(ctx, normalizeTrailingSlash(path), data),
    remove: (path) => remove(ctx, normalizeTrailingSlash(path))
  };
}
function lookup(ctx, path) {
  const staticPathNode = ctx.staticRoutesMap[path];
  if (staticPathNode) {
    return staticPathNode.data;
  }
  const sections = path.split("/");
  const params = {};
  let paramsFound = false;
  let wildcardNode = null;
  let node = ctx.rootNode;
  let wildCardParam = null;
  for (let i = 0; i < sections.length; i++) {
    const section = sections[i];
    if (node.wildcardChildNode !== null) {
      wildcardNode = node.wildcardChildNode;
      wildCardParam = sections.slice(i).join("/");
    }
    const nextNode = node.children.get(section);
    if (nextNode !== void 0) {
      node = nextNode;
    } else {
      node = node.placeholderChildNode;
      if (node !== null) {
        params[node.paramName] = section;
        paramsFound = true;
      } else {
        break;
      }
    }
  }
  if ((node === null || node.data === null) && wildcardNode !== null) {
    node = wildcardNode;
    params[node.paramName || "_"] = wildCardParam;
    paramsFound = true;
  }
  if (!node) {
    return null;
  }
  if (paramsFound) {
    return {
      ...node.data,
      params: paramsFound ? params : void 0
    };
  }
  return node.data;
}
function insert(ctx, path, data) {
  let isStaticRoute = true;
  const sections = path.split("/");
  let node = ctx.rootNode;
  let _unnamedPlaceholderCtr = 0;
  for (const section of sections) {
    let childNode;
    if (childNode = node.children.get(section)) {
      node = childNode;
    } else {
      const type = getNodeType(section);
      childNode = createRadixNode({ type, parent: node });
      node.children.set(section, childNode);
      if (type === NODE_TYPES.PLACEHOLDER) {
        childNode.paramName = section === "*" ? `_${_unnamedPlaceholderCtr++}` : section.slice(1);
        node.placeholderChildNode = childNode;
        isStaticRoute = false;
      } else if (type === NODE_TYPES.WILDCARD) {
        node.wildcardChildNode = childNode;
        childNode.paramName = section.slice(
          3
          /* "**:" */
        ) || "_";
        isStaticRoute = false;
      }
      node = childNode;
    }
  }
  node.data = data;
  if (isStaticRoute === true) {
    ctx.staticRoutesMap[path] = node;
  }
  return node;
}
function remove(ctx, path) {
  let success = false;
  const sections = path.split("/");
  let node = ctx.rootNode;
  for (const section of sections) {
    node = node.children.get(section);
    if (!node) {
      return success;
    }
  }
  if (node.data) {
    const lastSection = sections[sections.length - 1];
    node.data = null;
    if (Object.keys(node.children).length === 0) {
      const parentNode = node.parent;
      parentNode.children.delete(lastSection);
      parentNode.wildcardChildNode = null;
      parentNode.placeholderChildNode = null;
    }
    success = true;
  }
  return success;
}
function createRadixNode(options = {}) {
  return {
    type: options.type || NODE_TYPES.NORMAL,
    parent: options.parent || null,
    children: /* @__PURE__ */ new Map(),
    data: options.data || null,
    paramName: options.paramName || null,
    wildcardChildNode: null,
    placeholderChildNode: null
  };
}
function getNodeType(str) {
  if (str.startsWith("**")) {
    return NODE_TYPES.WILDCARD;
  }
  if (str[0] === ":" || str === "*") {
    return NODE_TYPES.PLACEHOLDER;
  }
  return NODE_TYPES.NORMAL;
}

function toRouteMatcher(router) {
  const table = _routerNodeToTable("", router.ctx.rootNode);
  return _createMatcher(table);
}
function _createMatcher(table) {
  return {
    ctx: { table },
    matchAll: (path) => _matchRoutes(path, table)
  };
}
function _createRouteTable() {
  return {
    static: /* @__PURE__ */ new Map(),
    wildcard: /* @__PURE__ */ new Map(),
    dynamic: /* @__PURE__ */ new Map()
  };
}
function _matchRoutes(path, table) {
  const matches = [];
  for (const [key, value] of _sortRoutesMap(table.wildcard)) {
    if (path.startsWith(key)) {
      matches.push(value);
    }
  }
  for (const [key, value] of _sortRoutesMap(table.dynamic)) {
    if (path.startsWith(key + "/")) {
      const subPath = "/" + path.slice(key.length).split("/").splice(2).join("/");
      matches.push(..._matchRoutes(subPath, value));
    }
  }
  const staticMatch = table.static.get(path);
  if (staticMatch) {
    matches.push(staticMatch);
  }
  return matches.filter(Boolean);
}
function _sortRoutesMap(m) {
  return [...m.entries()].sort((a, b) => a[0].length - b[0].length);
}
function _routerNodeToTable(initialPath, initialNode) {
  const table = _createRouteTable();
  function _addNode(path, node) {
    if (path) {
      if (node.type === NODE_TYPES.NORMAL && !(path.includes("*") || path.includes(":"))) {
        table.static.set(path, node.data);
      } else if (node.type === NODE_TYPES.WILDCARD) {
        table.wildcard.set(path.replace("/**", ""), node.data);
      } else if (node.type === NODE_TYPES.PLACEHOLDER) {
        const subTable = _routerNodeToTable("", node);
        if (node.data) {
          subTable.static.set("/", node.data);
        }
        table.dynamic.set(path.replace(/\/\*|\/:\w+/, ""), subTable);
        return;
      }
    }
    for (const [childPath, child] of node.children.entries()) {
      _addNode(`${path}/${childPath}`.replace("//", "/"), child);
    }
  }
  _addNode(initialPath, initialNode);
  return table;
}

function isPlainObject(value) {
  if (value === null || typeof value !== "object") {
    return false;
  }
  const prototype = Object.getPrototypeOf(value);
  if (prototype !== null && prototype !== Object.prototype && Object.getPrototypeOf(prototype) !== null) {
    return false;
  }
  if (Symbol.iterator in value) {
    return false;
  }
  if (Symbol.toStringTag in value) {
    return Object.prototype.toString.call(value) === "[object Module]";
  }
  return true;
}

function _defu(baseObject, defaults, namespace = ".", merger) {
  if (!isPlainObject(defaults)) {
    return _defu(baseObject, {}, namespace, merger);
  }
  const object = Object.assign({}, defaults);
  for (const key in baseObject) {
    if (key === "__proto__" || key === "constructor") {
      continue;
    }
    const value = baseObject[key];
    if (value === null || value === void 0) {
      continue;
    }
    if (merger && merger(object, key, value, namespace)) {
      continue;
    }
    if (Array.isArray(value) && Array.isArray(object[key])) {
      object[key] = [...value, ...object[key]];
    } else if (isPlainObject(value) && isPlainObject(object[key])) {
      object[key] = _defu(
        value,
        object[key],
        (namespace ? `${namespace}.` : "") + key.toString(),
        merger
      );
    } else {
      object[key] = value;
    }
  }
  return object;
}
function createDefu(merger) {
  return (...arguments_) => (
    // eslint-disable-next-line unicorn/no-array-reduce
    arguments_.reduce((p, c) => _defu(p, c, "", merger), {})
  );
}
const defu = createDefu();
const defuFn = createDefu((object, key, currentValue) => {
  if (object[key] !== void 0 && typeof currentValue === "function") {
    object[key] = currentValue(object[key]);
    return true;
  }
});

function rawHeaders(headers) {
  const rawHeaders2 = [];
  for (const key in headers) {
    if (Array.isArray(headers[key])) {
      for (const h of headers[key]) {
        rawHeaders2.push(key, h);
      }
    } else {
      rawHeaders2.push(key, headers[key]);
    }
  }
  return rawHeaders2;
}
function mergeFns(...functions) {
  return function(...args) {
    for (const fn of functions) {
      fn(...args);
    }
  };
}
function createNotImplementedError(name) {
  throw new Error(`[unenv] ${name} is not implemented yet!`);
}

let defaultMaxListeners = 10;
let EventEmitter$1 = class EventEmitter {
  __unenv__ = true;
  _events = /* @__PURE__ */ Object.create(null);
  _maxListeners;
  static get defaultMaxListeners() {
    return defaultMaxListeners;
  }
  static set defaultMaxListeners(arg) {
    if (typeof arg !== "number" || arg < 0 || Number.isNaN(arg)) {
      throw new RangeError(
        'The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + arg + "."
      );
    }
    defaultMaxListeners = arg;
  }
  setMaxListeners(n) {
    if (typeof n !== "number" || n < 0 || Number.isNaN(n)) {
      throw new RangeError(
        'The value of "n" is out of range. It must be a non-negative number. Received ' + n + "."
      );
    }
    this._maxListeners = n;
    return this;
  }
  getMaxListeners() {
    return _getMaxListeners(this);
  }
  emit(type, ...args) {
    if (!this._events[type] || this._events[type].length === 0) {
      return false;
    }
    if (type === "error") {
      let er;
      if (args.length > 0) {
        er = args[0];
      }
      if (er instanceof Error) {
        throw er;
      }
      const err = new Error(
        "Unhandled error." + (er ? " (" + er.message + ")" : "")
      );
      err.context = er;
      throw err;
    }
    for (const _listener of this._events[type]) {
      (_listener.listener || _listener).apply(this, args);
    }
    return true;
  }
  addListener(type, listener) {
    return _addListener(this, type, listener, false);
  }
  on(type, listener) {
    return _addListener(this, type, listener, false);
  }
  prependListener(type, listener) {
    return _addListener(this, type, listener, true);
  }
  once(type, listener) {
    return this.on(type, _wrapOnce(this, type, listener));
  }
  prependOnceListener(type, listener) {
    return this.prependListener(type, _wrapOnce(this, type, listener));
  }
  removeListener(type, listener) {
    return _removeListener(this, type, listener);
  }
  off(type, listener) {
    return this.removeListener(type, listener);
  }
  removeAllListeners(type) {
    return _removeAllListeners(this, type);
  }
  listeners(type) {
    return _listeners(this, type, true);
  }
  rawListeners(type) {
    return _listeners(this, type, false);
  }
  listenerCount(type) {
    return this.rawListeners(type).length;
  }
  eventNames() {
    return Object.keys(this._events);
  }
};
function _addListener(target, type, listener, prepend) {
  _checkListener(listener);
  if (target._events.newListener !== void 0) {
    target.emit("newListener", type, listener.listener || listener);
  }
  if (!target._events[type]) {
    target._events[type] = [];
  }
  if (prepend) {
    target._events[type].unshift(listener);
  } else {
    target._events[type].push(listener);
  }
  const maxListeners = _getMaxListeners(target);
  if (maxListeners > 0 && target._events[type].length > maxListeners && !target._events[type].warned) {
    target._events[type].warned = true;
    const warning = new Error(
      `[unenv] Possible EventEmitter memory leak detected. ${target._events[type].length} ${type} listeners added. Use emitter.setMaxListeners() to increase limit`
    );
    warning.name = "MaxListenersExceededWarning";
    warning.emitter = target;
    warning.type = type;
    warning.count = target._events[type]?.length;
    console.warn(warning);
  }
  return target;
}
function _removeListener(target, type, listener) {
  _checkListener(listener);
  if (!target._events[type] || target._events[type].length === 0) {
    return target;
  }
  const lenBeforeFilter = target._events[type].length;
  target._events[type] = target._events[type].filter((fn) => fn !== listener);
  if (lenBeforeFilter === target._events[type].length) {
    return target;
  }
  if (target._events.removeListener) {
    target.emit("removeListener", type, listener.listener || listener);
  }
  if (target._events[type].length === 0) {
    delete target._events[type];
  }
  return target;
}
function _removeAllListeners(target, type) {
  if (!target._events[type] || target._events[type].length === 0) {
    return target;
  }
  if (target._events.removeListener) {
    for (const _listener of target._events[type]) {
      target.emit("removeListener", type, _listener.listener || _listener);
    }
  }
  delete target._events[type];
  return target;
}
function _wrapOnce(target, type, listener) {
  let fired = false;
  const wrapper = (...args) => {
    if (fired) {
      return;
    }
    target.removeListener(type, wrapper);
    fired = true;
    return args.length === 0 ? listener.call(target) : listener.apply(target, args);
  };
  wrapper.listener = listener;
  return wrapper;
}
function _getMaxListeners(target) {
  return target._maxListeners ?? EventEmitter$1.defaultMaxListeners;
}
function _listeners(target, type, unwrap) {
  let listeners = target._events[type];
  if (typeof listeners === "function") {
    listeners = [listeners];
  }
  return unwrap ? listeners.map((l) => l.listener || l) : listeners;
}
function _checkListener(listener) {
  if (typeof listener !== "function") {
    throw new TypeError(
      'The "listener" argument must be of type Function. Received type ' + typeof listener
    );
  }
}

const EventEmitter = globalThis.EventEmitter || EventEmitter$1;

class _Readable extends EventEmitter {
  __unenv__ = true;
  readableEncoding = null;
  readableEnded = true;
  readableFlowing = false;
  readableHighWaterMark = 0;
  readableLength = 0;
  readableObjectMode = false;
  readableAborted = false;
  readableDidRead = false;
  closed = false;
  errored = null;
  readable = false;
  destroyed = false;
  static from(_iterable, options) {
    return new _Readable(options);
  }
  constructor(_opts) {
    super();
  }
  _read(_size) {
  }
  read(_size) {
  }
  setEncoding(_encoding) {
    return this;
  }
  pause() {
    return this;
  }
  resume() {
    return this;
  }
  isPaused() {
    return true;
  }
  unpipe(_destination) {
    return this;
  }
  unshift(_chunk, _encoding) {
  }
  wrap(_oldStream) {
    return this;
  }
  push(_chunk, _encoding) {
    return false;
  }
  _destroy(_error, _callback) {
    this.removeAllListeners();
  }
  destroy(error) {
    this.destroyed = true;
    this._destroy(error);
    return this;
  }
  pipe(_destenition, _options) {
    return {};
  }
  compose(stream, options) {
    throw new Error("[unenv] Method not implemented.");
  }
  [Symbol.asyncDispose]() {
    this.destroy();
    return Promise.resolve();
  }
  async *[Symbol.asyncIterator]() {
    throw createNotImplementedError("Readable.asyncIterator");
  }
  iterator(options) {
    throw createNotImplementedError("Readable.iterator");
  }
  map(fn, options) {
    throw createNotImplementedError("Readable.map");
  }
  filter(fn, options) {
    throw createNotImplementedError("Readable.filter");
  }
  forEach(fn, options) {
    throw createNotImplementedError("Readable.forEach");
  }
  reduce(fn, initialValue, options) {
    throw createNotImplementedError("Readable.reduce");
  }
  find(fn, options) {
    throw createNotImplementedError("Readable.find");
  }
  findIndex(fn, options) {
    throw createNotImplementedError("Readable.findIndex");
  }
  some(fn, options) {
    throw createNotImplementedError("Readable.some");
  }
  toArray(options) {
    throw createNotImplementedError("Readable.toArray");
  }
  every(fn, options) {
    throw createNotImplementedError("Readable.every");
  }
  flatMap(fn, options) {
    throw createNotImplementedError("Readable.flatMap");
  }
  drop(limit, options) {
    throw createNotImplementedError("Readable.drop");
  }
  take(limit, options) {
    throw createNotImplementedError("Readable.take");
  }
  asIndexedPairs(options) {
    throw createNotImplementedError("Readable.asIndexedPairs");
  }
}
const Readable = globalThis.Readable || _Readable;

class _Writable extends EventEmitter {
  __unenv__ = true;
  writable = true;
  writableEnded = false;
  writableFinished = false;
  writableHighWaterMark = 0;
  writableLength = 0;
  writableObjectMode = false;
  writableCorked = 0;
  closed = false;
  errored = null;
  writableNeedDrain = false;
  destroyed = false;
  _data;
  _encoding = "utf-8";
  constructor(_opts) {
    super();
  }
  pipe(_destenition, _options) {
    return {};
  }
  _write(chunk, encoding, callback) {
    if (this.writableEnded) {
      if (callback) {
        callback();
      }
      return;
    }
    if (this._data === void 0) {
      this._data = chunk;
    } else {
      const a = typeof this._data === "string" ? Buffer.from(this._data, this._encoding || encoding || "utf8") : this._data;
      const b = typeof chunk === "string" ? Buffer.from(chunk, encoding || this._encoding || "utf8") : chunk;
      this._data = Buffer.concat([a, b]);
    }
    this._encoding = encoding;
    if (callback) {
      callback();
    }
  }
  _writev(_chunks, _callback) {
  }
  _destroy(_error, _callback) {
  }
  _final(_callback) {
  }
  write(chunk, arg2, arg3) {
    const encoding = typeof arg2 === "string" ? this._encoding : "utf-8";
    const cb = typeof arg2 === "function" ? arg2 : typeof arg3 === "function" ? arg3 : void 0;
    this._write(chunk, encoding, cb);
    return true;
  }
  setDefaultEncoding(_encoding) {
    return this;
  }
  end(arg1, arg2, arg3) {
    const callback = typeof arg1 === "function" ? arg1 : typeof arg2 === "function" ? arg2 : typeof arg3 === "function" ? arg3 : void 0;
    if (this.writableEnded) {
      if (callback) {
        callback();
      }
      return this;
    }
    const data = arg1 === callback ? void 0 : arg1;
    if (data) {
      const encoding = arg2 === callback ? void 0 : arg2;
      this.write(data, encoding, callback);
    }
    this.writableEnded = true;
    this.writableFinished = true;
    this.emit("close");
    this.emit("finish");
    return this;
  }
  cork() {
  }
  uncork() {
  }
  destroy(_error) {
    this.destroyed = true;
    delete this._data;
    this.removeAllListeners();
    return this;
  }
  compose(stream, options) {
    throw new Error("[h3] Method not implemented.");
  }
}
const Writable = globalThis.Writable || _Writable;

const __Duplex = class {
  allowHalfOpen = true;
  _destroy;
  constructor(readable = new Readable(), writable = new Writable()) {
    Object.assign(this, readable);
    Object.assign(this, writable);
    this._destroy = mergeFns(readable._destroy, writable._destroy);
  }
};
function getDuplex() {
  Object.assign(__Duplex.prototype, Readable.prototype);
  Object.assign(__Duplex.prototype, Writable.prototype);
  return __Duplex;
}
const _Duplex = /* @__PURE__ */ getDuplex();
const Duplex = globalThis.Duplex || _Duplex;

class Socket extends Duplex {
  __unenv__ = true;
  bufferSize = 0;
  bytesRead = 0;
  bytesWritten = 0;
  connecting = false;
  destroyed = false;
  pending = false;
  localAddress = "";
  localPort = 0;
  remoteAddress = "";
  remoteFamily = "";
  remotePort = 0;
  readyState = "readOnly";
  constructor(_options) {
    super();
  }
  write(_buffer, _arg1, _arg2) {
    return false;
  }
  connect(_arg1, _arg2, _arg3) {
    return this;
  }
  end(_arg1, _arg2, _arg3) {
    return this;
  }
  setEncoding(_encoding) {
    return this;
  }
  pause() {
    return this;
  }
  resume() {
    return this;
  }
  setTimeout(_timeout, _callback) {
    return this;
  }
  setNoDelay(_noDelay) {
    return this;
  }
  setKeepAlive(_enable, _initialDelay) {
    return this;
  }
  address() {
    return {};
  }
  unref() {
    return this;
  }
  ref() {
    return this;
  }
  resetAndDestroy() {
    const err = new Error("ERR_SOCKET_CLOSED");
    err.code = "ERR_SOCKET_CLOSED";
    this.destroy(err);
    return this;
  }
}

class IncomingMessage extends Readable {
  __unenv__ = {};
  aborted = false;
  httpVersion = "1.1";
  httpVersionMajor = 1;
  httpVersionMinor = 1;
  complete = true;
  connection;
  socket;
  headers = {};
  trailers = {};
  method = "GET";
  url = "/";
  statusCode = 200;
  statusMessage = "";
  closed = false;
  errored = null;
  readable = false;
  constructor(socket) {
    super();
    this.socket = this.connection = socket || new Socket();
  }
  get rawHeaders() {
    return rawHeaders(this.headers);
  }
  get rawTrailers() {
    return [];
  }
  setTimeout(_msecs, _callback) {
    return this;
  }
  get headersDistinct() {
    return _distinct(this.headers);
  }
  get trailersDistinct() {
    return _distinct(this.trailers);
  }
}
function _distinct(obj) {
  const d = {};
  for (const [key, value] of Object.entries(obj)) {
    if (key) {
      d[key] = (Array.isArray(value) ? value : [value]).filter(
        Boolean
      );
    }
  }
  return d;
}

class ServerResponse extends Writable {
  __unenv__ = true;
  statusCode = 200;
  statusMessage = "";
  upgrading = false;
  chunkedEncoding = false;
  shouldKeepAlive = false;
  useChunkedEncodingByDefault = false;
  sendDate = false;
  finished = false;
  headersSent = false;
  strictContentLength = false;
  connection = null;
  socket = null;
  req;
  _headers = {};
  constructor(req) {
    super();
    this.req = req;
  }
  assignSocket(socket) {
    socket._httpMessage = this;
    this.socket = socket;
    this.connection = socket;
    this.emit("socket", socket);
    this._flush();
  }
  _flush() {
    this.flushHeaders();
  }
  detachSocket(_socket) {
  }
  writeContinue(_callback) {
  }
  writeHead(statusCode, arg1, arg2) {
    if (statusCode) {
      this.statusCode = statusCode;
    }
    if (typeof arg1 === "string") {
      this.statusMessage = arg1;
      arg1 = void 0;
    }
    const headers = arg2 || arg1;
    if (headers) {
      if (Array.isArray(headers)) ; else {
        for (const key in headers) {
          this.setHeader(key, headers[key]);
        }
      }
    }
    this.headersSent = true;
    return this;
  }
  writeProcessing() {
  }
  setTimeout(_msecs, _callback) {
    return this;
  }
  appendHeader(name, value) {
    name = name.toLowerCase();
    const current = this._headers[name];
    const all = [
      ...Array.isArray(current) ? current : [current],
      ...Array.isArray(value) ? value : [value]
    ].filter(Boolean);
    this._headers[name] = all.length > 1 ? all : all[0];
    return this;
  }
  setHeader(name, value) {
    this._headers[name.toLowerCase()] = value;
    return this;
  }
  getHeader(name) {
    return this._headers[name.toLowerCase()];
  }
  getHeaders() {
    return this._headers;
  }
  getHeaderNames() {
    return Object.keys(this._headers);
  }
  hasHeader(name) {
    return name.toLowerCase() in this._headers;
  }
  removeHeader(name) {
    delete this._headers[name.toLowerCase()];
  }
  addTrailers(_headers) {
  }
  flushHeaders() {
  }
  writeEarlyHints(_headers, cb) {
    if (typeof cb === "function") {
      cb();
    }
  }
}

function hasProp(obj, prop) {
  try {
    return prop in obj;
  } catch {
    return false;
  }
}

var __defProp$1 = Object.defineProperty;
var __defNormalProp$1 = (obj, key, value) => key in obj ? __defProp$1(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField$1 = (obj, key, value) => {
  __defNormalProp$1(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
class H3Error extends Error {
  constructor(message, opts = {}) {
    super(message, opts);
    __publicField$1(this, "statusCode", 500);
    __publicField$1(this, "fatal", false);
    __publicField$1(this, "unhandled", false);
    __publicField$1(this, "statusMessage");
    __publicField$1(this, "data");
    __publicField$1(this, "cause");
    if (opts.cause && !this.cause) {
      this.cause = opts.cause;
    }
  }
  toJSON() {
    const obj = {
      message: this.message,
      statusCode: sanitizeStatusCode(this.statusCode, 500)
    };
    if (this.statusMessage) {
      obj.statusMessage = sanitizeStatusMessage(this.statusMessage);
    }
    if (this.data !== void 0) {
      obj.data = this.data;
    }
    return obj;
  }
}
__publicField$1(H3Error, "__h3_error__", true);
function createError$1(input) {
  if (typeof input === "string") {
    return new H3Error(input);
  }
  if (isError(input)) {
    return input;
  }
  const err = new H3Error(input.message ?? input.statusMessage ?? "", {
    cause: input.cause || input
  });
  if (hasProp(input, "stack")) {
    try {
      Object.defineProperty(err, "stack", {
        get() {
          return input.stack;
        }
      });
    } catch {
      try {
        err.stack = input.stack;
      } catch {
      }
    }
  }
  if (input.data) {
    err.data = input.data;
  }
  if (input.statusCode) {
    err.statusCode = sanitizeStatusCode(input.statusCode, err.statusCode);
  } else if (input.status) {
    err.statusCode = sanitizeStatusCode(input.status, err.statusCode);
  }
  if (input.statusMessage) {
    err.statusMessage = input.statusMessage;
  } else if (input.statusText) {
    err.statusMessage = input.statusText;
  }
  if (err.statusMessage) {
    const originalMessage = err.statusMessage;
    const sanitizedMessage = sanitizeStatusMessage(err.statusMessage);
    if (sanitizedMessage !== originalMessage) {
      console.warn(
        "[h3] Please prefer using `message` for longer error messages instead of `statusMessage`. In the future, `statusMessage` will be sanitized by default."
      );
    }
  }
  if (input.fatal !== void 0) {
    err.fatal = input.fatal;
  }
  if (input.unhandled !== void 0) {
    err.unhandled = input.unhandled;
  }
  return err;
}
function sendError(event, error, debug) {
  if (event.handled) {
    return;
  }
  const h3Error = isError(error) ? error : createError$1(error);
  const responseBody = {
    statusCode: h3Error.statusCode,
    statusMessage: h3Error.statusMessage,
    stack: [],
    data: h3Error.data
  };
  if (debug) {
    responseBody.stack = (h3Error.stack || "").split("\n").map((l) => l.trim());
  }
  if (event.handled) {
    return;
  }
  const _code = Number.parseInt(h3Error.statusCode);
  setResponseStatus(event, _code, h3Error.statusMessage);
  event.node.res.setHeader("content-type", MIMES.json);
  event.node.res.end(JSON.stringify(responseBody, void 0, 2));
}
function isError(input) {
  return input?.constructor?.__h3_error__ === true;
}

function getQuery(event) {
  return getQuery$1(event.path || "");
}
function isMethod(event, expected, allowHead) {
  if (allowHead && event.method === "HEAD") {
    return true;
  }
  if (typeof expected === "string") {
    if (event.method === expected) {
      return true;
    }
  } else if (expected.includes(event.method)) {
    return true;
  }
  return false;
}
function assertMethod(event, expected, allowHead) {
  if (!isMethod(event, expected, allowHead)) {
    throw createError$1({
      statusCode: 405,
      statusMessage: "HTTP method is not allowed."
    });
  }
}
function getRequestHeaders(event) {
  const _headers = {};
  for (const key in event.node.req.headers) {
    const val = event.node.req.headers[key];
    _headers[key] = Array.isArray(val) ? val.filter(Boolean).join(", ") : val;
  }
  return _headers;
}
function getRequestHeader(event, name) {
  const headers = getRequestHeaders(event);
  const value = headers[name.toLowerCase()];
  return value;
}

const RawBodySymbol = Symbol.for("h3RawBody");
const PayloadMethods$1 = ["PATCH", "POST", "PUT", "DELETE"];
function readRawBody(event, encoding = "utf8") {
  assertMethod(event, PayloadMethods$1);
  const _rawBody = event._requestBody || event.web?.request?.body || event.node.req[RawBodySymbol] || event.node.req.body;
  if (_rawBody) {
    const promise2 = Promise.resolve(_rawBody).then((_resolved) => {
      if (Buffer.isBuffer(_resolved)) {
        return _resolved;
      }
      if (typeof _resolved.pipeTo === "function") {
        return new Promise((resolve, reject) => {
          const chunks = [];
          _resolved.pipeTo(
            new WritableStream({
              write(chunk) {
                chunks.push(chunk);
              },
              close() {
                resolve(Buffer.concat(chunks));
              },
              abort(reason) {
                reject(reason);
              }
            })
          ).catch(reject);
        });
      } else if (typeof _resolved.pipe === "function") {
        return new Promise((resolve, reject) => {
          const chunks = [];
          _resolved.on("data", (chunk) => {
            chunks.push(chunk);
          }).on("end", () => {
            resolve(Buffer.concat(chunks));
          }).on("error", reject);
        });
      }
      if (_resolved.constructor === Object) {
        return Buffer.from(JSON.stringify(_resolved));
      }
      return Buffer.from(_resolved);
    });
    return encoding ? promise2.then((buff) => buff.toString(encoding)) : promise2;
  }
  if (!Number.parseInt(event.node.req.headers["content-length"] || "")) {
    return Promise.resolve(void 0);
  }
  const promise = event.node.req[RawBodySymbol] = new Promise(
    (resolve, reject) => {
      const bodyData = [];
      event.node.req.on("error", (err) => {
        reject(err);
      }).on("data", (chunk) => {
        bodyData.push(chunk);
      }).on("end", () => {
        resolve(Buffer.concat(bodyData));
      });
    }
  );
  const result = encoding ? promise.then((buff) => buff.toString(encoding)) : promise;
  return result;
}
function getRequestWebStream(event) {
  if (!PayloadMethods$1.includes(event.method)) {
    return;
  }
  return event.web?.request?.body || event._requestBody || new ReadableStream({
    start: (controller) => {
      event.node.req.on("data", (chunk) => {
        controller.enqueue(chunk);
      });
      event.node.req.on("end", () => {
        controller.close();
      });
      event.node.req.on("error", (err) => {
        controller.error(err);
      });
    }
  });
}

function handleCacheHeaders(event, opts) {
  const cacheControls = ["public", ...opts.cacheControls || []];
  let cacheMatched = false;
  if (opts.maxAge !== void 0) {
    cacheControls.push(`max-age=${+opts.maxAge}`, `s-maxage=${+opts.maxAge}`);
  }
  if (opts.modifiedTime) {
    const modifiedTime = new Date(opts.modifiedTime);
    const ifModifiedSince = event.node.req.headers["if-modified-since"];
    event.node.res.setHeader("last-modified", modifiedTime.toUTCString());
    if (ifModifiedSince && new Date(ifModifiedSince) >= opts.modifiedTime) {
      cacheMatched = true;
    }
  }
  if (opts.etag) {
    event.node.res.setHeader("etag", opts.etag);
    const ifNonMatch = event.node.req.headers["if-none-match"];
    if (ifNonMatch === opts.etag) {
      cacheMatched = true;
    }
  }
  event.node.res.setHeader("cache-control", cacheControls.join(", "));
  if (cacheMatched) {
    event.node.res.statusCode = 304;
    if (!event.handled) {
      event.node.res.end();
    }
    return true;
  }
  return false;
}

const MIMES = {
  html: "text/html",
  json: "application/json"
};

const DISALLOWED_STATUS_CHARS = /[^\u0009\u0020-\u007E]/g;
function sanitizeStatusMessage(statusMessage = "") {
  return statusMessage.replace(DISALLOWED_STATUS_CHARS, "");
}
function sanitizeStatusCode(statusCode, defaultStatusCode = 200) {
  if (!statusCode) {
    return defaultStatusCode;
  }
  if (typeof statusCode === "string") {
    statusCode = Number.parseInt(statusCode, 10);
  }
  if (statusCode < 100 || statusCode > 999) {
    return defaultStatusCode;
  }
  return statusCode;
}

function parseCookies(event) {
  return parse(event.node.req.headers.cookie || "");
}
function getCookie(event, name) {
  return parseCookies(event)[name];
}
function setCookie(event, name, value, serializeOptions) {
  const cookieStr = serialize(name, value, {
    path: "/",
    ...serializeOptions
  });
  let setCookies = event.node.res.getHeader("set-cookie");
  if (!Array.isArray(setCookies)) {
    setCookies = [setCookies];
  }
  setCookies = setCookies.filter((cookieValue) => {
    return cookieValue && !cookieValue.startsWith(name + "=");
  });
  event.node.res.setHeader("set-cookie", [...setCookies, cookieStr]);
}
function deleteCookie(event, name, serializeOptions) {
  setCookie(event, name, "", {
    ...serializeOptions,
    maxAge: 0
  });
}
function splitCookiesString(cookiesString) {
  if (Array.isArray(cookiesString)) {
    return cookiesString.flatMap((c) => splitCookiesString(c));
  }
  if (typeof cookiesString !== "string") {
    return [];
  }
  const cookiesStrings = [];
  let pos = 0;
  let start;
  let ch;
  let lastComma;
  let nextStart;
  let cookiesSeparatorFound;
  const skipWhitespace = () => {
    while (pos < cookiesString.length && /\s/.test(cookiesString.charAt(pos))) {
      pos += 1;
    }
    return pos < cookiesString.length;
  };
  const notSpecialChar = () => {
    ch = cookiesString.charAt(pos);
    return ch !== "=" && ch !== ";" && ch !== ",";
  };
  while (pos < cookiesString.length) {
    start = pos;
    cookiesSeparatorFound = false;
    while (skipWhitespace()) {
      ch = cookiesString.charAt(pos);
      if (ch === ",") {
        lastComma = pos;
        pos += 1;
        skipWhitespace();
        nextStart = pos;
        while (pos < cookiesString.length && notSpecialChar()) {
          pos += 1;
        }
        if (pos < cookiesString.length && cookiesString.charAt(pos) === "=") {
          cookiesSeparatorFound = true;
          pos = nextStart;
          cookiesStrings.push(cookiesString.slice(start, lastComma));
          start = pos;
        } else {
          pos = lastComma + 1;
        }
      } else {
        pos += 1;
      }
    }
    if (!cookiesSeparatorFound || pos >= cookiesString.length) {
      cookiesStrings.push(cookiesString.slice(start, cookiesString.length));
    }
  }
  return cookiesStrings;
}

const defer = typeof setImmediate === "undefined" ? (fn) => fn() : setImmediate;
function send(event, data, type) {
  if (type) {
    defaultContentType(event, type);
  }
  return new Promise((resolve) => {
    defer(() => {
      if (!event.handled) {
        event.node.res.end(data);
      }
      resolve();
    });
  });
}
function sendNoContent(event, code) {
  if (event.handled) {
    return;
  }
  const _code = sanitizeStatusCode(code, 204);
  if (_code === 204) {
    event.node.res.removeHeader("content-length");
  }
  event.node.res.writeHead(_code);
  event.node.res.end();
}
function setResponseStatus(event, code, text) {
  if (code) {
    event.node.res.statusCode = sanitizeStatusCode(
      code,
      event.node.res.statusCode
    );
  }
  if (text) {
    event.node.res.statusMessage = sanitizeStatusMessage(text);
  }
}
function getResponseStatus(event) {
  return event.node.res.statusCode;
}
function getResponseStatusText(event) {
  return event.node.res.statusMessage;
}
function defaultContentType(event, type) {
  if (type && !event.node.res.getHeader("content-type")) {
    event.node.res.setHeader("content-type", type);
  }
}
function sendRedirect(event, location, code = 302) {
  event.node.res.statusCode = sanitizeStatusCode(
    code,
    event.node.res.statusCode
  );
  event.node.res.setHeader("location", location);
  const encodedLoc = location.replace(/"/g, "%22");
  const html = `<!DOCTYPE html><html><head><meta http-equiv="refresh" content="0; url=${encodedLoc}"></head></html>`;
  return send(event, html, MIMES.html);
}
function getResponseHeader(event, name) {
  return event.node.res.getHeader(name);
}
function setResponseHeaders(event, headers) {
  for (const [name, value] of Object.entries(headers)) {
    event.node.res.setHeader(name, value);
  }
}
const setHeaders = setResponseHeaders;
function setResponseHeader(event, name, value) {
  event.node.res.setHeader(name, value);
}
function removeResponseHeader(event, name) {
  return event.node.res.removeHeader(name);
}
function isStream(data) {
  if (!data || typeof data !== "object") {
    return false;
  }
  if (typeof data.pipe === "function") {
    if (typeof data._read === "function") {
      return true;
    }
    if (typeof data.abort === "function") {
      return true;
    }
  }
  if (typeof data.pipeTo === "function") {
    return true;
  }
  return false;
}
function isWebResponse(data) {
  return typeof Response !== "undefined" && data instanceof Response;
}
function sendStream(event, stream) {
  if (!stream || typeof stream !== "object") {
    throw new Error("[h3] Invalid stream provided.");
  }
  event.node.res._data = stream;
  if (!event.node.res.socket) {
    event._handled = true;
    return Promise.resolve();
  }
  if (hasProp(stream, "pipeTo") && typeof stream.pipeTo === "function") {
    return stream.pipeTo(
      new WritableStream({
        write(chunk) {
          event.node.res.write(chunk);
        }
      })
    ).then(() => {
      event.node.res.end();
    });
  }
  if (hasProp(stream, "pipe") && typeof stream.pipe === "function") {
    return new Promise((resolve, reject) => {
      stream.pipe(event.node.res);
      if (stream.on) {
        stream.on("end", () => {
          event.node.res.end();
          resolve();
        });
        stream.on("error", (error) => {
          reject(error);
        });
      }
      event.node.res.on("close", () => {
        if (stream.abort) {
          stream.abort();
        }
      });
    });
  }
  throw new Error("[h3] Invalid or incompatible stream provided.");
}
function sendWebResponse(event, response) {
  for (const [key, value] of response.headers) {
    if (key === "set-cookie") {
      event.node.res.appendHeader(key, splitCookiesString(value));
    } else {
      event.node.res.setHeader(key, value);
    }
  }
  if (response.status) {
    event.node.res.statusCode = sanitizeStatusCode(
      response.status,
      event.node.res.statusCode
    );
  }
  if (response.statusText) {
    event.node.res.statusMessage = sanitizeStatusMessage(response.statusText);
  }
  if (response.redirected) {
    event.node.res.setHeader("location", response.url);
  }
  if (!response.body) {
    event.node.res.end();
    return;
  }
  return sendStream(event, response.body);
}

const PayloadMethods = /* @__PURE__ */ new Set(["PATCH", "POST", "PUT", "DELETE"]);
const ignoredHeaders = /* @__PURE__ */ new Set([
  "transfer-encoding",
  "connection",
  "keep-alive",
  "upgrade",
  "expect",
  "host"
]);
async function proxyRequest(event, target, opts = {}) {
  let body;
  let duplex;
  if (PayloadMethods.has(event.method)) {
    if (opts.streamRequest) {
      body = getRequestWebStream(event);
      duplex = "half";
    } else {
      body = await readRawBody(event, false).catch(() => void 0);
    }
  }
  const method = opts.fetchOptions?.method || event.method;
  const fetchHeaders = mergeHeaders(
    getProxyRequestHeaders(event),
    opts.fetchOptions?.headers,
    opts.headers
  );
  return sendProxy(event, target, {
    ...opts,
    fetchOptions: {
      method,
      body,
      duplex,
      ...opts.fetchOptions,
      headers: fetchHeaders
    }
  });
}
async function sendProxy(event, target, opts = {}) {
  const response = await _getFetch(opts.fetch)(target, {
    headers: opts.headers,
    ignoreResponseError: true,
    // make $ofetch.raw transparent
    ...opts.fetchOptions
  });
  event.node.res.statusCode = sanitizeStatusCode(
    response.status,
    event.node.res.statusCode
  );
  event.node.res.statusMessage = sanitizeStatusMessage(response.statusText);
  const cookies = [];
  for (const [key, value] of response.headers.entries()) {
    if (key === "content-encoding") {
      continue;
    }
    if (key === "content-length") {
      continue;
    }
    if (key === "set-cookie") {
      cookies.push(...splitCookiesString(value));
      continue;
    }
    event.node.res.setHeader(key, value);
  }
  if (cookies.length > 0) {
    event.node.res.setHeader(
      "set-cookie",
      cookies.map((cookie) => {
        if (opts.cookieDomainRewrite) {
          cookie = rewriteCookieProperty(
            cookie,
            opts.cookieDomainRewrite,
            "domain"
          );
        }
        if (opts.cookiePathRewrite) {
          cookie = rewriteCookieProperty(
            cookie,
            opts.cookiePathRewrite,
            "path"
          );
        }
        return cookie;
      })
    );
  }
  if (opts.onResponse) {
    await opts.onResponse(event, response);
  }
  if (response._data !== void 0) {
    return response._data;
  }
  if (event.handled) {
    return;
  }
  if (opts.sendStream === false) {
    const data = new Uint8Array(await response.arrayBuffer());
    return event.node.res.end(data);
  }
  if (response.body) {
    for await (const chunk of response.body) {
      event.node.res.write(chunk);
    }
  }
  return event.node.res.end();
}
function getProxyRequestHeaders(event) {
  const headers = /* @__PURE__ */ Object.create(null);
  const reqHeaders = getRequestHeaders(event);
  for (const name in reqHeaders) {
    if (!ignoredHeaders.has(name)) {
      headers[name] = reqHeaders[name];
    }
  }
  return headers;
}
function fetchWithEvent(event, req, init, options) {
  return _getFetch(options?.fetch)(req, {
    ...init,
    context: init?.context || event.context,
    headers: {
      ...getProxyRequestHeaders(event),
      ...init?.headers
    }
  });
}
function _getFetch(_fetch) {
  if (_fetch) {
    return _fetch;
  }
  if (globalThis.fetch) {
    return globalThis.fetch;
  }
  throw new Error(
    "fetch is not available. Try importing `node-fetch-native/polyfill` for Node.js."
  );
}
function rewriteCookieProperty(header, map, property) {
  const _map = typeof map === "string" ? { "*": map } : map;
  return header.replace(
    new RegExp(`(;\\s*${property}=)([^;]+)`, "gi"),
    (match, prefix, previousValue) => {
      let newValue;
      if (previousValue in _map) {
        newValue = _map[previousValue];
      } else if ("*" in _map) {
        newValue = _map["*"];
      } else {
        return match;
      }
      return newValue ? prefix + newValue : "";
    }
  );
}
function mergeHeaders(defaults, ...inputs) {
  const _inputs = inputs.filter(Boolean);
  if (_inputs.length === 0) {
    return defaults;
  }
  const merged = new Headers(defaults);
  for (const input of _inputs) {
    for (const [key, value] of Object.entries(input)) {
      if (value !== void 0) {
        merged.set(key, value);
      }
    }
  }
  return merged;
}

var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
class H3Event {
  constructor(req, res) {
    __publicField(this, "__is_event__", true);
    // Context
    __publicField(this, "node");
    // Node
    __publicField(this, "web");
    // Web
    __publicField(this, "context", {});
    // Shared
    // Request
    __publicField(this, "_method");
    __publicField(this, "_path");
    __publicField(this, "_headers");
    __publicField(this, "_requestBody");
    // Response
    __publicField(this, "_handled", false);
    this.node = { req, res };
  }
  // --- Request ---
  get method() {
    if (!this._method) {
      this._method = (this.node.req.method || "GET").toUpperCase();
    }
    return this._method;
  }
  get path() {
    return this._path || this.node.req.url || "/";
  }
  get headers() {
    if (!this._headers) {
      this._headers = _normalizeNodeHeaders(this.node.req.headers);
    }
    return this._headers;
  }
  // --- Respoonse ---
  get handled() {
    return this._handled || this.node.res.writableEnded || this.node.res.headersSent;
  }
  respondWith(response) {
    return Promise.resolve(response).then(
      (_response) => sendWebResponse(this, _response)
    );
  }
  // --- Utils ---
  toString() {
    return `[${this.method}] ${this.path}`;
  }
  toJSON() {
    return this.toString();
  }
  // --- Deprecated ---
  /** @deprecated Please use `event.node.req` instead. **/
  get req() {
    return this.node.req;
  }
  /** @deprecated Please use `event.node.res` instead. **/
  get res() {
    return this.node.res;
  }
}
function isEvent(input) {
  return hasProp(input, "__is_event__");
}
function createEvent(req, res) {
  return new H3Event(req, res);
}
function _normalizeNodeHeaders(nodeHeaders) {
  const headers = new Headers();
  for (const [name, value] of Object.entries(nodeHeaders)) {
    if (Array.isArray(value)) {
      for (const item of value) {
        headers.append(name, item);
      }
    } else if (value) {
      headers.set(name, value);
    }
  }
  return headers;
}

function defineEventHandler(handler) {
  if (typeof handler === "function") {
    return Object.assign(handler, { __is_handler__: true });
  }
  const _hooks = {
    onRequest: _normalizeArray(handler.onRequest),
    onBeforeResponse: _normalizeArray(handler.onBeforeResponse)
  };
  const _handler = (event) => {
    return _callHandler(event, handler.handler, _hooks);
  };
  return Object.assign(_handler, { __is_handler__: true });
}
function _normalizeArray(input) {
  return input ? Array.isArray(input) ? input : [input] : void 0;
}
async function _callHandler(event, handler, hooks) {
  if (hooks.onRequest) {
    for (const hook of hooks.onRequest) {
      await hook(event);
      if (event.handled) {
        return;
      }
    }
  }
  const body = await handler(event);
  const response = { body };
  if (hooks.onBeforeResponse) {
    for (const hook of hooks.onBeforeResponse) {
      await hook(event, response);
    }
  }
  return response.body;
}
const eventHandler = defineEventHandler;
function isEventHandler(input) {
  return hasProp(input, "__is_handler__");
}
function toEventHandler(input, _, _route) {
  if (!isEventHandler(input)) {
    console.warn(
      "[h3] Implicit event handler conversion is deprecated. Use `eventHandler()` or `fromNodeMiddleware()` to define event handlers.",
      _route && _route !== "/" ? `
     Route: ${_route}` : "",
      `
     Handler: ${input}`
    );
  }
  return input;
}
function defineLazyEventHandler(factory) {
  let _promise;
  let _resolved;
  const resolveHandler = () => {
    if (_resolved) {
      return Promise.resolve(_resolved);
    }
    if (!_promise) {
      _promise = Promise.resolve(factory()).then((r) => {
        const handler = r.default || r;
        if (typeof handler !== "function") {
          throw new TypeError(
            "Invalid lazy handler result. It should be a function:",
            handler
          );
        }
        _resolved = toEventHandler(r.default || r);
        return _resolved;
      });
    }
    return _promise;
  };
  return eventHandler((event) => {
    if (_resolved) {
      return _resolved(event);
    }
    return resolveHandler().then((handler) => handler(event));
  });
}
const lazyEventHandler = defineLazyEventHandler;

function createApp(options = {}) {
  const stack = [];
  const handler = createAppEventHandler(stack, options);
  const app = {
    // @ts-ignore
    use: (arg1, arg2, arg3) => use(app, arg1, arg2, arg3),
    handler,
    stack,
    options
  };
  return app;
}
function use(app, arg1, arg2, arg3) {
  if (Array.isArray(arg1)) {
    for (const i of arg1) {
      use(app, i, arg2, arg3);
    }
  } else if (Array.isArray(arg2)) {
    for (const i of arg2) {
      use(app, arg1, i, arg3);
    }
  } else if (typeof arg1 === "string") {
    app.stack.push(
      normalizeLayer({ ...arg3, route: arg1, handler: arg2 })
    );
  } else if (typeof arg1 === "function") {
    app.stack.push(
      normalizeLayer({ ...arg2, route: "/", handler: arg1 })
    );
  } else {
    app.stack.push(normalizeLayer({ ...arg1 }));
  }
  return app;
}
function createAppEventHandler(stack, options) {
  const spacing = options.debug ? 2 : void 0;
  return eventHandler(async (event) => {
    event.node.req.originalUrl = event.node.req.originalUrl || event.node.req.url || "/";
    const _reqPath = event._path || event.node.req.url || "/";
    let _layerPath;
    if (options.onRequest) {
      await options.onRequest(event);
    }
    for (const layer of stack) {
      if (layer.route.length > 1) {
        if (!_reqPath.startsWith(layer.route)) {
          continue;
        }
        _layerPath = _reqPath.slice(layer.route.length) || "/";
      } else {
        _layerPath = _reqPath;
      }
      if (layer.match && !layer.match(_layerPath, event)) {
        continue;
      }
      event._path = _layerPath;
      event.node.req.url = _layerPath;
      const val = await layer.handler(event);
      const _body = val === void 0 ? void 0 : await val;
      if (_body !== void 0) {
        const _response = { body: _body };
        if (options.onBeforeResponse) {
          await options.onBeforeResponse(event, _response);
        }
        await handleHandlerResponse(event, _response.body, spacing);
        if (options.onAfterResponse) {
          await options.onAfterResponse(event, _response);
        }
        return;
      }
      if (event.handled) {
        if (options.onAfterResponse) {
          await options.onAfterResponse(event, void 0);
        }
        return;
      }
    }
    if (!event.handled) {
      throw createError$1({
        statusCode: 404,
        statusMessage: `Cannot find any path matching ${event.path || "/"}.`
      });
    }
    if (options.onAfterResponse) {
      await options.onAfterResponse(event, void 0);
    }
  });
}
function normalizeLayer(input) {
  let handler = input.handler;
  if (handler.handler) {
    handler = handler.handler;
  }
  if (input.lazy) {
    handler = lazyEventHandler(handler);
  } else if (!isEventHandler(handler)) {
    handler = toEventHandler(handler, void 0, input.route);
  }
  return {
    route: withoutTrailingSlash(input.route),
    match: input.match,
    handler
  };
}
function handleHandlerResponse(event, val, jsonSpace) {
  if (val === null) {
    return sendNoContent(event);
  }
  if (val) {
    if (isWebResponse(val)) {
      return sendWebResponse(event, val);
    }
    if (isStream(val)) {
      return sendStream(event, val);
    }
    if (val.buffer) {
      return send(event, val);
    }
    if (val.arrayBuffer && typeof val.arrayBuffer === "function") {
      return val.arrayBuffer().then((arrayBuffer) => {
        return send(event, Buffer.from(arrayBuffer), val.type);
      });
    }
    if (val instanceof Error) {
      throw createError$1(val);
    }
    if (typeof val.end === "function") {
      return true;
    }
  }
  const valType = typeof val;
  if (valType === "string") {
    return send(event, val, MIMES.html);
  }
  if (valType === "object" || valType === "boolean" || valType === "number") {
    return send(event, JSON.stringify(val, void 0, jsonSpace), MIMES.json);
  }
  if (valType === "bigint") {
    return send(event, val.toString(), MIMES.json);
  }
  throw createError$1({
    statusCode: 500,
    statusMessage: `[h3] Cannot send ${valType} as response.`
  });
}

const RouterMethods = [
  "connect",
  "delete",
  "get",
  "head",
  "options",
  "post",
  "put",
  "trace",
  "patch"
];
function createRouter(opts = {}) {
  const _router = createRouter$1({});
  const routes = {};
  let _matcher;
  const router = {};
  const addRoute = (path, handler, method) => {
    let route = routes[path];
    if (!route) {
      routes[path] = route = { path, handlers: {} };
      _router.insert(path, route);
    }
    if (Array.isArray(method)) {
      for (const m of method) {
        addRoute(path, handler, m);
      }
    } else {
      route.handlers[method] = toEventHandler(handler, void 0, path);
    }
    return router;
  };
  router.use = router.add = (path, handler, method) => addRoute(path, handler, method || "all");
  for (const method of RouterMethods) {
    router[method] = (path, handle) => router.add(path, handle, method);
  }
  router.handler = eventHandler((event) => {
    let path = event.path || "/";
    const qIndex = path.indexOf("?");
    if (qIndex !== -1) {
      path = path.slice(0, Math.max(0, qIndex));
    }
    const matched = _router.lookup(path);
    if (!matched || !matched.handlers) {
      if (opts.preemptive || opts.preemtive) {
        throw createError$1({
          statusCode: 404,
          name: "Not Found",
          statusMessage: `Cannot find any route matching ${event.path || "/"}.`
        });
      } else {
        return;
      }
    }
    const method = (event.node.req.method || "get").toLowerCase();
    let handler = matched.handlers[method] || matched.handlers.all;
    if (!handler) {
      if (!_matcher) {
        _matcher = toRouteMatcher(_router);
      }
      const _matches = _matcher.matchAll(path).reverse();
      for (const _match of _matches) {
        if (_match.handlers[method]) {
          handler = _match.handlers[method];
          matched.handlers[method] = matched.handlers[method] || handler;
          break;
        }
        if (_match.handlers.all) {
          handler = _match.handlers.all;
          matched.handlers.all = matched.handlers.all || handler;
          break;
        }
      }
    }
    if (!handler) {
      if (opts.preemptive || opts.preemtive) {
        throw createError$1({
          statusCode: 405,
          name: "Method Not Allowed",
          statusMessage: `Method ${method} is not allowed on this route.`
        });
      } else {
        return;
      }
    }
    event.context.matchedRoute = matched;
    const params = matched.params || {};
    event.context.params = params;
    return Promise.resolve(handler(event)).then((res) => {
      if (res === void 0 && (opts.preemptive || opts.preemtive)) {
        return null;
      }
      return res;
    });
  });
  return router;
}
function toNodeListener(app) {
  const toNodeHandle = async function(req, res) {
    const event = createEvent(req, res);
    try {
      await app.handler(event);
    } catch (_error) {
      const error = createError$1(_error);
      if (!isError(_error)) {
        error.unhandled = true;
      }
      if (app.options.onError) {
        await app.options.onError(error, event);
      }
      if (event.handled) {
        return;
      }
      if (error.unhandled || error.fatal) {
        console.error("[h3]", error.fatal ? "[fatal]" : "[unhandled]", error);
      }
      await sendError(event, error, !!app.options.debug);
    }
  };
  return toNodeHandle;
}

const o=!!globalThis.process?.env?.FORCE_NODE_FETCH,r=!o&&globalThis.fetch||Mi,n=!o&&globalThis.Headers||ye,T=!o&&globalThis.AbortController||Mn;

class FetchError extends Error {
  constructor(message, opts) {
    super(message, opts);
    this.name = "FetchError";
    if (opts?.cause && !this.cause) {
      this.cause = opts.cause;
    }
  }
}
function createFetchError(ctx) {
  const errorMessage = ctx.error?.message || ctx.error?.toString() || "";
  const method = ctx.request?.method || ctx.options?.method || "GET";
  const url = ctx.request?.url || String(ctx.request) || "/";
  const requestStr = `[${method}] ${JSON.stringify(url)}`;
  const statusStr = ctx.response ? `${ctx.response.status} ${ctx.response.statusText}` : "<no response>";
  const message = `${requestStr}: ${statusStr}${errorMessage ? ` ${errorMessage}` : ""}`;
  const fetchError = new FetchError(
    message,
    ctx.error ? { cause: ctx.error } : void 0
  );
  for (const key of ["request", "options", "response"]) {
    Object.defineProperty(fetchError, key, {
      get() {
        return ctx[key];
      }
    });
  }
  for (const [key, refKey] of [
    ["data", "_data"],
    ["status", "status"],
    ["statusCode", "status"],
    ["statusText", "statusText"],
    ["statusMessage", "statusText"]
  ]) {
    Object.defineProperty(fetchError, key, {
      get() {
        return ctx.response && ctx.response[refKey];
      }
    });
  }
  return fetchError;
}

const payloadMethods = new Set(
  Object.freeze(["PATCH", "POST", "PUT", "DELETE"])
);
function isPayloadMethod(method = "GET") {
  return payloadMethods.has(method.toUpperCase());
}
function isJSONSerializable(value) {
  if (value === void 0) {
    return false;
  }
  const t = typeof value;
  if (t === "string" || t === "number" || t === "boolean" || t === null) {
    return true;
  }
  if (t !== "object") {
    return false;
  }
  if (Array.isArray(value)) {
    return true;
  }
  if (value.buffer) {
    return false;
  }
  return value.constructor && value.constructor.name === "Object" || typeof value.toJSON === "function";
}
const textTypes = /* @__PURE__ */ new Set([
  "image/svg",
  "application/xml",
  "application/xhtml",
  "application/html"
]);
const JSON_RE = /^application\/(?:[\w!#$%&*.^`~-]*\+)?json(;.+)?$/i;
function detectResponseType(_contentType = "") {
  if (!_contentType) {
    return "json";
  }
  const contentType = _contentType.split(";").shift() || "";
  if (JSON_RE.test(contentType)) {
    return "json";
  }
  if (textTypes.has(contentType) || contentType.startsWith("text/")) {
    return "text";
  }
  return "blob";
}
function mergeFetchOptions(input, defaults, Headers = globalThis.Headers) {
  const merged = {
    ...defaults,
    ...input
  };
  if (defaults?.params && input?.params) {
    merged.params = {
      ...defaults?.params,
      ...input?.params
    };
  }
  if (defaults?.query && input?.query) {
    merged.query = {
      ...defaults?.query,
      ...input?.query
    };
  }
  if (defaults?.headers && input?.headers) {
    merged.headers = new Headers(defaults?.headers || {});
    for (const [key, value] of new Headers(input?.headers || {})) {
      merged.headers.set(key, value);
    }
  }
  return merged;
}

const retryStatusCodes = /* @__PURE__ */ new Set([
  408,
  // Request Timeout
  409,
  // Conflict
  425,
  // Too Early
  429,
  // Too Many Requests
  500,
  // Internal Server Error
  502,
  // Bad Gateway
  503,
  // Service Unavailable
  504
  //  Gateway Timeout
]);
const nullBodyResponses$1 = /* @__PURE__ */ new Set([101, 204, 205, 304]);
function createFetch$1(globalOptions = {}) {
  const {
    fetch = globalThis.fetch,
    Headers = globalThis.Headers,
    AbortController = globalThis.AbortController
  } = globalOptions;
  async function onError(context) {
    const isAbort = context.error && context.error.name === "AbortError" && !context.options.timeout || false;
    if (context.options.retry !== false && !isAbort) {
      let retries;
      if (typeof context.options.retry === "number") {
        retries = context.options.retry;
      } else {
        retries = isPayloadMethod(context.options.method) ? 0 : 1;
      }
      const responseCode = context.response && context.response.status || 500;
      if (retries > 0 && (Array.isArray(context.options.retryStatusCodes) ? context.options.retryStatusCodes.includes(responseCode) : retryStatusCodes.has(responseCode))) {
        const retryDelay = context.options.retryDelay || 0;
        if (retryDelay > 0) {
          await new Promise((resolve) => setTimeout(resolve, retryDelay));
        }
        return $fetchRaw(context.request, {
          ...context.options,
          retry: retries - 1,
          timeout: context.options.timeout
        });
      }
    }
    const error = createFetchError(context);
    if (Error.captureStackTrace) {
      Error.captureStackTrace(error, $fetchRaw);
    }
    throw error;
  }
  const $fetchRaw = async function $fetchRaw2(_request, _options = {}) {
    const context = {
      request: _request,
      options: mergeFetchOptions(_options, globalOptions.defaults, Headers),
      response: void 0,
      error: void 0
    };
    context.options.method = context.options.method?.toUpperCase();
    if (context.options.onRequest) {
      await context.options.onRequest(context);
    }
    if (typeof context.request === "string") {
      if (context.options.baseURL) {
        context.request = withBase(context.request, context.options.baseURL);
      }
      if (context.options.query || context.options.params) {
        context.request = withQuery(context.request, {
          ...context.options.params,
          ...context.options.query
        });
      }
    }
    if (context.options.body && isPayloadMethod(context.options.method)) {
      if (isJSONSerializable(context.options.body)) {
        context.options.body = typeof context.options.body === "string" ? context.options.body : JSON.stringify(context.options.body);
        context.options.headers = new Headers(context.options.headers || {});
        if (!context.options.headers.has("content-type")) {
          context.options.headers.set("content-type", "application/json");
        }
        if (!context.options.headers.has("accept")) {
          context.options.headers.set("accept", "application/json");
        }
      } else if (
        // ReadableStream Body
        "pipeTo" in context.options.body && typeof context.options.body.pipeTo === "function" || // Node.js Stream Body
        typeof context.options.body.pipe === "function"
      ) {
        if (!("duplex" in context.options)) {
          context.options.duplex = "half";
        }
      }
    }
    if (!context.options.signal && context.options.timeout) {
      const controller = new AbortController();
      setTimeout(() => controller.abort(), context.options.timeout);
      context.options.signal = controller.signal;
    }
    try {
      context.response = await fetch(
        context.request,
        context.options
      );
    } catch (error) {
      context.error = error;
      if (context.options.onRequestError) {
        await context.options.onRequestError(context);
      }
      return await onError(context);
    }
    const hasBody = context.response.body && !nullBodyResponses$1.has(context.response.status) && context.options.method !== "HEAD";
    if (hasBody) {
      const responseType = (context.options.parseResponse ? "json" : context.options.responseType) || detectResponseType(context.response.headers.get("content-type") || "");
      switch (responseType) {
        case "json": {
          const data = await context.response.text();
          const parseFunction = context.options.parseResponse || destr;
          context.response._data = parseFunction(data);
          break;
        }
        case "stream": {
          context.response._data = context.response.body;
          break;
        }
        default: {
          context.response._data = await context.response[responseType]();
        }
      }
    }
    if (context.options.onResponse) {
      await context.options.onResponse(context);
    }
    if (!context.options.ignoreResponseError && context.response.status >= 400 && context.response.status < 600) {
      if (context.options.onResponseError) {
        await context.options.onResponseError(context);
      }
      return await onError(context);
    }
    return context.response;
  };
  const $fetch = async function $fetch2(request, options) {
    const r = await $fetchRaw(request, options);
    return r._data;
  };
  $fetch.raw = $fetchRaw;
  $fetch.native = (...args) => fetch(...args);
  $fetch.create = (defaultOptions = {}) => createFetch$1({
    ...globalOptions,
    defaults: {
      ...globalOptions.defaults,
      ...defaultOptions
    }
  });
  return $fetch;
}

function createNodeFetch() {
  const useKeepAlive = JSON.parse(process.env.FETCH_KEEP_ALIVE || "false");
  if (!useKeepAlive) {
    return r;
  }
  const agentOptions = { keepAlive: true };
  const httpAgent = new Bt.Agent(agentOptions);
  const httpsAgent = new zs.Agent(agentOptions);
  const nodeFetchOptions = {
    agent(parsedURL) {
      return parsedURL.protocol === "http:" ? httpAgent : httpsAgent;
    }
  };
  return function nodeFetchWithKeepAlive(input, init) {
    return r(input, { ...nodeFetchOptions, ...init });
  };
}
const fetch = globalThis.fetch || createNodeFetch();
const Headers$1 = globalThis.Headers || n;
const AbortController$1 = globalThis.AbortController || T;
const ofetch = createFetch$1({ fetch, Headers: Headers$1, AbortController: AbortController$1 });
const $fetch = ofetch;

const nullBodyResponses = /* @__PURE__ */ new Set([101, 204, 205, 304]);
function createCall(handle) {
  return function callHandle(context) {
    const req = new IncomingMessage();
    const res = new ServerResponse(req);
    req.url = context.url || "/";
    req.method = context.method || "GET";
    req.headers = {};
    if (context.headers) {
      const headerEntries = typeof context.headers.entries === "function" ? context.headers.entries() : Object.entries(context.headers);
      for (const [name, value] of headerEntries) {
        if (!value) {
          continue;
        }
        req.headers[name.toLowerCase()] = value;
      }
    }
    req.headers.host = req.headers.host || context.host || "localhost";
    req.connection.encrypted = // @ts-ignore
    req.connection.encrypted || context.protocol === "https";
    req.body = context.body || null;
    req.__unenv__ = context.context;
    return handle(req, res).then(() => {
      let body = res._data;
      if (nullBodyResponses.has(res.statusCode) || req.method.toUpperCase() === "HEAD") {
        body = null;
        delete res._headers["content-length"];
      }
      const r = {
        body,
        headers: res._headers,
        status: res.statusCode,
        statusText: res.statusMessage
      };
      req.destroy();
      res.destroy();
      return r;
    });
  };
}

function createFetch(call, _fetch = global.fetch) {
  return async function ufetch(input, init) {
    const url = input.toString();
    if (!url.startsWith("/")) {
      return _fetch(url, init);
    }
    try {
      const r = await call({ url, ...init });
      return new Response(r.body, {
        status: r.status,
        statusText: r.statusText,
        headers: Object.fromEntries(
          Object.entries(r.headers).map(([name, value]) => [
            name,
            Array.isArray(value) ? value.join(",") : String(value) || ""
          ])
        )
      });
    } catch (error) {
      return new Response(error.toString(), {
        status: Number.parseInt(error.statusCode || error.code) || 500,
        statusText: error.statusText
      });
    }
  };
}

function flatHooks(configHooks, hooks = {}, parentName) {
  for (const key in configHooks) {
    const subHook = configHooks[key];
    const name = parentName ? `${parentName}:${key}` : key;
    if (typeof subHook === "object" && subHook !== null) {
      flatHooks(subHook, hooks, name);
    } else if (typeof subHook === "function") {
      hooks[name] = subHook;
    }
  }
  return hooks;
}
const defaultTask = { run: (function_) => function_() };
const _createTask = () => defaultTask;
const createTask = typeof console.createTask !== "undefined" ? console.createTask : _createTask;
function serialTaskCaller(hooks, args) {
  const name = args.shift();
  const task = createTask(name);
  return hooks.reduce(
    (promise, hookFunction) => promise.then(() => task.run(() => hookFunction(...args))),
    Promise.resolve()
  );
}
function parallelTaskCaller(hooks, args) {
  const name = args.shift();
  const task = createTask(name);
  return Promise.all(hooks.map((hook) => task.run(() => hook(...args))));
}
function callEachWith(callbacks, arg0) {
  for (const callback of [...callbacks]) {
    callback(arg0);
  }
}

class Hookable {
  constructor() {
    this._hooks = {};
    this._before = void 0;
    this._after = void 0;
    this._deprecatedMessages = void 0;
    this._deprecatedHooks = {};
    this.hook = this.hook.bind(this);
    this.callHook = this.callHook.bind(this);
    this.callHookWith = this.callHookWith.bind(this);
  }
  hook(name, function_, options = {}) {
    if (!name || typeof function_ !== "function") {
      return () => {
      };
    }
    const originalName = name;
    let dep;
    while (this._deprecatedHooks[name]) {
      dep = this._deprecatedHooks[name];
      name = dep.to;
    }
    if (dep && !options.allowDeprecated) {
      let message = dep.message;
      if (!message) {
        message = `${originalName} hook has been deprecated` + (dep.to ? `, please use ${dep.to}` : "");
      }
      if (!this._deprecatedMessages) {
        this._deprecatedMessages = /* @__PURE__ */ new Set();
      }
      if (!this._deprecatedMessages.has(message)) {
        console.warn(message);
        this._deprecatedMessages.add(message);
      }
    }
    if (!function_.name) {
      try {
        Object.defineProperty(function_, "name", {
          get: () => "_" + name.replace(/\W+/g, "_") + "_hook_cb",
          configurable: true
        });
      } catch {
      }
    }
    this._hooks[name] = this._hooks[name] || [];
    this._hooks[name].push(function_);
    return () => {
      if (function_) {
        this.removeHook(name, function_);
        function_ = void 0;
      }
    };
  }
  hookOnce(name, function_) {
    let _unreg;
    let _function = (...arguments_) => {
      if (typeof _unreg === "function") {
        _unreg();
      }
      _unreg = void 0;
      _function = void 0;
      return function_(...arguments_);
    };
    _unreg = this.hook(name, _function);
    return _unreg;
  }
  removeHook(name, function_) {
    if (this._hooks[name]) {
      const index = this._hooks[name].indexOf(function_);
      if (index !== -1) {
        this._hooks[name].splice(index, 1);
      }
      if (this._hooks[name].length === 0) {
        delete this._hooks[name];
      }
    }
  }
  deprecateHook(name, deprecated) {
    this._deprecatedHooks[name] = typeof deprecated === "string" ? { to: deprecated } : deprecated;
    const _hooks = this._hooks[name] || [];
    delete this._hooks[name];
    for (const hook of _hooks) {
      this.hook(name, hook);
    }
  }
  deprecateHooks(deprecatedHooks) {
    Object.assign(this._deprecatedHooks, deprecatedHooks);
    for (const name in deprecatedHooks) {
      this.deprecateHook(name, deprecatedHooks[name]);
    }
  }
  addHooks(configHooks) {
    const hooks = flatHooks(configHooks);
    const removeFns = Object.keys(hooks).map(
      (key) => this.hook(key, hooks[key])
    );
    return () => {
      for (const unreg of removeFns.splice(0, removeFns.length)) {
        unreg();
      }
    };
  }
  removeHooks(configHooks) {
    const hooks = flatHooks(configHooks);
    for (const key in hooks) {
      this.removeHook(key, hooks[key]);
    }
  }
  removeAllHooks() {
    for (const key in this._hooks) {
      delete this._hooks[key];
    }
  }
  callHook(name, ...arguments_) {
    arguments_.unshift(name);
    return this.callHookWith(serialTaskCaller, name, ...arguments_);
  }
  callHookParallel(name, ...arguments_) {
    arguments_.unshift(name);
    return this.callHookWith(parallelTaskCaller, name, ...arguments_);
  }
  callHookWith(caller, name, ...arguments_) {
    const event = this._before || this._after ? { name, args: arguments_, context: {} } : void 0;
    if (this._before) {
      callEachWith(this._before, event);
    }
    const result = caller(
      name in this._hooks ? [...this._hooks[name]] : [],
      arguments_
    );
    if (result instanceof Promise) {
      return result.finally(() => {
        if (this._after && event) {
          callEachWith(this._after, event);
        }
      });
    }
    if (this._after && event) {
      callEachWith(this._after, event);
    }
    return result;
  }
  beforeEach(function_) {
    this._before = this._before || [];
    this._before.push(function_);
    return () => {
      if (this._before !== void 0) {
        const index = this._before.indexOf(function_);
        if (index !== -1) {
          this._before.splice(index, 1);
        }
      }
    };
  }
  afterEach(function_) {
    this._after = this._after || [];
    this._after.push(function_);
    return () => {
      if (this._after !== void 0) {
        const index = this._after.indexOf(function_);
        if (index !== -1) {
          this._after.splice(index, 1);
        }
      }
    };
  }
}
function createHooks() {
  return new Hookable();
}

const NUMBER_CHAR_RE = /\d/;
const STR_SPLITTERS = ["-", "_", "/", "."];
function isUppercase(char = "") {
  if (NUMBER_CHAR_RE.test(char)) {
    return void 0;
  }
  return char !== char.toLowerCase();
}
function splitByCase(str, separators) {
  const splitters = separators ?? STR_SPLITTERS;
  const parts = [];
  if (!str || typeof str !== "string") {
    return parts;
  }
  let buff = "";
  let previousUpper;
  let previousSplitter;
  for (const char of str) {
    const isSplitter = splitters.includes(char);
    if (isSplitter === true) {
      parts.push(buff);
      buff = "";
      previousUpper = void 0;
      continue;
    }
    const isUpper = isUppercase(char);
    if (previousSplitter === false) {
      if (previousUpper === false && isUpper === true) {
        parts.push(buff);
        buff = char;
        previousUpper = isUpper;
        continue;
      }
      if (previousUpper === true && isUpper === false && buff.length > 1) {
        const lastChar = buff.at(-1);
        parts.push(buff.slice(0, Math.max(0, buff.length - 1)));
        buff = lastChar + char;
        previousUpper = isUpper;
        continue;
      }
    }
    buff += char;
    previousUpper = isUpper;
    previousSplitter = isSplitter;
  }
  parts.push(buff);
  return parts;
}
function kebabCase(str, joiner) {
  return str ? (Array.isArray(str) ? str : splitByCase(str)).map((p) => p.toLowerCase()).join(joiner ?? "-") : "";
}
function snakeCase(str) {
  return kebabCase(str || "", "_");
}

function klona(x) {
	if (typeof x !== 'object') return x;

	var k, tmp, str=Object.prototype.toString.call(x);

	if (str === '[object Object]') {
		if (x.constructor !== Object && typeof x.constructor === 'function') {
			tmp = new x.constructor();
			for (k in x) {
				if (x.hasOwnProperty(k) && tmp[k] !== x[k]) {
					tmp[k] = klona(x[k]);
				}
			}
		} else {
			tmp = {}; // null
			for (k in x) {
				if (k === '__proto__') {
					Object.defineProperty(tmp, k, {
						value: klona(x[k]),
						configurable: true,
						enumerable: true,
						writable: true,
					});
				} else {
					tmp[k] = klona(x[k]);
				}
			}
		}
		return tmp;
	}

	if (str === '[object Array]') {
		k = x.length;
		for (tmp=Array(k); k--;) {
			tmp[k] = klona(x[k]);
		}
		return tmp;
	}

	if (str === '[object Set]') {
		tmp = new Set;
		x.forEach(function (val) {
			tmp.add(klona(val));
		});
		return tmp;
	}

	if (str === '[object Map]') {
		tmp = new Map;
		x.forEach(function (val, key) {
			tmp.set(klona(key), klona(val));
		});
		return tmp;
	}

	if (str === '[object Date]') {
		return new Date(+x);
	}

	if (str === '[object RegExp]') {
		tmp = new RegExp(x.source, x.flags);
		tmp.lastIndex = x.lastIndex;
		return tmp;
	}

	if (str === '[object DataView]') {
		return new x.constructor( klona(x.buffer) );
	}

	if (str === '[object ArrayBuffer]') {
		return x.slice(0);
	}

	// ArrayBuffer.isView(x)
	// ~> `new` bcuz `Buffer.slice` => ref
	if (str.slice(-6) === 'Array]') {
		return new x.constructor(x);
	}

	return x;
}

const inlineAppConfig = {};



const appConfig = defuFn(inlineAppConfig);

const _inlineRuntimeConfig = {
  "app": {
    "baseURL": "/cv/",
    "buildAssetsDir": "/_nuxt/",
    "cdnURL": ""
  },
  "nitro": {
    "envPrefix": "NUXT_",
    "routeRules": {
      "/__nuxt_error": {
        "cache": false
      },
      "/_nuxt/**": {
        "headers": {
          "cache-control": "public, max-age=31536000, immutable"
        }
      }
    }
  },
  "public": {
    "i18n": {
      "baseUrl": "",
      "defaultLocale": "es",
      "defaultDirection": "ltr",
      "strategy": "no_prefix",
      "lazy": false,
      "rootRedirect": "",
      "routesNameSeparator": "___",
      "defaultLocaleRouteNameSuffix": "default",
      "skipSettingLocaleOnNavigate": false,
      "differentDomains": false,
      "trailingSlash": false,
      "configLocales": [
        {
          "code": "es",
          "name": "Español",
          "language": "es-CO"
        },
        {
          "code": "en",
          "name": "English",
          "language": "en-US"
        }
      ],
      "locales": {
        "es": {
          "domain": ""
        },
        "en": {
          "domain": ""
        }
      },
      "detectBrowserLanguage": {
        "alwaysRedirect": false,
        "cookieCrossOrigin": false,
        "cookieDomain": "",
        "cookieKey": "i18n_redirected",
        "cookieSecure": false,
        "fallbackLocale": "",
        "redirectOn": "root",
        "useCookie": true
      },
      "experimental": {
        "localeDetector": "",
        "switchLocalePathLinkSSR": false,
        "autoImportTranslationFunctions": false
      },
      "multiDomainLocales": false
    }
  }
};
const ENV_PREFIX = "NITRO_";
const ENV_PREFIX_ALT = _inlineRuntimeConfig.nitro.envPrefix ?? process.env.NITRO_ENV_PREFIX ?? "_";
const _sharedRuntimeConfig = _deepFreeze(
  _applyEnv(klona(_inlineRuntimeConfig))
);
function useRuntimeConfig(event) {
  if (!event) {
    return _sharedRuntimeConfig;
  }
  if (event.context.nitro.runtimeConfig) {
    return event.context.nitro.runtimeConfig;
  }
  const runtimeConfig = klona(_inlineRuntimeConfig);
  _applyEnv(runtimeConfig);
  event.context.nitro.runtimeConfig = runtimeConfig;
  return runtimeConfig;
}
_deepFreeze(klona(appConfig));
function _getEnv(key) {
  const envKey = snakeCase(key).toUpperCase();
  return destr(
    process.env[ENV_PREFIX + envKey] ?? process.env[ENV_PREFIX_ALT + envKey]
  );
}
function _isObject(input) {
  return typeof input === "object" && !Array.isArray(input);
}
function _applyEnv(obj, parentKey = "") {
  for (const key in obj) {
    const subKey = parentKey ? `${parentKey}_${key}` : key;
    const envValue = _getEnv(subKey);
    if (_isObject(obj[key])) {
      if (_isObject(envValue)) {
        obj[key] = { ...obj[key], ...envValue };
      }
      _applyEnv(obj[key], subKey);
    } else {
      obj[key] = envValue ?? obj[key];
    }
  }
  return obj;
}
function _deepFreeze(object) {
  const propNames = Object.getOwnPropertyNames(object);
  for (const name of propNames) {
    const value = object[name];
    if (value && typeof value === "object") {
      _deepFreeze(value);
    }
  }
  return Object.freeze(object);
}
new Proxy(/* @__PURE__ */ Object.create(null), {
  get: (_, prop) => {
    console.warn(
      "Please use `useRuntimeConfig()` instead of accessing config directly."
    );
    const runtimeConfig = useRuntimeConfig();
    if (prop in runtimeConfig) {
      return runtimeConfig[prop];
    }
    return void 0;
  }
});

const defaults = Object.freeze({
  ignoreUnknown: false,
  respectType: false,
  respectFunctionNames: false,
  respectFunctionProperties: false,
  unorderedObjects: true,
  unorderedArrays: false,
  unorderedSets: false,
  excludeKeys: void 0,
  excludeValues: void 0,
  replacer: void 0
});
function objectHash(object, options) {
  if (options) {
    options = { ...defaults, ...options };
  } else {
    options = defaults;
  }
  const hasher = createHasher(options);
  hasher.dispatch(object);
  return hasher.toString();
}
const defaultPrototypesKeys = Object.freeze([
  "prototype",
  "__proto__",
  "constructor"
]);
function createHasher(options) {
  let buff = "";
  let context = /* @__PURE__ */ new Map();
  const write = (str) => {
    buff += str;
  };
  return {
    toString() {
      return buff;
    },
    getContext() {
      return context;
    },
    dispatch(value) {
      if (options.replacer) {
        value = options.replacer(value);
      }
      const type = value === null ? "null" : typeof value;
      return this[type](value);
    },
    object(object) {
      if (object && typeof object.toJSON === "function") {
        return this.object(object.toJSON());
      }
      const objString = Object.prototype.toString.call(object);
      let objType = "";
      const objectLength = objString.length;
      if (objectLength < 10) {
        objType = "unknown:[" + objString + "]";
      } else {
        objType = objString.slice(8, objectLength - 1);
      }
      objType = objType.toLowerCase();
      let objectNumber = null;
      if ((objectNumber = context.get(object)) === void 0) {
        context.set(object, context.size);
      } else {
        return this.dispatch("[CIRCULAR:" + objectNumber + "]");
      }
      if (typeof Buffer !== "undefined" && Buffer.isBuffer && Buffer.isBuffer(object)) {
        write("buffer:");
        return write(object.toString("utf8"));
      }
      if (objType !== "object" && objType !== "function" && objType !== "asyncfunction") {
        if (this[objType]) {
          this[objType](object);
        } else if (!options.ignoreUnknown) {
          this.unkown(object, objType);
        }
      } else {
        let keys = Object.keys(object);
        if (options.unorderedObjects) {
          keys = keys.sort();
        }
        let extraKeys = [];
        if (options.respectType !== false && !isNativeFunction(object)) {
          extraKeys = defaultPrototypesKeys;
        }
        if (options.excludeKeys) {
          keys = keys.filter((key) => {
            return !options.excludeKeys(key);
          });
          extraKeys = extraKeys.filter((key) => {
            return !options.excludeKeys(key);
          });
        }
        write("object:" + (keys.length + extraKeys.length) + ":");
        const dispatchForKey = (key) => {
          this.dispatch(key);
          write(":");
          if (!options.excludeValues) {
            this.dispatch(object[key]);
          }
          write(",");
        };
        for (const key of keys) {
          dispatchForKey(key);
        }
        for (const key of extraKeys) {
          dispatchForKey(key);
        }
      }
    },
    array(arr, unordered) {
      unordered = unordered === void 0 ? options.unorderedArrays !== false : unordered;
      write("array:" + arr.length + ":");
      if (!unordered || arr.length <= 1) {
        for (const entry of arr) {
          this.dispatch(entry);
        }
        return;
      }
      const contextAdditions = /* @__PURE__ */ new Map();
      const entries = arr.map((entry) => {
        const hasher = createHasher(options);
        hasher.dispatch(entry);
        for (const [key, value] of hasher.getContext()) {
          contextAdditions.set(key, value);
        }
        return hasher.toString();
      });
      context = contextAdditions;
      entries.sort();
      return this.array(entries, false);
    },
    date(date) {
      return write("date:" + date.toJSON());
    },
    symbol(sym) {
      return write("symbol:" + sym.toString());
    },
    unkown(value, type) {
      write(type);
      if (!value) {
        return;
      }
      write(":");
      if (value && typeof value.entries === "function") {
        return this.array(
          Array.from(value.entries()),
          true
          /* ordered */
        );
      }
    },
    error(err) {
      return write("error:" + err.toString());
    },
    boolean(bool) {
      return write("bool:" + bool);
    },
    string(string) {
      write("string:" + string.length + ":");
      write(string);
    },
    function(fn) {
      write("fn:");
      if (isNativeFunction(fn)) {
        this.dispatch("[native]");
      } else {
        this.dispatch(fn.toString());
      }
      if (options.respectFunctionNames !== false) {
        this.dispatch("function-name:" + String(fn.name));
      }
      if (options.respectFunctionProperties) {
        this.object(fn);
      }
    },
    number(number) {
      return write("number:" + number);
    },
    xml(xml) {
      return write("xml:" + xml.toString());
    },
    null() {
      return write("Null");
    },
    undefined() {
      return write("Undefined");
    },
    regexp(regex) {
      return write("regex:" + regex.toString());
    },
    uint8array(arr) {
      write("uint8array:");
      return this.dispatch(Array.prototype.slice.call(arr));
    },
    uint8clampedarray(arr) {
      write("uint8clampedarray:");
      return this.dispatch(Array.prototype.slice.call(arr));
    },
    int8array(arr) {
      write("int8array:");
      return this.dispatch(Array.prototype.slice.call(arr));
    },
    uint16array(arr) {
      write("uint16array:");
      return this.dispatch(Array.prototype.slice.call(arr));
    },
    int16array(arr) {
      write("int16array:");
      return this.dispatch(Array.prototype.slice.call(arr));
    },
    uint32array(arr) {
      write("uint32array:");
      return this.dispatch(Array.prototype.slice.call(arr));
    },
    int32array(arr) {
      write("int32array:");
      return this.dispatch(Array.prototype.slice.call(arr));
    },
    float32array(arr) {
      write("float32array:");
      return this.dispatch(Array.prototype.slice.call(arr));
    },
    float64array(arr) {
      write("float64array:");
      return this.dispatch(Array.prototype.slice.call(arr));
    },
    arraybuffer(arr) {
      write("arraybuffer:");
      return this.dispatch(new Uint8Array(arr));
    },
    url(url) {
      return write("url:" + url.toString());
    },
    map(map) {
      write("map:");
      const arr = [...map];
      return this.array(arr, options.unorderedSets !== false);
    },
    set(set) {
      write("set:");
      const arr = [...set];
      return this.array(arr, options.unorderedSets !== false);
    },
    file(file) {
      write("file:");
      return this.dispatch([file.name, file.size, file.type, file.lastModfied]);
    },
    blob() {
      if (options.ignoreUnknown) {
        return write("[blob]");
      }
      throw new Error(
        'Hashing Blob objects is currently not supported\nUse "options.replacer" or "options.ignoreUnknown"\n'
      );
    },
    domwindow() {
      return write("domwindow");
    },
    bigint(number) {
      return write("bigint:" + number.toString());
    },
    /* Node.js standard native objects */
    process() {
      return write("process");
    },
    timer() {
      return write("timer");
    },
    pipe() {
      return write("pipe");
    },
    tcp() {
      return write("tcp");
    },
    udp() {
      return write("udp");
    },
    tty() {
      return write("tty");
    },
    statwatcher() {
      return write("statwatcher");
    },
    securecontext() {
      return write("securecontext");
    },
    connection() {
      return write("connection");
    },
    zlib() {
      return write("zlib");
    },
    context() {
      return write("context");
    },
    nodescript() {
      return write("nodescript");
    },
    httpparser() {
      return write("httpparser");
    },
    dataview() {
      return write("dataview");
    },
    signal() {
      return write("signal");
    },
    fsevent() {
      return write("fsevent");
    },
    tlswrap() {
      return write("tlswrap");
    }
  };
}
const nativeFunc = "[native code] }";
const nativeFuncLength = nativeFunc.length;
function isNativeFunction(f) {
  if (typeof f !== "function") {
    return false;
  }
  return Function.prototype.toString.call(f).slice(-nativeFuncLength) === nativeFunc;
}

class WordArray {
  constructor(words, sigBytes) {
    words = this.words = words || [];
    this.sigBytes = sigBytes === void 0 ? words.length * 4 : sigBytes;
  }
  toString(encoder) {
    return (encoder || Hex).stringify(this);
  }
  concat(wordArray) {
    this.clamp();
    if (this.sigBytes % 4) {
      for (let i = 0; i < wordArray.sigBytes; i++) {
        const thatByte = wordArray.words[i >>> 2] >>> 24 - i % 4 * 8 & 255;
        this.words[this.sigBytes + i >>> 2] |= thatByte << 24 - (this.sigBytes + i) % 4 * 8;
      }
    } else {
      for (let j = 0; j < wordArray.sigBytes; j += 4) {
        this.words[this.sigBytes + j >>> 2] = wordArray.words[j >>> 2];
      }
    }
    this.sigBytes += wordArray.sigBytes;
    return this;
  }
  clamp() {
    this.words[this.sigBytes >>> 2] &= 4294967295 << 32 - this.sigBytes % 4 * 8;
    this.words.length = Math.ceil(this.sigBytes / 4);
  }
  clone() {
    return new WordArray([...this.words]);
  }
}
const Hex = {
  stringify(wordArray) {
    const hexChars = [];
    for (let i = 0; i < wordArray.sigBytes; i++) {
      const bite = wordArray.words[i >>> 2] >>> 24 - i % 4 * 8 & 255;
      hexChars.push((bite >>> 4).toString(16), (bite & 15).toString(16));
    }
    return hexChars.join("");
  }
};
const Base64 = {
  stringify(wordArray) {
    const keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const base64Chars = [];
    for (let i = 0; i < wordArray.sigBytes; i += 3) {
      const byte1 = wordArray.words[i >>> 2] >>> 24 - i % 4 * 8 & 255;
      const byte2 = wordArray.words[i + 1 >>> 2] >>> 24 - (i + 1) % 4 * 8 & 255;
      const byte3 = wordArray.words[i + 2 >>> 2] >>> 24 - (i + 2) % 4 * 8 & 255;
      const triplet = byte1 << 16 | byte2 << 8 | byte3;
      for (let j = 0; j < 4 && i * 8 + j * 6 < wordArray.sigBytes * 8; j++) {
        base64Chars.push(keyStr.charAt(triplet >>> 6 * (3 - j) & 63));
      }
    }
    return base64Chars.join("");
  }
};
const Latin1 = {
  parse(latin1Str) {
    const latin1StrLength = latin1Str.length;
    const words = [];
    for (let i = 0; i < latin1StrLength; i++) {
      words[i >>> 2] |= (latin1Str.charCodeAt(i) & 255) << 24 - i % 4 * 8;
    }
    return new WordArray(words, latin1StrLength);
  }
};
const Utf8 = {
  parse(utf8Str) {
    return Latin1.parse(unescape(encodeURIComponent(utf8Str)));
  }
};
class BufferedBlockAlgorithm {
  constructor() {
    this._data = new WordArray();
    this._nDataBytes = 0;
    this._minBufferSize = 0;
    this.blockSize = 512 / 32;
  }
  reset() {
    this._data = new WordArray();
    this._nDataBytes = 0;
  }
  _append(data) {
    if (typeof data === "string") {
      data = Utf8.parse(data);
    }
    this._data.concat(data);
    this._nDataBytes += data.sigBytes;
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _doProcessBlock(_dataWords, _offset) {
  }
  _process(doFlush) {
    let processedWords;
    let nBlocksReady = this._data.sigBytes / (this.blockSize * 4);
    if (doFlush) {
      nBlocksReady = Math.ceil(nBlocksReady);
    } else {
      nBlocksReady = Math.max((nBlocksReady | 0) - this._minBufferSize, 0);
    }
    const nWordsReady = nBlocksReady * this.blockSize;
    const nBytesReady = Math.min(nWordsReady * 4, this._data.sigBytes);
    if (nWordsReady) {
      for (let offset = 0; offset < nWordsReady; offset += this.blockSize) {
        this._doProcessBlock(this._data.words, offset);
      }
      processedWords = this._data.words.splice(0, nWordsReady);
      this._data.sigBytes -= nBytesReady;
    }
    return new WordArray(processedWords, nBytesReady);
  }
}
class Hasher extends BufferedBlockAlgorithm {
  update(messageUpdate) {
    this._append(messageUpdate);
    this._process();
    return this;
  }
  finalize(messageUpdate) {
    if (messageUpdate) {
      this._append(messageUpdate);
    }
  }
}

const H = [
  1779033703,
  -1150833019,
  1013904242,
  -1521486534,
  1359893119,
  -1694144372,
  528734635,
  1541459225
];
const K = [
  1116352408,
  1899447441,
  -1245643825,
  -373957723,
  961987163,
  1508970993,
  -1841331548,
  -1424204075,
  -670586216,
  310598401,
  607225278,
  1426881987,
  1925078388,
  -2132889090,
  -1680079193,
  -1046744716,
  -459576895,
  -272742522,
  264347078,
  604807628,
  770255983,
  1249150122,
  1555081692,
  1996064986,
  -1740746414,
  -1473132947,
  -1341970488,
  -1084653625,
  -958395405,
  -710438585,
  113926993,
  338241895,
  666307205,
  773529912,
  1294757372,
  1396182291,
  1695183700,
  1986661051,
  -2117940946,
  -1838011259,
  -1564481375,
  -1474664885,
  -1035236496,
  -949202525,
  -778901479,
  -694614492,
  -200395387,
  275423344,
  430227734,
  506948616,
  659060556,
  883997877,
  958139571,
  1322822218,
  1537002063,
  1747873779,
  1955562222,
  2024104815,
  -2067236844,
  -1933114872,
  -1866530822,
  -1538233109,
  -1090935817,
  -965641998
];
const W = [];
class SHA256 extends Hasher {
  constructor() {
    super(...arguments);
    this._hash = new WordArray([...H]);
  }
  reset() {
    super.reset();
    this._hash = new WordArray([...H]);
  }
  _doProcessBlock(M, offset) {
    const H2 = this._hash.words;
    let a = H2[0];
    let b = H2[1];
    let c = H2[2];
    let d = H2[3];
    let e = H2[4];
    let f = H2[5];
    let g = H2[6];
    let h = H2[7];
    for (let i = 0; i < 64; i++) {
      if (i < 16) {
        W[i] = M[offset + i] | 0;
      } else {
        const gamma0x = W[i - 15];
        const gamma0 = (gamma0x << 25 | gamma0x >>> 7) ^ (gamma0x << 14 | gamma0x >>> 18) ^ gamma0x >>> 3;
        const gamma1x = W[i - 2];
        const gamma1 = (gamma1x << 15 | gamma1x >>> 17) ^ (gamma1x << 13 | gamma1x >>> 19) ^ gamma1x >>> 10;
        W[i] = gamma0 + W[i - 7] + gamma1 + W[i - 16];
      }
      const ch = e & f ^ ~e & g;
      const maj = a & b ^ a & c ^ b & c;
      const sigma0 = (a << 30 | a >>> 2) ^ (a << 19 | a >>> 13) ^ (a << 10 | a >>> 22);
      const sigma1 = (e << 26 | e >>> 6) ^ (e << 21 | e >>> 11) ^ (e << 7 | e >>> 25);
      const t1 = h + sigma1 + ch + K[i] + W[i];
      const t2 = sigma0 + maj;
      h = g;
      g = f;
      f = e;
      e = d + t1 | 0;
      d = c;
      c = b;
      b = a;
      a = t1 + t2 | 0;
    }
    H2[0] = H2[0] + a | 0;
    H2[1] = H2[1] + b | 0;
    H2[2] = H2[2] + c | 0;
    H2[3] = H2[3] + d | 0;
    H2[4] = H2[4] + e | 0;
    H2[5] = H2[5] + f | 0;
    H2[6] = H2[6] + g | 0;
    H2[7] = H2[7] + h | 0;
  }
  finalize(messageUpdate) {
    super.finalize(messageUpdate);
    const nBitsTotal = this._nDataBytes * 8;
    const nBitsLeft = this._data.sigBytes * 8;
    this._data.words[nBitsLeft >>> 5] |= 128 << 24 - nBitsLeft % 32;
    this._data.words[(nBitsLeft + 64 >>> 9 << 4) + 14] = Math.floor(
      nBitsTotal / 4294967296
    );
    this._data.words[(nBitsLeft + 64 >>> 9 << 4) + 15] = nBitsTotal;
    this._data.sigBytes = this._data.words.length * 4;
    this._process();
    return this._hash;
  }
}
function sha256base64(message) {
  return new SHA256().finalize(message).toString(Base64);
}

function hash(object, options = {}) {
  const hashed = typeof object === "string" ? object : objectHash(object, options);
  return sha256base64(hashed).slice(0, 10);
}

function isEqual(object1, object2, hashOptions = {}) {
  if (object1 === object2) {
    return true;
  }
  if (objectHash(object1, hashOptions) === objectHash(object2, hashOptions)) {
    return true;
  }
  return false;
}

function wrapToPromise(value) {
  if (!value || typeof value.then !== "function") {
    return Promise.resolve(value);
  }
  return value;
}
function asyncCall(function_, ...arguments_) {
  try {
    return wrapToPromise(function_(...arguments_));
  } catch (error) {
    return Promise.reject(error);
  }
}
function isPrimitive(value) {
  const type = typeof value;
  return value === null || type !== "object" && type !== "function";
}
function isPureObject(value) {
  const proto = Object.getPrototypeOf(value);
  return !proto || proto.isPrototypeOf(Object);
}
function stringify(value) {
  if (isPrimitive(value)) {
    return String(value);
  }
  if (isPureObject(value) || Array.isArray(value)) {
    return JSON.stringify(value);
  }
  if (typeof value.toJSON === "function") {
    return stringify(value.toJSON());
  }
  throw new Error("[unstorage] Cannot stringify value!");
}
function checkBufferSupport() {
  if (typeof Buffer === void 0) {
    throw new TypeError("[unstorage] Buffer is not supported!");
  }
}
const BASE64_PREFIX = "base64:";
function serializeRaw(value) {
  if (typeof value === "string") {
    return value;
  }
  checkBufferSupport();
  const base64 = Buffer.from(value).toString("base64");
  return BASE64_PREFIX + base64;
}
function deserializeRaw(value) {
  if (typeof value !== "string") {
    return value;
  }
  if (!value.startsWith(BASE64_PREFIX)) {
    return value;
  }
  checkBufferSupport();
  return Buffer.from(value.slice(BASE64_PREFIX.length), "base64");
}

const storageKeyProperties = [
  "hasItem",
  "getItem",
  "getItemRaw",
  "setItem",
  "setItemRaw",
  "removeItem",
  "getMeta",
  "setMeta",
  "removeMeta",
  "getKeys",
  "clear",
  "mount",
  "unmount"
];
function prefixStorage(storage, base) {
  base = normalizeBaseKey(base);
  if (!base) {
    return storage;
  }
  const nsStorage = { ...storage };
  for (const property of storageKeyProperties) {
    nsStorage[property] = (key = "", ...args) => (
      // @ts-ignore
      storage[property](base + key, ...args)
    );
  }
  nsStorage.getKeys = (key = "", ...arguments_) => storage.getKeys(base + key, ...arguments_).then((keys) => keys.map((key2) => key2.slice(base.length)));
  return nsStorage;
}
function normalizeKey$1(key) {
  if (!key) {
    return "";
  }
  return key.split("?")[0].replace(/[/\\]/g, ":").replace(/:+/g, ":").replace(/^:|:$/g, "");
}
function joinKeys(...keys) {
  return normalizeKey$1(keys.join(":"));
}
function normalizeBaseKey(base) {
  base = normalizeKey$1(base);
  return base ? base + ":" : "";
}

function defineDriver$1(factory) {
  return factory;
}

const DRIVER_NAME$1 = "memory";
const memory = defineDriver$1(() => {
  const data = /* @__PURE__ */ new Map();
  return {
    name: DRIVER_NAME$1,
    options: {},
    hasItem(key) {
      return data.has(key);
    },
    getItem(key) {
      return data.get(key) || null;
    },
    getItemRaw(key) {
      return data.get(key) || null;
    },
    setItem(key, value) {
      data.set(key, value);
    },
    setItemRaw(key, value) {
      data.set(key, value);
    },
    removeItem(key) {
      data.delete(key);
    },
    getKeys() {
      return Array.from(data.keys());
    },
    clear() {
      data.clear();
    },
    dispose() {
      data.clear();
    }
  };
});

function createStorage(options = {}) {
  const context = {
    mounts: { "": options.driver || memory() },
    mountpoints: [""],
    watching: false,
    watchListeners: [],
    unwatch: {}
  };
  const getMount = (key) => {
    for (const base of context.mountpoints) {
      if (key.startsWith(base)) {
        return {
          base,
          relativeKey: key.slice(base.length),
          driver: context.mounts[base]
        };
      }
    }
    return {
      base: "",
      relativeKey: key,
      driver: context.mounts[""]
    };
  };
  const getMounts = (base, includeParent) => {
    return context.mountpoints.filter(
      (mountpoint) => mountpoint.startsWith(base) || includeParent && base.startsWith(mountpoint)
    ).map((mountpoint) => ({
      relativeBase: base.length > mountpoint.length ? base.slice(mountpoint.length) : void 0,
      mountpoint,
      driver: context.mounts[mountpoint]
    }));
  };
  const onChange = (event, key) => {
    if (!context.watching) {
      return;
    }
    key = normalizeKey$1(key);
    for (const listener of context.watchListeners) {
      listener(event, key);
    }
  };
  const startWatch = async () => {
    if (context.watching) {
      return;
    }
    context.watching = true;
    for (const mountpoint in context.mounts) {
      context.unwatch[mountpoint] = await watch(
        context.mounts[mountpoint],
        onChange,
        mountpoint
      );
    }
  };
  const stopWatch = async () => {
    if (!context.watching) {
      return;
    }
    for (const mountpoint in context.unwatch) {
      await context.unwatch[mountpoint]();
    }
    context.unwatch = {};
    context.watching = false;
  };
  const runBatch = (items, commonOptions, cb) => {
    const batches = /* @__PURE__ */ new Map();
    const getBatch = (mount) => {
      let batch = batches.get(mount.base);
      if (!batch) {
        batch = {
          driver: mount.driver,
          base: mount.base,
          items: []
        };
        batches.set(mount.base, batch);
      }
      return batch;
    };
    for (const item of items) {
      const isStringItem = typeof item === "string";
      const key = normalizeKey$1(isStringItem ? item : item.key);
      const value = isStringItem ? void 0 : item.value;
      const options2 = isStringItem || !item.options ? commonOptions : { ...commonOptions, ...item.options };
      const mount = getMount(key);
      getBatch(mount).items.push({
        key,
        value,
        relativeKey: mount.relativeKey,
        options: options2
      });
    }
    return Promise.all([...batches.values()].map((batch) => cb(batch))).then(
      (r) => r.flat()
    );
  };
  const storage = {
    // Item
    hasItem(key, opts = {}) {
      key = normalizeKey$1(key);
      const { relativeKey, driver } = getMount(key);
      return asyncCall(driver.hasItem, relativeKey, opts);
    },
    getItem(key, opts = {}) {
      key = normalizeKey$1(key);
      const { relativeKey, driver } = getMount(key);
      return asyncCall(driver.getItem, relativeKey, opts).then(
        (value) => destr(value)
      );
    },
    getItems(items, commonOptions) {
      return runBatch(items, commonOptions, (batch) => {
        if (batch.driver.getItems) {
          return asyncCall(
            batch.driver.getItems,
            batch.items.map((item) => ({
              key: item.relativeKey,
              options: item.options
            })),
            commonOptions
          ).then(
            (r) => r.map((item) => ({
              key: joinKeys(batch.base, item.key),
              value: destr(item.value)
            }))
          );
        }
        return Promise.all(
          batch.items.map((item) => {
            return asyncCall(
              batch.driver.getItem,
              item.relativeKey,
              item.options
            ).then((value) => ({
              key: item.key,
              value: destr(value)
            }));
          })
        );
      });
    },
    getItemRaw(key, opts = {}) {
      key = normalizeKey$1(key);
      const { relativeKey, driver } = getMount(key);
      if (driver.getItemRaw) {
        return asyncCall(driver.getItemRaw, relativeKey, opts);
      }
      return asyncCall(driver.getItem, relativeKey, opts).then(
        (value) => deserializeRaw(value)
      );
    },
    async setItem(key, value, opts = {}) {
      if (value === void 0) {
        return storage.removeItem(key);
      }
      key = normalizeKey$1(key);
      const { relativeKey, driver } = getMount(key);
      if (!driver.setItem) {
        return;
      }
      await asyncCall(driver.setItem, relativeKey, stringify(value), opts);
      if (!driver.watch) {
        onChange("update", key);
      }
    },
    async setItems(items, commonOptions) {
      await runBatch(items, commonOptions, async (batch) => {
        if (batch.driver.setItems) {
          await asyncCall(
            batch.driver.setItems,
            batch.items.map((item) => ({
              key: item.relativeKey,
              value: stringify(item.value),
              options: item.options
            })),
            commonOptions
          );
        }
        if (!batch.driver.setItem) {
          return;
        }
        await Promise.all(
          batch.items.map((item) => {
            return asyncCall(
              batch.driver.setItem,
              item.relativeKey,
              stringify(item.value),
              item.options
            );
          })
        );
      });
    },
    async setItemRaw(key, value, opts = {}) {
      if (value === void 0) {
        return storage.removeItem(key, opts);
      }
      key = normalizeKey$1(key);
      const { relativeKey, driver } = getMount(key);
      if (driver.setItemRaw) {
        await asyncCall(driver.setItemRaw, relativeKey, value, opts);
      } else if (driver.setItem) {
        await asyncCall(driver.setItem, relativeKey, serializeRaw(value), opts);
      } else {
        return;
      }
      if (!driver.watch) {
        onChange("update", key);
      }
    },
    async removeItem(key, opts = {}) {
      if (typeof opts === "boolean") {
        opts = { removeMeta: opts };
      }
      key = normalizeKey$1(key);
      const { relativeKey, driver } = getMount(key);
      if (!driver.removeItem) {
        return;
      }
      await asyncCall(driver.removeItem, relativeKey, opts);
      if (opts.removeMeta || opts.removeMata) {
        await asyncCall(driver.removeItem, relativeKey + "$", opts);
      }
      if (!driver.watch) {
        onChange("remove", key);
      }
    },
    // Meta
    async getMeta(key, opts = {}) {
      if (typeof opts === "boolean") {
        opts = { nativeOnly: opts };
      }
      key = normalizeKey$1(key);
      const { relativeKey, driver } = getMount(key);
      const meta = /* @__PURE__ */ Object.create(null);
      if (driver.getMeta) {
        Object.assign(meta, await asyncCall(driver.getMeta, relativeKey, opts));
      }
      if (!opts.nativeOnly) {
        const value = await asyncCall(
          driver.getItem,
          relativeKey + "$",
          opts
        ).then((value_) => destr(value_));
        if (value && typeof value === "object") {
          if (typeof value.atime === "string") {
            value.atime = new Date(value.atime);
          }
          if (typeof value.mtime === "string") {
            value.mtime = new Date(value.mtime);
          }
          Object.assign(meta, value);
        }
      }
      return meta;
    },
    setMeta(key, value, opts = {}) {
      return this.setItem(key + "$", value, opts);
    },
    removeMeta(key, opts = {}) {
      return this.removeItem(key + "$", opts);
    },
    // Keys
    async getKeys(base, opts = {}) {
      base = normalizeBaseKey(base);
      const mounts = getMounts(base, true);
      let maskedMounts = [];
      const allKeys = [];
      for (const mount of mounts) {
        const rawKeys = await asyncCall(
          mount.driver.getKeys,
          mount.relativeBase,
          opts
        );
        const keys = rawKeys.map((key) => mount.mountpoint + normalizeKey$1(key)).filter((key) => !maskedMounts.some((p) => key.startsWith(p)));
        allKeys.push(...keys);
        maskedMounts = [
          mount.mountpoint,
          ...maskedMounts.filter((p) => !p.startsWith(mount.mountpoint))
        ];
      }
      return base ? allKeys.filter((key) => key.startsWith(base) && !key.endsWith("$")) : allKeys.filter((key) => !key.endsWith("$"));
    },
    // Utils
    async clear(base, opts = {}) {
      base = normalizeBaseKey(base);
      await Promise.all(
        getMounts(base, false).map(async (m) => {
          if (m.driver.clear) {
            return asyncCall(m.driver.clear, m.relativeBase, opts);
          }
          if (m.driver.removeItem) {
            const keys = await m.driver.getKeys(m.relativeBase || "", opts);
            return Promise.all(
              keys.map((key) => m.driver.removeItem(key, opts))
            );
          }
        })
      );
    },
    async dispose() {
      await Promise.all(
        Object.values(context.mounts).map((driver) => dispose(driver))
      );
    },
    async watch(callback) {
      await startWatch();
      context.watchListeners.push(callback);
      return async () => {
        context.watchListeners = context.watchListeners.filter(
          (listener) => listener !== callback
        );
        if (context.watchListeners.length === 0) {
          await stopWatch();
        }
      };
    },
    async unwatch() {
      context.watchListeners = [];
      await stopWatch();
    },
    // Mount
    mount(base, driver) {
      base = normalizeBaseKey(base);
      if (base && context.mounts[base]) {
        throw new Error(`already mounted at ${base}`);
      }
      if (base) {
        context.mountpoints.push(base);
        context.mountpoints.sort((a, b) => b.length - a.length);
      }
      context.mounts[base] = driver;
      if (context.watching) {
        Promise.resolve(watch(driver, onChange, base)).then((unwatcher) => {
          context.unwatch[base] = unwatcher;
        }).catch(console.error);
      }
      return storage;
    },
    async unmount(base, _dispose = true) {
      base = normalizeBaseKey(base);
      if (!base || !context.mounts[base]) {
        return;
      }
      if (context.watching && base in context.unwatch) {
        context.unwatch[base]();
        delete context.unwatch[base];
      }
      if (_dispose) {
        await dispose(context.mounts[base]);
      }
      context.mountpoints = context.mountpoints.filter((key) => key !== base);
      delete context.mounts[base];
    },
    getMount(key = "") {
      key = normalizeKey$1(key) + ":";
      const m = getMount(key);
      return {
        driver: m.driver,
        base: m.base
      };
    },
    getMounts(base = "", opts = {}) {
      base = normalizeKey$1(base);
      const mounts = getMounts(base, opts.parents);
      return mounts.map((m) => ({
        driver: m.driver,
        base: m.mountpoint
      }));
    }
  };
  return storage;
}
function watch(driver, onChange, base) {
  return driver.watch ? driver.watch((event, key) => onChange(event, base + key)) : () => {
  };
}
async function dispose(driver) {
  if (typeof driver.dispose === "function") {
    await asyncCall(driver.dispose);
  }
}

const _assets = {

};

const normalizeKey = function normalizeKey(key) {
  if (!key) {
    return "";
  }
  return key.split("?")[0].replace(/[/\\]/g, ":").replace(/:+/g, ":").replace(/^:|:$/g, "");
};

const assets$1 = {
  getKeys() {
    return Promise.resolve(Object.keys(_assets))
  },
  hasItem (id) {
    id = normalizeKey(id);
    return Promise.resolve(id in _assets)
  },
  getItem (id) {
    id = normalizeKey(id);
    return Promise.resolve(_assets[id] ? _assets[id].import() : null)
  },
  getMeta (id) {
    id = normalizeKey(id);
    return Promise.resolve(_assets[id] ? _assets[id].meta : {})
  }
};

function defineDriver(factory) {
  return factory;
}
function createError(driver, message, opts) {
  const err = new Error(`[unstorage] [${driver}] ${message}`, opts);
  return err;
}
function createRequiredError(driver, name) {
  if (Array.isArray(name)) {
    return createError(
      driver,
      `Missing some of the required options ${name.map((n) => "`" + n + "`").join(", ")}`
    );
  }
  return createError(driver, `Missing required option \`${name}\`.`);
}

function ignoreNotfound(err) {
  return err.code === "ENOENT" || err.code === "EISDIR" ? null : err;
}
function ignoreExists(err) {
  return err.code === "EEXIST" ? null : err;
}
async function writeFile(path, data, encoding) {
  await ensuredir(dirname$1(path));
  return promises$1.writeFile(path, data, encoding);
}
function readFile(path, encoding) {
  return promises$1.readFile(path, encoding).catch(ignoreNotfound);
}
function unlink(path) {
  return promises$1.unlink(path).catch(ignoreNotfound);
}
function readdir(dir) {
  return promises$1.readdir(dir, { withFileTypes: true }).catch(ignoreNotfound).then((r) => r || []);
}
async function ensuredir(dir) {
  if (existsSync(dir)) {
    return;
  }
  await ensuredir(dirname$1(dir)).catch(ignoreExists);
  await promises$1.mkdir(dir).catch(ignoreExists);
}
async function readdirRecursive(dir, ignore) {
  if (ignore && ignore(dir)) {
    return [];
  }
  const entries = await readdir(dir);
  const files = [];
  await Promise.all(
    entries.map(async (entry) => {
      const entryPath = resolve$1(dir, entry.name);
      if (entry.isDirectory()) {
        const dirFiles = await readdirRecursive(entryPath, ignore);
        files.push(...dirFiles.map((f) => entry.name + "/" + f));
      } else {
        if (!(ignore && ignore(entry.name))) {
          files.push(entry.name);
        }
      }
    })
  );
  return files;
}
async function rmRecursive(dir) {
  const entries = await readdir(dir);
  await Promise.all(
    entries.map((entry) => {
      const entryPath = resolve$1(dir, entry.name);
      if (entry.isDirectory()) {
        return rmRecursive(entryPath).then(() => promises$1.rmdir(entryPath));
      } else {
        return promises$1.unlink(entryPath);
      }
    })
  );
}

const PATH_TRAVERSE_RE = /\.\.\:|\.\.$/;
const DRIVER_NAME = "fs-lite";
const unstorage_47drivers_47fs_45lite = defineDriver((opts = {}) => {
  if (!opts.base) {
    throw createRequiredError(DRIVER_NAME, "base");
  }
  opts.base = resolve$1(opts.base);
  const r = (key) => {
    if (PATH_TRAVERSE_RE.test(key)) {
      throw createError(
        DRIVER_NAME,
        `Invalid key: ${JSON.stringify(key)}. It should not contain .. segments`
      );
    }
    const resolved = join(opts.base, key.replace(/:/g, "/"));
    return resolved;
  };
  return {
    name: DRIVER_NAME,
    options: opts,
    hasItem(key) {
      return existsSync(r(key));
    },
    getItem(key) {
      return readFile(r(key), "utf8");
    },
    getItemRaw(key) {
      return readFile(r(key));
    },
    async getMeta(key) {
      const { atime, mtime, size, birthtime, ctime } = await promises$1.stat(r(key)).catch(() => ({}));
      return { atime, mtime, size, birthtime, ctime };
    },
    setItem(key, value) {
      if (opts.readOnly) {
        return;
      }
      return writeFile(r(key), value, "utf8");
    },
    setItemRaw(key, value) {
      if (opts.readOnly) {
        return;
      }
      return writeFile(r(key), value);
    },
    removeItem(key) {
      if (opts.readOnly) {
        return;
      }
      return unlink(r(key));
    },
    getKeys() {
      return readdirRecursive(r("."), opts.ignore);
    },
    async clear() {
      if (opts.readOnly || opts.noClear) {
        return;
      }
      await rmRecursive(r("."));
    }
  };
});

const storage = createStorage({});

storage.mount('/assets', assets$1);

storage.mount('data', unstorage_47drivers_47fs_45lite({"driver":"fsLite","base":"/home/programacion/Proyectos/cv/frontend/.data/kv"}));

function useStorage(base = "") {
  return base ? prefixStorage(storage, base) : storage;
}

const defaultCacheOptions = {
  name: "_",
  base: "/cache",
  swr: true,
  maxAge: 1
};
function defineCachedFunction(fn, opts = {}) {
  opts = { ...defaultCacheOptions, ...opts };
  const pending = {};
  const group = opts.group || "nitro/functions";
  const name = opts.name || fn.name || "_";
  const integrity = hash([opts.integrity, fn, opts]);
  const validate = opts.validate || (() => true);
  async function get(key, resolver, shouldInvalidateCache, event) {
    const cacheKey = [opts.base, group, name, key + ".json"].filter(Boolean).join(":").replace(/:\/$/, ":index");
    const entry = await useStorage().getItem(cacheKey) || {};
    const ttl = (opts.maxAge ?? opts.maxAge ?? 0) * 1e3;
    if (ttl) {
      entry.expires = Date.now() + ttl;
    }
    const expired = shouldInvalidateCache || entry.integrity !== integrity || ttl && Date.now() - (entry.mtime || 0) > ttl || !validate(entry);
    const _resolve = async () => {
      const isPending = pending[key];
      if (!isPending) {
        if (entry.value !== void 0 && (opts.staleMaxAge || 0) >= 0 && opts.swr === false) {
          entry.value = void 0;
          entry.integrity = void 0;
          entry.mtime = void 0;
          entry.expires = void 0;
        }
        pending[key] = Promise.resolve(resolver());
      }
      try {
        entry.value = await pending[key];
      } catch (error) {
        if (!isPending) {
          delete pending[key];
        }
        throw error;
      }
      if (!isPending) {
        entry.mtime = Date.now();
        entry.integrity = integrity;
        delete pending[key];
        if (validate(entry)) {
          const promise = useStorage().setItem(cacheKey, entry).catch((error) => {
            useNitroApp().captureError(error, { event, tags: ["cache"] });
          });
          if (event && event.waitUntil) {
            event.waitUntil(promise);
          }
        }
      }
    };
    const _resolvePromise = expired ? _resolve() : Promise.resolve();
    if (expired && event && event.waitUntil) {
      event.waitUntil(_resolvePromise);
    }
    if (opts.swr && entry.value) {
      _resolvePromise.catch((error) => {
        useNitroApp().captureError(error, { event, tags: ["cache"] });
      });
      return entry;
    }
    return _resolvePromise.then(() => entry);
  }
  return async (...args) => {
    const shouldBypassCache = opts.shouldBypassCache?.(...args);
    if (shouldBypassCache) {
      return fn(...args);
    }
    const key = await (opts.getKey || getKey)(...args);
    const shouldInvalidateCache = opts.shouldInvalidateCache?.(...args);
    const entry = await get(
      key,
      () => fn(...args),
      shouldInvalidateCache,
      args[0] && isEvent(args[0]) ? args[0] : void 0
    );
    let value = entry.value;
    if (opts.transform) {
      value = await opts.transform(entry, ...args) || value;
    }
    return value;
  };
}
const cachedFunction = defineCachedFunction;
function getKey(...args) {
  return args.length > 0 ? hash(args, {}) : "";
}
function escapeKey(key) {
  return String(key).replace(/\W/g, "");
}
function defineCachedEventHandler(handler, opts = defaultCacheOptions) {
  const variableHeaderNames = (opts.varies || []).filter(Boolean).map((h) => h.toLowerCase()).sort();
  const _opts = {
    ...opts,
    getKey: async (event) => {
      const customKey = await opts.getKey?.(event);
      if (customKey) {
        return escapeKey(customKey);
      }
      const _path = event.node.req.originalUrl || event.node.req.url || event.path;
      const _pathname = escapeKey(decodeURI(parseURL(_path).pathname)).slice(0, 16) || "index";
      const _hashedPath = `${_pathname}.${hash(_path)}`;
      const _headers = variableHeaderNames.map((header) => [header, event.node.req.headers[header]]).map(([name, value]) => `${escapeKey(name)}.${hash(value)}`);
      return [_hashedPath, ..._headers].join(":");
    },
    validate: (entry) => {
      if (entry.value.code >= 400) {
        return false;
      }
      if (entry.value.body === void 0) {
        return false;
      }
      return true;
    },
    group: opts.group || "nitro/handlers",
    integrity: [opts.integrity, handler]
  };
  const _cachedHandler = cachedFunction(
    async (incomingEvent) => {
      const variableHeaders = {};
      for (const header of variableHeaderNames) {
        variableHeaders[header] = incomingEvent.node.req.headers[header];
      }
      const reqProxy = cloneWithProxy(incomingEvent.node.req, {
        headers: variableHeaders
      });
      const resHeaders = {};
      let _resSendBody;
      const resProxy = cloneWithProxy(incomingEvent.node.res, {
        statusCode: 200,
        writableEnded: false,
        writableFinished: false,
        headersSent: false,
        closed: false,
        getHeader(name) {
          return resHeaders[name];
        },
        setHeader(name, value) {
          resHeaders[name] = value;
          return this;
        },
        getHeaderNames() {
          return Object.keys(resHeaders);
        },
        hasHeader(name) {
          return name in resHeaders;
        },
        removeHeader(name) {
          delete resHeaders[name];
        },
        getHeaders() {
          return resHeaders;
        },
        end(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        write(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        writeHead(statusCode, headers2) {
          this.statusCode = statusCode;
          if (headers2) {
            for (const header in headers2) {
              this.setHeader(header, headers2[header]);
            }
          }
          return this;
        }
      });
      const event = createEvent(reqProxy, resProxy);
      event.context = incomingEvent.context;
      const body = await handler(event) || _resSendBody;
      const headers = event.node.res.getHeaders();
      headers.etag = headers.Etag || headers.etag || `W/"${hash(body)}"`;
      headers["last-modified"] = headers["Last-Modified"] || headers["last-modified"] || (/* @__PURE__ */ new Date()).toUTCString();
      const cacheControl = [];
      if (opts.swr) {
        if (opts.maxAge) {
          cacheControl.push(`s-maxage=${opts.maxAge}`);
        }
        if (opts.staleMaxAge) {
          cacheControl.push(`stale-while-revalidate=${opts.staleMaxAge}`);
        } else {
          cacheControl.push("stale-while-revalidate");
        }
      } else if (opts.maxAge) {
        cacheControl.push(`max-age=${opts.maxAge}`);
      }
      if (cacheControl.length > 0) {
        headers["cache-control"] = cacheControl.join(", ");
      }
      const cacheEntry = {
        code: event.node.res.statusCode,
        headers,
        body
      };
      return cacheEntry;
    },
    _opts
  );
  return defineEventHandler(async (event) => {
    if (opts.headersOnly) {
      if (handleCacheHeaders(event, { maxAge: opts.maxAge })) {
        return;
      }
      return handler(event);
    }
    const response = await _cachedHandler(event);
    if (event.node.res.headersSent || event.node.res.writableEnded) {
      return response.body;
    }
    if (handleCacheHeaders(event, {
      modifiedTime: new Date(response.headers["last-modified"]),
      etag: response.headers.etag,
      maxAge: opts.maxAge
    })) {
      return;
    }
    event.node.res.statusCode = response.code;
    for (const name in response.headers) {
      event.node.res.setHeader(name, response.headers[name]);
    }
    return response.body;
  });
}
function cloneWithProxy(obj, overrides) {
  return new Proxy(obj, {
    get(target, property, receiver) {
      if (property in overrides) {
        return overrides[property];
      }
      return Reflect.get(target, property, receiver);
    },
    set(target, property, value, receiver) {
      if (property in overrides) {
        overrides[property] = value;
        return true;
      }
      return Reflect.set(target, property, value, receiver);
    }
  });
}
const cachedEventHandler = defineCachedEventHandler;

function hasReqHeader(event, name, includes) {
  const value = getRequestHeader(event, name);
  return value && typeof value === "string" && value.toLowerCase().includes(includes);
}
function isJsonRequest(event) {
  return hasReqHeader(event, "accept", "application/json") || hasReqHeader(event, "user-agent", "curl/") || hasReqHeader(event, "user-agent", "httpie/") || hasReqHeader(event, "sec-fetch-mode", "cors") || event.path.startsWith("/api/") || event.path.endsWith(".json");
}
function normalizeError(error) {
  const cwd = typeof process.cwd === "function" ? process.cwd() : "/";
  const stack = (error.stack || "").split("\n").splice(1).filter((line) => line.includes("at ")).map((line) => {
    const text = line.replace(cwd + "/", "./").replace("webpack:/", "").replace("file://", "").trim();
    return {
      text,
      internal: line.includes("node_modules") && !line.includes(".cache") || line.includes("internal") || line.includes("new Promise")
    };
  });
  const statusCode = error.statusCode || 500;
  const statusMessage = error.statusMessage ?? (statusCode === 404 ? "Not Found" : "");
  const message = error.message || error.toString();
  return {
    stack,
    statusCode,
    statusMessage,
    message
  };
}
function _captureError(error, type) {
  console.error(`[nitro] [${type}]`, error);
  useNitroApp().captureError(error, { tags: [type] });
}
function trapUnhandledNodeErrors() {
  process.on(
    "unhandledRejection",
    (error) => _captureError(error, "unhandledRejection")
  );
  process.on(
    "uncaughtException",
    (error) => _captureError(error, "uncaughtException")
  );
}
function joinHeaders(value) {
  return Array.isArray(value) ? value.join(", ") : String(value);
}
function normalizeFetchResponse(response) {
  if (!response.headers.has("set-cookie")) {
    return response;
  }
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers: normalizeCookieHeaders(response.headers)
  });
}
function normalizeCookieHeader(header = "") {
  return splitCookiesString(joinHeaders(header));
}
function normalizeCookieHeaders(headers) {
  const outgoingHeaders = new Headers();
  for (const [name, header] of headers) {
    if (name === "set-cookie") {
      for (const cookie of normalizeCookieHeader(header)) {
        outgoingHeaders.append("set-cookie", cookie);
      }
    } else {
      outgoingHeaders.set(name, joinHeaders(header));
    }
  }
  return outgoingHeaders;
}

const config = useRuntimeConfig();
const _routeRulesMatcher = toRouteMatcher(
  createRouter$1({ routes: config.nitro.routeRules })
);
function createRouteRulesHandler(ctx) {
  return eventHandler((event) => {
    const routeRules = getRouteRules(event);
    if (routeRules.headers) {
      setHeaders(event, routeRules.headers);
    }
    if (routeRules.redirect) {
      return sendRedirect(
        event,
        routeRules.redirect.to,
        routeRules.redirect.statusCode
      );
    }
    if (routeRules.proxy) {
      let target = routeRules.proxy.to;
      if (target.endsWith("/**")) {
        let targetPath = event.path;
        const strpBase = routeRules.proxy._proxyStripBase;
        if (strpBase) {
          targetPath = withoutBase(targetPath, strpBase);
        }
        target = joinURL(target.slice(0, -3), targetPath);
      } else if (event.path.includes("?")) {
        const query = getQuery$1(event.path);
        target = withQuery(target, query);
      }
      return proxyRequest(event, target, {
        fetch: ctx.localFetch,
        ...routeRules.proxy
      });
    }
  });
}
function getRouteRules(event) {
  event.context._nitro = event.context._nitro || {};
  if (!event.context._nitro.routeRules) {
    event.context._nitro.routeRules = getRouteRulesForPath(
      withoutBase(event.path.split("?")[0], useRuntimeConfig().app.baseURL)
    );
  }
  return event.context._nitro.routeRules;
}
function getRouteRulesForPath(path) {
  return defu({}, ..._routeRulesMatcher.matchAll(path).reverse());
}

const plugins = [
  
];

const errorHandler = (async function errorhandler(error, event) {
  const { stack, statusCode, statusMessage, message } = normalizeError(error);
  const errorObject = {
    url: event.path,
    statusCode,
    statusMessage,
    message,
    stack: "",
    data: error.data
  };
  if (error.unhandled || error.fatal) {
    const tags = [
      "[nuxt]",
      "[request error]",
      error.unhandled && "[unhandled]",
      error.fatal && "[fatal]",
      Number(errorObject.statusCode) !== 200 && `[${errorObject.statusCode}]`
    ].filter(Boolean).join(" ");
    console.error(tags, errorObject.message + "\n" + stack.map((l) => "  " + l.text).join("  \n"));
  }
  if (event.handled) {
    return;
  }
  setResponseStatus(event, errorObject.statusCode !== 200 && errorObject.statusCode || 500, errorObject.statusMessage);
  if (isJsonRequest(event)) {
    setResponseHeader(event, "Content-Type", "application/json");
    return send(event, JSON.stringify(errorObject));
  }
  const isErrorPage = event.path.startsWith("/__nuxt_error");
  const res = !isErrorPage ? await useNitroApp().localFetch(withQuery(joinURL(useRuntimeConfig().app.baseURL, "/__nuxt_error"), errorObject), {
    headers: getRequestHeaders(event),
    redirect: "manual"
  }).catch(() => null) : null;
  if (!res) {
    const { template } = await import('../error-500.mjs');
    if (event.handled) {
      return;
    }
    setResponseHeader(event, "Content-Type", "text/html;charset=UTF-8");
    return send(event, template(errorObject));
  }
  const html = await res.text();
  if (event.handled) {
    return;
  }
  for (const [header, value] of res.headers.entries()) {
    setResponseHeader(event, header, value);
  }
  setResponseStatus(event, res.status && res.status !== 200 ? res.status : void 0, res.statusText);
  return send(event, html);
});

const assets = {
  "/favicon.ico": {
    "type": "image/vnd.microsoft.icon",
    "etag": "\"27b7e-IRxa0Rwtd1wGhcryHPURtzf/ymA\"",
    "mtime": "2025-12-08T02:19:11.036Z",
    "size": 162686,
    "path": "../public/favicon.ico"
  },
  "/index.html": {
    "type": "text/html;charset=utf-8",
    "etag": "\"1fe6f-sTVGSjYNJt/4aGtpPaad1gHGcZs\"",
    "mtime": "2025-12-08T02:19:12.668Z",
    "size": 130671,
    "path": "../public/index.html"
  },
  "/jared.jpeg": {
    "type": "image/jpeg",
    "etag": "\"11c33-BARAh4O9UJwOfejJ5tRGiOmUbd4\"",
    "mtime": "2025-12-08T02:19:11.036Z",
    "size": 72755,
    "path": "../public/jared.jpeg"
  },
  "/logo.svg": {
    "type": "image/svg+xml",
    "etag": "\"1e8-g1nU65uCI9DJJfdj4cGdBKaSJZk\"",
    "mtime": "2025-12-08T02:19:11.036Z",
    "size": 488,
    "path": "../public/logo.svg"
  },
  "/robot.glb": {
    "type": "model/gltf-binary",
    "etag": "\"1ae7160-E1cGw4YHoSGxdMXCDpJvq9o0s+s\"",
    "mtime": "2025-12-08T02:19:11.057Z",
    "size": 28209504,
    "path": "../public/robot.glb"
  },
  "/_nuxt/GLTFLoader.f7336029.js": {
    "type": "application/javascript",
    "etag": "\"b532-O39VKsWYMzo6J25WO4q5EezaQO8\"",
    "mtime": "2025-12-08T02:19:11.031Z",
    "size": 46386,
    "path": "../public/_nuxt/GLTFLoader.f7336029.js"
  },
  "/_nuxt/OrbitControls.c8bb8c1e.js": {
    "type": "application/javascript",
    "etag": "\"330d-LueRifKqeoQXR1KOIgaWjhAktrU\"",
    "mtime": "2025-12-08T02:19:11.031Z",
    "size": 13069,
    "path": "../public/_nuxt/OrbitControls.c8bb8c1e.js"
  },
  "/_nuxt/_plugin-vue_export-helper.c27b6911.js": {
    "type": "application/javascript",
    "etag": "\"5b-eFCz/UrraTh721pgAl0VxBNR1es\"",
    "mtime": "2025-12-08T02:19:11.031Z",
    "size": 91,
    "path": "../public/_nuxt/_plugin-vue_export-helper.c27b6911.js"
  },
  "/_nuxt/cv-ats.414b5c42.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"5b7-3g6TzY8K1lOlK5ymOJg/TVpa+XM\"",
    "mtime": "2025-12-08T02:19:11.031Z",
    "size": 1463,
    "path": "../public/_nuxt/cv-ats.414b5c42.css"
  },
  "/_nuxt/cv-ats.a9468966.js": {
    "type": "application/javascript",
    "etag": "\"15b5-CcbCSvFMKY7hyokHWriJk+ORoE0\"",
    "mtime": "2025-12-08T02:19:11.031Z",
    "size": 5557,
    "path": "../public/_nuxt/cv-ats.a9468966.js"
  },
  "/_nuxt/entry.2591fdc2.js": {
    "type": "application/javascript",
    "etag": "\"4c423-VS3cveDyv9YbZSHO1gYYci1BKMA\"",
    "mtime": "2025-12-08T02:19:11.031Z",
    "size": 312355,
    "path": "../public/_nuxt/entry.2591fdc2.js"
  },
  "/_nuxt/entry.86b67add.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"5b-XvTWu+2PNRIo2ZFwMD790IJ2f9g\"",
    "mtime": "2025-12-08T02:19:11.031Z",
    "size": 91,
    "path": "../public/_nuxt/entry.86b67add.css"
  },
  "/_nuxt/error-404.247076e2.js": {
    "type": "application/javascript",
    "etag": "\"197c-XtudLBCvgDoH82wRigNsH24sSyM\"",
    "mtime": "2025-12-08T02:19:11.031Z",
    "size": 6524,
    "path": "../public/_nuxt/error-404.247076e2.js"
  },
  "/_nuxt/error-404.95c28eb4.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"e70-L8dF9pJCW0qi7de8Az4GyBoTHvI\"",
    "mtime": "2025-12-08T02:19:11.031Z",
    "size": 3696,
    "path": "../public/_nuxt/error-404.95c28eb4.css"
  },
  "/_nuxt/error-500.d83909e7.js": {
    "type": "application/javascript",
    "etag": "\"757-5I7wrlSLudTFXTPFyvJveJgqHPA\"",
    "mtime": "2025-12-08T02:19:11.031Z",
    "size": 1879,
    "path": "../public/_nuxt/error-500.d83909e7.js"
  },
  "/_nuxt/error-500.e798523c.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"7e0-QP983DB9m1oiDr87r1V1AYEhrfo\"",
    "mtime": "2025-12-08T02:19:11.032Z",
    "size": 2016,
    "path": "../public/_nuxt/error-500.e798523c.css"
  },
  "/_nuxt/html2canvas.5ee3acf9.js": {
    "type": "application/javascript",
    "etag": "\"1f4-8Nns7agMXFsl+SlateiTWn1bQPA\"",
    "mtime": "2025-12-08T02:19:11.032Z",
    "size": 500,
    "path": "../public/_nuxt/html2canvas.5ee3acf9.js"
  },
  "/_nuxt/html2pdf.238084e9.js": {
    "type": "application/javascript",
    "etag": "\"a9d81-HVAKd+D65X2yw1MPu9zSmKHXFUE\"",
    "mtime": "2025-12-08T02:19:11.032Z",
    "size": 695681,
    "path": "../public/_nuxt/html2pdf.238084e9.js"
  },
  "/_nuxt/i18n.config.bacde92f.js": {
    "type": "application/javascript",
    "etag": "\"2111-egA2NSEUJV16EIJ/6Lb3VF9YTJU\"",
    "mtime": "2025-12-08T02:19:11.032Z",
    "size": 8465,
    "path": "../public/_nuxt/i18n.config.bacde92f.js"
  },
  "/_nuxt/index.47168d7a.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"e8-ZDw5kyjNiCZeqifIu+iHhEGtGJE\"",
    "mtime": "2025-12-08T02:19:11.032Z",
    "size": 232,
    "path": "../public/_nuxt/index.47168d7a.css"
  },
  "/_nuxt/index.es.debe07a0.js": {
    "type": "application/javascript",
    "etag": "\"24c95-7JTsQz27Aw0reTrDRUB+7mfVlvA\"",
    "mtime": "2025-12-08T02:19:11.032Z",
    "size": 150677,
    "path": "../public/_nuxt/index.es.debe07a0.js"
  },
  "/_nuxt/index.f474f905.js": {
    "type": "application/javascript",
    "etag": "\"783d-fzxouVgTqen3V9fqaB8UnM1jJnU\"",
    "mtime": "2025-12-08T02:19:11.032Z",
    "size": 30781,
    "path": "../public/_nuxt/index.f474f905.js"
  },
  "/_nuxt/purify.es.96e69d58.js": {
    "type": "application/javascript",
    "etag": "\"588f-AGyBuZOiP4YtdbStESA66k3+e3I\"",
    "mtime": "2025-12-08T02:19:11.032Z",
    "size": 22671,
    "path": "../public/_nuxt/purify.es.96e69d58.js"
  },
  "/_nuxt/three.module.8ef8dcbc.js": {
    "type": "application/javascript",
    "etag": "\"a2f3f-RegdN89ZNcLCDodh0cZI/SHtx7w\"",
    "mtime": "2025-12-08T02:19:11.032Z",
    "size": 667455,
    "path": "../public/_nuxt/three.module.8ef8dcbc.js"
  }
};

function normalizeWindowsPath(input = "") {
  if (!input || !input.includes("\\")) {
    return input;
  }
  return input.replace(/\\/g, "/");
}
const _IS_ABSOLUTE_RE = /^[/\\](?![/\\])|^[/\\]{2}(?!\.)|^[A-Za-z]:[/\\]/;
const _DRIVE_LETTER_RE = /^[A-Za-z]:$/;
function cwd() {
  if (typeof process !== "undefined") {
    return process.cwd().replace(/\\/g, "/");
  }
  return "/";
}
const resolve = function(...arguments_) {
  arguments_ = arguments_.map((argument) => normalizeWindowsPath(argument));
  let resolvedPath = "";
  let resolvedAbsolute = false;
  for (let index = arguments_.length - 1; index >= -1 && !resolvedAbsolute; index--) {
    const path = index >= 0 ? arguments_[index] : cwd();
    if (!path || path.length === 0) {
      continue;
    }
    resolvedPath = `${path}/${resolvedPath}`;
    resolvedAbsolute = isAbsolute(path);
  }
  resolvedPath = normalizeString(resolvedPath, !resolvedAbsolute);
  if (resolvedAbsolute && !isAbsolute(resolvedPath)) {
    return `/${resolvedPath}`;
  }
  return resolvedPath.length > 0 ? resolvedPath : ".";
};
function normalizeString(path, allowAboveRoot) {
  let res = "";
  let lastSegmentLength = 0;
  let lastSlash = -1;
  let dots = 0;
  let char = null;
  for (let index = 0; index <= path.length; ++index) {
    if (index < path.length) {
      char = path[index];
    } else if (char === "/") {
      break;
    } else {
      char = "/";
    }
    if (char === "/") {
      if (lastSlash === index - 1 || dots === 1) ; else if (dots === 2) {
        if (res.length < 2 || lastSegmentLength !== 2 || res[res.length - 1] !== "." || res[res.length - 2] !== ".") {
          if (res.length > 2) {
            const lastSlashIndex = res.lastIndexOf("/");
            if (lastSlashIndex === -1) {
              res = "";
              lastSegmentLength = 0;
            } else {
              res = res.slice(0, lastSlashIndex);
              lastSegmentLength = res.length - 1 - res.lastIndexOf("/");
            }
            lastSlash = index;
            dots = 0;
            continue;
          } else if (res.length > 0) {
            res = "";
            lastSegmentLength = 0;
            lastSlash = index;
            dots = 0;
            continue;
          }
        }
        if (allowAboveRoot) {
          res += res.length > 0 ? "/.." : "..";
          lastSegmentLength = 2;
        }
      } else {
        if (res.length > 0) {
          res += `/${path.slice(lastSlash + 1, index)}`;
        } else {
          res = path.slice(lastSlash + 1, index);
        }
        lastSegmentLength = index - lastSlash - 1;
      }
      lastSlash = index;
      dots = 0;
    } else if (char === "." && dots !== -1) {
      ++dots;
    } else {
      dots = -1;
    }
  }
  return res;
}
const isAbsolute = function(p) {
  return _IS_ABSOLUTE_RE.test(p);
};
const dirname = function(p) {
  const segments = normalizeWindowsPath(p).replace(/\/$/, "").split("/").slice(0, -1);
  if (segments.length === 1 && _DRIVE_LETTER_RE.test(segments[0])) {
    segments[0] += "/";
  }
  return segments.join("/") || (isAbsolute(p) ? "/" : ".");
};

function readAsset (id) {
  const serverDir = dirname(fileURLToPath(globalThis._importMeta_.url));
  return promises.readFile(resolve(serverDir, assets[id].path))
}

const publicAssetBases = {"/_nuxt":{"maxAge":31536000}};

function isPublicAssetURL(id = '') {
  if (assets[id]) {
    return true
  }
  for (const base in publicAssetBases) {
    if (id.startsWith(base)) { return true }
  }
  return false
}

function getAsset (id) {
  return assets[id]
}

const METHODS = /* @__PURE__ */ new Set(["HEAD", "GET"]);
const EncodingMap = { gzip: ".gz", br: ".br" };
const _f4b49z = eventHandler((event) => {
  if (event.method && !METHODS.has(event.method)) {
    return;
  }
  let id = decodePath(
    withLeadingSlash(withoutTrailingSlash(parseURL(event.path).pathname))
  );
  let asset;
  const encodingHeader = String(
    getRequestHeader(event, "accept-encoding") || ""
  );
  const encodings = [
    ...encodingHeader.split(",").map((e) => EncodingMap[e.trim()]).filter(Boolean).sort(),
    ""
  ];
  if (encodings.length > 1) {
    setResponseHeader(event, "Vary", "Accept-Encoding");
  }
  for (const encoding of encodings) {
    for (const _id of [id + encoding, joinURL(id, "index.html" + encoding)]) {
      const _asset = getAsset(_id);
      if (_asset) {
        asset = _asset;
        id = _id;
        break;
      }
    }
  }
  if (!asset) {
    if (isPublicAssetURL(id)) {
      removeResponseHeader(event, "Cache-Control");
      throw createError$1({
        statusMessage: "Cannot find static asset " + id,
        statusCode: 404
      });
    }
    return;
  }
  const ifNotMatch = getRequestHeader(event, "if-none-match") === asset.etag;
  if (ifNotMatch) {
    setResponseStatus(event, 304, "Not Modified");
    return "";
  }
  const ifModifiedSinceH = getRequestHeader(event, "if-modified-since");
  const mtimeDate = new Date(asset.mtime);
  if (ifModifiedSinceH && asset.mtime && new Date(ifModifiedSinceH) >= mtimeDate) {
    setResponseStatus(event, 304, "Not Modified");
    return "";
  }
  if (asset.type && !getResponseHeader(event, "Content-Type")) {
    setResponseHeader(event, "Content-Type", asset.type);
  }
  if (asset.etag && !getResponseHeader(event, "ETag")) {
    setResponseHeader(event, "ETag", asset.etag);
  }
  if (asset.mtime && !getResponseHeader(event, "Last-Modified")) {
    setResponseHeader(event, "Last-Modified", mtimeDate.toUTCString());
  }
  if (asset.encoding && !getResponseHeader(event, "Content-Encoding")) {
    setResponseHeader(event, "Content-Encoding", asset.encoding);
  }
  if (asset.size > 0 && !getResponseHeader(event, "Content-Length")) {
    setResponseHeader(event, "Content-Length", asset.size);
  }
  return readAsset(id);
});

const _lazy_F8hdK2 = () => import('../handlers/renderer.mjs');

const handlers = [
  { route: '', handler: _f4b49z, lazy: false, middleware: true, method: undefined },
  { route: '/__nuxt_error', handler: _lazy_F8hdK2, lazy: true, middleware: false, method: undefined },
  { route: '/**', handler: _lazy_F8hdK2, lazy: true, middleware: false, method: undefined }
];

function createNitroApp() {
  const config = useRuntimeConfig();
  const hooks = createHooks();
  const captureError = (error, context = {}) => {
    const promise = hooks.callHookParallel("error", error, context).catch((_err) => {
      console.error("Error while capturing another error", _err);
    });
    if (context.event && isEvent(context.event)) {
      const errors = context.event.context.nitro?.errors;
      if (errors) {
        errors.push({ error, context });
      }
      if (context.event.waitUntil) {
        context.event.waitUntil(promise);
      }
    }
  };
  const h3App = createApp({
    debug: destr(false),
    onError: (error, event) => {
      captureError(error, { event, tags: ["request"] });
      return errorHandler(error, event);
    },
    onRequest: async (event) => {
      await nitroApp.hooks.callHook("request", event).catch((error) => {
        captureError(error, { event, tags: ["request"] });
      });
    },
    onBeforeResponse: async (event, response) => {
      await nitroApp.hooks.callHook("beforeResponse", event, response).catch((error) => {
        captureError(error, { event, tags: ["request", "response"] });
      });
    },
    onAfterResponse: async (event, response) => {
      await nitroApp.hooks.callHook("afterResponse", event, response).catch((error) => {
        captureError(error, { event, tags: ["request", "response"] });
      });
    }
  });
  const router = createRouter({
    preemptive: true
  });
  const localCall = createCall(toNodeListener(h3App));
  const _localFetch = createFetch(localCall, globalThis.fetch);
  const localFetch = (...args) => {
    return _localFetch(...args).then(
      (response) => normalizeFetchResponse(response)
    );
  };
  const $fetch = createFetch$1({
    fetch: localFetch,
    Headers: Headers$1,
    defaults: { baseURL: config.app.baseURL }
  });
  globalThis.$fetch = $fetch;
  h3App.use(createRouteRulesHandler({ localFetch }));
  h3App.use(
    eventHandler((event) => {
      event.context.nitro = event.context.nitro || { errors: [] };
      const envContext = event.node.req?.__unenv__;
      if (envContext) {
        Object.assign(event.context, envContext);
      }
      event.fetch = (req, init) => fetchWithEvent(event, req, init, { fetch: localFetch });
      event.$fetch = (req, init) => fetchWithEvent(event, req, init, {
        fetch: $fetch
      });
      event.waitUntil = (promise) => {
        if (!event.context.nitro._waitUntilPromises) {
          event.context.nitro._waitUntilPromises = [];
        }
        event.context.nitro._waitUntilPromises.push(promise);
        if (envContext?.waitUntil) {
          envContext.waitUntil(promise);
        }
      };
      event.captureError = (error, context) => {
        captureError(error, { event, ...context });
      };
    })
  );
  for (const h of handlers) {
    let handler = h.lazy ? lazyEventHandler(h.handler) : h.handler;
    if (h.middleware || !h.route) {
      const middlewareBase = (config.app.baseURL + (h.route || "/")).replace(
        /\/+/g,
        "/"
      );
      h3App.use(middlewareBase, handler);
    } else {
      const routeRules = getRouteRulesForPath(
        h.route.replace(/:\w+|\*\*/g, "_")
      );
      if (routeRules.cache) {
        handler = cachedEventHandler(handler, {
          group: "nitro/routes",
          ...routeRules.cache
        });
      }
      router.use(h.route, handler, h.method);
    }
  }
  h3App.use(config.app.baseURL, router.handler);
  const app = {
    hooks,
    h3App,
    router,
    localCall,
    localFetch,
    captureError
  };
  for (const plugin of plugins) {
    try {
      plugin(app);
    } catch (err) {
      captureError(err, { tags: ["plugin"] });
      throw err;
    }
  }
  return app;
}
const nitroApp = createNitroApp();
const useNitroApp = () => nitroApp;

const debug = (...args) => {
};
function GracefulShutdown(server, opts) {
  opts = opts || {};
  const options = Object.assign(
    {
      signals: "SIGINT SIGTERM",
      timeout: 3e4,
      development: false,
      forceExit: true,
      onShutdown: (signal) => Promise.resolve(signal),
      preShutdown: (signal) => Promise.resolve(signal)
    },
    opts
  );
  let isShuttingDown = false;
  const connections = {};
  let connectionCounter = 0;
  const secureConnections = {};
  let secureConnectionCounter = 0;
  let failed = false;
  let finalRun = false;
  function onceFactory() {
    let called = false;
    return (emitter, events, callback) => {
      function call() {
        if (!called) {
          called = true;
          return Reflect.apply(callback, this, arguments);
        }
      }
      for (const e of events) {
        emitter.on(e, call);
      }
    };
  }
  const signals = options.signals.split(" ").map((s) => s.trim()).filter((s) => s.length > 0);
  const once = onceFactory();
  once(process, signals, (signal) => {
    shutdown(signal).then(() => {
      if (options.forceExit) {
        process.exit(failed ? 1 : 0);
      }
    }).catch((err) => {
      process.exit(1);
    });
  });
  function isFunction(functionToCheck) {
    const getType = Object.prototype.toString.call(functionToCheck);
    return /^\[object\s([A-Za-z]+)?Function]$/.test(getType);
  }
  function destroy(socket, force = false) {
    if (socket._isIdle && isShuttingDown || force) {
      socket.destroy();
      if (socket.server instanceof Bt.Server) {
        delete connections[socket._connectionId];
      } else {
        delete secureConnections[socket._connectionId];
      }
    }
  }
  function destroyAllConnections(force = false) {
    for (const key of Object.keys(connections)) {
      const socket = connections[key];
      const serverResponse = socket._httpMessage;
      if (serverResponse && !force) {
        if (!serverResponse.headersSent) {
          serverResponse.setHeader("connection", "close");
        }
      } else {
        destroy(socket);
      }
    }
    for (const key of Object.keys(secureConnections)) {
      const socket = secureConnections[key];
      const serverResponse = socket._httpMessage;
      if (serverResponse && !force) {
        if (!serverResponse.headersSent) {
          serverResponse.setHeader("connection", "close");
        }
      } else {
        destroy(socket);
      }
    }
  }
  server.on("request", function(req, res) {
    req.socket._isIdle = false;
    if (isShuttingDown && !res.headersSent) {
      res.setHeader("connection", "close");
    }
    res.on("finish", function() {
      req.socket._isIdle = true;
      destroy(req.socket);
    });
  });
  server.on("connection", function(socket) {
    if (isShuttingDown) {
      socket.destroy();
    } else {
      const id = connectionCounter++;
      socket._isIdle = true;
      socket._connectionId = id;
      connections[id] = socket;
      socket.once("close", () => {
        delete connections[socket._connectionId];
      });
    }
  });
  server.on("secureConnection", (socket) => {
    if (isShuttingDown) {
      socket.destroy();
    } else {
      const id = secureConnectionCounter++;
      socket._isIdle = true;
      socket._connectionId = id;
      secureConnections[id] = socket;
      socket.once("close", () => {
        delete secureConnections[socket._connectionId];
      });
    }
  });
  process.on("close", function() {
  });
  function shutdown(sig) {
    function cleanupHttp() {
      destroyAllConnections();
      return new Promise((resolve, reject) => {
        server.close((err) => {
          if (err) {
            return reject(err);
          }
          return resolve(true);
        });
      });
    }
    if (options.development) {
      return process.exit(0);
    }
    function finalHandler() {
      if (!finalRun) {
        finalRun = true;
        if (options.finally && isFunction(options.finally)) {
          options.finally();
        }
      }
      return Promise.resolve();
    }
    function waitForReadyToShutDown(totalNumInterval) {
      if (totalNumInterval === 0) {
        debug(
          `Could not close connections in time (${options.timeout}ms), will forcefully shut down`
        );
        return Promise.resolve(true);
      }
      const allConnectionsClosed = Object.keys(connections).length === 0 && Object.keys(secureConnections).length === 0;
      if (allConnectionsClosed) {
        return Promise.resolve(false);
      }
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(waitForReadyToShutDown(totalNumInterval - 1));
        }, 250);
      });
    }
    if (isShuttingDown) {
      return Promise.resolve();
    }
    return options.preShutdown(sig).then(() => {
      isShuttingDown = true;
      cleanupHttp();
    }).then(() => {
      const pollIterations = options.timeout ? Math.round(options.timeout / 250) : 0;
      return waitForReadyToShutDown(pollIterations);
    }).then((force) => {
      if (force) {
        destroyAllConnections(force);
      }
      return options.onShutdown(sig);
    }).then(finalHandler).catch((err) => {
      const errString = typeof err === "string" ? err : JSON.stringify(err);
      failed = true;
      throw errString;
    });
  }
  function shutdownManual() {
    return shutdown("manual");
  }
  return shutdownManual;
}

function getGracefulShutdownConfig() {
  return {
    disabled: !!process.env.NITRO_SHUTDOWN_DISABLED,
    signals: (process.env.NITRO_SHUTDOWN_SIGNALS || "SIGTERM SIGINT").split(" ").map((s) => s.trim()),
    timeout: Number.parseInt(process.env.NITRO_SHUTDOWN_TIMEOUT, 10) || 3e4,
    forceExit: !process.env.NITRO_SHUTDOWN_NO_FORCE_EXIT
  };
}
function setupGracefulShutdown(listener, nitroApp) {
  const shutdownConfig = getGracefulShutdownConfig();
  if (shutdownConfig.disabled) {
    return;
  }
  GracefulShutdown(listener, {
    signals: shutdownConfig.signals.join(" "),
    timeout: shutdownConfig.timeout,
    forceExit: shutdownConfig.forceExit,
    onShutdown: async () => {
      await new Promise((resolve) => {
        const timeout = setTimeout(() => {
          console.warn("Graceful shutdown timeout, force exiting...");
          resolve();
        }, shutdownConfig.timeout);
        nitroApp.hooks.callHook("close").catch((err) => {
          console.error(err);
        }).finally(() => {
          clearTimeout(timeout);
          resolve();
        });
      });
    }
  });
}

const cert = process.env.NITRO_SSL_CERT;
const key = process.env.NITRO_SSL_KEY;
const server = cert && key ? new Server({ key, cert }, toNodeListener(nitroApp.h3App)) : new Server$1(toNodeListener(nitroApp.h3App));
const port = destr(process.env.NITRO_PORT || process.env.PORT) || 3e3;
const host = process.env.NITRO_HOST || process.env.HOST;
const path = process.env.NITRO_UNIX_SOCKET;
const listener = server.listen(path ? { path } : { port, host }, (err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  const protocol = cert && key ? "https" : "http";
  const addressInfo = listener.address();
  if (typeof addressInfo === "string") {
    console.log(`Listening on unix socket ${addressInfo}`);
    return;
  }
  const baseURL = (useRuntimeConfig().app.baseURL || "").replace(/\/$/, "");
  const url = `${protocol}://${addressInfo.family === "IPv6" ? `[${addressInfo.address}]` : addressInfo.address}:${addressInfo.port}${baseURL}`;
  console.log(`Listening on ${url}`);
});
trapUnhandledNodeErrors();
setupGracefulShutdown(listener, nitroApp);
const nodeServer = {};

export { $fetch as $, nodeServer as A, send as a, br as b, setResponseStatus as c, setResponseHeaders as d, eventHandler as e, useRuntimeConfig as f, getResponseStatus as g, getQuery as h, createError$1 as i, joinURL as j, getRouteRules as k, getResponseStatusText as l, sanitizeStatusCode as m, createHooks as n, getRequestHeaders as o, parse as p, qn as q, getRequestHeader as r, setResponseHeader as s, destr as t, useNitroApp as u, isEqual as v, setCookie as w, getCookie as x, deleteCookie as y, defu as z };
//# sourceMappingURL=node-server.mjs.map
