const initProtertiesSync = () => {
  const selectedProperties = document.querySelector('.selected-properties');
  const searchProperties = document.querySelector('.search-properties__groups');

  if (!selectedProperties || !searchProperties) {
    return;
  }

  const onRemoveBtnClick = ({ target }) => {
    const removeBtn = target.closest('.selected-properties__remove-btn');

    if (removeBtn) {
      const selectedProperty = removeBtn.closest('.selected-properties__item');

      if (selectedProperty) {
        const searchProperty = searchProperties.querySelector(`input[value="${selectedProperty.dataset.value}"]`);

        selectedProperty.classList.remove('is-selected');
        searchProperty.checked = false;
      }
    }
  };

  const onSearchPropertyChange = ({ target }) => {

    if (target.name && target.name === 'properties') {
      const selectedProperty = selectedProperties.querySelector(`.selected-properties__item[data-value="${target.value}"]`);

      if (selectedProperty && target.checked) {
        selectedProperty.classList.add('is-selected');
      }

      if (selectedProperty && !target.checked) {
        selectedProperty.classList.remove('is-selected');
      }
    }
  };

  selectedProperties.addEventListener('click', onRemoveBtnClick);
  searchProperties.addEventListener('change', onSearchPropertyChange);
};

export { initProtertiesSync };
