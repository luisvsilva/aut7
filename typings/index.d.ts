/// <reference path="framework7/dom7.d.ts" />
/// <reference path="framework7/framework7.d.ts" />
/// <reference path="framework7/template7.d.ts" />


declare var PLATFORM:string;
declare var PRODUCTION:boolean;

declare interface AppView{
    name:string;
    moduleId:string;
    nav:boolean;
    navTitle?:string;
    homepage?:boolean;
}