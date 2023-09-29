## Ferramentas

- pnpm (Gerenciador de Pacotes)
- Next.js
- Tailwind CSS 
- Eslint
- Radix (tabs)
- Framer Motion
- Tailwind Variants [https://www.tailwind-variants.org/]

## Observações

- Utilização do plugin "@rocketseat/eslint-config" em conjunto com o Prettier para formatação de código on save.
- Utilização do plugin "prettier-plugin-tailwindcss" em conjunto com o Prettier para ordenação de classes do tailwind.
- O design no Figma pode ser visto em [https://www.figma.com/file/Lr5qr0W4w71evxCkw9H26D/Ignite-Tailwind-(Copy)?type=design&node-id=0-1&mode=design&t=w8VMEzXBxl26aAhS-0]
]
## Dicas

- Utilize [https://transform.tools/] para converter svgs em componentes React
- Alguns componentes podem ser melhor implementados utilizando o Pattern de Composição. Vide [https://www.developerway.com/posts/components-composition-how-to-get-it-right], [https://www.youtube.com/watch?v=oPOKpSFqy-I&ab_channel=Rocketseat]

## Extensões VSCode

- PostCSS Language Support
- Tailwind CSS IntelliSense
- ESLint
- Prettier

## Regra de Design - Espaçamento dos 8 pixels

* A partir de 48px, usar apenas múltiplos de 8px (48px, 56px, 64px, ...)
* Entre 16px e 48px usar apenas múltiplos de 4px
(16px, 20px, 24px, ...)
* Entre 0px e 16px usar apenas múltiplos de 2px 
(0px, 2px, 4px, ...)

[https://medium.com/dex01/the-8-point-grid-e-sua-malemol%C3%AAncia-matem%C3%A1tica-35030ac9f15d]

[https://tailwindcss.com/docs/customizing-spacing#default-spacing-scale]

## Por que Tailwind?

O Tailwind CSS é um framework de CSS utilitário que oferece várias vantagens, como:

- Produtividade: O Tailwind CSS possui uma ampla variedade de classes utilitárias pré-definidas que podem ser aplicadas diretamente no HTML, o que acelera o desenvolvimento e evita a necessidade de escrever CSS personalizado.

- Flexibilidade: O Tailwind CSS permite personalizar facilmente as classes utilitárias de acordo com as necessidades do projeto, oferecendo flexibilidade para criar estilos únicos.

- Responsividade: O Tailwind CSS possui classes responsivas que permitem adaptar facilmente o layout para diferentes tamanhos de tela, tornando a criação de designs responsivos mais fácil e eficiente.

- Manutenção simplificada: Com o Tailwind CSS, é mais fácil manter e atualizar estilos, pois as classes utilitárias são reutilizáveis e podem ser aplicadas em vários elementos.

- Performance: O Tailwind CSS é projetado para ser altamente otimizado e possui um tamanho de arquivo pequeno, o que contribui para um carregamento rápido da página.

Essas são algumas das vantagens de utilizar o Tailwind CSS.

## Por que Next.js?

O Next.js traz uma série de funcionalidades comuns em aplicações front-end utilizando React, de uma maneira mais fácil e com menos configuração. Além disso, o Next.js oferece server-side rendering, o que permite que a interface da aplicação seja montada pelo servidor Node, facilitando a indexação e o SEO.