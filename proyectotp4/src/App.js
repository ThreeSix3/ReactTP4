import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import swal from 'sweetalert';

function App() {
  return (
    <div class="center">
          <form onSubmit={presion}>
            <p>Ingrese un texto:
              <Form.Control type="text" name="texto" id="valor"/>
            </p>
            <p>
              <Button variant="primary" size="lg" as="input" type="submit" value="Submit"/>
            </p>
          </form>
    </div>
  );
}

function presion(e) {
  e.preventDefault();
  let contador = 0;
  let texto = document.getElementById("valor").value;

  for (let x = 0; x < texto.length; x++ ){
    if (texto.charAt(x) == "a" || texto.charAt(x) == "e" || texto.charAt(x) == "i" || texto.charAt(x) == "o" || texto.charAt(x) == "u" || texto.charAt(x) == "á" || texto.charAt(x) == "é" || texto.charAt(x) == "í" || texto.charAt(x) == "ó" || texto.charAt(x) == "ú" || texto.charAt(x) == "A" || texto.charAt(x) == "E" || texto.charAt(x) == "I" || texto.charAt(x) == "O" || texto.charAt(x) == "U" || texto.charAt(x) == "Á" || texto.charAt(x) == "É" || texto.charAt(x) == "Í" || texto.charAt(x) == "Ó" || texto.charAt(x) == "Ú"){
      contador++
    }
  }
  swal("El texto ingresado tiene "+contador+" vocales");


}

export default App;

