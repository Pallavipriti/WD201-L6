<h5 class="inline">Overdue</h5> [<span id="count-overdue"><%= overdue.length %></span>]
<ul class="list-none">
    <% for (let index = 0; index < overdue.length; index++) { 
        const t = overdue[index];    
    %>
        <li class="Todo-Item">
            <div class="flex w-fit my-2 px-2 py-1 items-center rounded hover:bg-purple-50">
                <input id="todo-checkbox-overdue-<%= index %>" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 rounder border-gray" <% if (t.completed) { %> checked <% } %> onclick="updateTodo(<%= t.id %>, <% if (t.completed) { %> false <% } else { %> true <% } %>)"/>
                <label for="todo-checkbox-overdue-<%= index %>" class="ml-2 text-sm text-gray-600 cursor-pointer"> <%= t.title %> </label>
                <a href="#" onclick="deleteTodo(<%= t.id %>)" class="ml-2 hidden trash-icon "><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                </svg></a>
            </div>
        </li>    
    <% } %> 
</ul>
<h5 class="inline">Due Today</h5> [<span id="count-due-today"><%= dueToday.length %></span>]
<ul class="list-none">
    <% for (let index = 0; index < dueToday.length; index++) { 
        const t = dueToday[index];    
    %>
        <li class="Todo-Item">
            <div class="flex w-fit my-2 px-2 py-1 items-center rounded hover:bg-purple-50">
                <input id="todo-checkbox-duetoday-<%= index %>" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 rounder border-gray" <% if (t.completed) { %> checked <% } %>  onclick="updateTodo(<%= t.id %>, <% if (t.completed) { %> false <% } else { %> true <% } %>)"/>
                <label for="todo-checkbox-duetoday-<%= index %>" class="ml-2 text-sm text-gray-600 cursor-pointer"> <%= t.title %> </label>
                <a href="#" onclick="deleteTodo(<%= t.id %>)" class="ml-2 hidden trash-icon "><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                </svg></a>
            </div>
        </li>    
    <% } %> 
</ul>
<h5 class="inline">Due Later</h5> [<span id="count-due-later"><%= dueLater.length %></span>]
<ul class="list-none">
    <% for (let index = 0; index < dueLater.length; index++) { 
        const t = dueLater[index];    
    %>
        <li class="Todo-Item">
            <div class="flex w-fit my-2 px-2 py-1 items-center rounded hover:bg-purple-50">
                <input id="todo-checkbox-duelater-<%= index %>" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 rounder border-gray" <% if (t.completed) { %> checked <% } %> onclick="updateTodo(<%= t.id %>, <% if (t.completed) { %> false <% } else { %> true <% } %>)"/>
                <label for="todo-checkbox-duelater-<%= index %>" class="ml-2 text-sm text-gray-600 cursor-pointer"> <%= t.title %> </label>
                <a href="#" onclick="deleteTodo(<%= t.id %>)" class="ml-2 hidden trash-icon "><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                </svg></a>
            </div>
        </li>    
    <% } %> 
</ul>
<h5 class="inline">Completed</h5> [<span id="count-completed"><%= completedTodos.length %></span>]
<ul class="list-none">
    <% for (let index = 0; index < completedTodos.length; index++) { 
        const t = completedTodos[index];    
    %>
        <li class="Todo-Item">
            <div class="flex w-fit my-2 px-2 py-1 items-center rounded hover:bg-purple-50">
                <input id="todo-checkbox-completed-<%= index %>" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 rounder border-gray" <% if (t.completed) { %> checked <% } %> onclick="updateTodo(<%= t.id %>, <% if (t.completed) { %> false <% } else { %> true <% } %>)"/>
                <label for="todo-checkbox-completed-<%= index %>" class="ml-2 text-sm text-gray-600 cursor-pointer"> <%= t.title %> </label>
                <a href="#" onclick="deleteTodo(<%= t.id %>)" class="ml-2 hidden trash-icon "><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                </svg></a>
            </div>
        </li>    
    <% } %> 
</ul>
