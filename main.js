function addContact() {
    // Obter valores do formulário
    var name = document.getElementById("name").value;
    var phone = document.getElementById("phone").value;
  
    // Validar se ambos os campos foram preenchidos
    if (name === "" || phone === "") {
      alert("Por favor, preencha todos os campos.");
      return;
    }
  
    // Verificar se o contato já existe na tabela
    if (contactExists(name, phone)) {
      alert("O contato '" + name + "' já foi inserido.");
      return;
    }
  
    // Adicionar nova linha à tabela
    var table = document.getElementById("contactsTable");
    var row = table.insertRow(-1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    cell1.innerHTML = name;
    cell2.innerHTML = phone;
  
    // Limpar valores do formulário
    document.getElementById("name").value = "";
    document.getElementById("phone").value = "";
  }
  
  function contactExists(name, phone) {
    // Verificar se o contato já existe na tabela
    var table = document.getElementById("contactsTable");
    for (var i = 1; i < table.rows.length; i++) {
      var existingName = table.rows[i].cells[0].innerHTML;
      var existingPhone = table.rows[i].cells[1].innerHTML;
  
      if (existingName === name && existingPhone === phone) {
        return true; // Contato já existe
      }
    }
  
    return false; // Contato não existe
  }
  