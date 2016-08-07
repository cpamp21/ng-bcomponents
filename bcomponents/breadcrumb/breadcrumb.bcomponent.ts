import {Component} from '@angular/core';
import {BComponent, BComponentAttributes, BComponentInputs} from '../bcomponent';
import {LinkBComponent} from '../link/link.bcomponent';

export class BreadcrumbItem {
    public link: string;
    public label: string;

    constructor(link: string, label: string) {
        this.link = link;
        this.label = label;
    }
}

@Component({
    selector: 'breadcrumb-bcomponent',
    templateUrl: 'breadcrumb.bcomponent.html',
    directives: [BComponentAttributes, LinkBComponent],
    inputs: BComponentInputs.concat('breadcrumbItems', 'active')
})
export class BreadcrumbBComponent extends BComponent {
    public breadcrumbItems: BreadcrumbItem[];
    public active: string;

    constructor() {
        super("breadcrumb");
    }
}