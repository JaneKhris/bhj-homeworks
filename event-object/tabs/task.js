const tabs = Array.from(document.querySelectorAll('.tab'))
const contents = Array.from(document.querySelectorAll('.tab__content'))

tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
        tab.closest('.tabs').querySelector('.tab_active').className = "tab";
        tab.className = "tab tab_active";
        tab.closest('.tabs').querySelector('.tab__content_active').className = "tab__content"
        contents[tabs.indexOf(tab)].className = "tab__content tab__content_active"
    })

})
console.log(tabs)
