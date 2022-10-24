export const getNews = async ( query ) => {
    try {
        const rawData = await fetch(`https://newsapi.org/v2/everything?q=${query}&apiKey=3c054fe28ddc4e6f96d6f2763e526d0c`);
        
        const data = await rawData.json();

        return data;
    } catch (error) {
        console.log(error);
    }
}