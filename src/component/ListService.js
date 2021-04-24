
import { sp, Web } from "@pnp/sp/presets/all";

let web;
if (process.env.NODE_ENV === 'production') {
    web = sp.web;
}
else {
    web = Web("http://localhost:8080");
}
// const web = new Web("http://localhost:8080");
// const web = new Web("https://portal.golrang.com/services/BGM");

//-----------------------------------------------------------------------------
export async function remove() {

    let result = await web.lists.getByTitle('RequestCoin').items
        .select('Id', 'Title').get();

    // result.forEach(o => o.AuthorTitle = o.Author.Title);

    // let items = [];
    // if (tabId == "cratable") {
    //     items = checkRole(result, role);
    // } else {
    //     items = result;
    // }
    return result;
    debugger
}
export async function add() {

    let result = await web.lists.getByTitle('RequestCoin').items
        .select('Id', 'Title').get();

    // result.forEach(o => o.AuthorTitle = o.Author.Title);

    // let items = [];
    // if (tabId == "cratable") {
    //     items = checkRole(result, role);
    // } else {
    //     items = result;
    // }
    return result;
    debugger
}
export async function getDataGrid() {

    let result = await web.lists.getByTitle('RequestCoin').items
        .select('Id', 'Title').get();

    // result.forEach(o => o.AuthorTitle = o.Author.Title);

    // let items = [];
    // if (tabId == "cratable") {
    //     items = checkRole(result, role);
    // } else {
    //     items = result;
    // }
    return result;
    debugger
}
export async function getDataGrid() {

    let result = await web.lists.getByTitle('RequestCoin').items
        .select('Id', 'Title').get();

    // result.forEach(o => o.AuthorTitle = o.Author.Title);

    // let items = [];
    // if (tabId == "cratable") {
    //     items = checkRole(result, role);
    // } else {
    //     items = result;
    // }
    return result;
    debugger
}
export async function getDataGrid() {

    let result = await web.lists.getByTitle('RequestCoin').items
        .select('Id', 'Title').get();

    // result.forEach(o => o.AuthorTitle = o.Author.Title);

    // let items = [];
    // if (tabId == "cratable") {
    //     items = checkRole(result, role);
    // } else {
    //     items = result;
    // }
    return result;
    debugger
}