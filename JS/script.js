document.addEventListener('DOMContentLoaded', function() {

    // ==================== ELEMENTOS DO MODAL ====================
    
    // Pega o container do modal pelo ID
    const modal = document.getElementById('modal');
    
    // Pega a imagem que está dentro do modal
    const modalImg = document.getElementById('modal-img');
    
    
    // ==================== DICIONÁRIO DE CERTIFICADOS ====================
    
    // Objeto que associa cada nome de curso ao caminho da sua imagem
    // A chave (esquerda) é o texto exato que aparece no HTML
    // O valor (direita) é o caminho do arquivo da imagem
    const certificados = {
        "Administração de Medicamentos e Injetáveis": "img/Capacitacao-em-Adm-medicamentos.png",
        "Administração de Medicamentos": "img/Capacitacao-em-Adm-medicamentos-a.png",
        "Assistência em Parada Cardiorrespiratória(PCR)": "img/Capacitacao-em-PCR.png",
        "Punção Venosa": "img/Capacitacao-em-puncao-venosa-a.png"
    };
    
    
    // ==================== SELECIONAR TODOS OS CURSOS ====================
    
    // querySelectorAll pega TODOS os <li> que estão dentro de .cursos ul
    // O retorno é uma "NodeList" (parecida com array)
    const listaCursos = document.querySelectorAll('.cursos ul li');
    
    
    // ==================== ADICIONAR CLIQUE EM CADA CURSO ====================
    
    // forEach percorre cada item da lista (um por um)
    listaCursos.forEach(function(curso) {
        
        // Adiciona um "escuta" de clique em cada <li>
        curso.addEventListener('click', function() {
            
            // this se refere ao <li> que foi clicado
            // textContent pega todo o texto dentro do <li>
            // trim() remove espaços em branco no início e fim
            const nomeCurso = this.textContent.trim();
            
            // Verifica se existe uma imagem cadastrada para este curso
            // Os colchetes [ ] acessam o valor dentro do objeto 'certificados'
            const caminhoImagem = certificados[nomeCurso];
            
            // Só continua se encontrar o caminho da imagem (se não for undefined)
            if (caminhoImagem) {
                // Muda o atributo 'src' da imagem do modal
                modalImg.src = caminhoImagem;
                
                // Adiciona a classe 'ativo' ao modal, fazendo ele aparecer
                modal.classList.add('ativo');
            }
        });
    });
    
    
    // ==================== FECHAR MODAL AO CLICAR NO FUNDO ====================
    
    // Adiciona clique no próprio modal (no fundo escuro)
    modal.addEventListener('click', function(evento) {
        
        // Verifica se o clique foi exatamente no modal (e não na imagem dentro dele)
        // evento.target é o elemento que foi clicado
        // Se for o próprio modal, fecha. Se for a imagem, não fecha.
        if (evento.target === modal) {
            
            // Remove a classe 'ativo', escondendo o modal
            modal.classList.remove('ativo');
            
            // (Opcional) Limpa o src da imagem para não mostrar a imagem antiga
            // brevemente quando o próximo certificado for aberto
            modalImg.src = '';
        }
    });
    
});

// Adicione dentro do DOMContentLoaded
const btnFechar = document.querySelector('.fechar-modal');

btnFechar.addEventListener('click', function() {
    modal.classList.remove('ativo');
    modalImg.src = '';
});