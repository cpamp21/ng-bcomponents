import {Component, ChangeDetectorRef} from '@angular/core';
import {BComponent, BComponentAttributes, BComponentInputs, DisplayType} from '../bcomponent';

@Component({
    selector: "button-bcomponent",
    templateUrl: "button.bcomponent.html",
    directives: [BComponentAttributes],
    inputs: BComponentInputs.concat(['text', 'type', 'click'])
})
export class ButtonBComponent extends BComponent {
    public text: string;
    public type: DisplayType = "default";
    public click: () => void;

    constructor() {
        super("btn btn-default");
    }

    public Initialize = (text: string = "", type: DisplayType = "default", click: () => void = (() => {})): ButtonBComponent => {
        this.text = text;
        this.type = type;
        this.click = click;
        if(this.ngOnChildChanges != null) this.ngOnChildChanges();
        return this;
    }

    ngOnChildChanges = () => {
        this.baseClass = "btn btn-" + this.type;
    }

    public onClick = () => {
        if(this.click != null) this.click();
    }
}