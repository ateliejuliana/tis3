package salao.sistema.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import salao.sistema.model.Cliente;
import salao.sistema.repository.ClienteRepository;

import javax.validation.Valid;

@Controller
@RequestMapping("/cadastroCliente")
public class ClienteCadastroController {

    @Autowired
    private ClienteRepository clienteRepository;
    @ModelAttribute("cliente")
    public Cliente cliente() {
        return new Cliente();
    }

    @GetMapping
    public String cadastroClientes(Model model) {return "cadastroCliente";}

    @PostMapping
    public String cadastrarCliente(@ModelAttribute("cliente") @Valid Cliente cliente,
                                      BindingResult result){

        Cliente existing = clienteRepository.findByNomeAndSobrenomeAndTelefone(cliente.getNome(),cliente.getSobrenome(),cliente.getTelefone());
        if (existing != null){
            //result.rejectValue("cliente", null, "Cliente já existe");
            return "redirect:/cadastroCliente?clienteExiste";
        }

        if (result.hasErrors()){
            return "cadastroCliente";//erro
        }

        clienteRepository.save(cliente);
        return "redirect:/cadastroCliente?success";
    }

}
