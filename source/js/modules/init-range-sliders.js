import noUiSlider from '../vendor/nouislider.min';

const initRangeSliders = () => {
  const rangeSliders = document.querySelectorAll('.range-slider');

  if (!rangeSliders.length) {
    return;
  }

  rangeSliders.forEach((rangeSlider) => {
    const slider = rangeSlider.querySelector('.range-slider__slider');
    const inputFrom = rangeSlider.querySelector('.range-slider__input--from');
    const inputTo = rangeSlider.querySelector('.range-slider__input--to');
    const inputs = [inputFrom, inputTo];

    const onInputChange = (input, handle) => {
      slider.noUiSlider.setHandle(handle, input.value);
    };

    const onKeydown = (evt, input, handle) => {
      const values = slider.noUiSlider.get();
      const value = Number(values[handle]);
      const steps = slider.noUiSlider.steps();
      const step = steps[handle];
      let position;

      switch (evt.which) {
        case 13:
          slider.noUiSlider.setHandle(handle, parseInt(input.value, 10));

          break;

        case 38:
          position = step[1];

          if (position === false) {
            position = 1;
          }

          if (position !== null) {
            slider.noUiSlider.setHandle(handle, parseInt(value, 10) + position);
          }

          break;

        case 40:
          position = step[0];

          if (position === false) {
            position = 1;
          }

          if (position !== null) {
            slider.noUiSlider.setHandle(handle, parseInt(value, 10) - position);
          }

          break;
      }
    };

    noUiSlider.create(slider, {
      start: JSON.parse(rangeSlider.dataset.start),
      connect: true,
      // eslint-disable-next-line no-undef
      tooltips: [false, wNumb({ decimals: 0, suffix: ' $' })],
      range: JSON.parse(rangeSlider.dataset.range),
    });

    slider.noUiSlider.on('update', (values, handle) => {
      inputs[handle].value = `${parseInt(values[handle], 10)} \$`;
    });

    inputs.forEach((input, handle) => {
      input.addEventListener('change', () => onInputChange(input, handle));
      input.addEventListener('keydown', (evt) => onKeydown(evt, input, handle));
    });
  });
};

export { initRangeSliders };
