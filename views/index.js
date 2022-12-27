<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="csrf-token" content="<%= csrfToken %>">
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="./css/styles.css">
    <title>To-Do Manager</title>
    <script>
        var csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content')
        function updateTodo(id, completed) {
            fetch(`/todos/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    _csrf: csrfToken,
                    completed: completed
                })
            }).then((res) => {
                if (res.ok) {
                    window.location.reload()
                }
            }).catch((err) => {
                console.log(err)
            })
        }

        function deleteTodo(id) {
            fetch(`/todos/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    _csrf: csrfToken
                })
            }).then((res) => {
                if (res.ok) {
                    window.location.reload()
                }
            }).catch((err) => {
                console.log(err)
            })
        }
    </script>
</head>
<body>
    <div class="grid grid-cols-6">
        <div class="col-start-3 col-span-2">
            <%- include('header.ejs') %> 
            <form action="/todos" method="post">
                <input type="hidden" name="_csrf" value="<%= csrfToken %>">
                <div class="flex gap-2 py-4">
                    <div class="flex-auto"><input type="text" name="title" class="border border-gray-300 text-gray-900 w-full rounded p-2 text-sm" placeholder="What's next?" required /></div>
                    <div class="flex-auto"><input type="date" name="dueDate" class="border border-gray-300 text-gray-900 w-full rounded p-2 text-sm leading-4" required/></div>
                    <div class="flex-none"><button type="submit" class="bg-green-600 text-white px-5 py-2 rounded font-medium mr-2 mb py-1.5">Add</button></div>
                </div>
            </form>
            <div>
                <%- include('todos.ejs')  %> 
            </div>
        </div>
    </div>
</body>
</html>
