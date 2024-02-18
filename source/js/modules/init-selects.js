import SlimSelect from '../vendor/slimselect.min';

const initSelects = () => {
  const selects = document.querySelectorAll('.select[data-select]');

  if (!selects.length) {
    return;
  }

  selects.forEach((select) => {
    // eslint-disable-next-line no-unused-vars
    const slimSelect = new SlimSelect({
      select: `[data-select='${select.dataset.select}'] select`,
      data: JSON.parse(select.dataset.markup),
      settings: {
        showSearch: false,
        contentLocation: select,
        hideSelected: true,
      },
    });
  });
};

export { initSelects };
