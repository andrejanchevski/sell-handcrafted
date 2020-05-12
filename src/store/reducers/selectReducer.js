import * as actionTypes from '../actions/actionTypes'

const initalState={
    optionsVariations:[],
    optionsQuantity:[],
    selectedOptionVaration:null,
    selectedOptionQuantity:null,
    obj:{

    }
};

const reducer=(state=initalState,action)=>{
    switch (action.type) {
        case actionTypes.ADD_FIRST_OPTIONS:
            let newObj={};
            action.productItems.forEach((pi)=>{
               let str='';
               pi.attributes.forEach((ai)=>{
                  str+=ai.attributeValue+"/";
               });
               str=str+'$'+pi.price;
               newObj[str]=pi.quantityInStock;
            });

            return {
                ...state,
                obj: {
                    ...newObj
                },
                optionsVariations: Object.keys(newObj).map(el => {
                    return {
                        value: el,
                        label: el
                    }
                })
            };
        case actionTypes.SELECTED_VARIATION:
            let broj=state.obj[action.selectedItem];
            let nizaQuantity=[];
            for(let i=0;i<broj;i++){
                nizaQuantity.push(i)
            }

            return {
                ...state,
                selectedOptionVaration: action.selectedItem,
                optionsQuantity:nizaQuantity.map(broj=>{
                    return {
                        value:broj,
                        label:broj
                    }
                })

            };
        default:
            return state


    }
};



export default reducer;