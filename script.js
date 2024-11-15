function showContent(sectionId) {
    // Esconde todas as seções
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.style.display = 'none';
    });

    // Remove a classe 'active' de todos os links
    const links = document.querySelectorAll('.nav-menu a');
    links.forEach(link => {
        link.classList.remove('active');
    });

    // Mostra a seção selecionada
    const section = document.getElementById(sectionId);
    if (section) {
        section.style.display = 'block';
    }

    // Adiciona a classe 'active' ao link correspondente
    const activeLink = document.querySelector(`.nav-menu a[href="#${sectionId}"]`);
    if (activeLink) {
        activeLink.classList.add('active');
    }

    document.addEventListener("DOMContentLoaded", function() {
        // Mostra a seção inicial (Página inicial) ao carregar a página
        showContent('home');
    });
    
function showContent(sectionId) {
        // Esconde todas as seções
        const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.style.display = 'none';
    });

    // Remove a classe 'active' de todos os links
    const links = document.querySelectorAll('.nav-menu a');
    links.forEach(link => {
        link.classList.remove('active');
    });

    // Mostra a seção selecionada
    const section = document.getElementById(sectionId);
    if (section) {
        section.style.display = 'block';
    }
    
    hideAddBookForm();
        
    const activeLink = document.querySelector(`.nav-menu a[href="#${sectionId}"]`);
    if (activeLink) {
        activeLink.classList.add('active');
    }
}

}
function hideAddBookForm() {
    const form = document.getElementById("add-book-form");
    if (form) {
        form.style.display = "none";
    }
}

function consultBooks() {
    alert("Consultando livros...");
    // Aqui você pode adicionar o código para consultar os livros no banco de dados.
}

function showAddBookForm() {
    const form = document.getElementById("add-book-form");
    if (form) {
        form.style.display = "block";
    }
}

function addBook() {
    const bookName = document.getElementById('bookName').value.trim();
    const bookCode = document.getElementById('bookCode').value.trim();

    if (!bookName || !bookCode) {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    alert(`Livro adicionado:\nNome: ${bookName}\nCódigo: ${bookCode}`);

    // Aqui você pode adicionar a lógica para salvar os dados no banco de dados ou localStorage.

    // Limpar os campos após adicionar
    document.getElementById('bookName').value = '';
    document.getElementById('bookCode').value = '';
}

function removeBooks() {
    alert("Removendo livros...");
    // Aqui você pode adicionar o código para remover livros do catálogo.
}
