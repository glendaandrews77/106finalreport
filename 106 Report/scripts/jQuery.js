const mockApiUrl = 'https://jsonplaceholder.typicode.com/todos'; // Replace with your API URL

function fetchTasks() {
  $.get(mockApiUrl, function(data) {
    data.forEach(function(task) {
      addTask(task.title);
    });
  });
}

fetchTasks();
