import { LightningElement, wire } from 'lwc';
import { openSubtab, IsConsoleNavigation, EnclosingTabId } from 'lightning/platformWorkspaceApi';
export default class OpenSubTab extends LightningElement {
    @wire(IsConsoleNavigation)
    isConsoleNavigation //returns true or false

    @wire(EnclosingTabId)
    parentTabId

    openTabRecordId(){
        if(this.isConsoleNavigation){
            openSubtab(this.parentTabId, {
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
            openSubtab(this.parentTabId, {
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
            openSubtab(this.parentTabId, {
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