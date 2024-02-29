document
  .getElementById('tableForm')
  .addEventListener('submit', function (event) {
    event.preventDefault();

    var select = document.getElementById('dayOfWeek');
    var service = document.getElementById('service').value;
    var dayOfWeek = document.getElementById('dayOfWeek').value;
    var time = document.getElementById('time').value;

    var tableContent = '<table>';

    for (var i = -1; i < 24; i++) {
      for (var j = -1; j < select.length; j++) {
        if (i === -1 && j === -1) {
          tableContent += '<th></th>';
        } else if (j === -1) {
          tableContent += '<th>' + i + ':00</th>';
        } else if (i === -1) {
          tableContent += '<th>' + select[j].value + '</th>';
        } else if (select[j].value === dayOfWeek && i === Number(time)) {
          console.log(select[j].value === dayOfWeek);
          console.log(i === time);
          tableContent += '<td>' + service + '</td>';
        } else {
          tableContent += '<td></td>';
        }
      }
      tableContent += '</tr>';
    }

    tableContent += '</table>';

    document.getElementById('tableContainer').innerHTML = tableContent;

    // Сохранение параметров в LocalStorage
    localStorage.setItem('service', service);
    localStorage.setItem('dayOfWeek', dayOfWeek);
    localStorage.setItem('time', time);
    console.log(localStorage.getItem('service'));
    console.log(localStorage.getItem('dayOfWeek'));
    console.log(localStorage.getItem('time'));
  });

window.addEventListener('load', () => {
  var savedService = localStorage.getItem('service');
  var savedDayOfWeek = localStorage.getItem('dayOfWeek');
  var savedTime = localStorage.getItem('time');
  var select = document.getElementById('dayOfWeek');

  if (savedService && savedDayOfWeek && savedTime) {
    var tableContent = '<table>';

    for (var i = -1; i < 24; i++) {
      for (var j = -1; j < select.length; j++) {
        if (i === -1 && j === -1) {
          tableContent += '<th></th>';
        } else if (j === -1) {
          tableContent += '<th>' + i + ':00</th>';
        } else if (i === -1) {
          tableContent += '<th>' + select[j].value + '</th>';
        } else if (
          select[j].value === savedDayOfWeek &&
          i === Number(savedTime)
        ) {
          console.log(select[j].value === savedDayOfWeek);
          console.log(i === savedTime);
          tableContent += '<td>' + savedService + '</td>';
        } else {
          tableContent += '<td></td>';
        }
      }
      tableContent += '</tr>';
    }

    tableContent += '</table>';

    document.getElementById('tableContainer').innerHTML = tableContent;
  }
});
