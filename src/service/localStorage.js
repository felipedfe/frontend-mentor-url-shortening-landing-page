export const getStoredUrls = () => {
    const urls = JSON.parse(localStorage.getItem("urls")) || [];
    return urls;
}

export const addUrlsToStorage = (allUrls) => {
    localStorage.setItem("urls", JSON.stringify(allUrls));
}
