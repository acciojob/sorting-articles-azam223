const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled'];

function stripArticle(title) {
    // Remove "a", "an", and "the" from the beginning of the title
    return title.replace(/^(a |an |the )/i, '').trim();
}

const sortedBands = bands.slice().sort((a, b) => stripArticle(a) > stripArticle(b) ? 1 : -1);

const bandList = document.getElementById('band');

sortedBands.forEach(band => {
    const listItem = document.createElement('li');
    listItem.textContent = band;
    bandList.appendChild(listItem);
});
