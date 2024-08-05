import { LightningElement, wire } from 'lwc';
import { openTab, IsConsoleNavigation } from 'lightning/platformWorkspaceApi';
export default class OpenNewTab extends LightningElement {
    @wire(IsConsoleNavigation)
    isConsoleNavigation //returns true or false

    openTabRecordId(){
        if(this.isConsoleNavigation){
            openTab({
                recordId:'001J3000002TSuHIAW',
                label:'Troop',
                focus:true
            }).catch(error=>{
                console.log("Error in opening tab",error);
            })
        }
    }
    openTabUrl(){
        if(this.isConsoleNavigation){
            openTab({
                url:'/lightning/r/Account/001J3000002TSuHIAW/view',
                label:'Troop Url',
                focus:true
            }).catch(error=>{
                console.log("Error in opening tab",error);
            })
        }
    }
    openTabPageRef(){
        if(this.isConsoleNavigation){
            openTab({
                pageReference:{
                    type:'standard__objectPage',
                    attributes:{
                        objectApiName:'Account',
                        actionName:'list'
                    }
                },
                label:'Account\'s List',
                focus:true
            }).catch(error=>{
                console.log("Error in opening tab",error);
            })
        }
    }
}