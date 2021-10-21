
export const initBlogSearch = function () {

    const input = document.getElementById('blog-list__search-input');

    input.addEventListener('invalid', (event) => {
        input.setCustomValidity(`First letter uppercase \n At least 6 characters. \n Only Latin characters \n Allowed symbols - '?!,.:'`);
    });
}