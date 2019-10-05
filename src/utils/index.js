//公用的js
const getQuery = url => {
    let URL1 = url || window.location.href;
    let result = {};
    let str = URL1.split("?")[1];
    let arr = str.split("&");
    arr.forEach(item => {
       let key = item.split("=")[0];
       let  value = item.split("=")[1];
        result[key] = value;
    });
    return result;
};
export default {
    getQuery
};