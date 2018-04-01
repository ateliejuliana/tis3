package salao.sistema.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import salao.sistema.model.Usuario;
import salao.sistema.service.UsuarioService;
import salao.sistema.web.dto.UsuarioCadastroDto;

import javax.validation.Valid;

@Controller
@RequestMapping("/financeiro")
public class FinanceiroController {

    @Autowired
    private FinanceiroRepository financeiroRepository;

    @ModelAttribute("operacao")
    public Financeiro financeiro() {
        return new Financeiro();
    }

    @GetMapping
    public String showFinanceiroForm(Model model) {
        return "financeiro";
    }

    @PostMapping
    public String registerFinanceiro(@ModelAttribute("user") @Valid Financeiro financeiro,
                                      BindingResult result){

        if (result.hasErrors()){
            return "financeiro";
        }

        financeiroRepository.save(financeiro);
        return "redirect:/financeiro?success";
    }

}