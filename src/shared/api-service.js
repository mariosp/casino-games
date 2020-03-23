console.log(process.env.NODE_ENV)
const api = !process.env.NODE_ENV === "development" ?
    `${window.location.origin}`
    :
    `http://localhost:8080` ;

export const getApiJackpots = async () => {
    const res = await fetch(api +'/api/getjackpots');
    const result = await res.json();
    return result;
};

 export const getApi = async () => {
    // const res = await fetch('https://test-api.ginbits.com/23a09e35581fa0e82ab3cbfb853784da/v1/games.json');
    const res = await fetch(api +'/api/getgames');
    const result = await res.json();

    const filterCategories = [];
    result.forEach(game=> {
        game.categories.forEach(category=> filterCategories.includes(category) || filterCategories.push(category) )
    });

    return {
        games: result,
        categories: getCategories(filterCategories)
    }
};

const getCategories = (filterCategories) => {
    const moreCategories = [];
    const otherCategory = {
        name: 'Other',
        link: 'other',
        categories: []
    };
    const topCategory = {
        name: 'Top Games',
        link: 'topgames',
        categories: []
    };
    const newCategory = {
        name: 'New games',
        link: 'newgames',
        categories: []
    };


    filterCategories.forEach(category => {
        if(category ==="top") return topCategory.categories.push(category);
        if(category ==="new") return newCategory.categories.push(category);
        if (category === "ball" || category === "virtual" || category === "fun") return  otherCategory.categories.push(category);
        return moreCategories.push({
            name: category[0].toUpperCase() + category.slice(1),
            link: category.replace(/\s+/g, '').toLowerCase(),
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
