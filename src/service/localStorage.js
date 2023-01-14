export const getUrls = () => {
    const urls = JSON.parse(localStorage.getItem("urls")) || [];
    return urls;
}

export const addUrls = (allUrls) => {
    localStorage.setItem("urls", JSON.stringify(allUrls));
}