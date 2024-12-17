$(document).ready(() => {
    let recipie = []; // Array to store the final recipe data

    // Populate Product Names from productNames.js
    $('.productName').select2({
        placeholder: "בחר מוצר",
        data: productNames.map(p => ({ id: p.id, text: p.product })),
        allowClear: true
    });

    // Populate Ingredients from ingredients.js
    let ingredientsHtml = ingredientsDB.map(ing => `<option value="${ing.id}">${ing.name}</option>`).join('');
    $('.box').html(`
        <label>חומר גלם:</label> 
        <select class="ingredient" style="width: 200px;">
            ${ingredientsHtml}
        </select>
    `);
    $('.ingredient').select2({ placeholder: "בחר חומר גלם" });

    // Add Ingredient Button Click
    $('#addIngredient').on('click', () => {
        const productName = $('.productName').select2('data')[0]?.text;
        const amountOfProducts = $('.amountOfProducts').val();
        const ingredient = $('.ingredient').select2('data')[0]?.text;
        const unit = $('#unitType').val();
        const quantity = $('#quantity').val();

        if (!productName || !amountOfProducts || !ingredient || !unit || !quantity) {
            alert('יש למלא את כל השדות!');
            return;
        }

        let total = {
            productName,
            amountOfProducts: Number(amountOfProducts),
            ingredients: {
                ingredient,
                unit,
                quantity: Number(quantity)
            }
        };

        recipie.push(total);

        // Append to the checked list
        $('.checked').append(`
            <li>חומר גלם: ${ingredient}, יחידה: ${unit}, כמות: ${quantity}</li>
        `);

        // Clear inputs
        $('#quantity').val('');
        $('.ingredient').val(null).trigger('change');
    });

    // Finish Button Click
    $('#finish').on('click', () => {
        if (recipie.length === 0) {
            alert('אין מתכונים לסיים!');
            return;
        }

        // Display final recipe
        recipie.forEach(recipe => {
            let ingredientsHtml = `<li>חומר גלם: ${recipe.ingredients.ingredient}, יחידה: ${recipe.ingredients.unit}, כמות: ${recipe.ingredients.quantity}</li>`;

            let recipeHtml = `
            <div class="recipe">
                <h3>${recipe.productName} - כמות מיוצרת: ${recipe.amountOfProducts}</h3>
                <ul>${ingredientsHtml}</ul>
            </div>
            `;
            $('.final').append(recipeHtml);
        });

        // Send data via AJAX
        $.ajax({
            url: 'https://hook.eu2.make.com/pgzu9bge32pnhdcw38lcf982bcd9fwwc',
            type: "POST",
            contentType: "application/json",
            data: JSON.stringify({ recipes: recipie }),
            success: function () {
                $('.final').append(`<p>המתכון נשלח בהצלחה!</P>`);
                $('.amountOfProducts').val('')
                $('.ingredient').select2('')
                $('#unitType').val('');
                $('#quantity').val('');

            },
            error: function (error) {
                console.error("Error:", error);
            }
        });

        // Clear the UI and recipe array
        recipie = [];
        $('.checked').empty();
        $('.final').empty();
    });
});
