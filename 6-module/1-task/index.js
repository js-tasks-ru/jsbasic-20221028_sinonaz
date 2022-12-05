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
export default class UserTable {
  constructor(rows) {
    this.rows = rows;
    this.elem = this.render();
  }

  render() {
    this.elem = document.createElement(`table`);

    const tbody = document.createElement(`tbody`);
    this.elem.insertAdjacentHTML(
      `afterbegin`,
      `<thead>
        <tr>
          <th>Имя</th>
          <th>Возраст</th>
          <th>Зарплата</th>
          <th>Город</th>
          <th></th>
        </tr>
      </thead>`
    );
    this.elem.append(tbody);

    this.rows.map(({ name, age, salary, city }) => {
      tbody.insertAdjacentHTML(
        `beforeend`,
        `<tr>
          <td>${name}</td>
          <td>${age}</td>
          <td>${salary}</td>
          <td>${city}</td>
          <td><button type="button">X</button></td>
        </tr>`
      );
    });

    tbody.addEventListener(`click`, this.onClick);

    return this.elem;
  }

  onClick(event) {
    if (event.target.closest(`button`)) {
      event.target.parentNode.parentNode.remove();
    }
  }
}
