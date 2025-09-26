'use strict';

// кнопки
const appendRow = document.querySelector('.append-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');
const removeRow = document.querySelector('.remove-row');

// таблиця
const field = document.querySelector('.field');

// додавання рядка
appendRow.addEventListener('click', () => {
  const firstRow = field.querySelector('tr');
  const columns = firstRow.querySelectorAll('td');
  const newTr = document.createElement('tr');

  for (let i = 0; i < columns.length; i++) {
    newTr.append(document.createElement('td'));
  }

  field.append(newTr);

  // після додавання перевіряємо кількість рядків
  const allRows = field.querySelectorAll('tr');

  appendRow.disabled = allRows.length >= 10;
  removeRow.disabled = allRows.length <= 2;
});

// видалення рядка
removeRow.addEventListener('click', () => {
  const rows = field.querySelectorAll('tr');

  if (rows.length > 2) {
    rows[rows.length - 1].remove();
  }

  const allRows = field.querySelectorAll('tr');

  appendRow.disabled = allRows.length >= 10;
  removeRow.disabled = allRows.length <= 2;
});

// додавання колонки
appendColumn.addEventListener('click', () => {
  const rows = field.querySelectorAll('tr');

  rows.forEach((row) => row.append(document.createElement('td')));

  const totalColumns = rows[0].querySelectorAll('td').length;

  appendColumn.disabled = totalColumns >= 10;
  removeColumn.disabled = totalColumns <= 2;
});

// видалення колонки
removeColumn.addEventListener('click', () => {
  const rows = field.querySelectorAll('tr');
  let totalColumns = rows[0].querySelectorAll('td').length;

  if (totalColumns > 2) {
    rows.forEach((row) => {
      const lastTd = row.querySelector('td:last-child');

      lastTd.remove();
    });
  }

  totalColumns = rows[0].querySelectorAll('td').length;
  appendColumn.disabled = totalColumns >= 10;
  removeColumn.disabled = totalColumns <= 2;
});
