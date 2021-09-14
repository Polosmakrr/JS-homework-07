const categoriesList = document.querySelector(`#categories`);

const categoriesItem = document.querySelectorAll(`.item`);

const countCategories = (value) => {
    return console.log(`В списке ${value.children.length} категории.`);
}

countCategories(categoriesList);

categoriesItem.forEach(item => {
    const title=item.querySelector('h2');
    const itemList=item.querySelectorAll('ul');
    itemList.forEach(item=> console.log(`категория: ${title.textContent}, Количество элементов: ${item.querySelectorAll('li').length}`))
})
