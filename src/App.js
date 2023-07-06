/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-undef */
import './App.css';


// Array para armazenar os produtos cadastrados
var image;
var nome;
// Referências aos elementos do DOM
// var form = document.getElementById('product-form');
// var searchInput = document.getElementById('search');
// Função para adicionar um produto ao estoque
function onChange() {

    
    var nameInput = document.getElementById('product-name');
    var codeInput = document.getElementById('product-code');
    var locationInput = document.getElementById('product-location');

  var url = 'https://www.omdbapi.com/?t='+nameInput.value+'&plot=full&apikey=4fcebba3';
  fetch(url)
    .then(response => response.json())
    .then(responseJson => {
      // Cria um objeto de produto
      var product = {
        name: nameInput.value,
        imagem: responseJson.Poster,
        
      };
      // Adiciona o produto ao array de estoque
      nome=product.name;
      image=product.imagem;
console.log(nome,image)
      // Atualiza a tabela de estoque
    })
    .catch(error => console.error(error));
  //  renderInventory();
  //  // Limpa os campos de entrada
  let a=  document.getElementById('nome').firstElementChild;
  console.log(a)
  a.nodeValue=nome
  let b =document.getElementById('imagem');
  b.firstElementChild.src=image
  console.log(nome,image)
  };

// // Função para renderizar a tabela de estoque
 function renderInventory() {
  document.getElementById('nome').firstChild.textContent=product['name'];
  document.getElementById('imagem').firstChild.src=product['imagem'];
  //document.getElementById('code').firstChild.src=product['code'];
}//  // Limpa a tabela de estoque
  //  console.log(inventoryBody)

  //  // Itera sobre os produtos no array de estoque
  //  for (var i = 0; i < inventory.length; i++) {
  //    var product = inventory[i];

  //      // Cria uma nova linha na tabela
  //   var row = document.createElement('tr');
  //    // Cria as células da linha com os dados do produto
  //    var nameCell = document.createElement('td');
  //    nameCell.textContent = product.name;

  //    var codeCell = document.createElement('img');
  //    codeCell.src = product.code;
  //    var locationCell = document.createElement('td');
  //    locationCell.textContent = product.location;

  //    var deleteCell = document.createElement('td');
  //    var deleteBtn = document.createElement('button');
  //    deleteBtn.textContent = 'Excluir';
  //   //  deleteBtn.addEventListener('click', deleteProduct.bind(null, i));
  //   // deleteBtn? deleteCell.appendChild(deleteBtn): deleteCell.appendChild(<div></div>);

  //    // Adiciona as células à linha
  //    row.appendChild(nameCell);
  //    row.appendChild(codeCell);
  //    row.appendChild(locationCell);
  //    row.appendChild(deleteCell);
  //    // Adiciona a linha à tabela

  //    inventoryBody.insertRow(row);
  //    nameInput.value = ''
  //  }
//  }
 // Função para excluir um produto do estoque
//  function deleteProduct(index) {
//    inventory.splice(index, 1);
//    renderInventory();
//  }
 //Função para filtrar os produtos pelo nome, código ou local em tempo real
//  function searchProducts() {
//    var searchTerm = searchInput.value.toLowerCase();
//    var filteredProducts = inventory.filter(function(product) {
//      var productName = product.name.toLowerCase();
//      var productCode = product.code.toLowerCase();
//      var productLocation = product.location.toLowerCase();
//      return productName.includes(searchTerm) || productCode.includes(searchTerm) || productLocation.includes(searchTerm);  
//    });
//    renderFilteredInventory(filteredProducts);
//  }
//  //Função para renderizar o estoque filtrado
//  function renderFilteredInventory(filteredProducts) {
//    inventoryBody.appendChild(<div></div>)
//    if(filteredProducts)
//    for (var i = 0; i < filteredProducts.length; i++) {
//      var product = filteredProducts[i];
//      var row = document.createElement('tr');
//      var nameCell = document.createElement('td');
//      nameCell.textContent= product.name;
//      var codeCell = document.createElement('image');
//      codeCell.textContent = product.code;
//      var locationCell = document.createElement('td');
//      locationCell.textContent = product.location;
//      var deleteCell = document.createElement('td');
//      var deleteBtn = document.createElement('button');
//      deleteBtn.textContent = 'Excluir';
//      //deleteBtn.addEventListener('click', deleteProduct.bind(null, inventory.indexOf(product)));
//      deleteCell.appendChild(deleteBtn);
//      row.appendChild(nameCell);
//      row.appendChild(codeCell);
//      row.appendChild(locationCell);
//      row.appendChild(deleteCell);
//      row? inventoryBody.appendChild(row):inventoryBody.appendChild(<div></div>);
//    }
//  }
//// Event listener para o formulário de cadastro de produtos
// form.addEventListener('submit', addProduct);
// Event listener para o campo de pesquisa
 //searchInput.addEventListener('input', searchProducts);
function App() {
  return (
    <div >
      <h1>busque seu filme</h1>

      <div id="form-container">
        <h2>busque seu filme</h2>
        
          <input type="text" id="product-name" placeholder="Nome do file" ></input>
          <button type="submit" onClick={onChange}>pesquisar file</button>
        
      </div>
      <form>
      <div id="inventory-container">
        <h2>Inventário</h2>
        <table id="inventory-table">
          <thead>
            <tr>
              <th>Nome do Filme</th>
              <th>Código do Produto</th>
              <th>código no imdb</th>
              <th>nota imdb</th>
            </tr>
          </thead>
          <tbody id="inventory-body">
          <tr>
              <th id="nome"></th>
                </tr><tr>
              <th id="imagem"><img></img></th>
              </tr>
              <tr>
              <th id="code"></th>
              </tr>
              <tr>
              <th id="nota"></th>
              </tr>
          </tbody>
        </table>
      </div>
      </form>
      </div>
  );
}

export default App;
