document.addEventListener('DOMContentLoaded', () => {
    const noteForm = document.getElementById('noteForm');
    const notesContainer = document.getElementById('notes');

    function saveNote() {
        const title = document.getElementById('title').value;
        const content = document.getElementById('content').value;
        const color = document.getElementById('color').value;
        const pin = document.getElementById('pin').checked;
        const createdAt = new Date().toISOString();

        const note = { title, content, color, pin, createdAt };
        const notes = JSON.parse(localStorage.getItem('notes')) || [];
        notes.push(note);
        localStorage.setItem('notes', JSON.stringify(notes));
        displayNotes();
    }

    function displayNotes() {
        const notes = JSON.parse(localStorage.getItem('notes')) || [];
        notesContainer.innerHTML = '';
        notes.forEach((note, index) => {
            const noteDiv = document.createElement('div');
            noteDiv.style.backgroundColor = note.color;
            noteDiv.innerHTML = `
                <h3>${note.title}</h3>
                <p>${note.content}</p>
                <small>Created at: ${note.createdAt}</small>
                <button onclick="deleteNote(${index})">Delete</button>
            `;
            notesContainer.appendChild(noteDiv);
        });
    }

    noteForm.addEventListener('submit', function(e) {
        e.preventDefault();
        saveNote();
        noteForm.reset();
    });

    window.deleteNote = (index) => {
        const notes = JSON.parse(localStorage.getItem('notes')) || [];
        notes.splice(index, 1);
        localStorage.setItem('notes', JSON.stringify(notes));
        displayNotes();
    };

    displayNotes();
});