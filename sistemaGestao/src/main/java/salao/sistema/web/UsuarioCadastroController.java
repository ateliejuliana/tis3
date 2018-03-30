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
@RequestMapping("/registration")
public class UsuarioCadastroController {

    @Autowired
    private UsuarioService usuarioService;

    @ModelAttribute("user")
    public UsuarioCadastroDto usuarioCadastroDto() {
        return new UsuarioCadastroDto();
    }

    @GetMapping
    public String showRegistrationForm(Model model) {
        return "registration";
    }

    @PostMapping
    public String registerUserAccount(@ModelAttribute("user") @Valid UsuarioCadastroDto usuarioDto,
                                      BindingResult result){

        Usuario existing = usuarioService.findByEmail(usuarioDto.getEmail());
        if (existing != null){
            result.rejectValue("email", null, "There is already an account registered with that email");
        }

        if (result.hasErrors()){
            return "registration";
        }

        usuarioService.save(usuarioDto);
        return "redirect:/registration?success";
    }

}