const getApi = async () => {
    const res = await fetch('https://test-api.ginbits.com/23a09e35581fa0e82ab3cbfb853784da/v1/games.json');
    const result = await res.json();

    const filterCategories = [];
    result.forEach(game=> {
        game.categories.forEach(category=> filterCategories.includes(category) || filterCategories.push(category) )
    });

    console.log(filterCategories)
    return {
        games: result,
        categories: getCategories(filterCategories)
    }
}

const getCategories = (filterCategories) => {
    const moreCategories = [];
    const otherCategory = {
        name: 'Other',
        categories: []
    };
    const topCategory = {
        name: 'Top Games',
        categories: []
    };
    const newCategory = {
        name: 'New games',
        categories: []
    };


    filterCategories.forEach(category => {
        if(category ==="top") return topCategory.categories.push(category);
        if(category ==="new") return newCategory.categories.push(category);
        if (category === "ball" || category === "virtual" || category === "fun") return  otherCategory.categories.push(category);
        return moreCategories.push({
            name: category[0].toUpperCase() + category.slice(1),
            categories: [category]
        });
    });

    const newCategories = [
        ...topCategory.categories.length? [topCategory] : [],
        ...newCategory.categories.length ? [newCategory] : [],
        ...moreCategories,
        ...otherCategory.categories.length? [otherCategory] : []
    ];

    return newCategories;
};

export default getApi;
