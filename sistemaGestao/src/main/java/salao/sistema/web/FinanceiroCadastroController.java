package salao.sistema.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import salao.sistema.model.Financeiro;
import salao.sistema.repository.FinanceiroRepository;

import javax.validation.Valid;

@Controller
@RequestMapping("/cadastroFinanceiro")
public class FinanceiroCadastroController {

    @Autowired
    private FinanceiroRepository financeiroRepository;

    @ModelAttribute("operacao")
    public Financeiro financeiro() {
        return new Financeiro();
    }

    @GetMapping
    public String cadastroFinanceiro(Model model) {return "cadastroFinanceiro";}

    @PostMapping
    public String cadastrarFinanceiro(@ModelAttribute("operacao") @Valid Financeiro financeiro,
                                   BindingResult result){

        if (result.hasErrors()){
            return "cadastroFinanceiro";//erro
        }
        financeiroRepository.save(financeiro);
        return "redirect:/cadastroFinanceiro?success";
    }

}