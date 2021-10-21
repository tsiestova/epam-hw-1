export const initBlogSearch = function() {
    const searchInput = document.getElementById('blog-list-search');
    let regex = /^[A-Z][a-z0-9:?!,. ]+.{6,60}/

    searchInput.focus();
    searchInput.addEventListener('input', function (e) {
        if (!e.target.value) {
            alert('Please enter your title');
            searchInput.focus();
        }
        if(regex.test(e.target.value)) {

        }
    })
};
