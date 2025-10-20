# TODO: Transformar Views EJS em HTML

## Páginas Principais a Converter
- [ ] home/home.ejs -> home.html (página inicial)
- [ ] home/pets.ejs -> pets.html
- [ ] home/marketplace.ejs -> marketplace.html
- [ ] home/about.ejs -> about.html
- [ ] home/contact.ejs -> contact.html

## Layouts e Parciais
- [ ] Incluir layout/head.ejs (DOCTYPE, html, head básico)
- [ ] Incluir head específico da página (CSS links)
- [ ] Incluir layout/body.ejs (<body>)
- [ ] Incluir header.ejs da página
- [ ] Incluir conteúdo principal (home.ejs, etc.)
- [ ] Incluir footer.ejs da página (scripts)
- [ ] Incluir layout/footer.ejs (</body></html>)

## CSS a Incluir Inline
- [ ] /css/styles.css (principal)
- [ ] /css/sobre.css (para about)
- [ ] /css/marketplace.css (para marketplace)
- [ ] /css/pets.css (para pets)
- [ ] Font Awesome link externo

## JS a Incluir Inline
- [ ] /js/script.js (principal)
- [ ] /js/slider.js (para sliders)
- [ ] /js/form-login.js (se aplicável)

## Outras Views
- [ ] login/teladelogin.html (já HTML)
- [ ] Outras views adm, nova-conta, etc. (se necessário)

## Processo
1. Para cada página, combinar todos os includes EJS em um único HTML.
2. Substituir links CSS por conteúdo inline em <style>.
3. Substituir scripts por conteúdo inline em <script>.
4. Manter links externos (Font Awesome, etc.).
5. Salvar como .html na pasta views ou nova pasta.
