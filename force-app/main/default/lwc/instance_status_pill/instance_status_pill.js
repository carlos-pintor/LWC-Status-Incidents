import { LightningElement, api } from 'lwc';

export default class Instance_status_pill extends LightningElement {
    @api instanceName;
    @api instanceStatus;

    getThemeCSS(){
        let themeClass = "";
        if (this.instanceStatus === "Warning") {
            themeClass = " slds-theme_warning";
        } else if (this.instanceStatus === "Error") {
            themeClass = " slds-theme_error";   
        }
        return themeClass;
    }

    get pillCSSClasses() {
        let themeClass = this.getThemeCSS();
        return "slds-pill slds-pill_link" + themeClass;
    }

    get linkCSSClasses() {
        let themeClass = this.getThemeCSS();
        return "slds-pill__action" + themeClass;
    }

    get pillIconName() {
        let iconName = "";
        if (this.instanceStatus === "Warning") {
            iconName = "utility:warning";
        } else if (this.instanceStatus === "Error") {
            iconName = "utility:clear";   
        }
        return iconName;
    }

    get instanceStatusURL(){
        return "https://status.salesforce.com/instances/" + this.instanceName;
    }
}