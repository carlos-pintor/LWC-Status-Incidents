import { LightningElement, api, wire } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';

import NAME_FIELD from '@salesforce/schema/Account.Name';
const FIELDS = [NAME_FIELD];

export default class Status_incidents extends LightningElement {
    @api recordId;
    @api daysBack;

    @wire(getRecord, { recordId: '$recordId', fields: FIELDS })
    wiredRecord({ error, data }) {
        if(data){
            console.log("data:", data);
            console.log("daysBack:", this.daysBack);
            let startDate = new Date();
            startDate.setDate(startDate.getDate() - this.daysBack);
            startDate = startDate.toISOString().slice(0,10);
            console.log("startDate: " + startDate);
        }
    }
}