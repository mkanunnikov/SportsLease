"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () {
        Recorder.initialize({
            swfSrc: "../recorder.swf"
        });
    };
    AppComponent.prototype.record = function () {
        Recorder.record({
            start: function () {
                this.setLabel("Recording...");
            },
            progress: function (ms) {
                this.setLabel("Record progressed: " + ms + "ms");
            }
        });
    };
    AppComponent.prototype.stopAndPlay = function () {
        Recorder.stop();
        Recorder.play({
            progress: function (ms) {
                this.setLabel("Play progressed: " + ms + "ms");
            }
        });
    };
    AppComponent.prototype.setLabel = function (message) {
        this.label = message;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "<button (mousedown)=\"record()\" (mouseup)=\"stopAndPlay()\">Record</button>\n<div>{{label}}</div>\n"
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map