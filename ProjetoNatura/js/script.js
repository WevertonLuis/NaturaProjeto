var items = document.querySelectorAll('.carteira1 .carteira-item1');
        items.forEach((e)=>{
            const slide = 2;
            let next = e.nextElementSibling;
            for(let i=0; i<slide; i++) {
                if(!next) {
                    next = items[0];
                }
                let clonechild = next.cloneNode(true);
                e.appendChild(clonechild.children[0]);
                next = next.nextElementSibling;
            }
        });

        function addRemoveEvent() {
            const removeButtons = document.querySelectorAll('.remove-task');
            removeButtons.forEach(button => {
                button.addEventListener('click', function () {
                    button.parentElement.remove();
                });
            });
        }
        
        document.addEventListener('DOMContentLoaded', function () {
            const addButton = document.getElementById('add-task');
            const newTaskInput = document.getElementById('new-task');
            const todoList = document.querySelector('.todo-list');
        
            addButton.addEventListener('click', function () {
                const taskText = newTaskInput.value.trim();
        
                if (taskText !== '') {
                    const li = document.createElement('li');
                    li.innerHTML = `
                        <input type="checkbox">
                        <span class="custom-checkbox"></span>
                        <label>${taskText}</label>
                        <button class="remove-task" aria-label="Remover tarefa">&times;</button>
                    `;
        
                    // Adiciona o novo item à lista
                    todoList.appendChild(li);
                    newTaskInput.value = '';
        
                    // Adiciona o evento de remoção aos botões de remoção
                    addRemoveEvent();
                }
            });
        
            // Adiciona o evento de remoção aos botões existentes
            addRemoveEvent();
        });
        