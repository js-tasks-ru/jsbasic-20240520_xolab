/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      }
 *
 */
function createElement(html) {
  const div = document.createElement('div');
  div.innerHTML = html;
  return div.firstElementChild;
};

export default class UserTable {
  elem = null;
  #rows = [];

  constructor(rows) {
    this.#rows = rows || this.#rows;

    this.elem = this.#render();
  }

  #template() {
    return `
        <table>
            ${this.#rows.map(({name, age, salary, city}, index) =>
      `<tr>
                <td>${name}</td>
                <td>${age}</td>
                <td>${salary}</td>
                <td>${city}</td>
                <td><button type="button">X</button></td>
              </tr>`
    ).join('')}
        </table>
    `;
  }

  #render() {
    this.elem = createElement(this.#template());

    this.elem.addEventListener('click', (event) => {
      if (event.target.nodeName === 'BUTTON') {
        event.target.closest('tr').remove();
      }
    });

    return this.elem;
  }
}
