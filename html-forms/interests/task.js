const interests = Array.from(document.querySelectorAll('.interest__check'));
console.log(interests)

interests.forEach((interest) => {
    interest.addEventListener('change', () => {
        innersList = interest.closest('.interest').querySelector('.interests_active');
        if (innersList) {
            inners = Array.from(innersList.querySelectorAll('.interest__check'));
            inners.forEach((inner) => {
                inner.checked = interest.checked;
            })
        }
    })
})
