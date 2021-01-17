


export const getTime = (data) => {
    console.log('->', data)
    const avgWordsPerMin = 250;
    let cleanPost = data.replace(/<(?:"[^"]*"['"]*|'[^']*'['"]*|[^'">])+>/g, '');
    let count = cleanPost.match(/\w+/g).length
    let time = Math.ceil(count / avgWordsPerMin);
    return `${time} Min Read`;
}


