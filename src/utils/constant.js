export const LOGO = "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";
export const USER_AVATAR ="https://wallpapers.com/images/high/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.webp";
export const LOGIN_IMAGE = "https://assets.nflxext.com/ffe/siteui/vlv3/cacfadb7-c017-4318-85e4-7f46da1cae88/d99fa435-e8f8-405d-8685-c69b263f2e92/AU-en-20240603-popsignuptwoweeks-perspective_alpha_website_large.jpg";
export const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer' + process.env.REACT_APP_TMDB_API
    }
  };
export const IMAGE_URL = "https://image.tmdb.org/t/p/w200/";
export const SUPPORTED_LANGUAGES = [{identifier: "en", name: "English"}, {identifier: "hindi", name: "Hindi"}, {identifier: "spanish", name: "Spanish"}]

export const VITE_API_KEY = "AIzaSyAilgDjIi9EWfSqRkMxlsXF46v4mI00mtY"