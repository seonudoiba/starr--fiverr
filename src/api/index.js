import axios from "axios";
const url = "https://starr-fiverr-api-od4h-git-main-seonudoiba.vercel.app/services/";
const url_favs = "https://starr-fiverr-api-od4h-git-main-seonudoiba.vercel.app/favs/";

export let fetchServices = () => axios.get(url);
export let createServices = (newServices) => axios.post(url, newServices);
export let fetchfavs = () => axios.get(url);
export let createfavs = (newfavs) => axios.post(url_favs, newfavs);
