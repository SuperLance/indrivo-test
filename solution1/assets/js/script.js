const onTabSelect = (event) => {
  document.querySelectorAll('.tabs__item.tabs__item--active')
    .forEach((el) => {
      el.classList.remove('tabs__item--active');
    });

  event.target.classList.add('tabs__item--active');

  document.querySelectorAll('.tab-content.tab-content--active')
    .forEach((el) => {
      el.classList.remove('tab-content--active');
    });

  const tabId = event.target.attributes.getNamedItem('data-tab-for').value;
  document.querySelector(`#${tabId}`).classList.add('tab-content--active');
};
