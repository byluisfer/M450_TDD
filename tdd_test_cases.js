function formatCurrency(number) {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(number)
}

function transformArrayToObject(array) {
    return Object.fromEntries(array);
}

function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1)
}

function convertToCamelCase(str) {
    const words = str.toLowerCase().split(' ');
    for (var i = 1; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].substring(1);
    }
    return words.join('');
}

module.exports = { formatCurrency, transformArrayToObject, capitalizeFirstLetter, convertToCamelCase }