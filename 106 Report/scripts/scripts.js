$(document).ready(function() {
    const $taskInput = $('#task-input');
    const $addTaskBtn = $('#add-task-btn');
    const $deleteAllBtn = $('#delete-all-btn');
    const $taskList = $('#task-list');
  
    $addTaskBtn.click(function() {
      const taskText = $taskInput.val().trim();
      if (taskText !== '') {
        addTask(taskText);
        $taskInput.val('');
      }
    });
  
    $deleteAllBtn.click(function() {
      $taskList.empty();
    });
  
    function addTask(taskText) {
      const $taskItem = $('<li>').text(taskText);
      $taskList.append($taskItem);
    }
  });
  