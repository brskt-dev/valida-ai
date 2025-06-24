# valida-ai

**valida-ai** é uma biblioteca JavaScript para validação de dados como strings, números, e-mails, CPF, CNPJ, URLs. O projeto foi desenvolvido com foco em simplicidade, uso educacional e acesso fácil para a comunidade brasileira.

---

## 📦 Instalação

A biblioteca pode ser usada diretamente no navegador via CDN (jsDelivr), sem necessidade de instalação ou build:

```js
import {
  validate,
  string,
  number,
  date,
  ip,
  creditCard,
  util,
} from "https://cdn.jsdelivr.net/gh/brskt-dev/valida-ai/src/validate.js";
```

> Recomendado para projetos locais, educacionais, acadêmicos e testes rápidos.

---

## ✅ Exemplo de uso

```js
import {
  validate,
  string,
  util,
  number,
  ip,
} from "https://cdn.jsdelivr.net/gh/brskt-dev/valida-ai/src/validate.js";

const validarNome = validate(
  string.minLength(3),
  string.maxLength(15),
  util.isRequired
);
console.log(validarNome("Bruno")); // true

const validarEmail = validate(util.isEmail);
console.log(validarEmail("email@teste.com")); // true

const validarCPF = validate(util.isCpf);
console.log(validarCPF("123.456.789-09")); // false

const validarNumero = validate(number.between(10, 100));
console.log(validarNumero(50)); // true

const validarIP = validate(ip.isIp);
console.log(validarIP("192.168.0.1")); // true
```

---

## 📁 Estrutura dos Módulos

- `validate.js`: núcleo e agregador dos validadores
- `string.js`, `number.js`, `date.js`, `ip.js`, `creditCard.js`, `boolean.js`, `util.js`: validadores por categoria
- `lib/`: funções auxiliares internas

---

## 👨‍💻 Autor

Bruno Anhezini de Souza  
Projeto de extensão no curso de Análise e Desenvolvimento de Sistemas – UNIP  
[github.com/brsktdev](https://github.com/brsktdev)
