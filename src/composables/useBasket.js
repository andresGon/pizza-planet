import { ref,computed } from "vue";
export default function useBasket(){
    const basket = ref([]);

    function addToBasket(item,option){
        const pizzaExists = basket.value.find((pizza)=>{
            return pizza.name === item.name && pizza.size === option.size;
        })
        if(pizzaExists){
            pizzaExists.quantity++;
            return
        }
        basket.value.push({
            name: item.name,
            price: option.price,
            size: option.size,
            quantity: 1, 
        })
    }
    
    const increaseQuantity = (item) => {
        item.quantity++
    }
    
    const decreaseQuantity = (item) => {
        item.quantity--
        if(item.quantity === 0){
            removeFromBasket(item)
        }
    }

    const removeFromBasket=(item)=>{
        basket.value.splice(basket.value.indexOf(item), 1);
    }

    const total = computed(function(){
        let totalCost = 0;
        basket.value.forEach(function(item){
            totalCost += item.quantity * item.price;
        });
        return totalCost;
    });
    return {
        basket,
        addToBasket,
        increaseQuantity,
        decreaseQuantity,
        total,
    }
}