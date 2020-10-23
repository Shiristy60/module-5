function addCartToFindifyProduct(apiData){
    var node = apiData.node;
    var buttonNode, button;

    if (node && apiData.data.availability) {
        buttonNode = node.querySelector('[data-add-to-cart="' + apiData.data.id + '"]');

        if (!buttonNode) {
            button = document.createElement('button');

            button.setAttribute('data-add-to-cart',apiData.data.id);
            button.setAttribute('data-findify-type','add-to-cart-product');
            button.setAttribute('data-findify-id', apiData.data.id);
            //adding custom classes
            button.setAttribute('class', 'YOUR_CUSTOM_CLASSES');
            
            //change button value
            button.innerHTML = "Add to cart";

            button.addEventListener('click', function(e) {                
                e.preventDefault();
                //BIND TO YOUR ADD TO CART FUNCTION
            });
            if (node.children && node.children.length > 0){
                node.children[0].appendChild(button);
            } else {
                node.appendChild(button);
            }                    
        }
    }
}

window.findifyApiRegistry = [
    function (api) {
        api.on(api.events.searchRenderedResults, function (apiData) {
            addCartToFindifyProduct(apiData);
        });
    }
];