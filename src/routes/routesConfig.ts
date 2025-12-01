import React from 'react';

interface ModuleWithDefault {
  default: React.ComponentType;
}

// A lógica para importar os componentes não muda
const context: Record<string, ModuleWithDefault> = import.meta.glob('/src/pages/**/page.tsx', { eager: true })

// Agora, modificamos para extrair o nome da pasta para usar como nome da rota
const pages = Object.keys(context).map((path) => {
  const segments = path.split('/'); // Divide o caminho em segmentos
  const fileName = segments.pop(); // Remove o nome do arquivo (page.tsx)
  const folderName = segments.pop(); // Obtém o nome da pasta, que será usado como nome da rota
  const value = context[path].default; // O componente padrão
  return { folderName, fileName, value }; // Retorna o nome da pasta, o nome do arquivo e o componente
});

// Ajuste para usar o nome da pasta como path da rota
export default pages.map((page) => {
  // Define o caminho como o nome da pasta, caso exista, ou usa um caminho padrão ('/') se não existir (para a página inicial, por exemplo)
  const path = page.folderName ? `/${page.folderName.toLocaleLowerCase()}` : '/';
  return {
    path,
    component: page.value,
  };
});
