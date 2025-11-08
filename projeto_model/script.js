function mostrarFormulario() {
  document.getElementById('formulario').style.display = 'block';
  document.getElementById('listaRegistros').style.display = 'none';
}

function listarRegistros() {
  document.getElementById('formulario').style.display = 'none';
  document.getElementById('listaRegistros').style.display = 'block';

  const registros = JSON.parse(localStorage.getItem('registros')) || [];
  const tabela = document.getElementById('tabelaRegistros');
  tabela.innerHTML = '';

  registros.forEach((r) => {
    const linha = `
      <tr>
        <td>${r.campo1}</td>
        <td>${r.campo2}</td>
        <td>${r.campo3}</td>
        <td>${r.campo4}</td>
        <td>${r.campo5}</td>
        <td>${r.campo6 || ''}</td>
      </tr>`;
    tabela.innerHTML += linha;
  });
}

document.getElementById('formRegistro').addEventListener('submit', function(e) {
  e.preventDefault();

  const registro = {
    campo1: document.getElementById('campo1').value,
    campo2: document.getElementById('campo2').value,
    campo3: document.getElementById('campo3').value,
    campo4: document.getElementById('campo4').value,
    campo5: document.getElementById('campo5').value,
    campo6: document.getElementById('campo6').value // novo campo profissão
  };

  const registros = JSON.parse(localStorage.getItem('registros')) || [];
  registros.push(registro);
  localStorage.setItem('registros', JSON.stringify(registros));

  alert('Registro incluído com sucesso!');
  this.reset();
});
