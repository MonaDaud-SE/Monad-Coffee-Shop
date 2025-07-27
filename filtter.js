export class Filtter{
    constructor(buttens,items){
        this.filtter(buttens,items);
    }
    filtter(buttens,items){
        buttens.forEach((butten)=>{
            butten.addEventListener("click",()=>{
                const bt_kind=butten.getAttribute("kind");
                items.forEach((item)=>{
                    if(bt_kind==="all" || bt_kind===item.getAttribute('kind')){
                        item.style.display="flex";
                    }else{
                        item.style.display="none";
                    };
                });

            });
        });
    };
};